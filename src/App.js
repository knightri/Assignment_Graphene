import "./styles.css";
import Header from "./Components/Header";
import Shopcart from "./Components/Shopcart";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Shopcart />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
