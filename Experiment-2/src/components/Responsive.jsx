import { Container, Grid, Typography, Button } from "@mui/material";

import reactLogo from '../assets/react.svg'
/**
Responsive design using Material UI Grid system
Container → Centers content and adds margins
Grid container → Creates responsive layout
xs={12} → Full width on mobile
md={6} → Half width on desktop
No media queries written manually
Responsiveness handled by Material UI

Teaching Point:
“This is mobile-first design by default.” 

 */
function ResponsiveApp() {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Grid container spacing={4} alignItems="center">
        
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom>
            Welcome to Full Stack Lab
          </Typography>
          <Typography variant="body1" paragraph>
            Learn modern web development using React, Material UI,
            Spring Boot, and cloud deployment.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <img
            src={reactLogo}
            alt="Landing"
            style={{ width: "100%" }}
          />
        </Grid>

      </Grid>
    </Container>
  );
}

export default ResponsiveApp;
