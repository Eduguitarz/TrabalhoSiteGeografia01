import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold">Loja Virtual</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Sua loja de confiança desde 2010. Qualidade, estilo e conforto em cada produto.
            </p>
            <div className="flex space-x-4">
              <button className="animated-button text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="animated-button text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="animated-button text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Produtos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Promoções</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Atendimento */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atendimento</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Política de Troca</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Entregas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">contato@lojavirtual.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Loja Virtual. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;