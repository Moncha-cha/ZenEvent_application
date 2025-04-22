import React from "react";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <>
      {/* Logo */}
      <div className="container-fluid header-logo-container">
        <img src="..public/Logo_zenEvent.png" className="logo-img" alt="ZenEvent Logo" />
      </div>

      <h1 className="headers-font">ZenEvent</h1>
      <small className="text-body-secondary headers-font">
        Místo, kde si v klidu vytvoříte vlastní událost
      </small>

      {/* Navigace */}
      <nav className="navbar navbar-expand-lg bg-light">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav custom-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#udalosti">
                Události
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#navod">Návod</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tipy">Tipy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ome">O mě</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>

      <section className="main-container">
        {/* Typy událostí */}
        <section className="event-flower" id="events">
          <div className="event-links">
            {[
              { img: "./trip_friends.jpg", alt: "Výlet", className: "trip-shape", text: "Výlet s přáteli" },
              { img: "./reunion_class.jpg", alt: "Výlet", className: "school-shape", text: "Třídní sraz" },
              { img: "./event_family.jpg", alt: "Výlet", className: "family-shape", text: "Rodinná oslava" },
              { img: "./event_custom.jpg", alt: "Výlet", className: "custom-shape", text: "Vlastní událost" }
            ].map((event, i) => (
              <a href="#" key={i}>
                <div className={`event-box event-${event.className.split('-')[0]}`}>
                  <img src={event.img} alt={event.alt} className={`event-icon ${event.className}`} />
                  <span>{event.text}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Sekce článků */}
        <section className="container">
          <main>
            <div className="main-container article-section">
              {[
                {
                  id: "udalosti",
                  title: "Události",
                  content:
                    "Vítej ve světě plánování bez stresu..."
                },
                {
                  id: "navod",
                  title: "Návod",
                  content:
                    "Stačí si vybrat typ události – výlet, oslava..."
                },
                {
                  id: "tipy",
                  title: "Tipy",
                  content:
                    "Nevíš, co, kde a proč? Tady je pár nápadů..."
                },
                {
                  id: "ome",
                  title: "O mě",
                  content:
                    "Zenevent jsem vytvořila proto, že mě nebavilo..."
                }
              ].map(({ id, title, content }) => (
                <div className="col-12" key={id}>
                  <div className="card shadow-sm border rounded p-4" id={id}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                  </div>
                </div>
              ))}

              <div className="contact-section" id="kontakt">
                <div className="contact-info">
                  <h2>Kontakt</h2>
                  <h3>Monika Lochmanová / ZenEvent creator</h3>
                  <a href="tel:+420776655169">+420 776 655 169</a><br />
                  <a href="mailto:monikalochmanova1@gmail.com">monikalochmanova1@gmail.com</a><br /><br />
                  <p>Nebo mi napište jednoduše, přes formulář!</p>
                </div>

                <div className="contact-form">
                  <form action="https://formspree.io/f/xjvjlqzj" method="POST">
                    <label htmlFor="name">Jméno:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Zpráva:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Odeslat</button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 ZenEvent, Monika Lochmanová. Všechna práva vyhrazena.</p>
            <p>Vytvořeno s láskou.</p>
            <p>Vytvořeno pomocí Reactu, Node.js, HTML, SCSS a JavaScriptu.</p>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;