import icon from "./icon.png";

export default function Card({ item }) {
  const description =
    item.description.length > 150
      ? item.description.slice(0, 150) + "..."
      : item.description;

  return (
    <div className="card">
      <div className="card_image_container">
        <img src={item.image} className="card_image" alt="" />
        <img src={icon} className="card_icon" alt="" />
      </div>
      <p className="card_title">{item.category}</p>
      <p className="card_description">{description}</p>
      <p className="card_price">$ {item.price}</p>
    </div>
  );
}
