import React from "react";
import '../style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Questionario: React.FC = () => {
  const [numeroPessoas, setNumeroPessoas] = useState<number>(0);
  const [necessitaTMR, setNecessitaTMR] = useState<boolean>(false);
  const [trazBagagem, setTrazBagagem] = useState<boolean>(false);
  const [numeroMalas, setNumeroMalas] = useState<number>(0);

  const handleNecessitaTMRChange = (value: boolean) => {
    setNecessitaTMR(value);
    setTrazBagagem(false); // Desseleciona a outra opção
  };

  const handleTrazBagagemChange = (value: boolean) => {
    setTrazBagagem(value);
    setNecessitaTMR(false); // Desseleciona a outra opção
  };

  const handleNumeroPessoasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 6) {
      setNumeroPessoas(value);
    } else {
      alert("O número de pessoas deve estar entre 1 e 6.");
    }
  };

  const handleNumeroMalasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 0 && value <= 5) {
      setNumeroMalas(value);
    } else {
      alert("O número de malas deve estar entre 0 e 5.");
    }
  };

  return (
    <div className="container">
        <h2>Questionário</h2>
        <div className="input-container">
            <label>Quantas pessoas são?</label>
        </div>
        <div className="input-container">
          <input type="number" value={numeroPessoas} onChange={handleNumeroPessoasChange} placeholder="Número de pessoas"/>
        </div>
        <div className="input-container">
            <label>É necessário TMR (Transporte de Mobilidade Reduzida)?</label>
        </div>
        <div className="input-container">
          <button onClick={() => handleNecessitaTMRChange(true)} className={necessitaTMR ? "active" : ""}>Sim</button>
          <button onClick={() => handleNecessitaTMRChange(false)} className={!necessitaTMR ? "active" : ""}>Não</button>
        </div>
        <div className="input-container">
            <label>Vai trazer bagagem?</label>
        </div>
        <div className="input-container">
          <button onClick={() => handleTrazBagagemChange(true)} className={trazBagagem ? "active" : ""}>Sim</button>
          <button onClick={() => handleTrazBagagemChange(false)} className={!trazBagagem ? "active" : ""}>Não</button>
        </div>
      {trazBagagem && (
        <div className="input-container">
          <label>
            Quantas malas?
            <input type="number" value={numeroMalas} onChange={handleNumeroMalasChange} />
          </label>
        </div>
      )}
        <div className="input-container">
        <Link to="/reserva-3">
                    <button>Avançar</button>
        </Link>
        </div>
    </div>
  );
}

export default Questionario;