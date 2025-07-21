import { Check, Star, Zap } from 'lucide-react';

type PlanColor = 'gray' | 'blue' | 'purple';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  color: PlanColor;
  popular: boolean;
}

const Plans = () => {
  const plans: Plan[] = [
    {
      name: 'TESTE',
      price: 'Grátis',
      period: '1 mês',
      description: 'Perfeito para conhecer a plataforma',
      features: [
        'Até 2 máquinas',
        'Suporte básico',
        'Relatórios simples',
        'Notificações por email'
      ],
      color: 'gray',
      popular: false
    },
    {
      name: 'TOP',
      price: 'R$ 49',
      period: 'por mês',
      description: 'Ideal para pequenos negócios',
      features: [
        'Até 10 máquinas',
        'Suporte prioritário',
        'Relatórios avançados',
        'Notificações em tempo real',
        'Dashboard personalizado'
      ],
      color: 'blue',
      popular: true
    },
    {
      name: 'PRO',
      price: 'R$ 99',
      period: 'por mês',
      description: 'Para negócios em crescimento',
      features: [
        'Máquinas ilimitadas',
        'Suporte premium 24/7',
        'Analytics avançados',
        'API personalizada',
        'Integração completa',
        'Treinamento exclusivo'
      ],
      color: 'purple',
      popular: false
    }
  ];

  const getColorClasses = (color: PlanColor, popular: boolean) => {
    const colors: Record<PlanColor, string> = {
      gray: 'border-gray-200 bg-white',
      blue: 'border-blue-300 bg-blue-50',
      purple: 'border-purple-300 bg-purple-50'
    };

    if (popular) {
      return 'border-blue-500 bg-gradient-to-br from-blue-50 to-teal-50 shadow-xl scale-105';
    }

    return colors[color];
  };

  const getButtonClasses = (color: PlanColor, popular: boolean) => {
    if (popular) {
      return 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700';
    }

    const colors: Record<PlanColor, string> = {
      gray: 'bg-gray-600 text-white hover:bg-gray-700',
      blue: 'bg-blue-600 text-white hover:bg-blue-700',
      purple: 'bg-purple-600 text-white hover:bg-purple-700'
    };

    return colors[color];
  };

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planos Flexíveis</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${getColorClasses(plan.color, plan.popular)}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">/ {plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 group ${getButtonClasses(plan.color, plan.popular)}`}>
                {plan.popular ? (
                  <>
                    Assinar Agora
                    <Zap className="w-5 h-5 inline ml-2 group-hover:scale-110 transition-transform duration-200" />
                  </>
                ) : (
                  'Assinar'
                )}
              </button>

              {/* Special Offer */}
              {plan.name === 'TESTE' && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Grátis por 1 mês ao comprar uma máquina
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Todos os planos incluem suporte técnico e atualizações automáticas
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <span>✓ Sem taxas de setup</span>
            <span>✓ Cancele a qualquer momento</span>
            <span>✓ Migração gratuita</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
