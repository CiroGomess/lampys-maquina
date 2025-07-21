
import { ShoppingCart, Gift, Zap } from 'lucide-react';

const PurchaseDevice = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprar Máquina do Tempo
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Adquira uma Máquina do Tempo e ganhe o plano TESTE gratuito por um mês.
              </p>
            </div>

            {/* Device Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fácil Instalação</h3>
                <p className="text-sm text-gray-600">Setup em poucos minutos</p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Plano Grátis</h3>
                <p className="text-sm text-gray-600">1 mês gratuito incluído</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Suporte Incluso</h3>
                <p className="text-sm text-gray-600">Treinamento e configuração</p>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Máquina do Tempo</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">R$ 1.299</div>
                  <p className="text-gray-600">Pagamento único + plano TESTE grátis</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <span>✓ Hardware completo</span>
                <span>✓ Garantia de 1 ano</span>
                <span>✓ Atualizações gratuitas</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 group shadow-lg hover:shadow-xl">
              Compre Agora
              <ShoppingCart className="w-6 h-6 inline ml-3 group-hover:scale-110 transition-transform duration-200" />
            </button>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">
                Parcelamento em até 12x sem juros
              </p>
              <p className="text-sm text-gray-500">
                Frete grátis para todo o Brasil • Entrega em 5-10 dias úteis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseDevice;