import { BookOpen, Church, Users, Heart } from 'lucide-react';

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center my-8">
    <div className="h-px w-16 bg-[#C9A84C]" />
    <div className="mx-4 text-[#C9A84C] text-lg">&#10053;</div>
    <div className="h-px w-16 bg-[#C9A84C]" />
  </div>
);

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-[#3D0F18] text-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <p className="text-[#C9A84C] font-heading text-sm tracking-[0.3em] uppercase mb-6">
              Confessional &middot; Reformada &middot; Batista
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-wide">
              Quem Somos
            </h1>
            <p className="text-lg text-[#D4C5B2] max-w-2xl mx-auto leading-relaxed">
              Conheça a história, missão e valores da Primeira Igreja Batista Reformada de Uberlândia
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-wide">
              Nossa Missão
            </h2>
          </div>
          <OrnamentalDivider />
          <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-14 text-lg leading-relaxed">
            Somos uma comunidade de fé comprometida com a pregação fiel das Escrituras Sagradas,
            a adoração reverente a Deus e o crescimento espiritual de nossos membros.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card border border-border hover:shadow-md transition-shadow duration-300">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 tracking-wide">
                Pregação Fiel
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprometidos com a exposição fiel e contextual das Escrituras Sagradas
              </p>
            </div>

            <div className="text-center p-6 bg-card border border-border hover:shadow-md transition-shadow duration-300">
              <Church className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 tracking-wide">
                Adoração
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Adoração reverente e centrada em Deus, honrando Sua majestade e santidade
              </p>
            </div>

            <div className="text-center p-6 bg-card border border-border hover:shadow-md transition-shadow duration-300">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 tracking-wide">
                Comunhão
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comunhão cristã genuína baseada no amor mútuo e cuidado pastoral
              </p>
            </div>

            <div className="text-center p-6 bg-card border border-border hover:shadow-md transition-shadow duration-300">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 tracking-wide">
                Missão
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Evangelização e missões, levando o Evangelho a todas as pessoas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border p-8 md:p-12">
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-2 tracking-wide">
              Nossa História
            </h2>
            <OrnamentalDivider />

            <div className="space-y-6 text-foreground">
              <p className="text-lg leading-relaxed">
                A Primeira Igreja Batista Reformada de Uberlândia é uma comunidade de fé cristã
                comprometida com os princípios históricos da fé reformada e com a tradição batista.
                Cremos na autoridade suprema das Escrituras Sagradas e na pregação expositiva da Palavra de Deus.
              </p>

              <p className="text-lg leading-relaxed">
                Nossa igreja tem como fundamento as doutrinas da graça, conhecidas como os Cinco Pontos
                do Calvinismo, e adere às confissões históricas da fé reformada.{' '}
                <strong className="text-primary">Cremos na Confissão
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

      {/* CTA to Confession */}
      <section className="py-20 bg-[#3D0F18] text-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 tracking-wide">
            Nossa Base Doutrinária
          </h2>
          <OrnamentalDivider />
          <p className="text-lg text-[#D4C5B2] mb-10 leading-relaxed">
            Aderimos à Confissão de Fé Batista de 1689, também conhecida como a Segunda Confissão
            de Fé Batista de Londres. Conheça em detalhes aquilo em que cremos.
          </p>
          <a
            href="/confissao"
            className="inline-block border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0F18] font-heading tracking-widest uppercase text-sm py-3 px-10 transition-colors duration-300"
          >
            Confissão de Fé
          </a>
        </div>
      </section>
    </div>
  );
}
