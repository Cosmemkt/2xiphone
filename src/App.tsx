import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Smartphone, 
  Target, 
  ShieldCheck, 
  Zap, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/554891844173?text=Quero%20aumentar%20as%20vendas%20da%20minha%20loja%20de%20iPhone%20e%20smartphones.";

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a 
    href={WHATSAPP_LINK} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,107,0,0.4)] ${className}`}
  >
    QUERO ACELERAR MINHAS VENDAS AGORA
    <ArrowRight className="w-5 h-5" />
  </a>
);

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-8 pb-4">
      <div className="container mx-auto px-4 flex justify-center md:justify-start">
        <FadeIn>
          <img 
            src="https://lh3.googleusercontent.com/d/1EJtO9YB9XnAQFRsmoA3w65PUXHfHCSbu" 
            alt="2x Aceleração de Negócios" 
            className="h-12 md:h-16 object-contain"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A1A2F] opacity-90"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-blue-200">Vagas abertas para a assessoria</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Pare de perder vendas para a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">concorrência.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 font-light">
              Aumente o faturamento da sua loja de iPhone ou smartphone ainda este mês.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Aplicamos o Método 2x de geração de vendas, responsável por recordes de faturamento em lojas de celulares.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="w-5 h-5 text-orange-500" />
              <span>Leads qualificados</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MessageCircle className="w-5 h-5 text-orange-500" />
              <span>Movimento no WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span>Mais vendas no caixa</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <CTAButton />
            <p className="mt-4 text-sm text-gray-400">Fale agora com um especialista da 2x.</p>
          </FadeIn>

          <FadeIn delay={0.5} className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Estratégia validada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Aplicado em lojistas do Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Resultados em até 30 dias</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    "Poucos clientes entrando na loja",
    "Anúncios que não geram vendas",
    "Leads que somem no WhatsApp",
    "Concorrentes vendendo mais",
    "Estoque parado"
  ];

  return (
    <section className="py-24 bg-[#0A1A2F] relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Se você tem uma loja de celulares, provavelmente já passou por isso:
            </h2>
          </FadeIn>

          <div className="grid gap-4 mb-12">
            {problems.map((problem, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-500 font-bold">✕</span>
                  </div>
                  <p className="text-lg text-gray-200">{problem}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20">
              <p className="text-xl md:text-2xl font-medium text-white mb-2">
                A verdade é que não falta cliente querendo comprar iPhone ou smartphone.
              </p>
              <p className="text-lg text-orange-200">
                O que falta é um método que transforme interesse em venda.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const videos = [
    { title: "Binho", subtitle: "Recorde de vendas em menos de 60 dias.", videoUrl: "https://www.instagram.com/reel/DVtvSGVEtRe/embed/" },
    { title: "Binho", subtitle: "Após apenas 5 meses, o faturamento bateu R$ 400 mil em vendas no mês.", videoUrl: "https://www.instagram.com/reel/DVwfX5kkhJ-/embed/" },
    { title: "Central iPhone", subtitle: "Em apenas dois meses, o negócio já estava batendo recorde de vendas.", videoUrl: "https://www.instagram.com/reel/DVtwtYnkrAh/embed/" }
  ];

  return (
    <section className="py-24 bg-[#0A1A2F]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Quem já é 2x, não volta atrás.</h2>
            <p className="text-xl text-gray-400">Resultados reais de lojistas reais.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[9/16] bg-gray-800 border border-white/10 shadow-xl">
                <iframe 
                  src={video.videoUrl} 
                  className="absolute inset-0 w-full h-full border-0" 
                  allow="autoplay; fullscreen"
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
                  <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-300">{video.subtitle}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppProofSection() {
  const prints = [
    { img: "https://lh3.googleusercontent.com/d/1NsnGNGL1wzmTMEQxQYSXoGyQ_Yqv0vsi", alt: "Print de resultado 1" },
    { img: "https://lh3.googleusercontent.com/d/1Te-LB0ckf3I7xxouUViG5R0sDztGdQJi", alt: "Print de resultado 2" },
    { img: "https://lh3.googleusercontent.com/d/1bDGch5-QFjtbiellJi1ijPkg4K5ocUwk", alt: "Print de resultado 3" }
  ];

  return (
    <section className="py-24 bg-[#0A1A2F]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">O WhatsApp não para</h2>
            <p className="text-xl text-gray-400">Veja o que acontece quando a estratégia certa é aplicada.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prints.map((print, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-gray-800 border border-white/10 shadow-xl group">
                <img 
                  src={print.img} 
                  alt={print.alt} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedCompaniesSection() {
  const companies = [
    { id: "17Wc9A7bjwCH5bQ2jA8io0tsBm5-S3-OZ", alt: "Empresa 1" },
    { id: "1Zh_BZ8b2_sRX9ciCC4lPywm9GCpcbySg", alt: "Empresa 2" },
    { id: "102xqOM0u5FpzN6sRN9sEUz5cHPelUL-q", alt: "Empresa 3" },
    { id: "1PeZ6Ba5UuMo8FZGoNQhNf1RUqU9cyvYU", alt: "Empresa 4" },
    { id: "1hmR64laXgxsJG6csKtdcfzexkvUh27_7", alt: "Empresa 5" }
  ];

  return (
    <section className="py-24 bg-[#0A1A2F]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Algumas empresas que confiam na nossa metodologia.</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
          {companies.map((company, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={`https://lh3.googleusercontent.com/d/${company.id}`} 
                  alt={company.alt} 
                  className="max-h-24 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodologySection() {
  const pillars = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Prospecção de Intenção",
      desc: "Anunciamos os modelos de iPhone que você tem em estoque para pessoas que já estão procurando comprar agora. Isso gera leads altamente qualificados."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Comunicação Desejável",
      desc: "Criamos vídeos e imagens que passam confiança, geram desejo e quebram objeções. Assim o cliente se sente seguro para comprar de você."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Fechamento Comercial",
      desc: "Ajustamos ou treinamos seu atendimento para que o lead não morra no WhatsApp, o cliente avance na conversa e a venda aconteça mais rápido."
    }
  ];

  return (
    <section className="py-24 bg-[#0A1A2F]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O Método 2x que transforma anúncios em vendas reais</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={index * 0.2} className="h-full">
              <div className="bg-[#0F2544] p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors duration-300 h-full flex flex-col relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors"></div>
                <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">Pilar {index + 1}<br/><span className="text-orange-400">{pillar.title}</span></h3>
                <p className="text-gray-400 leading-relaxed flex-grow">{pillar.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="py-24 bg-[#0A1A2F] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A1A2F] to-[#0F2544] p-8 md:p-12 rounded-3xl border border-orange-500/20 shadow-[0_0_50px_rgba(255,107,0,0.1)] text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6">
              <ShieldCheck className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O risco é todo nosso.<br/>O lucro é todo seu.</h2>
            <p className="text-xl text-gray-300 mb-8">Temos tanta confiança no Método 2x que criamos o:</p>
            
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Compromisso 2x</h3>
              <p className="text-lg text-gray-200">
                Se em 30 dias de implementação você não tiver resultados em vendas, devolvemos 100% do valor investido na assessoria.
              </p>
            </div>
            
            <div className="flex justify-center gap-8 text-gray-400 font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> Sem perguntas.</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500"/> Sem burocracia.</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-24 bg-[#0A1A2F]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Sua loja pode ser a próxima a bater recorde de vendas.</h2>
            <p className="text-xl text-gray-300 mb-12">Fale com um especialista e descubra como aplicar o Método 2x na sua loja.</p>
            <CTAButton className="text-lg px-10 py-5" />
            <p className="mt-6 text-gray-400 flex items-center justify-center gap-2">
              <Smartphone className="w-5 h-5" />
              Atendimento direto pelo WhatsApp.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Serve para quem está começando?",
      a: "Sim. Estruturamos toda a estratégia desde o início para gerar vendas."
    },
    {
      q: "Preciso investir muito em anúncios?",
      a: "Não. Começamos com o investimento que cabe no seu caixa e escalamos com os resultados."
    },
    {
      q: "Em quanto tempo vejo resultados?",
      a: "Muitos lojistas começam a ver movimento no WhatsApp nas primeiras semanas."
    }
  ];

  return (
    <section className="py-24 bg-[#0A1A2F]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Perguntas Frequentes</h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQItem: React.FC<{ question: string, answer: string, delay: number }> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="border border-white/10 rounded-2xl bg-[#0F2544] overflow-hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
        >
          <span className="text-lg font-medium pr-4">{question}</span>
          <ChevronDown className={`w-5 h-5 text-orange-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-5 text-gray-400">
            {answer}
          </div>
        </motion.div>
      </div>
    </FadeIn>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0A1A2F]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img 
              src="https://lh3.googleusercontent.com/d/1EJtO9YB9XnAQFRsmoA3w65PUXHfHCSbu" 
              alt="2x Aceleração de Negócios" 
              className="h-10 md:h-12 object-contain mx-auto md:mx-0 mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 text-sm">Especialistas em crescimento previsível para empresas.</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-600 flex flex-col items-center gap-2">
          <p>&copy; {new Date().getFullYear()} 2x Aceleração de Negócios. Todos os direitos reservados.</p>
          <p>CNPJ: 57.835.632/0001-92</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1A2F] text-white font-sans overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SocialProofSection />
      <WhatsAppProofSection />
      <TrustedCompaniesSection />
      <MethodologySection />
      <OfferSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
