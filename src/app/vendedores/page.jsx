import Button from "@/components/Button";
import Header from "@/components/header/Header";
import CardVendedor from "@/components/CardVendedor";
import { vendedoresData } from "../data/vendedores";

export default function VendedoresPage(){
    return (
        <main>
            <Header/>
            <h1>Pagina dos Vendedores</h1>
            <div className="card-grid">{vendedoresData.map((vendedorItem)=>(
                <CardVendedor key={vendedorItem.id} vendedorData={vendedorItem}/>))}

            </div>          

        </main>
    )
}

