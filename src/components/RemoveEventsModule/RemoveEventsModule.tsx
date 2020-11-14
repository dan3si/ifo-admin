import React, { useContext, useEffect, useState } from 'react';
import styles from './RemoveEventsModule.module.scss';
import API_URL from 'global/API';
import { AuthContext } from 'global/AuthContext';
import { withRouter } from 'react-router-dom';

export const RemoveEvents = withRouter(({ history }) => {
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    fetch(`${API_URL}/events`)
      .then(res => res.json())
      .then(data => setEvents(data));
  }

  const { authToken, checkAuth } = useContext(AuthContext);

  useEffect(() => {
    getEvents();
    checkAuth(history);
  }, []);

  return (
    <section className={styles.removeEvents} id="removeevents">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>Remove events</h2>

        {events.map(
          ({ id, title, description }: { id: string, title: string, description: string }) => (
            <div className={styles.eventWrapper} key={id}>
              <button
                className={styles.deleteEventButton}
                onClick={async () => {
                  const response = await fetch(`${API_URL}/events/${id}`, {
                    method: 'DELETE',
                    body: authToken,
                  });
                  
                  const data = await response.text();

                  switch (data) {
                    case 'invalid':
                      checkAuth(history);
                      break;
                    
                    case 'success':
                      getEvents();
                      break;
                  }
                }}
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
});
