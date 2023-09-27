'use client'

import { useState } from 'react'

import AggregatedAnswers from './result';

export default function Home() {
    



  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { question: 'Nombre Completo', type: 'text' },
    { question: 'Edad', type: 'number' },
    { question: 'Estado civil', type: 'radio', options: ['Soltero', 'Casado', 'Union libre', 'Viudo'] },
    { question: 'Seleccione', type: 'radio', options: ['Estudiante', 'Padre o madre de familia', 'Discapacidad física o mental', 'Víctima del conflicto armado', 'Objetor de conciencia'] },
    { question: 'Question 3', type: 'checkbox', options: ['Option 1', 'Option 2', 'Option 3'] },
    { question: 'Question 4', type: 'textarea' },
  ];

  const handleAnswer = (answer) => {
    
    // Verificar si ya existe una respuesta para la pregunta actual
    const isAnswered = answers[currentQuestion] !== undefined;
  
    if (!isAnswered) {
      // Si no hay una respuesta previa para esta pregunta, agregar la respuesta
      setAnswers([...answers, answer]);
    } else {
      // Si ya hay una respuesta para esta pregunta, actualizarla
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestion] = answer;
      setAnswers(updatedAnswers);
    }
  
  };
  



  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        {currentQuestion < questions.length ? (
          <>
            <h1 className="text-5xl font-bold mb-4 text-black">Mi libreta militar</h1>
            <h2 className="text-3xl font-bold mb-4 text-black">{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].type === 'text' && (
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded-lg mb-4 text-black"
                placeholder="Enter your answer"
                onChange={(e) => handleAnswer(e.target.value)}
              />
            )}
            {questions[currentQuestion].type === 'number' && (
              <input
                type="number"
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
            <AggregatedAnswers answersG={answers}/>
          </div>
        )}
      </div>
    </div>
  );
}