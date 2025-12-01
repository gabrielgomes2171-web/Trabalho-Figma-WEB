"use client"

import { useState } from "react"
import Image from "next/image";
import Button from "@components/Button";
import styles from "./VendorSearchBar.module.css"

export default function VenderSearchBar() {

    const [searchTerm, setSearchTerm] = useState('');
    const [isGridView, setIsGridView] = useState(true);
    return (
        <div className={styles.searchBarContainer}>
            <div className={styles.searchInput}>
                <input type="text" 
                       placeholder="Buscar Vendedores..."
                       value = {searchTerm}
                       onChange = {(e) => setSearchTerm(e.target.value)}
                />                 
            </div>

            <div className={styles.filterControls}>
            <select className={styles.filtroDropdown}>
                <option value="todos">Todos</option>
                <option value="Jeans e Denim">Jeans e Denim</option>
                <option value="Malhas e Camisetas">Malhas e Camisetas</option>
                <option value="Moda Infatil">Moda Infatil</option>
                <option value="Moda Feminina">Moda Feminina</option>
                <option value="Moda Masculina">Moda Masculina</option>
               
            </select>
           
            <p className={styles.vendorQuantidade}>6 vendedores encontrados</p>

                <div className={styles.viewToggles}> 
                    <Button
                        onClick={() => setIsGridView(true)}
                        className={`${styles.toggleButton} ${isGridView ? styles.activeView : ''}`}
                    >
                    <Image 
                        src="/images/grid-icon.png" 
                        alt="Visualização em Grade" 
                        width={20} 
                        height={20} 
                    />
                    </Button>

                    <Button
                        onClick={() => setIsGridView(false)}
                        className={`${styles.toggleButton} ${!isGridView ? styles.activeView : ''}`}
                    >
                    <Image 
                        src="/images/list-icon.png" 
                        alt="Visualização em Lista" 
                        width={20} 
                        height={20} 
                    />
                    </Button>
                </div>
            </div>

        </div>
    )

}