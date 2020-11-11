import React, { useEffect, useState } from 'react';
import styles from './RemoveEventsModule.module.scss';
import API_URL from 'global/API';

export const RemoveEvents = () => {
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    fetch(`${API_URL}/events`)
      .then(res => res.json())
      .then(data => setEvents(data));
  }

  useEffect(getEvents, []);

  return (
    <section className={styles.removeEvents} id="removeevents">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>Remove events</h2>

        {events.map(
          ({ id, title, description }: { id: string, title: string, description: string }) => (
            <div className={styles.eventWrapper} key={id}>
              <button
                className={styles.deleteEvent}
                onClick={() => fetch(`${API_URL}/events/${id}`, { method: 'DELETE' }).then(() => getEvents())}
              />

              <div className={styles.imageWrapper}>
                <img
                  className={styles.eventImage}
                  src={`${API_URL}/events/images/${id}`}
                  alt={title}
                />
              </div>
              
              <div className={styles.textWrapper}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.eventDescription}>{description.slice(0, 200)}...</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
