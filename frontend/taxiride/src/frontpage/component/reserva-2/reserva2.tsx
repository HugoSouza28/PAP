import React from "react";
import '../signin.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Questionario: React.FC = () => {
  const [numeroPessoas, setNumeroPessoas] = useState<number>(0);
  const [necessitaTMR, setNecessitaTMR] = useState<boolean>(false);
  const [trazBagagem, setTrazBagagem] = useState<boolean>(false);
  const [numeroMalas, setNumeroMalas] = useState<number>(0);

  return (
    <div className="container">
        <h2>Questionário</h2>
        <div className="input-container">
            <label>Quantas pessoas são?</label>
        </div>
        <div className="input-container">
          <input type="number" value={numeroPessoas} onChange={(e) => setNumeroPessoas(parseInt(e.target.value))} placeholder="Username"/>
        </div>
        <div className="input-container">
            <label>É necessário TMR (Transporte de Mobilidade Reduzida)?</label>
        </div>
        <div className="input-container">
          <input type="checkbox" checked={necessitaTMR} onChange={(e) => setNecessitaTMR(e.target.checked)} />
        </div>
        <div className="input-container">
            <label>Vai trazer bagagem?</label>
        </div>
        <div className="input-container">
          <input type="checkbox" checked={trazBagagem} onChange={(e) => setTrazBagagem(e.target.checked)} />
        </div>
      {trazBagagem && (
        <div className="input-container">
          <label>
            Quantas malas?
            <input type="number" value={numeroMalas} onChange={(e) => setNumeroMalas(parseInt(e.target.value))} />
          </label>
        </div>
      )}
    </div>
  );
}

export default Questionario;
