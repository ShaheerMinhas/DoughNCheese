import { useEffect, useRef } from "react";
import "./index.css";

// local images
import logo from "./assets/logo.jpg";
import ftrdpizza from "/ftrd-pizza.webp";
import mapImg from "/map.webp";
import Navbar from "./components/Navbar";
import menuImg from "./assets/menuImg1.jpg";

export default function App() {
  const revealRef = useRef([]);

  // DEALS DATA
  const deals = [
    {
      title: "1# x2 Medium Pizza, x2 Drink Cans",
      price: "$33",
    },
    {
      title: "2# x2 Large Pizza, 1.25L Drink, x1 Garlic Bread",
      price: "$43",
    },
    {
      title: "3# x3 Large Pizza, 1.25L Drink, x2 Garlic Bread",
      price: "$60",
    },
    {
      title:
        "4# x4 Large Pizza, x2 1.25L Drink, x2 Garlic Bread, x1 Large Chips",
      price: "$90",
    },
  ];

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.18 }
    );

    revealRef.current.forEach((el) => el && io.observe(el));

    window.addEventListener("scroll", () => {
      const h = document.querySelector(".nav-header");
      if (window.scrollY > 40)
        h.style.backdropFilter = "saturate(120%) blur(6px)";
      else h.style.backdropFilter = "none";
    });
  }, []);

  const addReveal = (el) => {
    if (el && !revealRef.current.includes(el)) revealRef.current.push(el);
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero fade-up" ref={addReveal} id="hero">
          <div className="hero-left">
            <div className="tag">pizza & manoosh</div>
            <h2>Authentic dough. Melty cheese. Bold flavours.</h2>
            <p>
              Welcome to Dough & Cheese — a local favourite inspired by modern
              street pizza and traditional manoush. Below is our featured menu —
              swipe/scroll to explore.
            </p>

            <div className="cta">
              <button
                className="btn"
                onClick={() =>
                  document
                    .getElementById("menu")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                See Menu
              </button>
            </div>

            {/* FEATURED + DEALS */}
            <div className="big-menu" style={{ marginTop: 26 }}>
              <h4 className="small">Featured</h4>

              {/* FEATURED ITEM */}
              <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      background: "linear-gradient(180deg,#0f0f0f,#0b0b0b)",
                      padding: 12,
                      borderRadius: 8,
                      minHeight: 120,
                    }}
                  >
                    <strong style={{ color: "var(--accent)" }}>
                      Dough BBQ Chicken
                    </strong>
                    <div className="small">
                      BBQ Base, Marinated Chicken, Mushrooms, Onion, Capsicum, Mozzarella Cheese
                    </div>
                  </div>
                </div>

                <div style={{ width: 140 }}>
                  <img
                    src={ftrdpizza}
                    alt="featured"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                </div>
              </div>

              {/* DEALS SECTION */}
              <div
                style={{
                  background: "linear-gradient(180deg,#0f0f0f,#0b0b0b)",
                  padding: 18,
                  borderRadius: 10,
                  marginTop: 20,
                }}
              >
                <h4 style={{ color: "var(--accent)", marginTop: 0 }}>DEALS</h4>

                {deals.map((d, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px dashed rgba(255,255,255,0.06)",
                      padding: "6px 0",
                      marginBottom: 6,
                    }}
                  >
                    <span className="small" style={{ color: "#ddd" }}>
                      {d.title}
                    </span>

                    <span
                      style={{
                        background: "var(--accent)",
                        color: "#000",
                        fontWeight: 700,
                        padding: "2px 10px",
                        borderRadius: 6,
                      }}
                    >
                      {d.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <aside className="panel">
            <img src={menuImg} alt="pizza" />
            <div className="hours">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="small">Open:</span>
                <strong>11:00 — 23:00</strong>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 6,
                }}
              >
                <span className="small">Delivery:</span>
                <strong>Available</strong>
              </div>
            </div>
          </aside>
        </section>

        {/* MENU */}
        <section id="menu">
          <div className="section-title">
            <h3 style={{ margin: 0, color: "#fff" }}>Menu</h3>
          </div>
          <p className="small" style={{ marginTop: 8 }}>
            (Check out our menu)
          </p>

          <div className="menu-grid" style={{ marginTop: 18 }}>
            {/* Column 1 */}


            {/* Column 2 */}
            <div className="menu-column" ref={addReveal}>
              <h3>Gourmet Pizza</h3>
              {[
                ["Peri Peri Chicken", "Chicken, Peri Peri Sauce", "$10 - $13 - $17"],
                ["BBQ Chicken", "BBQ Sauce, Chicken, Onions", "$10 - $13 - $17"],
                ["Fajita Chicken", "Fajita Spice, Capsicum, Onions", "$10 - $13 - $17"],
                ["Pesto Chicken", "Pesto, Chicken, Basil", "$10 - $13 - $17"],
                ["Paneer Tikka", "Paneer, Spices, Capsicum", "$10 - $13 - $17"],
                ["Iconic Margherita", "Cherry Tomato, Basil, Mozzarella", "$10 - $13 - $17"],
              ].map(([title, desc, price]) => (
                <div className="item" key={title}>
                  <div>
                    <strong>{title}</strong>
                    <small>{desc}</small>
                  </div>
                  <div>{price}</div>
                </div>
              ))}
              <br />
              <h3>Manoosh</h3>

              {[
                ["Zaatar (Oregano)", "Traditional", "$4.5"],
                ["Zaatar & Cheese", "—", "$10"],
                ["Zaatar & Veggies", "—", "$10"],
                ["Just Cheese", "—", "$11"],
                ["Sucuk & Cheese", "—", "$12"],
                ["Sucuk & Veggies", "—", "$13"],
                ["Meat (Lahem Bajeen)", "—", "$11"],
                ["Meat & Cheese (Lahem Jibneh)", "—", "$12"],
                ["Zaatar Labneh & Veggies", "—", "$12"],
              ].map(([title, desc, price]) => (
                <div className="item" key={title}>
                  <div>
                    <strong>{title}</strong>
                    {desc !== "—" && <small>{desc}</small>}
                  </div>
                  <div>{price}</div>
                </div>
              ))}

            </div>

            {/* Column 3 */}
            {/* Column 2 — Gourmet Pizza */}
            <div className="menu-column" ref={addReveal}>
              <h3>Gourmet Pizza</h3>

              {[
                ["Peri Peri Chicken", "Tomato Base, Marinated Chicken Strips, Onion, Baby Spinach, Roasted Pepper, Tomato, Mozzarella Cheese, Topped with Peri Peri Sauce", "$12/$15/$20"],
                ["Tandoori Chicken", "Tandoori Base, Marinated Chicken, Spring Onion, Capsicum, Tomato, Mozzarella Cheese, Topped with Mint Yogurt Sauce", "$12/$15/$20"],
                ["BBQ Chicken", "BBQ Base, Marinated Chicken, Mushrooms, Onion, Capsicum, Mozzarella Cheese", "$12/$15/$20"],
                ["Garlic Chicken", "Garlic Base, Marinated Chicken, Capsicum, Mushroom, Mozzarella Cheese, Topped with Garlic Sauce", "$12/$15/$20"],
                ["Chilli Chicken", "Chilli Base, Chicken, Roasted Pepper, Spring Onion, Jalapeño, Mozzarella Cheese, Chilli Flakes (Optional)", "$12/$15/$20"],
                ["Fajita Chicken", "Fajita Chicken, Mushroom, Capsicum, Onion, Fajita Spice, Mozzarella Cheese, Topped with Avo Mayo", "$12/$15/$20"],
                ["Pesto Chicken", "Tomato Garlic Base, Chicken Spinach, Onion, Tomato, Fresh Basil, Mozzarella Cheese, Topped with Pesto Sauce", "$12/$15/$20"],
                ["Garlic Prawn", "Garlic Base, Prawns, Roasted Pepper, Spring Onion, Mozzarella Cheese, Herb", "$12/$15/$20"],
                ["Chilli Prawn", "Chilli Base, Prawn, Roasted Pepper, Jalapeño, Capsicum, Mozzarella Cheese", "$12/$15/$20"],
                ["Veg Supreme", "Tomato Base, Mozzarella Cheese, Pepperoni", "$12/$15/$20"],
                ["Paneer Tikka", "Tomato Base, Shredded Ham (Beef), Mozzarella cheese", "$12/$15/$20"],
                ["Chilli Paneer", "Chilli Base, Onion, Capsicum, Cottage Cheese (Paneer), Jalapeño, Mozzarella Cheese", "$12/$15/$20"],
                ["Iconic Margherita", "Tomato Sauce, Cherry Tomato, Fresh Basil, Mozzarella Cheese, Herbs", "$12/$15/$20"],
              ].map(([title, desc, price]) => (
                <div className="item" key={title}>
                  <div>
                    <strong>{title}</strong>
                    <small>{desc}</small>
                  </div>
                  <div>{price}</div>
                </div>
              ))}
            </div>
            <div className="menu-column" ref={addReveal}>
            <h3>Pide</h3>

