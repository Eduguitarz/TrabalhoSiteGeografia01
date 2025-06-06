import React from 'react';
import { Users, Award, Briefcase, GraduationCap } from 'lucide-react';

const Founders: React.FC = () => {
  const founders = [
    {
      name: 'Eduardo Amaral Ferreira',
      role: 'CEO & Fundador',
      description: 'Visionário por trás da ideia inicial, Eduardo lidera a empresa com foco em inovação e crescimento sustentável.',
      icon: <Briefcase className="w-8 h-8 text-blue-500" />
    },
    {
      name: 'Kaio da Silva',
      role: 'CTO & Co-fundador',
      description: 'Especialista em tecnologia, Kaio é responsável por toda a infraestrutura e desenvolvimento da plataforma.',
      icon: <GraduationCap className="w-8 h-8 text-green-500" />
    },
    {
      name: 'Vitor Gabriel',
      role: 'CMO & Co-fundador',
      description: 'Estrategista de marketing, Vitor cuida da marca e relacionamento com clientes em todo o país.',
      icon: <Award className="w-8 h-8 text-purple-500" />
    },
    {
      name: 'Guilherme Emanoel',
      role: 'COO & Co-fundador',
      description: 'Responsável pelas operações, Guilherme garante que todos os processos funcionem com máxima eficiência.',
      icon: <Users className="w-8 h-8 text-orange-500" />
    },
    {
      name: 'João Miguel',
      role: 'CFO & Co-fundador',
      description: 'Especialista financeiro, João Miguel administra as finanças e planeja o crescimento econômico da empresa.',
      icon: <Briefcase className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Fundadores</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça as mentes brilhantes que transformaram um sonho em realidade. 
            Cinco amigos unidos pela paixão em oferecer a melhor experiência de compra online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover-lift transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-gray-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {founder.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2">{founder.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{founder.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{founder.description}</p>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">A Jornada dos Fundadores</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Em 2010, estes cinco amigos se reuniram em uma pequena garagem com um objetivo comum: 
              revolucionar o e-commerce brasileiro. Cada um trouxe suas habilidades únicas - tecnologia, 
              marketing, operações, finanças e liderança - criando a combinação perfeita para o sucesso.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoje, mais de uma década depois, eles continuam trabalhando lado a lado, 
              mantendo os mesmos valores de amizade, inovação e dedicação que os uniram desde o início.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;