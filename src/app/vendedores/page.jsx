import Header from "src/components/header/Header";
import Footer from "@/components/footer/Footer";
import Button from "@components/Button";
import CardVendedor from "@/components/vendedor/CardVendedor";
import VenderSearchBar from "@components/vendedor/VenderSearchBar";
import { vendedoresData } from "../data/vendedores";
import styles from "./vendedores.module.css";


export default function VendedoresPage(){
    return (
        <main>
            <Header/>

            <div className={styles.pageWrapper}>

            <VenderSearchBar/>
            
            <div className={styles.cardGrid}>{vendedoresData.map((vendedorItem)=>(
                <CardVendedor className= {styles.cardGrid} key={vendedorItem.id} vendedorData={vendedorItem}/>))}

            </div>
             <div className={styles.pagination}>
                        <Button className={styles.prevNextButton}>Anterior</Button>
                        <span className={styles.pageNumber}>1</span>
                        <span className={styles.pageNumber}>2</span>
                        <span className={styles.pageNumber}>3</span>
                        <span className={styles.pageNumber}>4</span>
                        <Button className={styles.prevNextButton}>Próximo</Button>
                    </div>

            </div>

            <Footer/>        

        </main>
    )
}

