import React, { useState } from 'react';
import { Card, Input, Button } from '@mantine/core';
import { FaEnvelope } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const handleLogin = (e) => {
    setError('');
    setErrorPassword('');
    setErrorLogin('');
    e.preventDefault();
    // Here you can perform your authentication logic
    const emailRegex = /^\S+@\S+$/;
    if (!emailRegex.test(username)) {
      setError('Invalid email format');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorPassword(
        'Password must contain at least one uppercase letter, one special character, and have a minimum length of 6 characters'
      );
      return;
    }

    if (!username.trim() || !password.trim()) {
      if (!username.trim()) {
        setError('Username is required');
      }

      if (!password.trim()) {
        setErrorPassword('Password is required');
      }
      return;
    }

    if (username === 'admin@g.com' && password === 'Password1@') {
      // Authentication successful, you can redirect the user to another page
      navigate('/dashboard');
    } else {
      // Authentication failed, display error message
      setErrorLogin('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        height: '100vh',
        marginRight: '10px',
      }} className="bg-cover"
    >
      <Card
        shadow="sm"
        padding="xl"
        radius="md"
        withBorder
        style={{ marginRight: '50px', padding: '40px', borderRadius: '4px' }}
      >
        <h2 style={{ textAlign: 'center', fontWeight: '500', marginTop: '0px', marginBottom: '30px' }}>Login</h2>
        <form onSubmit={handleLogin} style={{ justifyContent: 'center' }}>
          <Input.Wrapper error={error ? error : null} style={{ marginBottom: '10px'}}>
            <Input
              icon={<FaEnvelope style={{ color: 'grey', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} size={16} />}
              className="icon-input"
              placeholder="Enter Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ fontFamily: 'Poppins' }}
            />
          </Input.Wrapper>
          <Input.Wrapper error={errorPassword ? errorPassword : null} style={{ marginBottom: '10px'}}>
            <Input
              icon={<FaEnvelope style={{ color: 'grey', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} size={16} />}
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '10px', fontFamily: 'Poppins' }}
            />
          </Input.Wrapper>
          <Button variant="filled" type="submit" style={{ textTransform: 'uppercase', background: '#00BBD6', borderRadius: '0px', marginTop: '15px', width: '100%' }}>Login</Button>
          <p className="errField">{errorLogin}</p>
          <p style={{ textAlign: 'center', color: '#00BBD6', fontSize: '11px', fontWeight: 'bold' }}>Forgot Password</p>
        </form>
      </Card>
    </div>
  );
}

export default Login;
