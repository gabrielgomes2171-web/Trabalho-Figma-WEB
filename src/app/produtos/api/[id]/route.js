<<<<<<< HEAD
export async function GET(_, { params }) {
const produtos = {
1: {
id: 1,
nome: "Camiseta Caruaru Têxtil",
descricao: "Camiseta 100% algodão, super confortável.",
preco: 59.90,
image: "[https://via.placeholder.com/400x400?text=Produto+1](https://via.placeholder.com/400x400?text=Produto+1)"
},
};

return Response.json(produtos[params.id] || null);
=======
export async function GET(req, { params }) {
  const id = Number(params.id);
  const produtos = [
    // mesmo array do route.js acima (ou importe)
    {
      id: 1,
      title: "Calça Jeans Masculina",
      price: 45.9,
      oldPrice: 69.9,
      discount: 34,
      vendor: "Caruaru Têxtil",
      imageUrl: "/assets/produto1.png",
      images: [
        "/assets/produto1.png",
        "/assets/produto1-2.png",
        "/assets/produto1-3.png"
      ],
      sizes: ["38","40","42","44"],
      colors: ["Azul Escuro","Azul Claro","Preto"],
      descriptionHtml: "<p>Calça jeans premium, acabamento impecável. Ideal para o dia a dia.</p>",
      specs: ["100% algodão","Lavagem stone wash","Costura reforçada"],
      related: [
        { id: 2, title: "Bermuda Jeans Masculina", price: 42.0, imageUrl: "/assets/produto2.png" },
        { id: 3, title: "Camisa Jeans Masculina", price: 55.9, imageUrl: "/assets/produto3.png" }
      ]
    }
  ];

  const produto = produtos.find((p) => p.id === id) || null;
  return new Response(JSON.stringify(produto), { status: 200 });
>>>>>>> 156be887a95d3d6506c6523a7e4115b20d673beb
}
