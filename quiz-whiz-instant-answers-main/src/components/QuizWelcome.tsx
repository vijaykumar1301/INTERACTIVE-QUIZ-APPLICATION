
import { Button } from "@/components/ui/button";

interface QuizWelcomeProps {
  onStartQuiz: () => void;
}

const QuizWelcome = ({ onStartQuiz }: QuizWelcomeProps) => {
  return (
    <div className="text-center py-8 px-4">
      <h1 className="text-4xl font-bold text-purple-800 mb-6">
        Welcome to QuizWhiz!
      </h1>
      <div className="mb-8">
        <p className="text-xl mb-4 text-gray-700">
          Test your knowledge with this interactive quiz
        </p>
        <div className="bg-purple-50 p-6 rounded-lg mb-8 text-left">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">How to Play:</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Each question has multiple choice answers</li>
            <li>Select the answer you think is correct</li>
            <li>Get instant feedback on your answers</li>
            <li>See your final score at the end</li>
          </ul>
        </div>
      </div>
      <Button 
        onClick={onStartQuiz}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105"
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default QuizWelcome;
