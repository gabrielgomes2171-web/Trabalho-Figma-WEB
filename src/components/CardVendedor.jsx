import Link from "next/link";
import Image from "next/image";

const CardVendedor = ({vendedorData}) =>{
    const {nome, local, nota, avaliacoes, produtos, seguidores, fundada, minPedido, 
        especialidades, qualidades, imagem, premium, id} = vendedorData;
    return ( 
    <div className="card-vendedor">
        {premium && <span className="premium-tag">Qualidade Premium</span>}

        <div className="card-image"> 
            <span><Image src={vendedorData.imagem} alt={vendedorData.nome} width={250} height={140} /></span>
        </div>

        <div className="card-content">
            <h3 className="vendedor-name">{nome}</h3>
            <p className="vendedor-local">{local}</p>
            <div className="vendedor-status">
                <div className="status-itens">
                    <span className="rating">⭐</span>
                    <span className="status-valor">{nota}({avaliacoes})</span>
                </div>
            </div>       
        </div>
        <div className="vendedor-tags">
            {especialidades.map(tag =>(
                <span key={tag} className="especialidade-tag">{tag}</span>
            ))}
        </div>
        <div className="card-acao">
            <Link href={'/loja/${id}'} className="botao-ver-loja">Ver Loja</Link>
            <button className="botao-seguir">Seguir</button>
        </div>
        

     </div>   




    );

       

};

export default CardVendedor; 
