
import React from 'react';
import { Product } from '@/types/database';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    addToCart(productId, 1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="hover:shadow-lg transition-shadow">
          <CardHeader className="p-0">
            <div className="aspect-square overflow-hidden rounded-t-lg">
              <img
                src={product.image_url || '/placeholder.svg'}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <CardTitle className="text-lg font-semibold line-clamp-1">
              {product.name}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 line-clamp-2 mt-1">
              {product.description}
            </CardDescription>
            <div className="flex items-center justify-between mt-3">
              <span className="text-2xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.category && (
                <Badge variant="secondary">{product.category}</Badge>
              )}
            </div>
            <div className="mt-2">
              <span className="text-sm text-gray-500">
                Stock: {product.stock_quantity || 0}
              </span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button 
              onClick={() => handleAddToCart(product.id)}
              className="w-full"
              disabled={!product.stock_quantity || product.stock_quantity <= 0}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
