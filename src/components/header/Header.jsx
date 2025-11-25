'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from "../Button";
import Image from "next/image";
import styles from "./Header.module.css";

const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Produtos', href: '/produtos' },
    { label: 'Vendedores', href: '/vendedores' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
];

const HeaderTop = () => {
    return (
        <div className={styles['header-top-bar']}>
            <span><Image src="/images/location-pin.png" alt="Localização" width={14} height={14} />Caruaru, PE - Polo Têxtil do Nordeste</span>
            <span>(81) 3000-0000</span>
        </div>
    )
};

const HeaderMain = () => {
    return (
        <div className={styles["header-main-bar"]}>
            <div className={styles.logo}>
                <Image src="/images/logo-icon.png" alt="Caruaru Têxtil Hub" width={30} height={30} />
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
                <Link href="/login">
                <Button className={styles.enterButton}>Entrar</Button>
                </Link>
            </div>
        </div>
    )
};

const HeaderNav = () =>{
    const pathname = usePathname();

    return(
        <div className={styles["header-main-nav"]}>
            {navItems.map((item) => {
                // 1. Verifica se o caminho atual começa com o href do item
                // Usamos startsWith para que páginas aninhadas (ex: /produtos/camisetas) destaquem "Produtos"
                const isActive = item.href === '/' 
                    ? pathname === item.href // Caso especial: 'Início' só é ativo na raiz
                    : pathname.startsWith(item.href);

                // 2. Monta a string de classes (navButton sempre, active se for a página atual)
                const buttonClasses = `${styles.navButton} ${isActive ? styles.active : ''}`;
                
                return (
                    <Link 
                        href={item.href} 
                        key={item.label} 
                        className={buttonClasses} 
                    >
                        {item.label}
                    </Link>
);
            })}
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