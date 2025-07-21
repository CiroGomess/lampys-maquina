
import { Microwave, Droplet, Wind, Drum as Vacuum, SprayCan as Spray, Users, ArrowRight, Zap } from 'lucide-react';

const ProductInfo = () => {
  const equipments = [
    { icon: Microwave, name: 'Micro-ondas', description: 'Aqueça alimentos por tempo' },
    { icon: Droplet, name: 'Torneiras', description: 'Controle de uso de água' },
    { icon: Wind, name: 'Chuveiros', description: 'Banhos por tempo determinado' },
    { icon: Vacuum, name: 'Aspirador', description: 'Limpeza automatizada' },
    { icon: Spray, name: 'Lavadora', description: 'Pressão controlada' },
    { icon: Users, name: 'Coworking', description: 'Acesso a ambientes' },
  ];

  return (
    <section id="produto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Máquina do Tempo
          </h2>
          <h3 className="text-2xl text-blue-600 mb-6">O que é?</h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A Máquina do Tempo é um dispositivo que permite vender tempo de uso de equipamentos 
            ou ambientes como micro-ondas, cadeiras de massagem, liberar acesso a banheiros e 
            chuveiros, salas de coworking e muito mais, proporcionando flexibilidade e 
            conveniência para seus clientes.
          </p>
        </div>

        {/* Interactive Diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Device */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-3xl shadow-2xl group hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Máquina do Tempo</h4>
                <p className="text-gray-600">Dispositivo Central</p>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {equipments.map((equipment, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center group hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <equipment.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h5 className="text-lg font-semibold text-gray-900 mb-2">{equipment.name}</h5>
                <p className="text-gray-600 text-sm">{equipment.description}</p>
                
                {/* Connection Line */}
                <div className="mt-4 flex justify-center">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Connecting Lines - Hidden on mobile */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {/* Animated connecting lines */}
              <path
                d="M400 200 L200 350"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
              <path
                d="M400 200 L400 350"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse delay-100"
              />
              <path
                d="M400 200 L600 350"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse delay-200"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;