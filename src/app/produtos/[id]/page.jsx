"use client";

<<<<<<< HEAD
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      // Você pode trocar pela sua API futuramente
      const res = await fetch("/api/produtos");
      const data = await res.json();
      setProdutos(data);
      setLoading(false);
    }

    fetchProdutos();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Lista de Produtos</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {produtos.map((produto) => (
          <div 
            key={produto.id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              width: "250px",
              borderRadius: "10px"
            }}
          >
            <img 
              src={produto.imageUrl} 
              alt={produto.title} 
              width="200" 
              height="200"
            />

            <h3>{produto.title}</h3>
            <p>Preço: R$ {produto.price}</p>

            {/* AQUI você redireciona para a página de detalhes */}
            <Link href={`/produtos/${produto.id}`}>
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
=======
import { useEffect, useState } from "react";
import ProductGallery from "@/app/components/ProductGallery";
import RelatedProducts from "@/app/components/RelatedProducts";
import styles from "./product.module.css";

export default function ProdutoPage({ params }) {
  const { id } = params;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("descricao");

  // 🔥 Mock dos produtos (mesmos da página /produtos)
  const produtosMock = [
    {
      id: 1,
      title: "Calça Jeans Premium Masculina",
      price: 45.9,
      oldPrice: 120.0,
      discount: 61,
      vendor: "Caruaru Têxtil Hub",
      images: [
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
        "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg",
      ],
      sizes: ["38", "40", "42", "44", "46"],
      colors: ["Azul Claro", "Azul Escuro", "Preto"],
      descriptionHtml: `
        <p>Calça jeans masculina premium, confeccionada com tecido de alta qualidade e acabamento impecável.</p>
        <p>Ideal para o dia a dia, oferecendo conforto e estilo.</p>
      `,
      specs: [
        "Tecido 100% algodão",
        "Lavagem stone wash",
        "Costura reforçada",
        "Modelo tradicional",
      ],
      related: [
        {
          id: 4,
          title: "Bermuda Jeans Masculina",
          price: 42.0,
          imageUrl: "https://images.pexels.com/photos/13662830/pexels-photo-13662830.jpeg",
        },
        {
          id: 5,
          title: "Polo Masculina Premium",
          price: 55.9,
          imageUrl: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg",
        },
      ],
    },

    {
      id: 2,
      title: "Kit 5 Camisetas Básicas",
      price: 89.9,
      oldPrice: 130.0,
      discount: 30,
      vendor: "Caruaru Têxtil Hub",
      images: [
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
      ],
      sizes: ["P", "M", "G", "GG"],
      colors: ["Branco", "Preto", "Cinza"],
      descriptionHtml: "<p>Kit com 5 camisetas premium 100% algodão.</p>",
      specs: ["Modelagem slim", "Malha penteada", "Alta durabilidade"],
      related: [],
    },

    {
      id: 3,
      title: "Blusa Feminina Manga Longa",
      price: 38.9,
      oldPrice: 58.0,
      discount: 33,
      vendor: "Caruaru Têxtil Hub",
      images: [
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
      ],
      sizes: ["P", "M", "G"],
      colors: ["Vermelho", "Preto"],
      descriptionHtml: "<p>Blusa confortável e elegante para o dia a dia.</p>",
      specs: ["Tecido leve", "Costura reforçada"],
      related: [],
    },
  ];

  useEffect(() => {
    const produtoEncontrado = produtosMock.find((p) => p.id == id);

    setProduto(produtoEncontrado || null);
    setLoading(false);
  }, [id]);

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (!produto) return <div className={styles.notfound}>Produto não encontrado</div>;

  return (
    <main className={styles.wrapper}>
      <div className={styles.top}>
        <ProductGallery images={produto.images} />

        <aside className={styles.details}>
          <h1 className={styles.title}>{produto.title}</h1>

          <div className={styles.priceBox}>
            <div className={styles.price}>R$ {produto.price.toFixed(2)}</div>
            {produto.oldPrice && (
              <div className={styles.oldPrice}>R$ {produto.oldPrice.toFixed(2)}</div>
            )}
            {produto.discount && (
              <div className={styles.discountTag}>-{produto.discount}%</div>
            )}
          </div>

          <div className={styles.vendor}>
            <span>{produto.vendor}</span>
            <button className={styles.storeBtn}>Ver loja</button>
          </div>

          <div className={styles.variations}>
            <div className={styles.group}>
              <label>Tamanho</label>
              <div className={styles.options}>
                {produto.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={selectedSize === s ? styles.optionActive : styles.option}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.group}>
              <label>Cor</label>
              <div className={styles.options}>
                {produto.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={selectedColor === c ? styles.optionActive : styles.option}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.qty}>
              <label>Quantidade</label>
              <div>
                <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                <span className={styles.qtyVal}>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.buy}>Comprar Agora</button>
            <button className={styles.cart}>Adicionar ao Carrinho</button>
          </div>

          <div className={styles.badges}>
            <div>Frete grátis</div>
            <div>Compra segura</div>
            <div>Troca grátis</div>
          </div>
        </aside>
      </div>

      <div className={styles.tabs}>
        <nav className={styles.tabNav}>
          <button
            onClick={() => setActiveTab("descricao")}
            className={activeTab === "descricao" ? styles.activeTab : ""}
          >
            Descrição
          </button>

          <button
            onClick={() => setActiveTab("especificacoes")}
            className={activeTab === "especificacoes" ? styles.activeTab : ""}
          >
            Especificações
          </button>

          <button
            onClick={() => setActiveTab("avaliacoes")}
            className={activeTab === "avaliacoes" ? styles.activeTab : ""}
          >
            Avaliações
          </button>
        </nav>

        <div className={styles.tabContent}>
          {activeTab === "descricao" && (
            <div dangerouslySetInnerHTML={{ __html: produto.descriptionHtml }} />
          )}

          {activeTab === "especificacoes" && (
            <ul>
              {produto.specs.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          )}

          {activeTab === "avaliacoes" && <p>Sem avaliações por enquanto.</p>}
        </div>
      </div>

      <RelatedProducts products={produto.related} />
    </main>
>>>>>>> 156be887a95d3d6506c6523a7e4115b20d673beb
  );
}
