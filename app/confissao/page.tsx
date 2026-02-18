import { FileText } from 'lucide-react';

const OrnamentalDivider = () => (
  <div className="flex items-center justify-center my-8">
    <div className="h-px w-16 bg-[#C9A84C]" />
    <div className="mx-4 text-[#C9A84C] text-lg">&#10053;</div>
    <div className="h-px w-16 bg-[#C9A84C]" />
  </div>
);

const confessionChapters = [
  {
    category: 'Teologia Própria',
    subtitle: 'Sobre Deus e Sua Palavra',
    chapters: [
      { number: 1, title: 'Das Sagradas Escrituras', description: 'A Bíblia como regra suficiente, certa e infalível de fé e prática' },
      { number: 2, title: 'De Deus e da Santíssima Trindade', description: 'O Deus vivo e verdadeiro, em três pessoas coeternas e consubstanciais' },
      { number: 3, title: 'Do Decreto de Deus', description: 'O conselho eterno da vontade de Deus, pelo qual Ele ordenou todas as coisas' },
      { number: 4, title: 'Da Criação', description: 'Deus criou todas as coisas do nada, no espaço de seis dias' },
      { number: 5, title: 'Da Divina Providência', description: 'O cuidado soberano de Deus sobre todas as Suas criaturas e ações' },
    ],
  },
  {
    category: 'Antropologia e Queda',
    subtitle: 'Sobre o Homem e o Pecado',
    chapters: [
      { number: 6, title: 'Da Queda do Homem, do Pecado e sua Punição', description: 'A desobediência de Adão e a corrupção de toda a raça humana' },
      { number: 7, title: 'Do Pacto de Deus', description: 'A aliança da graça oferecida aos pecadores através de Cristo' },
      { number: 9, title: 'Do Livre-Arbítrio', description: 'A incapacidade do homem natural e a liberdade restaurada pela graça' },
    ],
  },
  {
    category: 'Soteriologia',
    subtitle: 'Sobre a Salvação',
    chapters: [
      { number: 8, title: 'De Cristo, o Mediador', description: 'A pessoa e obra de Jesus Cristo como único Mediador entre Deus e os homens' },
      { number: 10, title: 'Da Vocação Eficaz', description: 'O chamado irresistível de Deus aos Seus eleitos pelo Espírito Santo' },
      { number: 11, title: 'Da Justificação', description: 'A imputação da justiça de Cristo aos crentes somente pela fé' },
      { number: 12, title: 'Da Adoção', description: 'A graça de ser recebido como filho de Deus em Cristo' },
      { number: 13, title: 'Da Santificação', description: 'A obra progressiva da graça no crente para a semelhança de Cristo' },
      { number: 14, title: 'Da Fé Salvadora', description: 'A fé como dom de Deus e instrumento da justificação' },
      { number: 15, title: 'Do Arrependimento para a Vida e Salvação', description: 'A mudança de mente e coração concedida por Deus' },
      { number: 17, title: 'Da Perseverança dos Santos', description: 'A preservação infalível dos eleitos até o fim' },
    ],
  },
  {
    category: 'Vida Cristã',
    subtitle: 'Sobre a Obediência e a Piedade',
    chapters: [
      { number: 16, title: 'Das Boas Obras', description: 'Os frutos da fé verdadeira, feitos segundo a Palavra de Deus' },
      { number: 18, title: 'Da Segurança da Graça e da Salvação', description: 'A certeza da salvação fundamentada nas promessas divinas' },
      { number: 19, title: 'Da Lei de Deus', description: 'A lei moral como regra perpétua de obediência para todos os homens' },
      { number: 20, title: 'Do Evangelho e da Extensão de Sua Graça', description: 'A promessa de Cristo revelada progressivamente nas Escrituras' },
      { number: 21, title: 'Da Liberdade Cristã e da Liberdade de Consciência', description: 'A liberdade adquirida por Cristo para os crentes' },
      { number: 22, title: 'Da Adoração Religiosa e do Dia do Senhor', description: 'A adoração devida somente a Deus, conforme Ele ordenou' },
      { number: 23, title: 'Do Juramento e do Voto', description: 'A legalidade e solenidade dos juramentos e votos lícitos' },
      { number: 24, title: 'Do Magistrado Civil', description: 'A instituição divina do governo civil e o dever dos cristãos' },
      { number: 25, title: 'Do Matrimônio', description: 'O casamento como ordenança divina entre um homem e uma mulher' },
    ],
  },
  {
    category: 'Eclesiologia',
    subtitle: 'Sobre a Igreja',
    chapters: [
      { number: 26, title: 'Da Igreja', description: 'A igreja universal e local, sua natureza, governo e propósito' },
      { number: 27, title: 'Da Comunhão dos Santos', description: 'A união mística dos crentes em Cristo e seus deveres mútuos' },
      { number: 28, title: 'Do Batismo e da Ceia do Senhor', description: 'As ordenanças positivas instituídas por Cristo para Sua igreja' },
      { number: 29, title: 'Do Batismo', description: 'A imersão em água de crentes professos em nome do Pai, do Filho e do Espírito Santo' },
      { number: 30, title: 'Da Ceia do Senhor', description: 'A memorial da morte de Cristo e comunhão espiritual dos crentes' },
    ],
  },
  {
    category: 'Escatologia',
    subtitle: 'Sobre as Últimas Coisas',
    chapters: [
      { number: 31, title: 'Da Condição do Homem após a Morte e da Ressurreição dos Mortos', description: 'O estado intermediário das almas e a ressurreição final' },
      { number: 32, title: 'Do Juízo Final', description: 'O retorno de Cristo para julgar todos os homens em justiça' },
    ],
  },
];

