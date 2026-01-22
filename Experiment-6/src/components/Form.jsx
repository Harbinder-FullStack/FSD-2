import { TextField, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    if(password.length < 6)
      temp.password = 'Min 6 characters';

    setErrors(temp);
    return Object.keys(temp).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(e.target.checkValidity()){
         alert("Form valid!");
    }
    
    if(validate())
      alert('Form submitted successfully');
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Login Form</Typography>

      <form onSubmit={handleSubmit}>

        <TextField type="email" value={email} required
            onChange={e => setEmail(e.target.value)}
            
            label="Email"
            fullWidth
            margin="normal"
            
            error={Boolean(errors.email)}
            helperText={errors.email}
        />

        <TextField type="password" value={password} required 
            onChange={e => setPassword(e.target.value)}

            label="Password"
            fullWidth
            margin="normal"

            inputProps={{ minLength: 5 }}
            error={Boolean(errors.password)}
            helperText={errors.password}
        />
          <Button variant="contained" type="submit" >Login</Button>
      </form>
    </Container>
  );
}
