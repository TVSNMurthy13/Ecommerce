import { Box, Grid } from '@mui/material';
import type { Product } from '../../app/models/product';
import ProductCard from './ProductCard';

type ProductListProps = {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Grid container spacing={3} justifyContent="center">
        {products.map((item) => (
          <Grid
            key={item.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ display: 'flex' }}
          >
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </Box>  
  )
}
