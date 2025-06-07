
import { Button } from "@/components/ui/button";
import { Question } from "@/data/quizData";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestartQuiz: () => void;
  userAnswers: string[];
  questions: Question[];
}

const QuizResults = ({ 
  score, 
  totalQuestions, 
  onRestartQuiz,
  userAnswers,
  questions
}: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getFeedbackMessage = () => {
    if (percentage >= 80) return "Great job! You're a quiz master!";
    if (percentage >= 50) return "Good effort! Keep practicing!";
    return "Keep learning and try again!";
  };
  
  return (
    <div className="py-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Quiz Complete!</h2>
        <div className="text-xl mb-2">
          Your Score: <span className="font-bold">{score} out of {totalQuestions}</span>
        </div>
        <div className="text-2xl font-semibold mb-6">
          {percentage}%
        </div>
        <div className="text-xl text-purple-700 font-medium">
          {getFeedbackMessage()}
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-purple-700">Answer Review:</h3>
        <div className="space-y-6">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            
            return (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium mb-2">{index + 1}. {question.question}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-sm">Your answer: </span>
                  <span className={`text-sm font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    {userAnswer}
                  </span>
                </div>
                {!isCorrect && (
                  <div className="text-sm text-green-600">
                    Correct answer: {question.correctAnswer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="text-center">
        <Button 
          onClick={onRestartQuiz}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;
