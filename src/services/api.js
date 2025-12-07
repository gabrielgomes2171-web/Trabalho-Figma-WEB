import axios from 'axios';

/**
 * Configuração base do Axios. 
 * Quando você tiver seu servidor real, basta trocar a baseURL.
 */
const api = axios.create({
  baseURL: 'https://api-caruaru-hub-exemplo.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * authService: Objeto que contém a lógica de autenticação simulada (Mock).
 */
export const authService = {
  // Simula o envio de dados de registro
  register: async (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Mock API - Registro recebido:", userData);
        resolve({ success: true, message: "Cadastro realizado com sucesso!" });
      }, 1000);
    });
  },

  // Simula a verificação de login
  login: async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulação: Login aceito apenas com este email e senha
        if (email === "admin@hub.com" && password === "123") {
          console.log("Mock API - Login autorizado para:", email);
          resolve({ user: "Administrador Caruaru", token: "token-sessao-xyz-123" });
        } else {
          console.error("Mock API - Erro de login: credenciais incorretas.");
          reject("E-mail ou senha incorretos.");
        }
      }, 1200);
    });
  }
};

export default api;