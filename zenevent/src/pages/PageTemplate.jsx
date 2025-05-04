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

        <div className="content">
          <div className="form-section">
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

          <div className="event-details">
            <FormGroup
              label="Název akce"
              type="text"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Zadejte název akce"
            />
            <FormGroup
              label="Popis akce"
              type="textarea"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Zadejte popis akce"
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