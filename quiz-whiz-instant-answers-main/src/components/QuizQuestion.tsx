
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/data/quizData";

interface QuizQuestionProps {
  question: Question;
  onSelectAnswer: (answer: string) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuizQuestion = ({ 
  question, 
  onSelectAnswer,
  currentQuestionIndex,
  totalQuestions
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple selections
    
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    onSelectAnswer(answer);
    
    setTimeout(() => {
      setSelectedAnswer(null);
      setShowFeedback(false);
    }, 1000);
  };
  
  const isCorrect = (answer: string) => {
    return answer === question.correctAnswer;
  };
  
  const getButtonClass = (answer: string) => {
    if (!showFeedback || selectedAnswer !== answer) {
      return "bg-white border-2 border-purple-300 text-purple-800 hover:bg-purple-50";
    }
    
    return isCorrect(answer) 
      ? "bg-green-500 border-2 border-green-600 text-white"
      : "bg-red-500 border-2 border-red-600 text-white";
  };

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  return (
    <div className="py-6">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
          <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(progressPercentage)}% Complete</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-800 mb-4">{question.question}</h2>
      </div>
      
      <div className="space-y-4">
        {question.options.map((option) => (
          <Button
            key={option}
            className={`w-full p-4 justify-start text-left text-lg font-medium transition-all ${getButtonClass(option)}`}
            onClick={() => handleAnswerClick(option)}
            disabled={showFeedback}
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
