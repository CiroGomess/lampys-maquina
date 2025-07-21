import { Bell, Monitor, Mail, Zap, Shield, Clock } from 'lucide-react'; // Ensure these are imported

const Notifications = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-widest block mb-2">
            Mantenha-se Informado
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Notificações Inteligentes para o Seu Negócio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Receba alertas instantâneos e acompanhe cada detalhe do seu negócio em tempo real.
            Controle total e segurança garantida, para que você nunca perca uma informação crucial.
          </p>
        </div>

        {/* Notification Flow Diagram / Core Features - (This section remains unchanged from previous adjustment) */}
        <div className="max-w-6xl mx-auto mb-20 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
            {/* Control Panel */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500
                        transform group hover:-translate-y-2 border border-gray-100 flex flex-col justify-between">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center
                                mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <Monitor className="w-10 h-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-50 rounded-full animate-ping-slow-once"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Painel de Controle Intuitivo</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Monitore todas as vendas, o status dos equipamentos e dados analíticos em um dashboard personalizado.
                </p>
              </div>
              <div className="relative mt-auto">
                <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Bell className="w-7 h-7 text-red-600 animate-wiggle" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Email Notifications */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500
                        transform group hover:-translate-y-2 border border-gray-100 flex flex-col justify-between">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-teal-100 rounded-full flex items-center justify-center
                                mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <Mail className="w-10 h-10 text-teal-600 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-teal-200 opacity-0 group-hover:opacity-50 rounded-full animate-ping-slow-once"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Alertas por E-mail Personalizados</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Receba notificações instantâneas via e-mail para cada transação e evento importante.
                </p>
              </div>
              <div className="relative mt-auto">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <Mail className="w-7 h-7 text-emerald-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce-slow">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
              </div>
            </div>

            {/* Machine Status */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500
                        transform group hover:-translate-y-2 border border-gray-100 flex flex-col justify-between">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full flex items-center justify-center
                                mx-auto mb-6 shadow-md group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <Zap className="w-10 h-10 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute inset-0 bg-purple-200 opacity-0 group-hover:opacity-50 rounded-full animate-ping-slow-once"></span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Status em Tempo Real dos Equipamentos</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Tenha visibilidade constante sobre o estado de funcionamento de cada um dos seus equipamentos conectados.
                </p>
              </div>
              <div className="relative mt-auto">
                <div className="flex justify-center space-x-3 p-2 bg-gray-100 rounded-full shadow-inner">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse-slow"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse-slow delay-100"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse-slow delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Types (Benefits Grid - REFINED) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Benefit 1: Sales Notifications */}
          <div className="bg-white rounded-3xl p-8 text-center group hover:shadow-2xl transition-all duration-500
                      transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"> {/* Added relative overflow-hidden */}
            {/* Background Gradient Circle (New Element for visual flair) */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-lime-300 to-green-200 rounded-full filter blur-3xl opacity-70"></div>
            </div>

            <div className="relative z-10"> {/* Ensure content is above the background gradient */}
              <div className="w-18 h-18 rounded-full flex items-center justify-center
                                mx-auto mb-6  group-hover:scale-105 transition-transform duration-300">
                <Bell className="w-9 h-9 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vendas e Transações</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Receba notificações instantâneas com detalhes completos de cada venda, valor e horário.
              </p>
            </div>
          </div>

          {/* Benefit 2: Security Alerts */}
          <div className="bg-white rounded-3xl p-8 text-center group hover:shadow-2xl transition-all duration-500
                      transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"> {/* Added relative overflow-hidden */}
            {/* Background Gradient Circle (New Element for visual flair) */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-gradient-to-br from-red-500 to-orange-400 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-amber-300 to-rose-200 rounded-full filter blur-3xl opacity-70"></div>
            </div>

            <div className="relative z-10"> {/* Ensure content is above the background gradient */}
              <div className="w-18 h-18 to-rose-100 rounded-full flex items-center justify-center
                                mx-auto mb-6  group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-9 h-9 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Alertas de Segurança</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Seja alertado imediatamente sobre tentativas de acesso não autorizado ou atividades suspeitas.
              </p>
            </div>
          </div>

          {/* Benefit 3: Maintenance/Stock Alerts */}
          <div className="bg-white rounded-3xl p-8 text-center group hover:shadow-2xl transition-all duration-500
                      transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"> {/* Added relative overflow-hidden */}
            {/* Background Gradient Circle (New Element for visual flair) */}
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-full filter blur-3xl opacity-70"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-300 to-sky-200 rounded-full filter blur-3xl opacity-70"></div>
            </div>

            <div className="relative z-10"> {/* Ensure content is above the background gradient */}
              <div className="w-18 h-18  rounded-full flex items-center justify-center
                                mx-auto mb-6  group-hover:scale-105 transition-transform duration-300">
                <Clock className="w-9 h-9 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Manutenção e Estoque</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Avisos proativos sobre baixo estoque, necessidade de manutenção ou status operacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;