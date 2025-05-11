import React from "react";

const ContactForm = () => {
    return (
        <section className="contact-section" id="kontakt">
        <div className="contact-info">
          <h2>Kontakt</h2>
          <h3>Monika Lochmanová <br /> ZenEvent creator</h3>
          <a href="tel:+420776655169">+420 776 655 169</a><br />
          <a href="mailto:monikalochmanova1@gmail.com">monikalochmanova1@gmail.com</a><br /><br />
          <p>Nebo mi napište jednoduše, přes formulář!</p>
        </div>

        <div className="contact-form">
          <form action="https://formspree.io/f/manonlrw" method="POST">
            <label htmlFor="name">Jméno:</label>
            <input type="text" id="name" name="name" required />


            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            <div className="invalid-feedback">Zadejte platný e-mail.</div>

            <label htmlFor="message">Zpráva:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <div className="invalid-feedback">Nelze poslat prázdný formulář.</div>

            <button type="submit">Odeslat</button>
          </form>
        </div>
      </section>
    )
}
export default ContactForm;