import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Adoraríamos ouvir de você! Nossa equipe está pronta para tirar dúvidas, apresentar soluções
            e ajudar a transformar seu negócio com a Máquina do Tempo.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="w-6 h-6 text-blue-600" />}
                title="Email"
                content={
                  <a
                    href="mailto:contato@lampys.com.br"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    contato@lampys.com.br
                  </a>
                }
              />
              <ContactItem
                icon={<Phone className="w-6 h-6 text-teal-600" />}
                title="Telefone"
                content={
                  <a
                    href="tel:+5583999999999"
                    className="text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    (83) 99999-9999
                  </a>
                }
              />
              <ContactItem
                icon={<MapPin className="w-6 h-6 text-green-600" />}
                title="Endereço"
                content={
                  <>
                    Rua da Tecnologia, 123<br />
                    Centro – João Pessoa/PB
                  </>
                }
              />
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-gray-700 mr-2" />
                <h4 className="text-lg font-semibold text-gray-800">Horário de Atendimento</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Segunda – Sexta:</span>
                  <span className="font-medium">08h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">08h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium text-gray-500">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa ou imagem institucional opcional */}
          <div className="flex items-center justify-center">
            <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl shadow-inner flex items-center justify-center text-gray-400 text-lg font-medium italic">
              {/* Placeholder visual */}
              Imagem institucional ou mapa aqui
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Subcomponente elegante para reutilizar os blocos de contato
const ContactItem = ({
  icon,
  title,
  content
}: {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) => (
  <div className="flex items-start space-x-4 group">
    <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center group-hover:shadow-md transition">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
      <div className="text-gray-700 text-sm">{content}</div>
    </div>
  </div>
);

export default Contact;
