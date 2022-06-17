import { FC, useState } from 'react';
import { Button, Input, Checkbox } from '../../../components';
import styles from './style.module.scss';

export const FormLogin: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleChangeRemember = () => {
    setRemember(!remember);
  };

  return (
    <div className={styles.formLogin}>
      <h2>Login</h2>
      <span>Bem-vindo! Faça o login para ver os produtos.</span>
      <span>Entre com seu e-mail para acessar o aplicativo</span>
      <form>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(value) => setEmail(value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(value) => setPassword(value)}
          value={password}
          required
        />
        <Checkbox
          label="Lembrar"
          value={remember}
          onChange={() => handleChangeRemember()}
        />
        <Button label="Entrar" onClick={() => {}} />
      </form>
      <div className={styles['formLogin__signup']}>
        <div>
          <span>Novo?</span>
          <Button
            label="Criar"
            size="small"
            color="transparent"
            onClick={() => {}}
          />
        </div>
        <div>
          <Button
            label={<i>Esqueceu sua senha?</i>}
            color="transparent"
            size="small"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
