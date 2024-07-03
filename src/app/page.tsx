'use client';

import Link from 'next/link';
export default function Home() {
  const servicos = [
    {
      imgSrcWeb: '/assets/img/1.png',
      imgSrcMobile: 'assets/img/9.png',
      title: 'SUSTENTABILIDADE',
      description:
        'Potencialize o impacto positivo da sua empresa com estratégias sustentáveis que alinham crescimento econômico, responsabilidade social e preservação ambiental.',
    },
    {
      imgSrcWeb: '/assets/img/2.png',
      imgSrcMobile: 'assets/img/10.png',
      title: 'ANÁLISE DE MERCADO',
      description:
        'Obtenha insights precisos e estratégicos sobre o mercado com nossas análises detalhadas, preparando sua empresa para capturar oportunidades e enfrentar desafios.',
    },
    {
      imgSrcWeb: '/assets/img/3.png',
      imgSrcMobile: 'assets/img/11.png',
      title: 'MARKETING E BRANDING',
      description:
        'Elevamos sua marca com campanhas de marketing criativas e estratégias de branding consistentes, construindo uma conexão sólida e duradoura com seu público.',
    },
    {
      imgSrcWeb: '/assets/img/4.png',
      imgSrcMobile: 'assets/img/12.png',
      title: 'GESTÃO DE LIDERANÇA',
      description:
        'Desenvolvemos líderes excepcionais com programas de treinamento focados em habilidades de liderança, tomada de decisão e gestão de equipes, fortalecendo a estrutura organizacional da sua empresa.',
    },
    {
      imgSrcWeb: '/assets/img/5.png',
      imgSrcMobile: 'assets/img/13.png',
      title: 'AUTOMAÇÃO DE PROCESSOS',
      description:
        'Transforme a eficiência operacional da sua empresa com nossas soluções de automação, otimizando processos para reduzir custos e aumentar a produtividade.',
    },
    {
      imgSrcWeb: '/assets/img/6.png',
      imgSrcMobile: 'assets/img/14.png',
      title: 'TRANSFORMAÇÃO DIGITAL',
      description:
        'Navegue pela era digital com sucesso. Implementamos tecnologias avançadas que reformulam suas operações, melhoram a experiência do cliente e impulsionam o crescimento.',
    },
    {
      imgSrcWeb: '/assets/img/7.png',
      imgSrcMobile: 'assets/img/15.png',
      title: 'GESTÃO FINANCEIRA',
      description:
        'Fortaleça a saúde financeira da sua empresa com nosso suporte em planejamento financeiro, análise de riscos e estratégias de investimento para garantir um futuro lucrativo e sustentável.',
    },
    {
      imgSrcWeb: '/assets/img/8.png',
      imgSrcMobile: 'assets/img/16.png',
      title: 'ASSESSORIA JURÍDICA',
      description:
        'Proteja seu negócio e antecipe-se a desafios legais com nossa consultoria jurídica especializada, abrangendo compliance, legislação corporativa e muito mais.',
    },
  ];

  return (
    <main>
      <section
        id="banner"
        className="bg-cover bg-center h-[600px] md:h-[1000px] flex  items-center justify-center text-center relative pt-10"
        style={{ backgroundImage: "url('/assets/bg/1.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl font-medium tracking-widest">
            O FUTURO DA SUA <br /> EMPRESA COMEÇA AQUI
            <span className="text-orange-600">.</span>
          </h1>
          <p className="hidden md:block mt-4 text-lg md:text-2xl font-light">
            TRANSFORMANDO VISÕES EM REALIDADE: SEU NEGÓCIO NO ÁPICE DO SUCESSO
          </p>
          <div className="mt-8 md:mt-20 flex justify-center space-x-4">
            <Link
              className="bg-transparent hover:bg-white hover:text-black px-12 py-6 border transition xl:text-xl text-white"
              href="#sobre"
            >
              SAIBA MAIS
            </Link>

            <Link
              className="bg-orange-600 text-white px-14 py-6 hover:bg-orange-700 transition xl:text-xl hidden sm:block"
              href="#contato"
            >
              CONTATO
            </Link>
          </div>
        </div>
      </section>
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center px-8">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-5xl mb-4 border-b-4 border-orange-600 inline-block tracking-wider">
                NOSSA HISTÓRIA
              </h1>
            </div>
            <p className="text-gray-700 opacity-80">
              Desde o nosso início em 2020, o Grupo Altuori se dedica a elevar a
              gestão empresarial a novos patamares. Nossa expertise abrange uma
              gama completa de serviços estratégicos, incluindo análise de
              mercado detalhada, automação de processos para maximizar a
              eficiência, e estratégias de marketing e branding que não apenas
              destacam sua marca, mas também criam conexões significativas com
              seu público. Nos aventuramos além, integrando mídias digitais para
              amplificar sua presença online, implementando práticas de gestão
              financeira sólidas para assegurar a sustentabilidade e
              crescimento, e adotando medidas de sustentabilidade empresarial
              que preparam seu negócio para um futuro responsável. Nosso
              compromisso vai além de simplesmente prestar serviços; buscamos
              ser parceiros na jornada de transformação do seu negócio.
              Acreditamos que, com a orientação correta e estratégias
              personalizadas, cada empresa tem o potencial para alcançar a
              excelência e deixar uma marca indelével em seu setor. O Grupo
              Altuori não apenas aspira a ser uma parte dessa trajetória, mas se
              dedica a tornar cada história de sucesso uma prova viva de nosso
              compromisso com a excelência. Venha descobrir como podemos
              transformar sua visão em realidade, guiando sua empresa para um
              futuro de sucesso inigualável.
            </p>
          </div>
          <div className="flex flex-col items-center lg:justify-between lg:flex-row lg:items-baseline gap-8 mt-24 px-8">
            <div className="text-center max-w-96 lg:max-w-64 xl:max-w-80 2xl:max-w-[400px]">
              <img
                src="/assets/img/17.png"
                alt="Imagem de uma sala de reunião"
                className="w-full h-60 lg:h-48 2xl:h-52 object-cover mb-4 mx-auto"
              />
              <div className="max-w-96 mx-auto">
                <h2 className="text-xl lg:text-base font-semibold mb-2 border-b-4 border-orange-600 inline-block xl:text-xl tracking-wider">
                  OTIMIZAÇÃO DE PROCESSOS
                </h2>
              </div>
              <p className="text-gray-700 text-sm opacity-80 mb-6 lg:mb-0">
                O Grupo Altuori é pioneiro em otimização de processos,
                transformando complexidade em eficiência. Nossa abordagem
                inovadora impulsiona empresas ao sucesso, refletindo nossa
                paixão e comprometimento com a excelência operacional.
              </p>
            </div>
            <div className="text-center max-w-96 2xl:max-w-[500px]">
              <img
                src="/assets/img/18.png"
                alt="Imagem de uma mesa com gráficos"
                className="w-full h-60 2xl:h-72 object-cover mb-4 mx-auto"
              />

              <div className="max-w-96 mx-auto">
                <h2 className="text-xl lg:text-base xl:text-xl font-semibold mb-2 border-b-4 border-orange-600 inline-block tracking-wider">
                  ANÁLISE DE MERCADO E EXPANSÃO
                </h2>
              </div>
              <p className="text-gray-700 text-sm opacity-80">
                Especialistas em análise de mercado, o Grupo Altuori guia
                empresas à expansão ano após ano. Nossa perícia desvenda
                caminhos para crescimento, alavancando cada oportunidade com
                precisão estratégica.
              </p>
            </div>
            <div className="text-center max-w-96 lg:max-w-64 xl:max-w-80 2xl:max-w-[400px]">
              <img
                src="/assets/img/19.png"
                alt="Imagem de um quadro com informações"
                className="w-96 h-60 lg:h-48 2xl:h-52 object-cover mb-4 mx-auto"
              />
              <div className="max-w-96 mx-auto">
                <h2 className="text-xl lg:text-base xl:text-xl font-semibold mb-2 border-b-4 border-orange-600 inline-block tracking-wider">
                  MARKETING E BRANDING
                </h2>
              </div>
              <p className="text-gray-700 text-sm opacity-80">
                No Grupo Altuori, combinamos marketing e branding para
                posicionar marcas no topo. Nossa criatividade e estratégia
                transformam visibilidade em legado e geram valor para a sua
                empresa, trazendo reconhecimento para a sua marca.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="bg-cover bg-center h-[500px] flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/assets/bg/2.png')" }}
      >
        <div className="text-white flex flex-col items-center mx-auto">
          <h1 className="text-xl md:text-2xl font-sm w-[85%]">
            NÃO PERCA A OPORTUNIDADE DE ELEVAR A SUA EMPRESA PARA OUTRO NÍVEL
            COM NOSSAS ESTRATÉGIAS E FERRAMENTAS DE GESTÃO
          </h1>
          <Link
            className="bg-transparent border border-white text-white py-7 font-semibold hover:bg-white hover:text-black transition cursor-pointer px-11 mt-24"
            href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!"
          >
            FALE CONOSCO
          </Link>
        </div>
      </section>
      <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="max-w-[430px] mx-auto">
              <h1 className="text-3xl md:text-5xl font-sm mb-4 border-b-4 border-orange-600 inline-block">
                NOSSOS SERVIÇOS
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Descubra como nossas soluções personalizadas em análise de
              mercado, otimização de processos, marketing, branding, e mais,
              podem transformar a sua empresa. No Grupo Altuori, combinamos
              inovação com eficácia para impulsionar o seu sucesso.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            {servicos.map((servico, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative">
                  <img
                    src={servico.imgSrcWeb}
                    alt={`Imagem de ${servico.title.toLowerCase()}`}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 hidden md:block"
                  />
                  <img
                    src={servico.imgSrcMobile}
                    alt={`Imagem de ${servico.title.toLowerCase()}`}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 md:hidden"
                  />
                </div>
                <div className="absolute inset-0 bg-zinc-800 opacity-0 group-hover:opacity-100 duration-500 flex flex-col items-center justify-center text-center text-white px-4 transform -translate-y-full group-hover:-translate-y-0 transition-transform">
                  <p className="text-lg md:text-sm xl:text-lg">
                    {servico.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="bg-cover bg-center h-[580px] flex items-center justify-center text-center relative"
        style={{ backgroundImage: "url('/assets/bg/3.png')" }}
      >
        <div className="relative z-10 text-white px-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              UMA EQUIPE DE ESPECIALISTAS PRONTAS PARA TE ATENDER.
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Confie a administração da sua empresa com quem entende do assunto.
            </p>
          </div>
          <div className="flex justify-center space-x-20 mt-20">
            <Link href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
              <img
                src="/assets/icones/7.svg"
                alt="Icone de uma mensagem alusivo a um bate papo"
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer"
              />
            </Link>

            <Link href="mailto:grupoaltuori@altuori.com">
              <img
                src="/assets/icones/8.svg"
                alt="Icone de uma mensagem alusivo a um e-mail"
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer"
              />
            </Link>

            <Link href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
              <img
                src="/assets/icones/9.svg"
                alt="Icone de um telefone alusivo a uma ligação"
                className="w-12 h-12 md:w-20 md:h-20 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </section>
      <section id="Mapa">
        <div className="flex flex-col">
          <div className="mx-auto py-16">
            <h1 className="text-3xl md:text-5xl font-sm tracking-widest mb-4 border-b-4 border-orange-600 inline-block">
              ONDE ESTAMOS
            </h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3732837763105!2d-43.31173092390603!3d-22.788628233660347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997aea6643b655%3A0xe4516119cb567fb5!2sAv.%20Pres.%20Vargas%2C%292%20-%20Centro%2C%20Duque%20de%20Caxias%2C%20RJ%2C%25070-330!5e!3m2!1spt-BR!2sbr!4v1719441922450!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-80 xl:h-96 mt-8"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
