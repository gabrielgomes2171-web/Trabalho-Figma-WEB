"use client";
import { useState } from "react";
import styles from "./productGallery.module.css";

export default function ProductGallery({ images = [] }) {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <img src={images[index]} alt={`imagem-${index}`} />
      </div>
      <div className={styles.thumbs}>
        {images.map((img, i) => (
          <button key={i} onClick={() => setIndex(i)} className={i === index ? styles.thumbActive : ""}>
            <img src={img} alt={`thumb-${i}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
