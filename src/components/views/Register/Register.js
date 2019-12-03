import React from 'react';
import AcceptButton from '../../elements/accept/accept';
import CancelButton from '../../elements/cancel/cancel';
//import styles from './Register.module.scss';
import Box from '../../elements/box/box';
import Component from '../../elements/component/component';
import Wrapper from '../../elements/wrapper/wrapper';
import Title from '../../elements/title/title';
import Subtitle from '../../elements/subtitle/subtitle';

const Register = () => {
  return (
    <Component>
      <Box>
        <Title>Register</Title>
        <Subtitle>it is voluntary, free of charge and simple</Subtitle>
      </Box>
      <Wrapper>
        <AcceptButton />
        <CancelButton />
      </Wrapper>
    </Component>
  );
};

export default Register;
