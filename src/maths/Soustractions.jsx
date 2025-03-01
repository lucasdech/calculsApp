import React, { useState } from 'react';
import './maths.css';

export const Soustractions = () => {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [calculations, setCalculations] = useState([]);
  const [level, setLevel] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateCalculations(max) {
    return Array.from({ length: 10 }, () => {
      let a = getRandomInt(1, max);
      let b = getRandomInt(1, max);
      
      if (b > a) {
        [a, b] = [b, a];
      }

      return { nombre1: a, nombre2: b };
    });
  }

  function startGame(selectedLevel) {
    setLevel(selectedLevel);
    setCalculations(generateCalculations(Number(selectedLevel)));
    setScore(0);
    setCurrentIndex(0);
    setUserAnswer('');
    setGameStarted(true);
  }

  function checkAnswer() {
    const correctResult = calculations[currentIndex].nombre1 - calculations[currentIndex].nombre2;

    if (parseInt(userAnswer) === correctResult) {
      setScore((prevScore) => prevScore + 1);
    } else {
      alert('Mauvaise réponse, essaye encore !');
    }

    setUserAnswer('');

    if (currentIndex < 9) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert(`Jeu terminé ! Score : ${score + 1}/10`);
      restartGame();
    }
  }

  function restartGame() {
    setScore(0);
    setCurrentIndex(0);
    setUserAnswer('');
    setGameStarted(false);
    setLevel('');
    setCalculations([]);
  }

  return (
    <>
      <h2>Jeu des Soustractions</h2>
      <p>Score : {score}/10</p>

      {/* Sélection du niveau */}
      <div>
        <label htmlFor="level">Niveau</label>
        <select
          id="level"
          value={level}
          onChange={(e) => !gameStarted && startGame(e.target.value)}
          disabled={gameStarted} // Désactive le select une fois le jeu commencé
        >
          <option value="">-- Choisir un niveau --</option>
          <option value="10">Facile</option>
          <option value="100">Moyen</option>
          <option value="1000">Difficile</option>
        </select>
      </div>

      {/* Affichage des calculs uniquement si un niveau est choisi */}
      {gameStarted && currentIndex < 10 && (
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
      )}

      {/* Bouton Rejouer */}
      {gameStarted && currentIndex >= 10 && (
        <button onClick={restartGame}>Rejouer</button>
      )}
    </>
  );
};
