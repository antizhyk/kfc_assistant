import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChequePresentation from './ChequePresentation'; 

const OrderMemorizationTrainingSection = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Тренування на запам`ятовування замовленнь
      </Typography>
      <ChequePresentation/>  
      {/* Тут буде контент розділу */}
    </Box>
  );
};

export default OrderMemorizationTrainingSection;
