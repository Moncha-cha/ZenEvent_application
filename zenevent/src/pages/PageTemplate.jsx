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
  const [showEventName, setShowEventName] = useState(false);
  const [showEventDescription, setShowEventDescription] = useState(false);
  const [showDateTime, setShowDateTime] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // API pro nacteni ucastniku
  const [participantsList, setParticipantsList] = useState([]);
  const [loadingParticipants, setLoadingParticipants] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setParticipantsList(data); // ulozit seznam
        setLoadingParticipants(false); // nastavit loading na false
      })
      .catch((error) => {
        console.error("Chyba pri nacitani ucastniku:", error);
        setLoadingParticipants(false); // nastavit loading na false
      });
  }, []);

  // Načítání dat z localStorage při načtení stránky
  useEffect(() => {
    window.scrollTo(0, 0);

    const storedMessages = localStorage.getItem('chatMessages');
    const storedName = localStorage.getItem('eventName');
    const storedDescription = localStorage.getItem('eventDescription');
    const storedDate = localStorage.getItem('eventDate');
    const storedTime = localStorage.getItem('eventTime');

    if (storedName) setEventName(storedName);
    if (storedDescription) setEventDescription(storedDescription);
    if (storedDate) setDate(storedDate);
    if (storedTime) setTime(storedTime);
    if (storedMessages) setMessages(JSON.parse(storedMessages));

    setIsInitialized(true);
  }, []);

  // Ukládání dat do localStorage při každé změně
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
      localStorage.setItem('eventName', eventName);
      localStorage.setItem('eventDescription', eventDescription);
      localStorage.setItem('eventDate', date);
      localStorage.setItem('eventTime', time);
    }
  }, [messages, eventName, eventDescription, date, time, isInitialized]);

  // Přidání nové zprávy
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

  // Uložení a zobrazení dat
  const handleSaveEventName = () => setShowEventName(true);
  const handleSaveEventDescription = () => setShowEventDescription(true);
  const handleSaveDateTime = () => setShowDateTime(true);

  // Funkce pro změnu účastníků
  const handleParticipantChange = (event) => {
    const { value, checked } = event.target;
    setParticipants((prev) =>
      checked ? [...prev, value] : prev.filter((participant) => participant !== value)
    );
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

        {/* Zobrazení data a času */}
        {showDateTime && (
          <div className="event-info">
            <p><strong>Datum:</strong> {date}</p>
            <p><strong>Čas:</strong> {time}</p>
          </div>
        )}

          

        <div className="content">

          {/* Chatbox komponenta */}
          <ChatBox
              messages={messages}
              message={message}
              setMessage={setMessage}
              handleAddMessage={handleAddMessage}
            />
          <div className="form-section">
            {/* Sekce pro úpravu názvu */}
            {showEventName ? (
              <button
                className="btn btn-secondary"
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
                  className="btn btn-primary"
                  onClick={handleSaveEventName}
                >
                  Uložit název
                </button>
              </>
            )}

            {/* Sekce pro úpravu popisu */}
            {showEventDescription ? (
              <button
                className="btn btn-secondary"
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
                  className="btn btn-primary"
                  onClick={handleSaveEventDescription}
                >
                  Uložit popis
                </button>
              </>
            )}
          </div>

          <div className="event-details">
            {/* Sekce pro úpravu data a času */}
            {showDateTime ? (
              <>
                <p><strong>Datum:</strong> {date}</p>
                <p><strong>Čas:</strong> {time}</p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowDateTime(false)}
                >
                  Upravit datum a čas
                </button>
              </>
            ) : (
              <>
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
                <button
                  className="btn btn-primary"
                  onClick={handleSaveDateTime}
                >
                  Uložit datum a čas
                </button>
              </>
            )}

          

            {/* Sekce pro úpravu účastníků */}
            <div className="participants">
              <label>Účastníci</label>
              <div className="checkbox-group">
                {/* Seznam účastníků s checkboxy */}
                {participantsList.map((participant) => (
                  <div key={participant.id}>
                    <input
                      type="checkbox"
                      value={participant.name}
                      checked={participants.includes(participant.name)}
                      onChange={handleParticipantChange}
                    />
                    <label>{participant.name}</label>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
      </div>
      );
};

      export default PageTemplate;
