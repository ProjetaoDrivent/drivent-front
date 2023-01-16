import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';

import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';
import { assignGithub, getGithubAccessToken, getGithubUserData } from '../../services/authApi';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  const githubToken = useLocalStorage('githubToken', null);
  
  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  function loginGithub() {
    githubToken[1](null);
    assignGithub();
  }
  
  function setGithubToken(token) {
    githubToken[1](token);
  }

  useEffect(async() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    console.log(codeParam, githubToken);

    if(codeParam && !githubToken[0]) {
      const token = await getGithubAccessToken(codeParam);
      setGithubToken(token.accessToken);
      console.log(token.accessToken, githubToken);

      const userData = await getGithubUserData(token.accessToken);
      console.log(userData);
    }
  }, []);

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
          <Input label="Senha" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
      </Row>
      <Row>
        <GithubButton onClick={loginGithub}>
          <GithubIcon />
          <span>Entrar com o Github</span>
        </GithubButton>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}

const GithubButton = styled(Button)`
  display: flex;
  width: 100%;
  background-color: #22272b !important;
  color: white !important;
  margin-top: 0 !important;
  span {
    margin-top: 0.3vh;
  }
`;

const GithubIcon = styled(AiFillGithub)`
  font-size: 1.8rem;
  margin-right: 0.8rem;
`;
