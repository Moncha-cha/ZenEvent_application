ZenEvent – Webová aplikace pro správu společných událostí
Popis projektu:
ZenEvent je jednoduchá webová aplikace, která uživatelům umožňuje vytvářet a spravovat různé typy událostí, jako jsou rodinné oslavy, třídní srazy nebo výlety s přáteli. Projekt je postaven na Reactu a SCSS.

Co jsem zatím v projektu zvládla a co bude dál přibývat:
Nastavení projektu:

Inicializovala jsem projekt pomocí Create React App (CRA).
Vytvořila jsem přehlednou strukturu složek:
components – pro jednotlivé React komponenty.
pages – pro stránky aplikace.
scripts – pro pomocné funkce a logiku.
styles – pro SCSS soubory.
Styling pomocí SCSS:

Použila jsem SCSS pro lepší organizaci stylů:
Proměnné – Definovala jsem barvy a fonty v variables.scss.
Mixiny – Vytvořila jsem znovupoužitelné mixiny v mixins.scss.
Reset stylů – Přidala jsem resetovací styly pro konzistenci napříč prohlížeči.
Komponentové styly – Každá komponenta má svůj vlastní SCSS soubor (např. navbar.scss, footer.scss).
Frontend vývoj:

Vytvořila jsem základní strukturu aplikace:
Navigace – Jednoduché menu s odkazy na sekce jako "Události", "Návod", "Kontakt".
Sekce událostí – Přidala jsem boxy pro různé typy událostí (např. "Rodinná oslava").
Kontaktní formulář – Přidala jsem formulář s validací povinných polí.
Práce s Reactem:

Vytvořila jsem hlavní komponentu App.jsx a připojila ji k index.js.
Použila jsem komponentový přístup, aby byl kód přehledný a snadno rozšiřitelný.
Spuštění projektu:

Úspěšně jsem spustila aplikaci v režimu vývoje (npm start) a ověřila, že vše funguje.

Nasazení Bootstrap, stylování, proměnné a hlavička

Technologie a nástroje:
Frontend: React, HTML5, SCSS
Nástroje: npm, Visual Studio Code
Další: Git pro verzování

Co bych chtěla dále rozvíjet:
Přidat dynamický obsah pomocí React state managementu.
Připojit aplikaci k lokální i veřejné API pro ukládání a načítání dat.
Možná - optimalizovat aplikaci pro produkční prostředí.