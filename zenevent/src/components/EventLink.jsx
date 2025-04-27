import React from "react";

const EventLink = () => {

    return (
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
    );

}

export default EventLink;


