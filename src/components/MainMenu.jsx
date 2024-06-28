import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Імпортуємо Grid

const MainMenu = () => {
  const location = useLocation();

  return (
    location.pathname === '/' && (
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            <Link to="/product-cards">Тренування по карткам з продуктами</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            <Link to="/product-and-condiments-cards">
              Тренування по карткам з продуктами (+кондіменти)
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            <Link to="/order-memorization">Тренування на запам'ятовування замовленнь</Link>
          </Typography>
        </Grid>
      </Grid>
    )
  );
};

export default MainMenu;
