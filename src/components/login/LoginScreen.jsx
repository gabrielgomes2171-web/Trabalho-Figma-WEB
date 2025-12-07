<<<<<<< HEAD
'use client';
import React, { useState } from 'react';
import { authService } from '../../services/api'; 
import styles from "./styles.module.css";

function LoginScreen({ onSwitchToRegister }) {
  // Hooks para controlar o estado do input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // Impede o reload da página
    setLoading(true);

    try {
      // Chama o Mock/Serviço criado em api.js
      const result = await authService.login(email, password);
      alert(`Sucesso! Bem-vindo, ${result.user}`);
      // Aqui você poderia usar o router.push('/dashboard') se quiser mudar de página
    } catch (error) {
      alert(error); // Exibe o erro de senha ou email incorretos
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
        </header>

        <form className={styles.formContent} onSubmit={handleLogin}>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit" className={styles.botaoEntrar} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <button onClick={onSwitchToRegister} className={styles.linkCriarConta}>
          Criar conta
        </button>
      </div>
    </div>
  );
}

=======
import React from 'react';
import styles from "./styles.module.css";

function LoginScreen({ onSwitchToRegister }) {
  return (
    
    <div className={styles.fullScreenCenter}>
      
      <div className={styles.cardPrincipal}>
        
        <header className={styles.cardHeader}> 
          
          <div className={styles.logoContainer}> 
            <span className={styles.logoC}>C</span> 
            <span className={styles.nomeHub}>Caruaru Têxtil Hub</span> 
          </div>
        </header>
        
       
        <form className={styles.formContent}>          
          <input type="email" placeholder="E-mail" className={styles.inputPadrao} />          
          <input type="password" placeholder="senha" className={styles.inputPadrao} />          
          
          <button type="submit" className={styles.botaoEntrar}> 
            Entrar
          </button>
        </form>
        
        <button onClick={onSwitchToRegister} className={styles.linkCriarConta}> 
          Criar conta
        </button>
      </div>       
    
    </div>
  );
}
>>>>>>> 261806ea7bca947670baa577c8bdfe42a77fc104
export default LoginScreen;
