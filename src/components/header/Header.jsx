import Button from "../Button";
import Image from "next/image";
import styles from "./Header.module.css";


const HeaderTop = () => {
    return (
        <div className={styles['header-top-bar']}>
            <span><Image src="/images/location-pin.svg" alt="Localização" width={14} height={14} />Caruaru, PE - Polo Têxtil do Nordeste</span>
            <span>(81) 3000-0000</span>
        </div>
    )
};

const HeaderMain = () => {
    return (
        <div className={styles["header-main-bar"]}>
            <div className={styles.logo}>
                <Image src="/images/logo-icon.svg" alt="Caruaru Têxtil Hub" width={30} height={30} />
                <div>
                    <h2>Caruaru Têxtil Hub</h2>
                    <p>A Sua Loja Online</p>
                </div>
            </div>
            
            <div className={styles['barra-pesquisa']}>
                <input type="text" placeholder="Buscar produtos, marcas ou vendedores..." />
            </div>

            <div className={styles['Buttons-direita']}>
                <Button>
                    <Image src="/images/shopping-cart.svg" alt="carrinho de compras" width={25} height={25}/>
                    <span className={styles.cartCount}>0</span>
                </Button>
                <Button className={styles.enterButton}>Entrar</Button>
            </div>
        </div>
    )
};

const HeaderNav = () =>{
    return(
        <div className={styles["header-main-nav"]}>
            <Button className={`${styles.navButton} ${styles.active}`}>Início</Button>
            <Button className={styles.navButton}>Produtos</Button>
            <Button className={styles.navButton}>Vendedores</Button>
            <Button className={styles.navButton}>Sobre</Button>
            <Button className={styles.navButton}>Contato</Button>
        </div>
    )
}

export default function Header () {
    return (
        <header className={styles['header-container']}>
            <HeaderTop/>
            <HeaderMain/>
            <HeaderNav/>
        </header>
    )
}