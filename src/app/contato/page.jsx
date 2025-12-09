import styles from "./Footer.module.css";
import Image from "next/image";
import Footer from "src/components/footer/Footer"; 

export default function Footer() {
    return (
        <footer className={styles.footerPrincipal}>
            
            <div className={styles.footerContent}>                
               
                <div className="footer-col-info">
                    <div className={styles.logo}>
                         <Image src="/images/logo-icon.png" alt="Caruaru Têxtil Hub" width={30} height={30} />
                    <div>
                        <h2>Caruaru Têxtil Hub</h2>
                        <p>A Sulanca Online</p>
                    </div>

                    
                </div>  
                <div className="descricao">O maior marketplace têxtil do Nordeste,conectando fabricantes de Caruaru com 
                    compradores de todo o Brasil. Tradição e inovação em um só lugar.</div>      

                <div className={styles.redeSocial}>
                    <Image src="/images/facebook.png" alt="facebook" width={20} height={20} />
                    <Image src="/images/instagram.png" alt="instagram" width={20} height={20} />
                    <Image src="/images/twitter-alt-square.png" alt="twitter" width={20} height={20} />
                    <Image src="/images/youtube.png" alt="youtube" width={20} height={20} />
                                   
                </div>
                    <br />          
                <p>&copy; 2025 Caruaru Têxtil Hub.</p>
            </div>

                
                <div className="footer-col-links">                    
                    <h3>Links Rápidos</h3>
                    <br />
                    <div className={styles.footerContato}>
                        <ul>
                            <li>Todos os Produtos</li>
                            <li>Nossos Vendedores</li>
                            <li>Sobre Nós</li>
                            <li>Como Vender</li>
                            <li>Política de Privacidade</li>
                        </ul>
                    </div>
                    
                </div>

                
                <div className="footer-col-categorias">
                    <h3>Categorias</h3>
                    <br />
                    <div className={styles.footerContato}>
                        <ul>
                            <li>Jeans e Denim</li>
                            <li>Malhas e Camisetas</li>
                            <li>Moda Infatil</li>
                            <li>Moda Feminina</li>
                            <li>Moda Masculina</li>
                        </ul>
                    </div>
                    
                </div>

                
                <div className="footer-col-contato">
                    <h3>Contato</h3>
                    <br />
                    <div className={styles.footerContato}>
                        <ul>
                            <li><span><Image src="/images/location-pin.png" alt="Localização" width={14} height={14} /> Caruaru, PE - Polo Têxtil do Nordeste</span></li>
                            <li><span><Image src="/images/circle-phone.png" alt="telefone" width={14} height={14} /> (81) 3000-0000</span></li>
                            <li><span><Image src="/images/envelope.png" alt="e-mail" width={14} height={14} /> contato@caruarutextil.com.br</span></li>
                        </ul>
                    </div>
                </div>

            </div>                       
            
        </footer>
    );
}

import "./contato.css";
export default function ContatoPage(){
}
return (
    <div className="contato-container">
        <h1>Entre em Contato</h1>
        <p className="subtitulo">
            Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos impulsionar seu negócio têxtil.
        </p>
        
        <div className="cards">
            <div className="card">
                <div classeName="icone"></div>
                <h3>Telefone</h3>
                <p>(87) 3000-0000</p>
            </div>
            </div>

            <div className="card">
                <div className="icone"></div>
                <h3> Endereço</h3>
                <p>Centro de Caruaru, PE<br />Polo têxtil do Nordeste</p>
                </div>

                <div className="card">
                    <div className="icone"></div>
                    <h3>Horário de funcionamento</h3>
                    <p>Segunda a Sexta: 8h às 18h
                    </p>
                </div>
                
                </div>)