import { MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A0F0A] text-[#D4C5B2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-[#C9A84C] tracking-wide">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                <span className="text-base leading-relaxed">
                  Rua Prof. Ciro de Castro Almeida, 2910<br />
                  Custódio Pereira - Uberlândia, MG
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#C9A84C] flex-shrink-0" />
                <span className="text-base">pibruberlandia@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-[#C9A84C] tracking-wide">
              Links
            </h3>
            <div className="space-y-2">
              <a href="/" className="block text-base hover:text-[#C9A84C] transition-colors duration-200">
                Início
              </a>
              <a href="/sobre" className="block text-base hover:text-[#C9A84C] transition-colors duration-200">
                Quem Somos
              </a>
              <a href="/confissao" className="block text-base hover:text-[#C9A84C] transition-colors duration-200">
                Confissão de Fé
              </a>
              <a href="/contato" className="block text-base hover:text-[#C9A84C] transition-colors duration-200">
                Contato
              </a>
              <a
                href="/confissao-de-fe-batista-1689.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base hover:text-[#C9A84C] transition-colors duration-200"
              >
                CFB 1689 (PDF)
              </a>
            </div>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="text-lg font-heading font-semibold text-[#C9A84C] tracking-wide">
              Horários das Reuniões
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#C9A84C] flex-shrink-0" />
                <span className="text-base">Domingo - 09:00 &amp; 19:00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#C9A84C] flex-shrink-0" />
                <span className="text-base">Quarta-feira - 19:30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2E1F15] mt-10 pt-8 text-center">
          <p className="text-base text-[#8B7D6B]">
            &copy; {new Date().getFullYear()} Primeira Igreja Batista Reformada de Uberlândia
          </p>
        </div>
      </div>
    </footer>
  );
}
