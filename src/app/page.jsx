import React from 'react';
import Header from 'src/components/header/Header'; 
import styles from './page.module.css';
import { 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  TrendingUp, 
  Package, 
  Users 
} from 'lucide-react';
import Footer from '@/components/footer/Footer';

export default function CaruaruTextilHub() {
  
  const categories = [
    { title: 'Jeans & Denim', count: '+200 produtos', image: 'https://images.unsplash.com/photo-1542272617-08f08630793c?auto=format&fit=crop&q=80&w=400' },
    { title: 'Malhas', count: '+500 produtos', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=400' },
    { title: 'Moda Infantil', count: '+120 produtos', image: 'https://images.unsplash.com/photo-1519238263496-6361937a42d8?auto=format&fit=crop&q=80&w=400' },
    { title: 'Feminino', count: '+800 produtos', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Calça Jeans Premium', store: 'Confecções Silva', price: 45.90, oldPrice: 69.90, rating: 4.8, sales: 154, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300', discount: '-34%' },
    { id: 2, name: 'Camiseta Básica Kit 3un', store: 'Malhas Caruaru', price: 89.90, oldPrice: 120.00, rating: 4.9, sales: 230, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=300', discount: '-25%' },
    { id: 3, name: 'Vestido Infantil', store: 'Kids Fashion', price: 32.50, oldPrice: 45.00, rating: 4.7, sales: 89, image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=300', discount: '-28%' },
    { id: 4, name: 'Blusa Feminina Estampada', store: 'Moda Nordeste', price: 28.90, oldPrice: 35.00, rating: 4.6, sales: 112, image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=300', discount: '-18%' },
  ];

  const testimonials = [
    { id: 1, text: "Facilitou muito minha loja! Agora recebo direto das melhores produções de Caruaru sem sair de SP.", author: "Maria Santos", role: "Lojista - São Paulo" },
    { id: 2, text: "Preço excelente e qualidade garantida. A Sulanca agora chegou até mim!", author: "João Silva", role: "Sacoleiro - Rio de Janeiro" },
    { id: 3, text: "Minhas vendas triplicaram! Agora vendo para todo o Brasil através da plataforma.", author: "Ana Costa", role: "Confecção - Caruaru" },
  ];

  return (
    <div>
      <Header />

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>
                A <span className={styles.highlightOrange}>Sulanca</span><br />
                Agora é Digital
              </h1>
              <p className={styles.heroDesc}>
                Conectamos os melhores fabricantes de Caruaru com compradores de todo o Brasil. <strong className={styles.highlightYellow}>Atacado e varejo direto da fonte.</strong>
              </p>
              
              <div className={styles.heroButtons}>
                <button className={styles.btnPrimary}>
                  Explorar Produtos
                </button>
                <button className={styles.btnOutline}>
                  Conheça os Vendedores
                </button>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <h4>
                    <Users size={20} /> 5.000+
                  </h4>
                  <p>Vendedores Ativos</p>
                </div>
                <div className={styles.statItem}>
                  <h4>
                    <Package size={20} /> 50.000+
                  </h4>
                  <p>Produtos Disponíveis</p>
                </div>
                <div className={styles.statItem}>
                  <h4>
                    <TrendingUp size={20} /> R$ 2M+
                  </h4>
                  <p>Vendas Mensais</p>
                </div>
              </div>
            </div>

            <div className={styles.heroCardWrapper}>
              <div className={styles.heroCard}>
                <h3>Por que escolher o Caruaru Têxtil Hub?</h3>
                <ul className={styles.benefitList}>
                  <li className={styles.benefitItem}>
                    <div className={`${styles.iconBox} ${styles.green}`}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div className={styles.benefitText}>
                      <strong>Compra 100% Segura</strong>
                      <span>Garantimos a entrega ou seu dinheiro de volta.</span>
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={`${styles.iconBox} ${styles.blue}`}>
                      <Package size={18} />
                    </div>
                    <div className={styles.benefitText}>
                      <strong>Frete para Todo Brasil</strong>
                      <span>Logística integrada com as melhores transportadoras.</span>
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={`${styles.iconBox} ${styles.purple}`}>
                      <TrendingUp size={18} />
                    </div>
                    <div className={styles.benefitText}>
                      <strong>Parcelamento Facilitado</strong>
                      <span>Até 12x no cartão ou desconto no PIX.</span>
                    </div>
                  </li>
                  <li className={styles.benefitItem}>
                    <div className={`${styles.iconBox} ${styles.yellow}`}>
                      <Star size={18} />
                    </div>
                    <div className={styles.benefitText}>
                      <strong>Qualidade Garantida</strong>
                      <span>Curadoria dos melhores fabricantes da região.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Explore Nossas Categorias</h2>
            <p>Descubra a variedade incrível de produtos têxteis direto dos melhores fabricantes de Caruaru.</p>
          </div>

          <div className={styles.gridCategories}>
            {categories.map((cat, index) => (
              <div key={index} className={styles.categoryCard}>
                <img src={cat.image} alt={cat.title} className={styles.catImg} />
                <div className={styles.catOverlay}></div>
                
                <div className={styles.catInfo}>
                  <h3>{cat.title}</h3>
                  <p className={styles.catCount}>
                    {cat.count} <ArrowRight size={16} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Produtos em Destaque</h2>
            <p>Os mais vendidos da semana com preços especiais</p>
          </div>

          <div className={styles.gridProducts}>
            {featuredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.prodImgContainer}>
                  <span className={styles.discountTag}>{product.discount}</span>
                  <img src={product.image} alt={product.name} className={styles.prodImg} />
                </div>
                
                <div className={styles.prodInfo}>
                  <p className={styles.storeName}>{product.store}</p>
                  <h3 className={styles.prodName}>{product.name}</h3>
                  
                  <div className={styles.ratingRow}>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < Math.floor(product.rating) ? styles.starFilled : ''} 
                        />
                      ))}
                    </div>
                    <span className={styles.salesCount}>({product.sales})</span>
                  </div>

                  <div className={styles.priceRow}>
                    <div>
                      <p className={styles.oldPrice}>R$ {product.oldPrice.toFixed(2)}</p>
                      <p className={styles.price}>R$ {product.price.toFixed(2)}</p>
                    </div>
                    <button className={styles.btnView}>
                      Ver
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.productsFooter}>
            <button className={styles.btnSeeAll}>
              Ver Todos os Produtos
            </button>
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>O que dizem nossos clientes</h2>
            <p>Depoimentos reais de quem já faz parte da nossa comunidade</p>
          </div>

          <div className={styles.gridTestimonials}>
            {testimonials.map((t) => (
              <div key={t.id} className={styles.testimonialCard}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className={styles.starFilled} />)}
                </div>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.author}>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Pronto para começar a vender?</h2>
            <p>
              Junte-se a milhares de vendedores que já descobriram o poder do marketplace digital. 
              Cadastre-se gratuitamente e comece a vender hoje mesmo!
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.btnWhite}>
                Quero Vender
              </button>
              <button className={styles.btnOutline}>
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
}