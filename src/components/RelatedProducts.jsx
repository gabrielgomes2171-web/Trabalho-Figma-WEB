import Link from "next/link";
import styles from "./related.module.css";

export default function RelatedProducts({ products = [] }) {
  if (!products.length) return null;
  return (
    <section style={{ marginTop: 36 }}>
      <h3>Produtos Relacionados</h3>
      <div className={styles.row}>
        {products.map((p) => (
          <Link href={`/produtos/${p.id}`} key={p.id} className={styles.card}>
            <img src={p.imageUrl} alt={p.title} />
            <div className={styles.info}>
              <h4>{p.title}</h4>
              <p>R$ {p.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
