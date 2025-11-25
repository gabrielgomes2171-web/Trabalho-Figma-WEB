import React from 'react';
import styles from "./components/login/styles.module.css";

function LoginScreen({ onSwitchToRegister }) {
  return (
    <div className="card-principal">
      <header className="card-header">
        <div className="logo-container">
          <span className="logo-c">C</span>
          <span className="nome-hub">Caruaru Têxtil Hub</span>
        </div>
      </header>
      <form className="form-content">
        <input type="email" placeholder="E-mail" className="input-padrao" />
        <input type="password" placeholder="senha" className="input-padrao" />
        <button type="submit" className="botao-entrar">
          Entrar
        </button>
      </form>
      <button onClick={onSwitchToRegister} className="link-criar-conta">
        Criar conta
      </button>
    </div>
  );
}
export default LoginScreen;