
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png'; // Import your logo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo/About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="LAMPYS Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Inovando o futuro do uso de equipamentos por tempo. Transforme seu negócio
              com nossa tecnologia revolucionária.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/maquina.lampys/?utm_source=qr#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
        
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Links Úteis</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#produto" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Máquina do Tempo
                </a>
              </li>
              <li>
                <a href="#funcionamento" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:contato@lampys.com.br" className="text-gray-300 hover:text-white transition-colors duration-200">
                  contato@lampys.com.br
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <a href="tel:+5583999999999" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +55 83 9681-2016
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5" />
                <div className="text-gray-300">
                  <p>Rua da Tecnologia, 123</p>
                  <p>Centro - João Pessoa/PB</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Receba Novidades</h3>
            <p className="text-gray-300">
              Fique por dentro das últimas atualizações e novidades da LAMPYS.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © lampys.com.br {currentYear}. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Suporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;