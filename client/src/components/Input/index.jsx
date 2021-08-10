import React from 'react';
import styles from './authInput.module.scss';

const AuthInput = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.input_wrapper}>
          <span
            className="material-icons"
            style={{ paddingLeft: 14, color: '#bdbdbd' }}
          >
            email
          </span>
          <input type="text" name="name" placeholder="Email" />
        </div>
        <div className={styles.input_wrapper}>
          <span
            className="material-icons"
            style={{ paddingLeft: 14, color: '#bdbdbd' }}
          >
            lock
          </span>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit" className={styles.button}>
          <p>Start Coding Now</p>
        </button>
      </form>
    </div>
  );
};

export default AuthInput;
