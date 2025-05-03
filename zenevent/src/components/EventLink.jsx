import React from "react";
import { Link } from "react-router-dom";

const EventLink = () => {

    return (
            <section className="event-flower" id="events">
        <div className="event-links">
          <Link to="/trip-with-friends">
            <div className="event-box event-trip">
              <img src="./trip_friends.jpg" alt="Výlet" className="event-icon trip-shape" />
              <span>Výlet s přáteli</span>
            </div>
          </Link>

          <Link to="/class-reunion">
            <div className="event-box event-school">
              <img src="./reunion_class.jpg" alt="Výlet" className="event-icon school-shape" />
              <span>Třídní sraz</span>
            </div>
            </Link>

          <Link to="/family-event">
            <div className="event-box event-family">
              <img src="./event_family.jpg" alt="Výlet" className="event-icon family-shape" />
              <span>Rodinná oslava</span>
            </div>
            </Link>

          <Link to="/custom-event">
            <div className="event-box event-custom">
              <img src="./event_custom.jpg" alt="Výlet" className="event-icon custom-shape" />
              <span>Vlastní událost</span>
            </div>
            </Link>
        </div>
      </section>
    );

}

export default EventLink;


