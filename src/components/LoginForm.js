import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in:', { username, password });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: '10px' }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: '10px' }}
      />
      <Button variant="contained" color="primary" type="submit" style={{ marginTop: '10px' }}>
        Login
      </Button>
    </form>
  );
}

export default LoginForm;