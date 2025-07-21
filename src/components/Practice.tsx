import React from 'react';
import { Play, DollarSign, Clock, Bell } from 'lucide-react';

const Practice = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Pagamento Imediato',
      description: 'Receba pagamentos diretamente em sua conta, sem taxas adicionais. Simples, rápido e seguro, garantindo mais lucro e facilidade para o seu negócio.',
      color: 'green'
    },
    {
      icon: Clock,
      title: '24 por 7',
      description: 'Venda seu produto 24h por dia, 7 dias por semana, sem interrupções. Aumente suas oportunidades de negócio com vendas automáticas e contínuas.',
      color: 'blue'
    },
    {
      icon: Bell,
      title: 'Notificações Abrangentes',
      description: 'Receba notificações instantâneas sobre compras realizadas, tentativas de furto e falta de estoque, garantindo total controle e segurança para o seu negócio.',
      color: 'purple'
    }
  ];

  const colorClasses = {
    green: 'from-green-50 to-emerald-50 bg-green-100 text-green-600',
    blue: 'from-blue-50 to-sky-50 bg-blue-100 text-blue-600',
    purple: 'from-purple-50 to-violet-50 bg-purple-100 text-purple-600'
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Na Prática</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Veja a máquina do tempo em uma aplicação prática para ilustrar o conceito e 
            entender melhor como ela funciona e os benefícios que pode trazer.
          </p>
        </div>

        {/* Video Demo Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 shadow-2xl">
            <div className="bg-black rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-gray-900 transition-colors duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Demonstração Prática</h3>
                <p className="text-blue-100">Clique para ver a Máquina do Tempo em ação</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${colorClasses[benefit.color].split(' ')[0]} ${colorClasses[benefit.color].split(' ')[1]} rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-16 h-16 ${colorClasses[benefit.color].split(' ')[2]} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-8 h-8 ${colorClasses[benefit.color].split(' ')[3]}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para Revolucionar seu Negócio?
            </h3>
            <p className="text-blue-100 mb-6">
              Comece hoje mesmo e transforme a forma como você vende tempo de uso de equipamentos.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 group">
              Começar Agora
              <Play className="w-5 h-5 inline ml-2 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practice;