import React from 'react';
import { movingBarWords } from '../constants'; // Importamos la lista de palabras

const MovingBar = () => {
  // Creamos el contenido una sola vez para reutilizarlo.
  const rollContent = movingBarWords.map((word, index) => (
    <div className="roll-item" key={`${word}-${index}`}>
      <span className="roll-title">{word}</span>
      <span className="roll-icon">*</span>
    </div>
  ));

  return (
    <section><div className="moving-bar-container">
      <div className="moving-bar-wrapper">
        {/* Renderizamos el contenido dos veces en dos contenedores separados */}
        <div className="moving-bar-content">{rollContent}</div>
        <div className="moving-bar-content">{rollContent}</div>
      </div>
    </div></section>
    
  );
};

export default MovingBar;
