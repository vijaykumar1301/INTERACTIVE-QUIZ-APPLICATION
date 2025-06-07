
import { useState } from "react";
import QuizWelcome from "@/components/QuizWelcome";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import { quizData } from "@/data/quizData";

const Index = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
  };

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = quizData[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);
    
    setTimeout(() => {
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    startQuiz();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="w-full max-w-2xl mx-auto p-6 rounded-2xl shadow-lg bg-white">
        {!quizStarted && <QuizWelcome onStartQuiz={startQuiz} />}
        
        {quizStarted && !quizCompleted && (
          <QuizQuestion 
            question={quizData[currentQuestionIndex]} 
            onSelectAnswer={handleAnswer}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={quizData.length}
          />
        )}
        
        {quizCompleted && (
          <QuizResults 
            score={score}
            totalQuestions={quizData.length}
            onRestartQuiz={restartQuiz}
            userAnswers={userAnswers}
            questions={quizData}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
