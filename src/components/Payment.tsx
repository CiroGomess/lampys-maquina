import { Smartphone, CreditCard, Server, Zap} from 'lucide-react';

const Payment = () => {
  const flowSteps = [
    {
      icon: Smartphone,
      title: 'Cliente: Início Rápido',
      description: 'Selecione o tempo desejado e inicie o processo de pagamento em segundos.'
    },
    {
      icon: CreditCard,
      title: 'Processamento Seguro',
      description: 'Seu pagamento é processado com a máxima segurança pela plataforma escolhida.'
    },
    {
      icon: Server,
      title: 'Servidor LAMPYS: Confirmação Instantânea',
      description: 'Nosso servidor recebe a confirmação e autoriza a liberação do serviço.'
    },
    {
      icon: Zap,
      title: 'Ativação Automatizada',
      description: 'O equipamento é ativado automaticamente, sem necessidade de intervenção manual.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden"> {/* Adjusted padding and added overflow-hidden for potential animations */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest block mb-2">
            Como Funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Pagamento Simplificado e Seguro
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experimente um fluxo de pagamento otimizado: direto, rápido e com a garantia de segurança 
            que você e seus clientes merecem, maximizando seus lucros sem burocracia.
          </p>
        </div>

        {/* Payment Flow Visualization */}
        <div className="max-w-6xl mx-auto mb-20 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {flowSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card with enhanced gradient and shadow */}
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 text-center 
                            shadow-xl hover:shadow-2xl transition-all duration-500 transform 
                            group-hover:-translate-y-2 group-hover:scale-[1.02] border border-gray-100">
                  
                  {/* Animated Icon Container */}
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center 
                                  mx-auto mb-6 shadow-md 
                                  group-hover:bg-blue-100 transition-colors duration-300 
                                  relative overflow-hidden"> {/* Added overflow-hidden for subtle effect */}
                    <step.icon className="w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                    {/* Subtle pulse effect on hover (optional, can be removed) */}
                    <span className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-50 rounded-full animate-ping-slow-once"></span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                </div>

                {/* Flow Arrow - Enhanced visual for connection */}
                {index < flowSteps.length - 1 && (
                  <div className="absolute hidden lg:flex top-1/2 -right-12 transform -translate-y-1/2 z-10 w-24 justify-center items-center">
                    <div className="w-full h-1 bg-blue-300 rounded-full absolute -ml-6"></div> {/* Line */}
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center 
                                    shadow-lg animate-pulse-slow relative z-20"> {/* Circle */}
                      <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent 
                                      border-b-4 border-b-white rotate-90"></div> {/* Arrowhead */}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Payment;