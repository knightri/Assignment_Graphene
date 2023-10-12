import { useEffect, useState } from "react";
import line from "./line.png";
import star from "./star.png";
import arrow1 from "./arrow1.png";
import arrow2 from "./arrow2.png";
import Card from "./Card";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const fetchedProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchedProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const temp = products.map((item) => <Card item={item} />);

  return (
    <div className="products">
      <div className="products_top">
        <div>
          <div className="product_title">New Products</div>
          <div className="underline">
            <img src={star} alt="" />
            <img style={{ maxWidth: "95%" }} src={line} alt="" />
          </div>
        </div>
        {screenWidth > 1000 && (
          <div>
            <img src={arrow2} style={{ marginRight: "20px" }} alt="" />
            <img src={arrow1} style={{ marginRight: "20px" }} alt="" />
          </div>
        )}
      </div>
      <div className="products_bottom">
        <div className="products_left">
          <span>Apparels</span>
          {screenWidth > 700 && (
            <span style={{ fontWeight: "600", fontSize: "26px" }}>
              Accessories
            </span>
          )}
          {screenWidth <= 700 && (
            <span style={{ fontWeight: "600", fontSize: "18px" }}>
              Accessories
            </span>
          )}
          <span>Best Seller</span>
          <span>50% off</span>
        </div>
        <div className="products_container">{temp}</div>
        {screenWidth <= 1000 && (
          <div style={{ alignSelf: "center" }}>
            <img src={arrow2} style={{ marginRight: "20px" }} alt="" />
            <img src={arrow1} style={{ marginRight: "20px" }} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
