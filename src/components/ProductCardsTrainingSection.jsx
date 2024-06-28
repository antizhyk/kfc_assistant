import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function ProductCardsTrainingSection() {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [data, setData] = useState([]);
  const [allOptions, setAllOptions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/product.json');
        const jsonData = await response.json();
        setData(jsonData);
        // Викликаємо getRandomProduct після встановлення data
        
      } catch (error) {
        console.error('Помилка завантаження даних:', error);
      }
    };

    fetchData();
  }, []); // Пустий масив залежностей гарантує, що useEffect викликається лише раз

  useEffect(() => {
    getRandomProduct(); 
  }, [data])

  useEffect(() => {
    if (data.length > 0) {
      const otherOptions = data
      .filter((item) => item.id !== currentProduct.id)
      .slice(0, 3)
      .map((item) => item.title);
  
    const allOptions = [...otherOptions, currentProduct.title];
    allOptions.sort(() => Math.random() - 0.5); // Перемішуємо варіанти відповідей
    setAllOptions(allOptions)
    }
    
  }, [currentProduct])


  const getRandomProduct = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentProduct(data[randomIndex]);
    setSelectedAnswer('');
    setShowResult(false);
  };


  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleCheckAnswer = () => {
    setIsCorrect(selectedAnswer === currentProduct.title);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    getRandomProduct(); // Тепер data доступна тут
  };


  if (!currentProduct) {
    return <div>Loading...</div>;
  }




  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Тренування по карткам з продуктами
      </Typography>

      <img
        src={`https://www.kfc-ukraine.com/admin/${currentProduct.imgs[0].medium}`}
        alt={currentProduct.title}
        style={{ maxWidth: '100%' }}
      />

      <FormControl component="fieldset" sx={{ml: 5}}>
        <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
          {allOptions.map((option) => (
            <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </FormControl>

      <Button variant="contained" onClick={handleCheckAnswer}>
        Перевірити
      </Button>

      {showResult && (
        <Typography variant="body1" mt={2}>
          {isCorrect ? 'Правильно!' : `Неправильно. Правильна відповідь: ${currentProduct.title}`}
        </Typography>
      )}

      {showResult && (
        <Button variant="outlined" onClick={handleNextQuestion} sx={{ mt: 2 }}>
          Наступне питання
        </Button>
      )}
    </Box>
  );
}

export default ProductCardsTrainingSection;
