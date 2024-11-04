import { useEffect, useState } from "react";
import styles from "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [diabled, setDisabled] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisabled(true);
    }
  }, [products]);

  if (loading) {
    return <div>Please Wait while we load data for you!!....</div>;
  }
  return (
    <div className="container-load">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={diabled} onClick={() => setCount(count + 1)}>
          Load more Data
        </button>
        {diabled ? <p>You have reached the max limit of product list</p> : null}
      </div>
    </div>
  );
}
