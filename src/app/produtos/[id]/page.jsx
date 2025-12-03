"use client";

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
  );
}
