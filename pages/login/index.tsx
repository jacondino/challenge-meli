import { FormLogin } from '../../src/components';
import Image from 'next/image';
import logo from '../../public/images/ml.png';
import styles from './style.module.scss';

export const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles['login__formBox']}>
        <div className={styles['login__left']}>
          <Image src={logo} width={190} height={30} />
        </div>
        <div className={styles['login__right']}>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
