import { Heart, BookOpen, Users, Church } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-custom-secondary via-red-custom-primary to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Sobre Nossa <span className="text-red-200">Igreja</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Conheça a história, missão e valores da Primeira Igreja Batista Reformada de Uberlândia
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Somos uma comunidade de fé comprometida com a pregação fiel das Escrituras Sagradas, 
              a adoração reverente a Deus e o crescimento espiritual de nossos membros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="text-center p-6 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-amber-500/30">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Pregação Fiel</h3>
              <p className="text-gray-300">
                Comprometidos com a exposição fiel e contextual das Escrituras Sagradas
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center p-6 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-red-custom-primary/30">
              <div className="bg-gradient-to-r from-red-custom-accent to-red-custom-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Church className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Adoração</h3>
              <p className="text-gray-300">
                Adoração reverente e centrada em Deus, honrando Sua majestade e santidade
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center p-6 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-500/30">
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Comunhão</h3>
              <p className="text-gray-300">
                Comunhão cristã genuína baseada no amor mútuo e cuidado pastoral
              </p>
            </div>

            {/* Card 4 */}
            <div className="text-center p-6 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-500/30">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Missão</h3>
              <p className="text-gray-300">
                Evangelização e missões, levando o Evangelho a todas as pessoas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-700 rounded-xl shadow-xl p-8 md:p-12 border border-gray-600">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Quem Somos
            </h2>

            <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                A Primeira Igreja Batista Reformada de Uberlândia é uma comunidade de fé cristã
                comprometida com os princípios históricos da fé reformada e com a tradição batista.
                Cremos na autoridade suprema das Escrituras Sagradas e na pregação expositiva da Palavra de Deus.
              </p>

              <p className="text-lg leading-relaxed">
                Nossa igreja tem como fundamento as doutrinas da graça, conhecidas como os Cinco Pontos
                do Calvinismo, e adere às confissões históricas da fé reformada. <strong className="text-red-custom-light">Cremos na Confissão
                de Fé Batista de 1689</strong>, que expressa fielmente os ensinos bíblicos sobre a fé cristã.
                Valorizamos a adoração reverente, o discipulado cristão e a evangelização.
              </p>

              <p className="text-lg leading-relaxed">
                Somos uma igreja local autônoma, governada congregacionalmente, mas que mantém comunhão
                com outras igrejas de fé e ordem semelhantes. Nosso desejo é glorificar a Deus em todas
                as áreas da vida e ser instrumento de Sua graça na cidade de Uberlândia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Confession Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-xl shadow-xl p-8 md:p-12 border border-amber-500/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Confissão de Fé Batista de 1689
              </h2>
              <p className="text-lg text-gray-300">
                Nossa base doutrinária e confessional
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-300 space-y-6">
              <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl p-6 border-l-4 border-amber-500">
                <p className="text-lg leading-relaxed mb-4">
                  <strong className="text-amber-300">Cremos na Confissão de Fé Batista de 1689</strong>, também conhecida como
                  Segunda Confissão de Fé Batista de Londres. Esta confissão histórica expressa
                  fielmente os ensinos bíblicos fundamentais da fé cristã reformada.
                </p>

                <p className="text-lg leading-relaxed mb-4">
                  A Confissão de 1689 foi elaborada por pastores batistas ingleses e representa
                  uma síntese madura da teologia reformada aplicada à eclesiologia batista.
                  Ela aborda temas como a autoridade das Escrituras, a Trindade, a salvação
                  pela graça, a igreja local e as ordenanças bíblicas.
                </p>

                <p className="text-lg leading-relaxed">
                  Esta confissão nos serve como um padrão secundário de fé, sempre subordinado
                  às Escrituras Sagradas, que são nossa autoridade suprema e final em todas
                  as questões de fé e prática cristã.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Nossas Crenças
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Fundamentadas nas Escrituras Sagradas e nas confissões históricas da fé cristã
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border-l-4 border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  Autoridade das Escrituras
                </h3>
                <p className="text-gray-300">
                  Cremos que a Bíblia é a Palavra de Deus inspirada, infalível e suficiente
                  para a fé e prática cristã.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border-l-4 border-red-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  Salvação pela Graça
                </h3>
                <p className="text-gray-300">
                  A salvação é somente pela graça de Deus, através da fé em Jesus Cristo,
                  e não por obras humanas.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border-l-4 border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  Trindade
                </h3>
                <p className="text-gray-300">
                  Cremos em um só Deus eternamente existente em três pessoas: Pai, Filho e Espírito Santo.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border-l-4 border-emerald-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  Soberania de Deus
                </h3>
                <p className="text-gray-300">
                  Deus é soberano sobre todas as coisas e executa Seus decretos eternos
                  para Sua glória e o bem de Seu povo.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border-l-4 border-rose-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  Igreja Local
                </h3>
                <p className="text-gray-300">
                  A igreja local é uma comunidade de crentes batizados, comprometidos
                  com a adoração, comunhão e missão.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border-l-4 border-cyan-400 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-serif font-semibold text-white mb-3">
                  Segunda Vinda de Cristo
                </h3>
                <p className="text-gray-300">
                  Cristo retornará visivelmente para julgar os vivos e os mortos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-red-custom-secondary via-red-custom-primary to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Venha Nos Visitar
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Gostaríamos muito de conhecê-lo pessoalmente. Venha participar de nossos cultos
            e conhecer nossa comunidade de fé.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">Primeiro Culto?</h3>
              <p className="text-red-100">
                Chegue alguns minutos antes para que possamos recebê-lo adequadamente
                e apresentar nossa igreja.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">Tem Dúvidas?</h3>
              <p className="text-red-100">
                Entre em contato conosco. Ficaremos felizes em responder suas perguntas
                sobre nossa fé e práticas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}