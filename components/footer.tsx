import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-red-400">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Uberlândia, MG</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">contato@pibruberlandia.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-red-400">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-red-400 transition-colors">
                Início
              </a>
              <a href="/sobre" className="block text-gray-300 hover:text-red-400 transition-colors">
                Sobre
              </a>
              <a
                href="/confissao-de-fe-batista-1689.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-red-400 transition-colors"
              >
                Confissão de Fé (PDF)
              </a>
            </div>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-red-400">Horários das Reuniões</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Domingo 09:00 & 19:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Quarta-feira 19:30</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Primeira Igreja Batista Reformada de Uberlândia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}