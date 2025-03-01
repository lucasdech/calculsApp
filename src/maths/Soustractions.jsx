import React, { useState } from 'react';
import './maths.css';

export const Soustractions = () => {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [calculations, setCalculations] = useState(generateCalculations());

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateCalculations() {
    return Array.from({ length: 10 }, () => {
      let a = getRandomInt(1, 10);
      let b = getRandomInt(1, 10);
      
      if (b > a) {
        [a, b] = [b, a];
      }

      return { nombre1: a, nombre2: b };
    });
  }

  function checkAnswer() {
    const correctResult = calculations[currentIndex].nombre1 - calculations[currentIndex].nombre2;

    if (parseInt(userAnswer) === correctResult) {
      setScore(score + 1);
    }

    setUserAnswer('');

    if (currentIndex < 9) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Jeu terminé ! Score : ${score + (parseInt(userAnswer) === correctResult ? 1 : 0)}/10`);
      restartGame();
    }
  }

  function restartGame() {
    setScore(0);
    setCurrentIndex(0);
    setUserAnswer('');
    setCalculations(generateCalculations());
  }

  return (
    <>
      <h2>Jeu des Soustractions</h2>
      <p>Score : {score}/10</p>
      <p>Question n°{currentIndex + 1}</p>

      <div className="calcul">
        <div>{calculations[currentIndex].nombre1} - {calculations[currentIndex].nombre2} = ?</div>
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Votre réponse"
        />
        <button onClick={checkAnswer}>Valider</button>
      </div>

      {currentIndex > 0 && <button onClick={restartGame}>Rejouer</button>}
    </>
  );
};
