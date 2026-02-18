'use client';

import { Clock, MapPin, Users, BookOpen } from 'lucide-react';

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center my-8">
    <div className="h-px w-16 bg-[#C9A84C]" />
    <div className="mx-4 text-[#C9A84C] text-lg">&#10053;</div>
    <div className="h-px w-16 bg-[#C9A84C]" />
  </div>
);

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-[#3D0F18] text-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="text-center">
            <p className="text-[#C9A84C] font-heading text-sm tracking-[0.3em] uppercase mb-6">
              Sola Scriptura &middot; Sola Fide &middot; Sola Gratia &middot; Solus Christus &middot; Soli Deo Gloria
            </p>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 leading-tight tracking-wide">
              Primeira Igreja Batista
            </h1>
            <h2 className="text-3xl md:text-5xl font-display font-normal mb-3 text-[#E8DDD0] tracking-wide">
              Reformada
            </h2>
            <p className="text-xl md:text-2xl font-display text-[#C9A84C] tracking-widest mb-10">
              de Uberlândia
            </p>
            <p className="text-lg md:text-xl mb-12 text-[#D4C5B2] max-w-2xl mx-auto leading-relaxed italic">
              &ldquo;Toda a Escritura é divinamente inspirada e proveitosa para ensinar,
              para redarguir, para corrigir, para instruir em justiça.&rdquo;
            </p>
            <p className="text-sm text-[#8B7D6B] mb-10 font-heading tracking-wide">
              2 Timóteo 3:16
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('horarios')}
                className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0F18] font-heading tracking-widest uppercase text-sm py-3 px-10 transition-colors duration-300"
              >
                Horários dos Cultos
              </button>
              <button
                onClick={() => scrollToSection('localizacao')}
                className="border border-[#E8DDD0]/40 text-[#E8DDD0] hover:bg-[#E8DDD0] hover:text-[#3D0F18] font-heading tracking-widest uppercase text-sm py-3 px-10 transition-colors duration-300"
              >
                Como Chegar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section id="horarios" className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-wide">
              Horários das Reuniões
            </h2>
          </div>
          <OrnamentalDivider />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
            Junte-se a nós em nossos momentos de adoração e comunhão. Todos são bem-vindos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* EBD */}
            <div className="bg-card border border-border p-8 text-center hover:shadow-md transition-shadow duration-300">
              <BookOpen className="h-8 w-8 text-primary mx-auto mb-5" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2 tracking-wide">
                EBD
              </h3>
              <p className="text-3xl font-heading font-bold text-primary mb-2">09:00</p>
              <p className="text-muted-foreground">Domingo - Manhã</p>
              <p className="text-sm text-muted-foreground mt-3">Escola Bíblica Dominical</p>
              <div className="mt-5 p-3 bg-secondary border-l-2 border-accent text-left">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-accent">Atenção:</span> No primeiro domingo do mês não temos EBD.
                  A manhã é reservada para um momento especial de comunhão entre os irmãos.
                </p>
              </div>
            </div>

            {/* Culto Solene */}
            <div className="bg-card border border-border p-8 text-center hover:shadow-md transition-shadow duration-300">
              <Users className="h-8 w-8 text-primary mx-auto mb-5" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2 tracking-wide">
                Culto Solene
              </h3>
              <p className="text-3xl font-heading font-bold text-primary mb-2">19:00</p>
              <p className="text-muted-foreground">Domingo - Noite</p>
              <p className="text-sm text-muted-foreground mt-3">Louvor &middot; Pregação &middot; Ceia</p>
            </div>

            {/* Reunião de Oração */}
            <div className="bg-card border border-border p-8 text-center hover:shadow-md transition-shadow duration-300">
              <Clock className="h-8 w-8 text-primary mx-auto mb-5" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2 tracking-wide">
                Reunião de Oração
              </h3>
              <p className="text-3xl font-heading font-bold text-primary mb-2">19:30</p>
              <p className="text-muted-foreground">Quarta-feira</p>
              <p className="text-sm text-muted-foreground mt-3">Oração &middot; Estudo Bíblico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-wide">
              Nossa Localização
            </h2>
          </div>
          <OrnamentalDivider />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
            Encontre-nos em Uberlândia. Estamos ansiosos para recebê-lo.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-card border border-border shadow-sm overflow-hidden">
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
              <div className="bg-card border border-border p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-heading font-semibold text-foreground tracking-wide">
                    Como Chegar
                  </h3>
                </div>

                <div className="border-l-2 border-primary pl-6 py-2 mb-6">
                  <h4 className="font-semibold text-foreground mb-1 text-sm tracking-wide uppercase">
                    Endereço
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Rua Prof. Ciro de Castro Almeida, 2910<br />
                    Custódio Pereira - Uberlândia, MG
                  </p>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground bg-secondary p-4 leading-relaxed">
                    <strong className="text-foreground">Primeira visita?</strong> Chegue alguns minutos antes
                    do culto para que possamos recebê-lo adequadamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-[#3D0F18] text-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 tracking-wide">
            Seja Bem-Vindo
          </h2>
          <OrnamentalDivider />
          <p className="text-lg text-[#D4C5B2] mb-10 leading-relaxed">
            Somos uma igreja comprometida com a pregação fiel das Escrituras e com a comunhão cristã.
            Venha nos visitar e faça parte da nossa comunidade de fé.
          </p>
          <a
            href="/sobre"
            className="inline-block border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#3D0F18] font-heading tracking-widest uppercase text-sm py-3 px-10 transition-colors duration-300"
          >
            Conheça Nossa Igreja
          </a>
        </div>
      </section>
    </div>
  );
}
