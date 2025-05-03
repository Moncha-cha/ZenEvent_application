import React, { useState } from 'react';
import '../styles/components/_pageTemplate.scss';


const PageTemplate = ({ imageUrl, eventTitle }) => {
 // console.log("PageTemplate: imageUrl -", imageUrl);

 const defaultImage = './template.jpg'; 
 const defaultTitle = 'Událost';

  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [participants, setParticipants] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleAddMessage = () => {
    setMessages([...messages, message]);
    setMessage('');
  };



  return (


    <div className="page-template-container">
      <div className="page-template">
        <header className="page-header">

          {/* Pouzivam prop pro ruzna pozadi stranky */}
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl || defaultImage})` }}  // || defaultImage
            ></div>
        </header>

        

        <h1 className='title-header'>{eventTitle || defaultTitle}</h1> {/* || Nastavuju pro vychozi */}

        <div className="content">
          <div className="form-section">
            {/* Formulář pro datum, čas a účastníky */}
            <div className="form-group">
              <label>Datum</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Čas</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Účastníci</label>
              <input
                type="text"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}
                placeholder="Seznam účastníků"
              />
            </div>
          </div>

          <div className="event-details">
            {/* Název a popis akce */}
            <div className="form-group">
              <label>Název akce</label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                placeholder="Zadejte název akce"
              />
            </div>

            <div className="form-group">
              <label>Popis akce</label>
              <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Zadejte popis akce"
              />
            </div>
          </div>

          <div className="chat-section">
            {/* Chat */}
            <div className="chat-box">
              {messages.map((msg, index) => (
                <div key={index} className="chat-message">
                  {msg}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Napište zprávu..."
              />
              <button onClick={handleAddMessage}>Odeslat</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PageTemplate;