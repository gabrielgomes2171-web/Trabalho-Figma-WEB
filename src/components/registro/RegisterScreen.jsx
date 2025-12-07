'use client';
import React, { useState } from 'react';
import { authService } from '../../services/api'; 
import styles from "./styles.module.css";

function RegisterScreen({ onSwitchToLogin }) {
  // 1. Estados (Hooks) para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);

  // 2. Função de envio
  const handleRegister = async (e) => {
    e.preventDefault(); // Impede a página de recarregar

    // Validação básica de senha
    if (senha !== confirmarSenha) {
      alert("As senhas digitadas não são iguais!");
      return;
    }

    setLoading(true);

    try {
      const payload = { nome, email, senha };
      // Chama a função register do nosso Mock em api.js
      const response = await authService.register(payload);
      
      alert(response.message); // "Cadastro realizado com sucesso!"
      onSwitchToLogin(); // Redireciona o usuário para a tela de login
      
    } catch (error) {
      alert("Houve um erro ao tentar cadastrar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.fullScreenCenter}>
      <div className={styles.cardPrincipal}>
        <header className={styles.cardHeader}>
          <div className={styles.logoContainer}>
            <span className={styles.logoC}>C</span>
            <span className={styles.nomeHub}>Caruaru Têxtil Hub</span>
          </div>
          <h2 className={styles.titleRegister}>Cadastre-se</h2>
        </header>

        {/* 3. Formulário com onSubmit */}
        <form className={styles.formContent} onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Nome Completo" 
            className={styles.inputPadrao} 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            className={styles.inputPadrao} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className={styles.inputPadrao} 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Confirmar Senha" 
            className={styles.inputPadrao} 
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
          
          <button type="submit" className={styles.botaoEntrar} disabled={loading}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <button onClick={onSwitchToLogin} className={styles.linkJaRegistrado}>
          Já é registrado? Entrar
        </button>
      </div>
    </div>
  );
}

export default RegisterScreen;
