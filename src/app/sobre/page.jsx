import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";
import TestimonialGroupCards from "./TestimonialGroupCards";
import styles from "./sobre.module.css";

export default function SobrePage() {
  return (
    <main>
      <Header />

      <div className={styles.introductionSobre}>
        <h1>Sobre o Caruaru Têxtil Hub</h1>

        <p>
          Transformando a tradicional Feira da Sulanca em um marketplace digital
          moderno,
        </p>
        <p>conectando a rica tradição têxtil de Caruaru com todo o Brasil.</p>
      </div>

      <div className={styles.sobre}>
        <div>
          <img
            src="https://img.icons8.com/?size=100&id=K7ebDTcbruY8&format=png"
            alt="Ícone vendedores"
            className={styles.sobreImagem}
          />
          <h2>5.000+</h2>
          <p>Vendedores Cadastrados</p>
        </div>

        <div>
          <img
            src="https://img.icons8.com/?size=100&id=llnqvTERRls7&format=png"
            alt="Ícone produtos"
            className={styles.sobreImagem}
          />
          <h2>50.000+</h2>
          <p>Produtos Disponíveis</p>
        </div>

        <div>
          <img
            src="https://img.icons8.com/?size=100&id=llnqvTERRls7&format=png"
            alt="Ícone vendas"
            className={styles.sobreImagem}
          />
          <h2>R$ 2M+</h2>
          <p>Vendas Mensais</p>
        </div>

        <div>
          <img
            src="https://img.icons8.com/?size=100&id=OBmVbH2qOGwK&format=png"
            alt="Ícone localização"
            className={styles.sobreImagem}
          />
          <h2>26</h2>
          <p>Estados Atendidos</p>
        </div>
      </div>

      <div className={styles.princinpioSobre}>
        <h2>Nossos Princípios</h2>
        <p>
          Conheça os valores que guiam nossa missão de revolucionar o mercado
          têxtil brasileiro.
        </p>
      </div>

      <TestimonialGroupCards />

      <Footer />
    </main>
  );
}
