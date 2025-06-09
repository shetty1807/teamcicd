
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import CartDrawer from './CartDrawer';
import { Package, ShoppingBag, User } from 'lucide-react';

const Navigation = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-900">ShopHub</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Products
            </Link>
            {user && (
              <Link 
                to="/orders" 
                className="text-gray-700 hover:text-primary transition-colors flex items-center gap-2"
              >
                <Package className="h-4 w-4" />
                Orders
              </Link>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <CartDrawer />
                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  {user.email}
                </div>
                <Button 
                  variant="outline" 
                  onClick={signOut}
                  size="sm"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="default" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
