import React, { useContext } from 'react';
import styles from './SignInModule.module.scss';
import { AuthContext } from 'global/AuthContext';
import { withRouter } from 'react-router-dom';

export const SignIn = withRouter(({ history }: any) => {
  const { setAuth } = useContext(AuthContext)

  return (
    <div className={styles.signIn} id="signin">
      <div className={styles.darker} />
      <form
        className={styles.form}
        onSubmit={(e: any) => {
          e.preventDefault();
          setAuth(e.target.elements[0].value)
          .then((result: 'invalid' | 'success') => {
            switch(result) {
              case 'invalid':
                alert('Error! Password is invalid');
                break;

              case 'success':
                history.push('addevents');
                break;
            }
          });
        }}
      >
        <h2 className={styles.heading}>Enter password</h2>

        <input
          className={styles.passwordInput}
          type="text"
          name="password"
        />

        <button
          className={styles.submit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
});