{[
  ["Chicken & Mushroom", "BBQ sauce, Mushroom, Chicken, Mozzarella", "$12"],
  ["Sucuk Pide", "Tomato Sauce, Tomato, Olives, Sucuk, Mozzarella", "$12"],
  ["Mix Cheese Pide", "Blend of three cheese, Sesame", "$10"],
  ["Cheese Top Oregano", "Blend of three Cheese, Topped with Oregano", "$11"],
  ["Feta Pide", "Feta Cheese, Sesame Seeds", "$12"],
  ["Spinach Pide", "Spinach, Onion, Pomegranate Molasses, Sesame Seeds", "$12"],
  ["Spinach & Feta", "Spinach, Onion, Pomegranate Molasses, Feta Cheese, Sesame Seeds", "$12"],
  ["Feta & Parsley", "Parsley, Onion, Feta Cheese with the side of olives", "$12"],
].map(([title, desc, price]) => (
  <div className="item" key={title}>
    <div>
      <strong>{title}</strong>
      <small>{desc}</small>
    </div>
    <div>{price}</div>
    <br/>
      
  </div>
))}
<br/>
<h3>Sandwiches & Rolls</h3>

{[
  ["Fajita Sandwich", "Chicken, Mushroom, Capsicum, Onion, Avo Mayo, Five Spices", "$10"],
  ["Philadelphia Sandwich", "Lamb, Mushroom, Capsicum, Onion, Avo Mayo, Five Spices", "$11"],
  ["Hot Dog Sandwich", "Grilled Hot Dog, Lettuce, Pickles, Tomato Sauce", "$10"],
  ["Chicken Picaso Roll", "Chicken, Cheese, Lettuce, Tomato, Pickles, Tartare Mayo, BBQ Mayo, Rolled in Fresh Dough Bread", "$12"],
  ["Lamb Picaso Roll", "Lamb, Cheese, Lettuce, Tomato, Pickles, Peri Peri Mayo, Garlic Mayo, Rolled in Fresh Bread", "$12"],
  ["Sucuk Picaso Roll", "Sucuk, Cheese, Lettuce, Tomato, Pickles, Peri Peri Mayo, BBQ Sauce, Rolled in Fresh Bread", "$12"],
].map(([title, desc, price]) => (
  <div className="item" key={title}>
    <div>
      <strong>{title}</strong>
      <small>{desc}</small>
    </div>
    <div>{price}</div>
  </div>
))}
            </div>
            

          </div>
        </section>

        {/* MAP + CONTACT */}
        <section id="map-contact" style={{ paddingBottom: 40 }}>
          <div className="info-row">
            <div className="map-card fade-up" ref={addReveal} id="map">
              <h4 style={{ color: "var(--accent)", marginTop: 0 }}>
                Find Us Here
              </h4>
              <p className="small">440B High Street Penrith 2750 NSW</p>
              <img src={mapImg} alt="map" />
            </div>

            <div className="contact-card fade-up" ref={addReveal} id="contact">
              <h4 style={{ color: "var(--accent)", marginTop: 0 }}>
                Contact Us
              </h4>
              <p className="small">
                Email: doughncheese@outlook.com • Phone: 02 7209 7257
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent (dummy)");
                  e.target.reset();
                }}
              >
                <input required placeholder="Your name" />
                <input required placeholder="Email or phone" />
                <textarea rows="5" placeholder="Your message"></textarea>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <button className="btn" style={{ marginTop: 6 }}>
                    Send Message
                  </button>
                  <div className="small" style={{ marginLeft: 6, color: "#bbb" }}>
                    Or call us during opening hours
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            © <strong>Dough & Cheese</strong> — pizza & manoosh
          </div>
        </footer>
      </main>
    </>
  );
}
