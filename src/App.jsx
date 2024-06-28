import { BrowserRouter } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppRoutes from './routes';
import MainMenu from './components/MainMenu.jsx';

function App() {

  return (
    <BrowserRouter>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MainMenu /> 
        <AppRoutes />
      </Box>
    </BrowserRouter>
  );
}

export default App;
