import Header from "@/components/header/Header";
import CardVendedor from "@/components/vendedor/CardVendedor";
import { vendedoresData } from "../data/vendedores";
import styles from "./vendedores.module.css";

export default function VendedoresPage(){
    return (
        <main>
            <Header/>
            <h1>Pagina dos Vendedores</h1>
            
            <div className={styles.cardGrid}>{vendedoresData.map((vendedorItem)=>(
                <CardVendedor className= {styles.cardGrid} key={vendedorItem.id} vendedorData={vendedorItem}/>))}

            </div>          

        </main>
    )
}

