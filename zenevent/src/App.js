import React from 'react';
import './styles/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';




function App() {


  return (
   <>
    <div className="container-fluid header-logo-container">
    <img src="./Logo_zenEvent.png" className="logo-img" alt="ZenEvent Logo"/>
    </div>

    <h1 className='headers-font mt-4'>ZenEvent</h1>
    <small className='text-body-secondary headers-font'>
      Místo, kde si v klidu vytvoříte vlastní událost
    </small>




    <nav className='navbar navbar-expand-lg bg-light'>

      <button 
      className='navbar-toggler ms-auto'
      type='button'
      data-bs-toggle='collapse'
      data-bs-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarNav'>

        <ul className='navbar-nav custom-nav'>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='#udalosti'>Události</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#navod'>Návod</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#tipy'>Tipy</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#ome'>O mě</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#kontakt'>Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>



  <main className="container">
    <section className="event-flower" id="events">
        <div className="event-links">
          <a href="#">
            <div className="event-box event-trip">
              <img src="./trip_friends.jpg" alt="Výlet" className="event-icon trip-shape" />
              <span>Výlet s přáteli</span>
            </div>
          </a>

          <a href="#">
            <div className="event-box event-school">
              <img src="./reunion_class.jpg" alt="Výlet" className="event-icon school-shape" />
              <span>Třídní sraz</span>
            </div>
          </a>

          <a href="#">
            <div className="event-box event-family">
              <img src="./event_family.jpg" alt="Výlet" className="event-icon family-shape" />
              <span>Rodinná oslava</span>
            </div>
          </a>

          <a href="#">
            <div className="event-box event-custom">
              <img src="./event_custom.jpg" alt="Výlet" className="event-icon custom-shape" />
              <span>Vlastní událost</span>
            </div>
          </a>
        </div>
      </section>



      <section className="container my-5">
        <div className="row gy-4">
          {/* Události */}
          <div className="col-12">
            <div className="card shadow-sm border rounded p-4" id="udalosti">
              <h2>Události</h2>
              <p>Vítej ve světě plánování bez stresu. <br /><br />
                Události nejsou jen o datu v kalendáři – jsou o vzpomínkách, o smíchu, o lidech, kteří stojí za to. <br />
                Tady najdeš vše potřebné, ať už organizuješ malou rodinnou oslavu, třídní sraz po letech nebo výlet s partou přátel. 
                Zenevent ti nabídne jednoduchý způsob, jak si každou akci přehledně připravit – od seznamu účastníků přes místo konání až po prostor pro společné zprávy.
                <br /><br /> Nepotřebuješ žádné tabulky ani složité aplikace – všechno máš tady, na jednom místě.</p>
            </div>
          </div>

          {/* Návod */}
          <div className="col-12">
            <div className="card shadow-sm border rounded p-4" id="navod">
              <h2>Návod</h2>
              <p>Stačí si vybrat typ události – výlet, oslava, sraz nebo vlastní formát – a pak jen: <br /><br />
                – přidat přátele,<br />
                – doplnit místo, datum a čas,<br />
                – a napsat, co je potřeba.<br /><br />

                Rozešleš jen odkaz, a máte všechny informace pohromadě a s ostatními můžete rovnou komunikovat.
                Nemusíš se nic učit ani instalovat – všechno je intuitivní a připravené během pár minut.</p>
            </div>
          </div>

          {/* Tipy */}
          <div className="col-12">
            <div className="card shadow-sm border rounded p-4" id="tipy">
              <h2>Tipy</h2>
              <p>Nevíš, co, kde a proč? Tady je pár nápadů na rozjezd: <br /><br />

                📍 Místa: les, kavárna, hřiště, zahrada, obývák <br />
                🎉 Příležitosti: narozeniny, konec školy, jaro, prostě jen tak. <br />
                🎨 Nálada: piknik, film pod širákem, retro party, den offline. <br />
                🤝 Navíc: překvap oslavou, uspořádej výměnný bazar nebo sousedský večírek. <br /><br />
                
                Stačí vybrat událost, přidat kamarády – a zábava začíná.</p>
            </div>
          </div>

          {/* O mě */}
          <div className="col-12">
            <div className="card shadow-sm border rounded p-4" id="ome">
              <h2>O mě</h2>
              <p>Zenevent jsem vytvořila proto, že mě nebavilo řešit věci na sto místech. Když chceš udělat událost, měla by být pohodová, přehledná a bez chaosu.
                Tady máš všechno na jednom místě – pozvánku, info, účastníky i zprávy mezi vámi.
                Nemusíš být organizátor roku. Stačí pár kliknutí – a Zenevent tě v tom podrží.
                Jsem máma, ajťačka v tréninku a člověk, co má rád svobodu. A tu chci dopřát i tobě. 👋</p>
            </div>
          </div>
        </div>
      </section>


      <ContactForm />


  </main>

      <Footer />
  
   </>
  );
}

export default App;