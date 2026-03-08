import type { Product } from '../../app/models/product';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

type ProductCardProps = {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div style={{ display: 'flex', flex: 1 }}>
            <Card elevation={3} sx={{ width: 280, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <CardMedia component="img" height="140" image={product.pictureUrl || 'https://via.placeholder.com/250'} alt={product.name} />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="subtitle2" component="div" sx={{ textTransform: 'uppercase' }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ height: 40, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {product.description}
                    </Typography>
                    <Typography variant="h6" component="div" color="secondary">
                        ${product.price.toFixed(2)}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Button size="small" color="primary" variant="contained">
                        Add to Cart
                    </Button>
                    <Button size="small" color="primary">
                        View
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
