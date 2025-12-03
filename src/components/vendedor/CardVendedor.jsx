import Link from "next/link";
import Image from "next/image";
import styles from "./CardVendedor.module.css";

const CardVendedor = ({vendedorData}) =>{
    const {nome, local, nota, avaliacoes, produtos, seguidores, descricao, fundada, minPedido, 
        especialidades, qualidades, imagem, premium, slug} = vendedorData;
    return ( 
    <div className={styles.cardVendedor}>
       
        <div className={styles.cardImage}> 
            <Image src={vendedorData.imagem} alt={vendedorData.nome} width={450} height={240} className={styles.cardImage}/>
                {premium && <span className={styles.premiumTag}>Qualidade Premium</span>}
        </div>

        <div className={styles.cardContent}>
            <h3 className="vendedor-name">{nome}</h3>
            <p className="vendedor-local">{local}</p>
            <div className={styles.vendedorStatus}>
                <div className={styles.statusLine}>
                    <span><Image src="/images/star.png" alt="box" width={18} height={18}/>{nota}({avaliacoes})</span>
                    <span><Image src="/images/box-open-full.png" alt="box" width={18} height={18}/>{produtos} produtos</span>                    
                    <span><Image src="/images/user.png" alt="user" width={18} height={18}/>{seguidores} seguidores</span>                  
                </div>
            </div>  
            <div className={styles.vendedorTags}>
                {especialidades.map(tag =>(
                    <span key={tag} className={styles.especialidadeTag}>{tag}</span>
                ))}
            </div>
            <p className="descricao">{descricao}</p>
            
            <div className={styles.vendedorInfos}>
        
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Fundada em:</span> 
                    <p className={styles.infoValor} >{vendedorData.fundada}</p> 
                </div>
            
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>Pedido mínimo:</span>
                    <p className={styles.infoValor}>{vendedorData.minPedido}</p>
                </div>

            </div>             

            <div className={styles.vendedorTags}>
                {qualidades.map(tag =>(
                    <span key={tag} className={styles.qualidadesTag}>{tag}</span>
                ))}
            </div>
            
        </div>
            
        <div className={styles.botoesAcao}>
            <Link href={`/lojas/${slug}`} className={styles.botaoVerLoja}>Ver Loja</Link>
            <button className={styles.botaoSeguir}>Seguir</button>
        </div>       

     </div>

    );       

};

export default CardVendedor; 
