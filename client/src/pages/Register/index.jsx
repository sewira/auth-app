import { LGdevchallenges } from '../../assets';
import { AuthInput } from '../../components';
import styles from './register.module.scss';

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={LGdevchallenges} alt="logo" className={styles.logo} />
        <h3 className={styles.title}>
          Join thousands of learners from around the world{' '}
        </h3>
        <p className={styles.sub_title}>
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>
        <AuthInput />

        <p className={styles.text_link}>
          or continue with these social profile
        </p>
      </div>
    </div>
  );
};

export default Register;
