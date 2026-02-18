import { MapPin, Mail, Clock, BookOpen, Users } from 'lucide-react';

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center my-8">
    <div className="h-px w-16 bg-[#C9A84C]" />
    <div className="mx-4 text-[#C9A84C] text-lg">&#10053;</div>
    <div className="h-px w-16 bg-[#C9A84C]" />
  </div>
);

export default function Contato() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-[#3D0F18] text-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <p className="text-[#C9A84C] font-heading text-sm tracking-[0.3em] uppercase mb-6">
              Venha Nos Conhecer
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-wide">
              Contato
            </h1>
            <p className="text-lg text-[#D4C5B2] max-w-2xl mx-auto leading-relaxed">
              Ficaremos felizes em recebê-lo. Entre em contato ou venha nos visitar pessoalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-card border border-border p-8">
                <div className="flex items-center mb-5">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-heading font-semibold text-foreground tracking-wide">
                    Endereço
                  </h2>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <p className="text-foreground leading-relaxed text-lg">
                    Rua Prof. Ciro de Castro Almeida, 2910
                  </p>
                  <p className="text-muted-foreground">
                    Custódio Pereira - Uberlândia, MG
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-card border border-border p-8">
                <div className="flex items-center mb-5">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-heading font-semibold text-foreground tracking-wide">
                    E-mail
                  </h2>
                </div>
                <div className="border-l-2 border-primary pl-6">
                  <a
                    href="mailto:pibruberlandia@gmail.com"
                    className="text-foreground hover:text-primary transition-colors duration-200 text-lg"
                  >
                    pibruberlandia@gmail.com
                  </a>
                </div>
              </div>

              {/* First Visit */}
              <div className="bg-card border border-border p-8 border-l-4 border-l-accent">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 tracking-wide">
                  Primeira Visita?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seja muito bem-vindo! Chegue alguns minutos antes do culto para que possamos
                  recebê-lo adequadamente e apresentar nossa comunidade. Não é necessário trazer
                  nada, apenas venha com um coração aberto para ouvir a Palavra de Deus.
                </p>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="bg-card border border-border shadow-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.8981737637546!2d-48.24901592479928!3d-18.891597982275382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44500663c6fd5%3A0x3f4b9b2633960d3!2sPrimeira%20Igreja%20Batista%20Reformada%20em%20Uberl%C3%A2ndia!5e0!3m2!1spt-BR!2sbr!4v1733964998356!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Primeira Igreja Batista Reformada de Uberlândia"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-wide">
              Horários das Reuniões
            </h2>
          </div>
          <OrnamentalDivider />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
    </div>
  );
}
