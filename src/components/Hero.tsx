
import { Play, Zap, Clock, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolucione o Uso de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Equipamentos!
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Seu Negócio no Modo Automático! Crie um novo modelo de negócio com vendas automáticas!
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 group">
                <div className="bg-blue-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Automático</h3>
                  <p className="text-sm text-gray-600">24/7 sem parar</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-teal-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Seguro</h3>
                  <p className="text-sm text-gray-600">Pagamentos protegidos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-100 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Rápido</h3>
                  <p className="text-sm text-gray-600">Setup em minutos</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 group">
                Começar Agora
                <Zap className="w-5 h-5 inline ml-2 group-hover:scale-110 transition-transform duration-200" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 group">
                <Play className="w-5 h-5 inline mr-2 group-hover:scale-110 transition-transform duration-200" />
                Ver Demonstração
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Máquina do Tempo</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg group hover:bg-blue-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Micro-ondas</p>
                      <p className="text-sm text-gray-600">R$ 2,00 / 5 min</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg group hover:bg-teal-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Chuveiro</p>
                      <p className="text-sm text-gray-600">R$ 5,00 / 10 min</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg group hover:bg-green-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Coworking</p>
                      <p className="text-sm text-gray-600">R$ 15,00 / 1 hora</p>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-200">
                  Ativar Agora
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500 rounded-full opacity-20 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;