const beliefs = [
  {
    title: 'Autoridade das Escrituras',
    description: 'Cremos que a Bíblia é a Palavra de Deus inspirada, infalível e suficiente para a fé e prática cristã.',
  },
  {
    title: 'Salvação pela Graça',
    description: 'A salvação é somente pela graça de Deus, através da fé em Jesus Cristo, e não por obras humanas.',
  },
  {
    title: 'A Santíssima Trindade',
    description: 'Cremos em um só Deus eternamente existente em três pessoas: Pai, Filho e Espírito Santo.',
  },
  {
    title: 'Soberania de Deus',
    description: 'Deus é soberano sobre todas as coisas e executa Seus decretos eternos para Sua glória e o bem de Seu povo.',
  },
  {
    title: 'A Igreja Local',
    description: 'A igreja local é uma comunidade de crentes batizados, comprometidos com a adoração, comunhão e missão.',
  },
  {
    title: 'Segunda Vinda de Cristo',
    description: 'Cristo retornará visivelmente para julgar os vivos e os mortos.',
  },
];

const tulip = [
  { letter: 'T', latin: 'Total Depravity', portuguese: 'Depravação Total', description: 'O homem, em seu estado natural, é totalmente incapaz de buscar a Deus ou fazer qualquer bem espiritual.' },
  { letter: 'U', latin: 'Unconditional Election', portuguese: 'Eleição Incondicional', description: 'Deus escolheu, desde a eternidade, aqueles que seriam salvos, não com base em méritos humanos, mas segundo Sua soberana vontade.' },
  { letter: 'L', latin: 'Limited Atonement', portuguese: 'Expiação Limitada', description: 'Cristo morreu eficazmente pelos eleitos, garantindo com certeza a salvação de todos aqueles por quem Ele se ofereceu.' },
  { letter: 'I', latin: 'Irresistible Grace', portuguese: 'Graça Irresistível', description: 'O Espírito Santo aplica eficazmente a salvação aos eleitos, de modo que eles são infalivelmente trazidos à fé.' },
  { letter: 'P', latin: 'Perseverance of the Saints', portuguese: 'Perseverança dos Santos', description: 'Todos os eleitos serão preservados pelo poder de Deus e perseverarão na fé até o fim.' },
];

