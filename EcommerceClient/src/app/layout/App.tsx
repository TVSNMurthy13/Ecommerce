import { useEffect, useState, type JSX } from 'react';
import type { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import NavBar from './NavBar';
import { CssOutlined } from '@mui/icons-material';


function App(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const[darkMode, setDarkMode] = useState(false); 
  const palletteMode = darkMode ? 'dark' : 'light';


  const theme = createTheme({
    palette: {
      mode: palletteMode,
      background: {
        default: palletteMode === 'light' ? '#eaeaea' : '#121212'
      } 
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(darkMode => !darkMode);
  }

  useEffect(() => {
    // use the Vite dev server proxy; avoids CORS issues and certificate warnings
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('fetch error', err));
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <CssOutlined />
      <NavBar toggleDarkMode={toggleDarkMode} darkmode={darkMode} />
      
      <Box sx={{ minHeight: '100vh', 
        background: palletteMode ? 
          'radial-gradient(circle at 0% 0%, #1e3a8a, #111827)' :
          'radial-gradient(circle at 0% 0%, #baecf9, #f0f9ff)'
        , 
        py: 6 }}>
        <Container maxWidth="xl">
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

