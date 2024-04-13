import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const App = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography>TODO-APP</Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default App;
