import Button from "src/components/Button";
import Header from "src/components/header/Header";
import styles from "./produtos.module.css";
<<<<<<< HEAD
import Footer from "src/components/footer/Footer";
=======
>>>>>>> 156be887a95d3d6506c6523a7e4115b20d673beb

function ProductCard({ id, title, price, oldPrice, imageUrl, discount }) {
    return (
        <div className={styles['product-card']}>
            <div className={styles['product-image-container']}>
                <img src={imageUrl} alt={title} className={styles['product-image']} />
                {discount && <span className={styles['discount-tag']}>-{discount}%</span>}
            </div>

            <div className={styles['product-details']}>
                <p className={styles['product-category']}></p>
                <h3 className={styles['product-title']}>{title}</h3>
                <div className={styles['product-rating']}>
                    ⭐⭐⭐⭐ (99)
                </div>
                <div className={styles['product-price-container']}>
                    {oldPrice && <span className={styles['old-price']}>R$ {oldPrice}</span>}
                    <span className={styles['current-price']}>R$ {price}</span>
                </div>

                {/* 👇 AQUI ESTÁ O LINK DO VER DETALHES */}
                <Link href={`/produtos/${id}`}>
                    <Button className={styles['button']}>Ver Detalhes</Button>
                </Link>
            </div>
        </div>
    );
}

export default function ProdutosPage() {
    const mockProducts = [
        { id: 1, title: "Calça Jeans Premium Masculina", price: "45,90", oldPrice: "120,00", discount: 61, imageUrl: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg" },
        { id: 2, title: "Kit 5 Camisetas Básicas", price: "89,90", oldPrice: "130,00", discount: 30, imageUrl: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg" },
        { id: 3, title: "Blusa Feminina Manga Longa", price: "38,90", oldPrice: "58,00", discount: 33, imageUrl: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" },
        { id: 4, title: "Bermuda Jeans Masculina", price: "42,00", oldPrice: "60,00", discount: 30, imageUrl: "https://images.pexels.com/photos/13662830/pexels-photo-13662830.jpeg" },
        { id: 5, title: "Polo Masculina Premium", price: "55,90", oldPrice: "78,90", discount: 29, imageUrl: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg" },
    ];

    return (
        <main className={styles['produtos-page-container']}>
            <Header />

            <div className={styles['content-area']}>

                <aside className={styles['filter-sidebar']}>
                    <h2> Filtros</h2>
                    <hr />

                    <div className={styles['filter-group']}>
                        <label htmlFor="search-input">Buscar produtos...</label>
                        <input id="search-input" type="text" placeholder="Buscar produtos..." className={styles['search-input']} />
                    </div>

                    <div className={styles['filter-group']}>
                        <h3>Categorias</h3>
                        <ul>
                            <li><input type="checkbox" id="cat1" /> <label htmlFor="cat1">Jeans & Denim</label></li>
                            <li><input type="checkbox" id="cat2" /> <label htmlFor="cat2">Malhas</label></li>
                            <li><input type="checkbox" id="cat3" /> <label htmlFor="cat3">Moda Feminina</label></li>
                        </ul>
                    </div>

                    <div className={styles['filter-group']}>
                        <h3>Faixa de Preço</h3>
                        <div className={styles['price-range']}>
                            <input type="number" placeholder="0" className={styles['price-input']} />
                            <span>até</span>
                            <input type="number" placeholder="500" className={styles['price-input']} />
                        </div>
                    </div>

                    <div className={styles['filter-group']}>
                        <h3>Avaliação</h3>
                        <p>⭐⭐⭐⭐⭐ e acima</p>
                        <p>⭐⭐⭐⭐ e acima</p>
                    </div>
                </aside>

                <section className={styles['product-list-area']}>

                    <div className={styles['sort-bar']}>
                        <p>Mostrando {mockProducts.length} produtos</p>
                        <select className={styles['sort-select']}>
                            <option>Mais Relevantes</option>
                            <option>Menor Preço</option>
                            <option>Maior Preço</option>
                        </select>
                    </div>

                    <div className={styles['product-grid']}>
                        {mockProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                discount={product.discount}
                                imageUrl={product.imageUrl}
                            />
                        ))}
                    </div>

                    <div className={styles['pagination']}>
                        <Button className={styles['prev-next-button']}>Anterior</Button>
                        <span className={styles['page-number']}>1</span>
                        <span className={styles['page-number']}>2</span>
                        <Button className={styles['prev-next-button']}>Próximo</Button>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
