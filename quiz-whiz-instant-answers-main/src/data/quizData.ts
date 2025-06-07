
export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const quizData: Question[] = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    correctAnswer: "Oxygen"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: "Blue Whale"
  },
  {
    question: "In what year did the first human land on the moon?",
    options: ["1965", "1969", "1971", "1973"],
    correctAnswer: "1969"
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Brain", "Liver", "Skin", "Heart"],
    correctAnswer: "Skin"
  },
  {
    question: "Which country is home to the Great Barrier Reef?",
    options: ["Brazil", "Australia", "Thailand", "Mexico"],
    correctAnswer: "Australia"
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Bell Pepper", "Onion"],
    correctAnswer: "Avocado"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci"
  }
];
