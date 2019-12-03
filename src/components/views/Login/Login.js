import React from 'react';
import AcceptButton from '../../elements/accept/accept';
import CancelButton from '../../elements/cancel/cancel';
import styles from './Login.module.scss';
import Box from '../../elements/box/box';
import Component from '../../elements/component/component';
import Wrapper from '../../elements/wrapper/wrapper';
import Title from '../../elements/title/title';
import Subtitle from '../../elements/subtitle/subtitle';
import TextField from '@material-ui/core/TextField';

const Login = () => {
  return (
    <Component>
      <Box>
        <Title>Login</Title>
        <Subtitle>enter your nickname and password</Subtitle>
        <div className={styles.inputWrapper}>
          <TextField className={styles.input} variant="filled" id="standard-secondary" label="Login" color="secondary" />
          <TextField className={styles.input} variant="filled" id="filled-password-input" label="Pasword" color="secondary" type="password" />
        </div>
      </Box>
      <Wrapper>
        <AcceptButton />
        <CancelButton />
      </Wrapper>
    </Component>
  );
};

export default Login;
