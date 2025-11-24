import Link from "next/link";
import Image from "next/image";
import styles from "./CardVendedor.module.css";

const CardVendedor = ({vendedorData}) =>{
    const {nome, local, nota, avaliacoes, produtos, seguidores, fundada, minPedido, 
        especialidades, qualidades, imagem, premium, id} = vendedorData;
    return ( 
    <div className={styles.cardVendedor}>
       
        <div className={styles.cardImage}> 
            <Image src={vendedorData.imagem} alt={vendedorData.nome} width={450} height={240} className={styles.cardImage}/>
                {premium && <span className={styles.premiumTag}>Qualidade Premium</span>}
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
        <div className={styles.vendedorTags}>
            {especialidades.map(tag =>(
                <span key={tag} className={styles.especialidadeTag}>{tag}</span>
            ))}
        </div>
        <div className={styles.botoesAcao}>
            <Link href={'/loja/${id}'} className={styles.botaoVerLoja}>Ver Loja</Link>
            <button className={styles.botaoSeguir}>Seguir</button>
        </div>
        

     </div>   




    );

       

};

export default CardVendedor; 
