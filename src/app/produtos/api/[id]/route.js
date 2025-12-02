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
}
