import { useEffect, useState } from "react";
import styles from "./styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const res = await fetch(getUrl);
      const data = await res.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      setErr(error.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  console.log(scrollPercentage);
  return (
    <div>
      <div className="top-container">
        <h1>Custom scroll indicator</h1>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((product) => <p>{product.title}</p>)
          : null}
      </div>
    </div>
  );
}
