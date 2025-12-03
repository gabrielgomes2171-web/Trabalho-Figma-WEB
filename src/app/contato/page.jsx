import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import Footer from "@/components/footer/Footer";
import Button from "@components/Button";
import ContatoCard from "./ContatoCard";
import "./ContatoSection.css";

const ContatoSection = () => {
  return (
    <section className="contato-section">
      <h2>Entre em Contato</h2>
      <p className="subtitulo">
        Estamos aqui para ajudar! Entre em contato conosco e descubra como 
        podemos impulsionar seu negócio têxtil.
      </p>

      <div className="cards">
        <ContatoCard 
          icon="📞"
          title="Telefone"
          text="(87) 3000-0000"
          detail="Seg à Sex: 8h às 18h"
        />

        <ContatoCard 
          icon="📧"
          title="E-mail"
          text="contato@caruarutexilhub.com.br"
          detail="Resposta em até 2 horas"
        />

        <ContatoCard 
          icon="📍"
          title="Endereço"
          text="Centro de Caruaru, PE"
          detail="Polo Têxtil do Nordeste"
        />

        <ContatoCard 
          icon="⏰"
          title="Horário"
          text="Seg à Sex: 8h às 18h"
          detail="Sábado: 8h às 14h"
        />
      </div>
    </section>
  );
};

export default ContatoSection;

