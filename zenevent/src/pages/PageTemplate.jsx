import React, { useState, useEffect } from 'react';
import '../styles/components/_pageTemplate.scss';
import ChatBox from '../components/ChatBox';
import FormGroup from '../components/FormGroup';

const PageTemplate = ({ imageUrl, eventTitle }) => {
  const defaultImage = './template.jpg';
  const defaultTitle = 'Událost';

  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [participants, setParticipants] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const [showEventName, setShowEventName] = useState(false); // Stav pro zobrazení názvu
  const [showEventDescription, setShowEventDescription] = useState(false); // Stav pro zobrazení popisu

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddMessage = () => {
    if (message.trim() !== '') {
      const currentDateTime = new Date().toLocaleString('cs-CZ', {
        dateStyle: 'short',
        timeStyle: 'short',
      });

      setMessages([...messages, { text: message, time: currentDateTime }]);
      setMessage('');
    }
  };

  const handleSaveEventName = () => {
    setShowEventName(true); // Zobrazí název pod <h1>
  };

  const handleSaveEventDescription = () => {
    setShowEventDescription(true); // Zobrazí popis pod názvem
  };

  return (
    <div className="page-template-container">
      <div className="page-template">
        <header className="page-header">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl || defaultImage})` }}
          ></div>
        </header>

        <h1 className="title-header">{eventTitle || defaultTitle}</h1>

        {/* Zobrazení názvu a popisu pod hlavním nadpisem */}
        {eventName && <h2 className="event-name">{eventName}</h2>}
        {eventDescription && <p className="event-description">{eventDescription}</p>}

        <div className="content">
          <div className="form-section">
            {/* Sekce pro úpravu názvu */}
            {showEventName ? (
              <button
                className="btn btn-secondary" // Sekundární styl tlačítka
                onClick={() => setShowEventName(false)}
              >
                Upravit název
              </button>
            ) : (
              <>
                <FormGroup
                  label="Název akce"
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Zadejte název akce"
                />
                <button
                  className="btn btn-primary" // Primární styl tlačítka
                  onClick={handleSaveEventName}
                >
                  Uložit název
                </button>
              </>
            )}

            {/* Sekce pro úpravu popisu */}
            {showEventDescription ? (
              <button
                className="btn btn-secondary" // Sekundární styl tlačítka
                onClick={() => setShowEventDescription(false)}
              >
                Upravit popis
              </button>
            ) : (
              <>
                <FormGroup
                  label="Popis akce"
                  type="textarea"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  placeholder="Zadejte popis akce"
                />
                <button
                  className="btn btn-primary" // Primární styl tlačítka
                  onClick={handleSaveEventDescription}
                >
                  Uložit popis
                </button>
              </>
            )}
          </div>

          <div className="event-details">
            <FormGroup
              label="Datum"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <FormGroup
              label="Čas"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <FormGroup
              label="Účastníci"
              type="text"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              placeholder="Seznam účastníků"
            />
          </div>

          <ChatBox
            messages={messages}
            message={message}
            setMessage={setMessage}
            handleAddMessage={handleAddMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;