export default function Confissao() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-[#3D0F18] text-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <p className="text-[#C9A84C] font-heading text-sm tracking-[0.3em] uppercase mb-6">
              Segunda Confissão Batista de Londres
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-wide">
              Confissão de Fé de 1689
            </h1>
            <p className="text-lg text-[#D4C5B2] max-w-2xl mx-auto leading-relaxed">
              Nossa base doutrinária e confessional, subordinada às Sagradas Escrituras
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border p-8 md:p-12 border-l-4 border-l-accent">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-2 tracking-wide">
              Sobre a Confissão
            </h2>
            <OrnamentalDivider />

            <div className="space-y-5 text-foreground">
              <p className="text-lg leading-relaxed">
                A <strong className="text-accent">Confissão de Fé Batista de 1689</strong>, também conhecida como
                Segunda Confissão de Fé Batista de Londres, foi elaborada por pastores batistas
                ingleses e representa uma síntese madura da teologia reformada aplicada à eclesiologia batista.
              </p>

              <p className="text-lg leading-relaxed">
                Esta confissão aborda de forma abrangente os fundamentos da fé cristã: a autoridade das
                Escrituras, a doutrina de Deus e da Trindade, a obra de Cristo, a salvação pela graça,
                a natureza da igreja, as ordenanças bíblicas e as últimas coisas.
              </p>

              <p className="text-lg leading-relaxed">
                Ela nos serve como um padrão secundário de fé, sempre subordinado às Escrituras Sagradas,
                que são nossa autoridade suprema e final em todas as questões de fé e prática cristã.
              </p>

              <div className="text-center pt-4">
                <a
                  href="/confissao-de-fe-batista-1689.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-[#FAF7F2] font-heading tracking-widest uppercase text-sm py-3 px-8 transition-colors duration-300"
                >
                  <FileText className="h-4 w-4" />
                  Ler Confissão Completa (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-wide">
              Os 32 Capítulos
            </h2>
          </div>
          <OrnamentalDivider />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
            Resumo dos capítulos da Confissão de Fé, organizados por tema
          </p>

          <div className="space-y-12">
            {confessionChapters.map((group) => (
              <div key={group.category}>
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-semibold text-foreground tracking-wide">
                    {group.category}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 tracking-wide">
                    {group.subtitle}
                  </p>
                  <div className="h-px w-20 bg-accent mt-3" />
                </div>

                <div className="space-y-3">
                  {group.chapters.map((chapter) => (
                    <div
                      key={chapter.number}
                      className="bg-card border border-border p-5 border-l-4 border-l-primary hover:shadow-sm transition-shadow duration-300"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-heading text-accent font-semibold tracking-wide flex-shrink-0">
                          Cap. {chapter.number}
                        </span>
                        <div>
                          <h4 className="font-heading font-semibold text-foreground tracking-wide">
                            {chapter.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                            {chapter.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TULIP */}
      <section className="py-20 bg-[#3D0F18] text-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-wide">
              As Doutrinas da Graça
            </h2>
          </div>
          <OrnamentalDivider />
          <p className="text-center text-[#D4C5B2] max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
            Os Cinco Pontos do Calvinismo, sintetizados no acrônimo TULIP
          </p>

          <div className="space-y-6">
            {tulip.map((point) => (
              <div key={point.letter} className="border border-[#5A1A25] p-6 flex gap-6 items-start">
                <span className="text-4xl md:text-5xl font-display font-bold text-[#C9A84C] flex-shrink-0 leading-none">
                  {point.letter}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-[#FAF7F2] tracking-wide text-lg">
                    {point.portuguese}
                  </h3>
                  <p className="text-xs text-[#C9A84C] font-heading tracking-widest uppercase mt-0.5 mb-2">
                    {point.latin}
                  </p>
                  <p className="text-[#D4C5B2] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground tracking-wide">
              Nossas Crenças
            </h2>
          </div>
          <OrnamentalDivider />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14 text-lg leading-relaxed">
            Resumo dos pontos fundamentais da nossa fé
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="bg-card border border-border p-6 border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 tracking-wide">
                  {belief.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
