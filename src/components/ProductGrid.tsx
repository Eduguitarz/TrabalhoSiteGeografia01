import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';

const ProductGrid: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Tênis Esportivo',
      description: 'Confortável e perfeito para atividades físicas.',
      price: 199.99,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 2,
      name: 'Tênis Casual',
      description: 'Ótimo para o dia a dia, com estilo e conforto.',
      price: 179.99,
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 3,
      name: 'Tênis Running',
      description: 'Ideal para corridas e treinos intensos, com excelente absorção de impacto.',
      price: 229.99,
      image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 4,
      name: 'Camiseta Básica',
      description: 'Conforto e praticidade para o seu dia a dia.',
      price: 49.99,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 5,
      name: 'Camiseta Estampada',
      description: 'Estilo único para quem gosta de se destacar.',
      price: 59.99,
      image: 'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 6,
      name: 'Mochila Urbana',
      description: 'Praticidade e estilo para sua rotina.',
      price: 129.99,
      image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    }
  ]);

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nossos Produtos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;