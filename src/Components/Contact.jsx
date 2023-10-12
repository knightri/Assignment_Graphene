import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <div className="contact_top">
        <div className="news">
          <p
            style={{
              fontWeight: "600",
              fontSize: "26px",
              marginBottom: "15px"
            }}
          >
            Newslleter
          </p>
          <p>Get news about articles and updates in your inbox.</p>
        </div>
        <div
          style={{
            flex: "1",
            padding: "10px"
          }}
        >
          <form className="contact_form">
            <input
              type="text"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="MESSAGE"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </form>
        </div>
      </div>
      <div className="contact_bottom">
        <div className="get_in_touch">
          GET
          <br /> IN TOUCH
        </div>
        <div className="send" onClick={(e) => handleSubmit(e)}>
          SEND
        </div>
      </div>
    </div>
  );
}
