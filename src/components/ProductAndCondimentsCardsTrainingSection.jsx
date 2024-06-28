import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';

const condimentsList = [
  "Серветки паперові",
  "Цукор",
  "Веделка",
  "Чайна ложка",
  "Пластиковий ніж",
  "Мішалка",
  "Зубочистка",
  "Трубочка",
  "Серветка волога"
];

function ProductAndCondimentsCardsTrainingSection() {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [selectedCondiments, setSelectedCondiments] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [data, setData] = useState([]);
  const [allOptions, setAllOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/product.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Помилка завантаження даних:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    getRandomProduct();
  }, [data]);

  useEffect(() => {
    if (data.length > 0 && currentProduct) {
      const otherOptions = data
        .filter((item) => item.id !== currentProduct.id)
        .slice(0, 3)
        .map((item) => item.title);
  
      const allOptions = [...otherOptions, currentProduct.title];
      allOptions.sort(() => Math.random() - 0.5); // Перемешиваем варианты ответов
      setAllOptions(allOptions);
    }
  }, [currentProduct]);

  const getRandomProduct = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentProduct(data[randomIndex]);
    setSelectedAnswer('');
    setSelectedCondiments([]);
    setShowResult(false);
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleCondimentChange = (event) => {
    const value = event.target.value;
    setSelectedCondiments((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleCheckAnswer = () => {
    const isProductCorrect = selectedAnswer === currentProduct.title;
    const isCondimentsCorrect = checkCondiments(currentProduct.title, selectedCondiments);
    setIsCorrect(isProductCorrect && isCondimentsCorrect);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    getRandomProduct();
  };

  const checkCondiments = (productTitle, selectedCondiments) => {
    const correctCondiments = getCorrectCondiments(productTitle);
    return (
      selectedCondiments.length === correctCondiments.length &&
      selectedCondiments.every((condiment) => correctCondiments.includes(condiment))
    );
  };

  const getCorrectCondiments = (productTitle) => {
  const condiments = [];

  const isDrink = productTitle.includes("МІЛКШЕЙК") || productTitle.toLowerCase().includes("коктейль") || productTitle.toLowerCase().includes("напій");
  const isChickenDish = productTitle.toLowerCase().includes("кур") || productTitle.toLowerCase().includes("бакет");
  const isDessert = productTitle.toLowerCase().includes("морозиво") || productTitle.toLowerCase().includes("чізкейк");
  const isHotDrink = productTitle.toLowerCase().includes("гарячий напій") || productTitle.toLowerCase().includes("чай") || productTitle.toLowerCase().includes("кава");

  if (!isDrink) {
    condiments.push("Серветки паперові");
  }

  if (isHotDrink && !productTitle.toLowerCase().includes("сироп")) {
    condiments.push("Цукор");
  }

  if (productTitle.toLowerCase().includes("салат") || productTitle.toLowerCase().includes("чізкейк") || productTitle.toLowerCase().includes("байтс") || productTitle.toLowerCase().includes("філе")) {
    condiments.push("Веделка");
  }

  if (isDessert) {
    condiments.push("Чайна ложка");
  }

  if (productTitle.toLowerCase().includes("ланчбакет з філе")) {
    condiments.push("Пластиковий ніж");
  }

  if (isHotDrink) {
    condiments.push("Мішалка");
  }

  if (productTitle.toLowerCase().includes("холодний напій") || isDrink) {
    condiments.push("Трубочка");
  }

  if (isChickenDish && !productTitle.toLowerCase().includes("байтс")) {
    condiments.push("Серветка волога");
  }

  return condiments;
};


  if (!currentProduct) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Тренування по карткам з продуктами та кондиментами
      </Typography>

      <img
        src={`https://www.kfc-ukraine.com/admin/${currentProduct.imgs[0].medium}`}
        alt={currentProduct.title}
        style={{ maxWidth: '100%' }}
      />

      <FormControl component="fieldset" sx={{ ml: 5 }}>
        <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
          {allOptions.map((option) => (
            <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </FormControl>

      <Box sx={{ mt: 2 }}>
        {condimentsList.map((condiment) => (
          <FormControlLabel
            key={condiment}
            control={
              <Checkbox
                checked={selectedCondiments.includes(condiment)}
                onChange={handleCondimentChange}
                value={condiment}
              />
            }
            label={condiment}
          />
        ))}
      </Box>

      <Button variant="contained" onClick={handleCheckAnswer} sx={{ mt: 2 }}>
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

export default ProductAndCondimentsCardsTrainingSection;
