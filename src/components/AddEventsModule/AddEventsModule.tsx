import React, { useState } from 'react';
import styles from './AddEventsModule.module.scss';
import API_URL from 'global/API';
import cn from 'classnames';

export const AddEvents = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');
  const [error, setError] = useState(false);

  return (
    <section className={styles.addEvents} id="addevents">
      <div className={styles.darker}/>
      <div className={styles.container}>
        <h2 className={styles.heading}>Add event</h2>
        <form
          action={`${API_URL}/events`}
          method="POST"
          className={styles.form}
          id="addeventForm"
          encType="multipart/form-data"
        >
          <input
            className={cn(styles.inputString, {
              [styles.inputWithError]: !title && error,
            })}
            name="title"
            type="text"
            autoComplete="off"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setError(false);
              setTitle(e.target.value);
            }}
          />

          <textarea
            className={cn(styles.inputTextarea, {
              [styles.inputWithError]: !description && error,
            })}
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setError(false);
              setDescription(e.target.value);
            }}
          />

          <input
            className={cn(styles.inputFile, {
              [styles.inputWithError]: !file && error,
            })}
            type="file"
            name="image"
            onChange={(e) => {
              setError(false);
              setFile(e.target.value);
            }}
          />
          
          {error && <p className={styles.errorMessage}>Error! All fields are required</p>}
          
          <button
            className={styles.submit}
            type="submit"
            onClick={(e) => {
              e.preventDefault();

              if (!title || !description || !file) {
                setError(true);
                return;
              }

              const form: any = document.querySelector('#addeventForm');

              fetch(`${API_URL}/events`, {
                method: 'POST',
                body: JSON.stringify({ title, description }),
              });

              setTimeout(() => {
                form.submit();  
              }, 100);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
