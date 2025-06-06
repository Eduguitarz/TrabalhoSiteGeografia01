import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';

const ProductGrid: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: 'Tênis Esportivo',
      description: 'Tênis de alta performance com tecnologia de absorção de impacto, solado antiderrapante e design ergonômico. Ideal para corridas, caminhadas e atividades físicas intensas. Material respirável que mantém os pés secos e confortáveis durante todo o treino.',
      price: 199.99,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 2,
      name: 'Tênis Casual',
      description: 'Tênis versátil e elegante, perfeito para o uso diário. Combina estilo urbano com conforto excepcional. Confeccionado com materiais premium, palmilha acolchoada e design atemporal que complementa qualquer look casual ou social.',
      price: 179.99,
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 3,
      name: 'Tênis Running',
      description: 'Desenvolvido especificamente para corredores exigentes. Tecnologia avançada de amortecimento, estrutura leve e respirável, com sistema de estabilização para pisada. Oferece máximo desempenho em corridas de longa distância e treinos intensivos.',
      price: 229.99,
      image: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 4,
      name: 'Camiseta Básica',
      description: 'Camiseta essencial em algodão 100% premium, com modelagem clássica e caimento perfeito. Tecido macio, durável e que não deforma após lavagens. Disponível em cores neutras versáteis, ideal para compor looks casuais ou como base para outras peças.',
      price: 49.99,
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 5,
      name: 'Camiseta Estampada',
      description: 'Camiseta com estampa exclusiva e design autoral, confeccionada em algodão premium com tinta ecológica de alta qualidade. Estampa resistente que não desbota, modelagem moderna e confortável. Perfeita para expressar personalidade e estilo único.',
      price: 59.99,
      image: 'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: Math.floor(Math.random() * 500) + 50
    },
    {
      id: 6,
      name: 'Mochila Urbana',
      description: 'Mochila multifuncional com design contemporâneo e compartimentos organizadores. Fabricada em material resistente à água, com alças acolchoadas ergonômicas e compartimento acolchoado para laptop. Ideal para trabalho, estudos, viagens e uso diário na cidade.',
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