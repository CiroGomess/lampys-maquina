import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Carlos Silva',
      city: 'São Paulo, SP',
      rating: 5,
      text: 'A Máquina do Tempo revolucionou meu negócio de lavanderia. Agora posso vender tempo de uso das máquinas 24h por dia, mesmo quando não estou presente. As vendas aumentaram 300% em apenas 3 meses!',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ana Maria Costa',
      city: 'Rio de Janeiro, RJ',
      rating: 5,
      text: 'Implementei a solução no meu espaço de coworking e a experiência dos clientes melhorou drasticamente. O sistema é intuitivo e os pagamentos são processados instantaneamente. Recomendo fortemente!',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Roberto Mendes',
      city: 'Belo Horizonte, MG',
      rating: 5,
      text: 'Uso a Máquina do Tempo no meu food truck para micro-ondas. Os clientes adoram a praticidade e eu recebo o pagamento na hora. Sem dúvida, é o futuro da monetização de equipamentos!',
      avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Marina Santos',
      city: 'Fortaleza, CE',
      rating: 5,
      text: 'Instalei em chuveiros de um hostel e a experiência foi incrível. Os hóspedes podem usar pelo tempo que precisam, pagando apenas pelo que consomem. Sistema muito inteligente!',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'João Pedro Lima',
      city: 'Brasília, DF',
      rating: 5,
      text: 'A LAMPYS entregou mais do que prometeu. O suporte é excepcional e as notificações me mantêm sempre informado sobre todas as transações. Meu ROI foi positivo em menos de 2 meses.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Depoimentos de Clientes</h2>
          <p className="text-xl text-gray-600">Nossos clientes adoram trabalhar conosco</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl p-12 shadow-xl mb-8 relative">
            <div className="absolute top-8 left-8 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-blue-600" />
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">{testimonials[currentIndex].city}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            </button>
          </div>

          {/* Mini Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.text.slice(0, 150)}..."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;