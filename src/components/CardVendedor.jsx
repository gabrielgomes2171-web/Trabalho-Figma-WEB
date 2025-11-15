import Link from "next/link";

const CardVendedor = ({vendedor}) =>{
    const {nome, local, nota, avaliacoes, produtos, seguidores, fundada, minPedido, 
        especialidades, qualidades} = vendedor;
    return ( 
    <div className="card-vendedor">
        {premium && <span className="premium-tag">Qualidade Premium</span>}

        <div className="card-image"> 
            < img src={image || '/placeholder.webp'}
                  alt={'Loja ${nome}'}
                  className="card-image" />
        </div>

        <div className="card-content">
            <h3 className="vendedor-name">{nome}</h3>
            <p className="vendedor-local">{local}</p>
            <div className="vendedor-status">
                <div className="status-itens">
                    <span className="rating">⭐</span>
                    <span className="status-valor">{nota}</span>
                </div>
            </div>       
        </div>
        <div className="vendedor-tags">
            {especialidades.map(tag =>(
                <span key={tag} className="especialidade-tag">{tag}</span>
            ))}
        </div>
        <div className="card-acao">
            <Link href={'/loja/${id}'} passHref>
                <a className="botao-ver-loja">Ver Loja</a>
            </Link>
            <button className="botao-seguir">Seguir</button>
        </div>
        

     </div>   




    );

       

};

export default CardVendedor; 
