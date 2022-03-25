import React, { useState } from 'react'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux';

import './Home.scss';

export default function Home() {
  const { email, password } = useSelector((state) => state.loginData);
  const [data, setData] = useState({
    email: '',
    password: '',
    emailStyle: false,
    passwordStyle: false,
    invalid: false,
    erro: false,
  });

  const handleEmail = ({ target: { value } }) => setData({ ...data, email: value });
  const handlePassword = ({ target : { value }}) => setData({ ...data, password: value });

  const requestLogin = () => {
    const validation = {
      emailStyle: !!data.email,
      passwordStyle: !!data.password,
      invalid: (data.email !== email) && (data.password !== password),
      erro: !data.email || !data.password,
    };
    setData({...data, ...validation});
    // Se nenhum campo estiver preenchido os campos ficam vermelhos, e aparece a mensagem de erro
    // if (!data.email && !data.password) {
    //   return setData({...data, emailStyle: true, passwordStyle: true, invalid: false, erro: true});
    // }
    // if (!data.email && data.password) { 
    //   return setData({...data, emailStyle: true, passwordStyle: false, invalid: false, erro: true});
    // }
    // if (!data.password && data.email) {
    //   return setData({...data, passwordStyle: true, emailStyle: false, invalid: false, erro: true});
    // }
    // if (data.email === email && data.password === password) {
    //   setData({...data, emailStyle: false, passwordStyle: false, invalid: false, erro: false});
    //   return alert("Bem vindo de volta!");
    // }
    // setData({...data, emailStyle: false, passwordStyle: false, invalid: true, erro: false});
  }

  return (
    <main className="app-container">
      <div className="espaco"></div>
      <section>
        <h1>Falta pouco para matar sua fome!</h1>
        <p>Como deseja continuar?</p>
        <div className="inputs">
          <input
            onChange={handleEmail}
            value={data.email}
            type="text"
            placeholder={`${!data.emailStyle ? 'Email' : 'Informe seu email'}`}
            className={`${data.emailStyle && 'empty'}`}
          />
          <input
            onChange={handlePassword}
            value={data.password}
            type="password"
            placeholder={`${!data.passwordStyle ? 'Senha' : 'Informe sua senha'}`}
            className={`${data.passwordStyle && 'empty'}`}
          />
          { data.invalid && <p className="vermelho">Email ou senha inválidos!</p>}
          { data.erro && <p className="vermelho">Preencha os campos em vermelho!</p>}
          <button onClick={requestLogin} className="login" type="submit">Entrar</button>
          <div className="logins">
            <button className="botao google" type="button">
              <FcGoogle className="icon" />
              Continuar com Google
            </button>
            <button className="botao face" type="button">
              <BsFacebook className="icon" />
              Continuar com Facebook
            </button>
          </div>
          <p>Não tem uma conta? <a className="cadastre-se" href="app-container">Cadastre-se</a></p>
        </div>
      </section>
    </main>
  )
}
