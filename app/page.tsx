import { Clock, MapPin, Users, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-custom-secondary via-red-custom-primary to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Primeira Igreja Batista<br />
              <span className="text-red-200">Reformada</span><br />
              de Uberlândia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Uma comunidade de fé comprometida com a Palavra de Deus e a pregação do Evangelho
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#horarios"
                className="bg-red-custom-accent hover:bg-red-custom-secondary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Horários dos Cultos
              </a>
              <a
                href="#localizacao"
                className="border-2 border-white text-white hover:bg-white hover:text-red-custom-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Como Chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section id="horarios" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Horários dos Cultos
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Junte-se a nós em nossos momentos de adoração e comunhão. Todos são bem-vindos!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sunday Morning - EBD */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-500/30">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">EBD</h3>
              <p className="text-3xl font-bold text-amber-400 mb-2">09:00</p>
              <p className="text-gray-300 font-medium">Domingo - Manhã</p>
              <p className="text-sm text-gray-400 mt-3 bg-gray-800 rounded-lg py-2 px-3">Escola Bíblica Dominical</p>
            </div>

            {/* Sunday Evening - Culto Solene */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-red-custom-primary/30">
              <div className="bg-gradient-to-r from-red-custom-accent to-red-custom-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Culto Solene</h3>
              <p className="text-3xl font-bold text-red-custom-light mb-2">19:00</p>
              <p className="text-gray-300 font-medium">Domingo - Noite</p>
              <p className="text-sm text-gray-400 mt-3 bg-gray-800 rounded-lg py-2 px-3">Louvor • Pregação • Ceia</p>
            </div>

            {/* Wednesday Evening - Reunião de Oração */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-500/30">
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Reunião de Oração</h3>
              <p className="text-3xl font-bold text-rose-400 mb-2">19:00</p>
              <p className="text-gray-300 font-medium">Quarta-feira</p>
              <p className="text-sm text-gray-400 mt-3 bg-gray-800 rounded-lg py-2 px-3">Oração • Estudo Bíblico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Nossa Localização
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Encontre-nos em Uberlândia. Estamos ansiosos para recebê-lo em nossa comunidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-700 rounded-xl shadow-xl overflow-hidden border border-gray-600">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.8981737637546!2d-48.24901592479928!3d-18.891597982275382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44500663c6fd5%3A0x3f4b9b2633960d3!2sPrimeira%20Igreja%20Batista%20Reformada%20em%20Uberl%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1733964998356!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Primeira Igreja Batista Reformada de Uberlândia"
                />
              </div>
            </div>

            {/* Location Info */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-700 rounded-xl shadow-xl p-8 border border-gray-600">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-red-custom-accent to-red-custom-primary text-white rounded-full p-2 mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-white">Como Chegar</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-600 rounded-lg p-4 border-l-4 border-red-custom-primary">
                    <h4 className="font-semibold text-white mb-2">Endereço</h4>
                    <p className="text-gray-300">
                      Rua Prof. Ciro de Castro Almeida, 2910 - Custódio Pereira
                      Uberlândia - MG
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-600">
                  <p className="text-sm text-gray-300 bg-gray-600 rounded-lg p-3">
                    <strong>Primeira visita?</strong> Chegue alguns minutos antes do culto para que possamos recebê-lo adequadamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-r from-red-custom-secondary via-red-custom-primary to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Seja Bem-Vindo!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Somos uma igreja comprometida com a pregação fiel das Escrituras e com a comunhão cristã.
            Venha nos visitar e faça parte da nossa família de fé.
          </p>
          <a
            href="/sobre"
            className="inline-block bg-red-custom-accent hover:bg-red-custom-secondary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Saiba Mais Sobre Nós
          </a>
        </div>
      </section>
    </div>
  );
}