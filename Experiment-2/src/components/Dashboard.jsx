import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardContent,
  Box
} from "@mui/material";
import { useState } from "react";
/**
 * Dashboard Layout (Navbar + Sidebar + Responsive Cards)
Objective
Top navigation bar
Collapsible sidebar
Responsive card grid

 Explanation
AppBar → Top navigation
Drawer → Sidebar
Grid → Responsive cards
Cards auto-adjust:
1 column on mobile
2 columns on tablet
3 columns on desktop

Design Pattern Used:
Component-based + Layout composition
 */
const drawerWidth = 200;

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      
      {/* Top Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth }
        }}
      >
        <Toolbar />
        <List>
          {["Home", "Users", "Settings"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Card {item}
                  </Typography>
                  <Typography>
                    Responsive dashboard card
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
}
