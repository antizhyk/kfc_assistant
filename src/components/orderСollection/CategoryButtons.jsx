// src/components/CategoryButtons.js
import  { useEffect, useState } from 'react';
import './styles.css';

const CategoryButtons = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/main_cats.json')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const getColorClass = (category) => {
    switch (category.title) {
      case 'Новинки!':
        return 'bg-promo';
      case 'Твістери':
        return 'bg-twisters';
      case 'Бургери':
        return 'bg-burgers';
      case 'Бакети':
        return 'bg-buckets';
      case 'Соковита курка':
        return 'bg-juicy-chicken';
      case 'Снеки':
        return 'bg-snacks';
      case 'Соуси':
        return 'bg-sauces';
      case 'Холодні напої':
        return 'bg-cold-drinks';
      case 'Гарячі напої':
        return 'bg-hot-drinks';
      case 'Морозиво':
        return 'bg-ice-cream';
      case 'Десерти':
        return 'bg-desserts';
      case 'Мілкшейк':
        return 'bg-milkshake';
      default:
        return 'bg-default';
    }
  };

  return (
    <div className="category-buttons">
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-button ${getColorClass(category)}`}
          onClick={() => onCategorySelect(category.id)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
