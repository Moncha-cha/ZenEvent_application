import React from "react";

const MainContent = () => {
    return (
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

    )

}

export default MainContent;