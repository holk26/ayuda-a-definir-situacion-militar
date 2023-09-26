'use client'

import { useState } from 'react'

export default function Home() {
    



  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { question: 'Nombre Completo', type: 'text' },
    { question: 'Edad', type: 'text' },
    { question: 'Question 2', type: 'radio', options: ['Option 1', 'Option 2', 'Option 3'] },
    { question: 'Question 3', type: 'checkbox', options: ['Option 1', 'Option 2', 'Option 3'] },
    { question: 'Question 4', type: 'textarea' },
  ];

  const handleAnswer = (answer) => {
    console.log(currentQuestion);
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const AggregatedAnswers = () => {
    return (
      <ul>
        {answers.map((answer, index) => (
          <li className="text-3xl font-bold mb-4 text-black" key={index}>{answer}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        {currentQuestion < questions.length ? (
          <>
            <h1 className="text-3xl font-bold mb-4 text-black">{questions[currentQuestion].question}</h1>
            {questions[currentQuestion].type === 'text' && (
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg mb-4 text-black"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswer(e.target.value)}
              />
            )}
            {questions[currentQuestion].type === 'radio' && (
              <div className="space-y-2 mb-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`radio-${index}`}
                      name="radio"
                      className="mr-2"
                      value={option}
                      onChange={(e) => handleAnswer(e.target.value)}
                    />
                    <label htmlFor={`radio-${index}`} className="text-gray-800">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
            {questions[currentQuestion].type === 'checkbox' && (
              <div className="space-y-2 mb-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      name="checkbox"
                      className="mr-2"
                      value={option}
                      onChange={(e) => handleAnswer(e.target.value)}
                    />
                    <label htmlFor={`checkbox-${index}`} className="text-gray-800">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
            {questions[currentQuestion].type === 'textarea' && (
              <textarea
                className="w-full border border-gray-300 p-2 rounded-lg mb-4 text-black"
                rows="5"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswer(e.target.value)}
              ></textarea>
            )}
            <button
              className="rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white"
              disabled={currentQuestion === 0}
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
            >
              Back
            </button>
            <button
              className="rounded-3xl bg-black px-6 py-2 text-xl font-medium uppercase text-white ml-4"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Next
            </button>
          </>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-4 text-black">Para definir su situacion militar tiene que hacer:!</h1>
            <AggregatedAnswers />
          </div>
        )}
      </div>
    </div>
  );
}