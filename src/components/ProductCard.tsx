import React, { useState } from 'react';
import { Heart, MessageCircle, ShoppingCart } from 'lucide-react';
import { Product } from '../types/Product';
import CommentsModal from './CommentsModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleBuy = () => {
    alert(`Produto "${product.name}" adicionado ao carrinho!`);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-red-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <button
              onClick={toggleLike}
              className={`flex items-center space-x-1 transition-all duration-300 ${
                isLiked ? 'text-red-500' : 'text-gray-400'
              } hover:text-red-500`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span className="text-sm">{product.likes}</span>
            </button>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={handleBuy}
              className="animated-button flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Comprar</span>
            </button>
            <button
              onClick={() => setIsCommentsOpen(true)}
              className="animated-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <CommentsModal
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        productId={product.id}
        productName={product.name}
      />
    </>
  );
};

export default ProductCard;