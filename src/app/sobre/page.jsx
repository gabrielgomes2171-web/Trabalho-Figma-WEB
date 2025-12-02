import Header from "src/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function SobrePage(){
    return (
        <main>
            <Header/>
            <h1>Pagina Sobre</h1>
            <Footer/>
        </main>
    )
}import Footer from "@/components/footer/Footer";
import Header from "src/components/header/Header";

export default function ContatoPage() {
  return (
    <main>
      <Header />

      <h1>Sobre o Caruaru Têxtil Hub</h1>

      <p>
        Transformando a tradicional Feira da Sulanca em um marketplace digital
        moderno,
      </p>
      <p>conectando a rica tradição têxtil de Caruaru com todo o Brasil.</p>
      <div>
        <div>
          <h2>5.000+</h2>
          <p>Vendedores Cadastrados</p>
        </div>

        <div>
          <h2>50.000+</h2>
          <p>Produtos Disponíveis</p>
        </div>

        <div>
          <h2>R$ 2M+</h2>
          <p>Vendas Mensais</p>
        </div>
        <div>
          <h2>26</h2>
          <p>Estados Atendidos</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}