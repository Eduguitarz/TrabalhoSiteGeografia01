import React, { useState } from 'react';
import { Calendar, Users, Award } from 'lucide-react';

const CompanyHistory: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="bg-white mx-4 lg:mx-auto max-w-6xl my-8 p-8 rounded-2xl shadow-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Como Tudo Começou</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4">
              <Calendar className="w-12 h-12 text-blue-500 mb-3" />
              <span className="text-2xl font-bold text-gray-800">2010</span>
              <span className="text-gray-600">Fundação</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Users className="w-12 h-12 text-green-500 mb-3" />
              <span className="text-2xl font-bold text-gray-800">500+</span>
              <span className="text-gray-600">Colaboradores</span>
            </div>
            <div className="flex flex-col items-center p-4">
              <Award className="w-12 h-12 text-purple-500 mb-3" />
              <span className="text-2xl font-bold text-gray-800">2000+</span>
              <span className="text-gray-600">Produtos</span>
            </div>
          </div>
        </div>
        
        <div className="text-gray-700 space-y-4 mb-8">
          <p className="text-lg leading-relaxed">
            Em 2010, em uma pequena garagem no interior de São Paulo, nasceu a ideia que viria a se tornar uma das maiores lojas virtuais do Brasil.
            Um grupo de amigos, todos apaixonados por moda e tecnologia, perceberam a dificuldade que as pessoas tinham em encontrar produtos de qualidade,
            com bom preço e entrega rápida.
          </p>
          <p className="text-lg leading-relaxed">
            O sucesso foi tanto que logo os pedidos começaram a crescer. A empresa expandiu sua linha para calçados, acessórios e roupas esportivas.
            Com o tempo, firmou parcerias com grandes marcas nacionais e internacionais, adotando uma política de sustentabilidade e inclusão.
          </p>
        </div>
        
        <div className="text-center">
          <button
            onClick={openModal}
            className="animated-button bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Nossa História Completa
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">História Completa da Empresa</h3>
            <div className="text-gray-700 space-y-4">
              <p>
                A Loja Virtual começou com uma missão simples: democratizar o acesso a produtos de qualidade no Brasil. Em seus primeiros anos,
                o foco era entender as reais necessidades dos clientes. Com base nesse feedback, a loja reformulou seu catálogo, aprimorou a logística
                e investiu fortemente em tecnologia.
              </p>
              <p>
                O time cresceu, assim como o sonho. Hoje são mais de 500 colaboradores diretos, mais de 2.000
                produtos disponíveis e uma média de 4 milhões de acessos mensais. Nossa plataforma de e-commerce foi reconhecida internacionalmente
                por sua inovação e experiência do usuário.
              </p>
              <p>
                O compromisso com o cliente vai além da venda. A Loja Virtual apoia projetos sociais, iniciativas educacionais e causas ambientais.
                Investimos em energia renovável, embalagens sustentáveis e programas de reciclagem.
              </p>
              <p>
                E o mais importante: nunca deixou de lado seus valores de origem — respeito, inovação e paixão por servir.
                Nossa missão é continuar crescendo de forma sustentável, sempre priorizando a satisfação do cliente e o impacto positivo na sociedade.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CompanyHistory;