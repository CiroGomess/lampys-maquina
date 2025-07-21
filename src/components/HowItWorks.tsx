
import { QrCode, Smartphone, CreditCard, Play } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: QrCode,
      title: 'Escaneie o QR Code',
      description: 'Cliente escaneia o código na máquina',
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Acesse o Sistema',
      description: 'Abertura automática do aplicativo/web',
      color: 'teal'
    },
    {
      icon: CreditCard,
      title: 'Faça o Pagamento',
      description: 'Escolha o tempo e pague de forma segura',
      color: 'green'
    },
    {
      icon: Play,
      title: 'Equipamento Ativado',
      description: 'Máquina liberada automaticamente',
      color: 'purple'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    teal: 'bg-teal-50 text-teal-600 border-teal-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200'
  };

  return (
    <section id="funcionamento" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Como Funciona?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O cliente escaneia o QR Code na máquina, acessando nosso sistema. Lá, escolhe o tempo 
            de uso, faz o pagamento de forma rápida e segura, e a máquina é ativada automaticamente 
            pelo período selecionado. O processo é simples, intuitivo e oferece uma experiência 
            ágil e conveniente.
          </p>
        </div>

        {/* Interactive Flow Diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer">
        
                

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 group-hover:scale-110 transition-transform duration-300 ${colorClasses[step.color]}`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Arrow - Hidden on last item and mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-white rotate-90"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow Arrows */}
          <div className="lg:hidden flex justify-center mt-8">
            <div className="flex flex-col items-center space-y-4">
              {[...Array(steps.length - 1)].map((_, index) => (
                <div key={index} className="w-px h-8 bg-gradient-to-b from-blue-600 to-teal-600"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;