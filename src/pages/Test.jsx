import CategoryButtons from "../components/orderСollection/CategoryButtons";
import { useEffect, useState } from 'react';
import ProductList from "../components/orderСollection/productList/ProductList";
import Container from '@mui/material/Container';
import AddedProducts from "../components/orderСollection/addedProducts/AddedProducts";
import Grid from '@mui/material/Grid';
import MidProductsButtons from "../components/orderСollection/midProductsButtons/MidProductsButtons";

const Test = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('/product.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      const filtered = products.filter(product => product.cats.includes(selectedCategory));
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <Container maxWidth="lg">
      <h1>KFC Order System</h1>
      <CategoryButtons onCategorySelect={setSelectedCategory} />
      <Grid container spacing={2} sx={{mt: 2}}>
        <Grid item xs={5}>
            <ProductList  products={filteredProducts} />
        </Grid>
        <Grid item xs={3}>
            <MidProductsButtons />
        </Grid>
        <Grid item xs={4}>
            <AddedProducts />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;