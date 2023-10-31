import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Product = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://65269d4d917d673fd76ca484.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <>
      <h2 className="content__title">Все кросовки</h2>
      <div className="content__items">
        {items.map((obj) => (
          <ProductList
            key={obj.id}
            title={obj.title}
            subtitle={obj.subtitle}
            sizes={obj.sizes}
            imageUrl={obj.imageUrl}
            price={obj.price}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
