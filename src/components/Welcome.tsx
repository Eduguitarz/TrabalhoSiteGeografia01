import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="text-center py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
          Seja bem-vindo à nossa Loja Virtual!
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Aqui você encontra conforto, estilo e qualidade em um só lugar. 
          Descubra nossa seleção cuidadosa de produtos premium.
        </p>
      </div>
    </div>
  );
};

export default Welcome;