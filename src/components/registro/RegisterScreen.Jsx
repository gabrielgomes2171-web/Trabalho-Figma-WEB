import React from 'react';
import styles from "./components/registro/styles.module.css";

function RegisterScreen({ onSwitchToLogin }) {
  return (
    <div className="card-principal">
      <header className="card-header">
        <div className="logo-container">
          <span className="logo-c">C</span>
          <span className="nome-hub">Caruaru Têxtil Hub</span>
        </div>
        <h2 className="title-register">Cadastre-se</h2>
      </header>
      <form className="form-content">
        <input type="text" placeholder="Nome Completo" className="input-padrao" />
        <input type="email" placeholder="E-mail" className="input-padrao" />
        <input type="password" placeholder="Senha" className="input-padrao" />
        <input type="password" placeholder="Confirmar Senha" className="input-padrao" />
        <button type="submit" className="botao-entrar" style={{marginTop: '10px'}}>
          Cadastrar
        </button>
      </form>
      <button onClick={onSwitchToLogin} className="link-ja-registrado">
        Já é registrado? Entrar
      </button>
    </div>
  );
}
export default RegisterScreen;