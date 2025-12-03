import Header from 'src/components/header/Header';
import Footer from 'src/components/footer/Footer';
import Button from 'src/components/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { vendedoresData } from 'src/app/data/vendedores';
import { produtosVendedor } from 'src/app/data/produtos';
import styles from './loja.module.css'; 

export default async function lojaPage({ params }) {

    const resolvedParams = await params;
    
    const { slug } = resolvedParams;
    
    const loja = vendedoresData.find(vendedor => vendedor.slug === slug);

    if (!loja) {
        return notFound();
    }
   
    const produtosDaLoja = produtosVendedor.filter(
        produto => produto.vendedorId === loja.id
    );
   
    return (
        <main>
        <Header/>

            <div className={styles.pageContainer}>
                
                <div className={`${styles.heroHeader} ${styles.boxContainer}`}>                    
                    
                    <div className={styles.perfilInfo}>                        
                       
                        <div className={styles.avatar}>                          
                            <Image src={loja.imagem} alt={loja.nome} width={100} height={100} className={styles.avatarImage} />
                            <div className={styles.avatarPlaceholder} /> 
                        </div>                        
                        
                        <div className={styles.nomeRatingGroup}>
                            <h1 className={styles.nomeLoja}>{loja.nome}</h1>
                            <p className={styles.local}>{loja.local}</p>                                         
                        </div>
                    </div>                     
               
                    <div className={styles.statsGroup}>                        
                      
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>⭐ {loja.nota}</span>
                            <span className={styles.statLabel}>{loja.avaliacoes} avaliações</span>
                        </div>
                      
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{produtosDaLoja.length}</span>
                            <span className={styles.statLabel}>Produtos</span>
                        </div>
                        
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>{loja.seguidores}</span>
                            <span className={styles.statLabel}>Seguidores</span>
                        </div>
                        
                    </div>                    
                    
                    <div className={styles.actionButtons}>
                        
                        <Button className={styles.btnSeguir}>Seguir</Button>
                        <Button className={styles.btnContatar}>Contatar</Button>
                    </div>

                </div> 
                
                <div className={`${styles.lojaDetalhes} ${styles.boxContainer}`}>
                    <h2 className={styles.descricaoHeader}>Sobre a Loja</h2>
                    <p className={styles.descricaoCompleta}>{loja.descricao}</p>

                    <div className={styles.especialidadesTags}>
                        {loja.especialidades.map(tag => (
                            <span key={tag} className={styles.tagItem}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className={`${styles.produtosSection} ${styles.boxContainer}`}>
       
                    <h2 className={styles.gridTitle}>Itens à Venda ({produtosDaLoja.length})</h2>
                    <div className={styles.produtosGrid}>
                        {produtosDaLoja.map(produto => (
                            <div key={produto.id} className={styles.produtoCardPlaceholder}>
                                <Image src={produto.imagem} 
                                    alt={produto.nome}
                                    width={200} 
                                    height={200}
                                    className={styles.produtoImagem}/>
                                <p>{produto.nome} - R$ {produto.valor.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                               
            </div>
        <Footer/>
        </main>
    );
}