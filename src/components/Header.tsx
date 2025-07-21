import { User, LogIn } from 'lucide-react';
import logo from '../assets/logo.png'; // Import your logo

const Header = () => {
  return (
    <header className="bg-blue-800 shadow-lg sticky top-0 z-50"> {/* Changed background to a dark blue */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            {/* Using an img tag for your logo */}
            <img src={logo} alt="LAMPYS Logo" className="h-10 w-auto group-hover:scale-110 transition-transform duration-300" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#produto" className="text-white hover:text-blue-200 transition-colors duration-200"> {/* Changed text color to white */}
              Produto
            </a>
            <a href="#funcionamento" className="text-white hover:text-blue-200 transition-colors duration-200"> {/* Changed text color to white */}
              Como Funciona
            </a>
            <a href="#planos" className="text-white hover:text-blue-200 transition-colors duration-200"> {/* Changed text color to white */}
              Planos
            </a>
            <a href="#contato" className="text-white hover:text-blue-200 transition-colors duration-200"> {/* Changed text color to white */}
              Contato
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200 group"> {/* Changed text color to white */}
              <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">Cadastrar</span>
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 group">
              <LogIn className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">Entrar</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;