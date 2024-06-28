'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  function scrollToTop() {
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <footer className="bg-[#323131] text-white pt-8 relative">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center text-center mb-4 items-center gap-8">
            <img src="/assets/logotipo.png" alt="Logotipo" className="w-36" />
            <p className="text-sm md:text-base xl:text-xl font-semibold">
              Transformando Visões em Realidade: Seu Negócio no Ápice do
              Sucesso.
            </p>
          </div>
          <div className="flex space-x-4 justify-center">
            <Link href="/">
              <img
                src="/assets/icones/4.svg"
                alt="Icone do Linkedin"
                className="w-16"
              />
            </Link>

            <Link href="https://www.facebook.com/grupo.altuori">
              <img
                src="/assets/icones/5.svg"
                alt="Icone do Facebook"
                className="w-16"
              />
            </Link>

            <Link href="https://www.instagram.com/grupo_altuori/">
              <img
                src="/assets/icones/6.svg"
                alt="Icone do Instagram"
                className="w-16"
              />
            </Link>
          </div>
        </div>
        <div className="text-center mt-8 bg-[#242323] w-full h-40 flex flex-col justify-center items-center gap-6">
          <p className="text-sm md:text-base xl:text-xl font-semibold">
            Todos os direitos reservados. | © 2020 GRUPO AUTUORI
          </p>
          <p className="text-sm md:text-base xl:text-xl font-semibold">
            54.251.497 BEATRIZ HENRIQUES DIAS
          </p>
        </div>
      </div>
      <div className="flex items-center">
        {isVisible && (
          <button onClick={scrollToTop}>
            <img
              src="/assets/icones/3.svg"
              alt="Seta para ir ao topo do site"
              className="w-8 md:w-12 bottom-12 left-5 md:left-10 fixed"
            />
          </button>
        )}
        <Link href="//api.whatsapp.com/send?phone=+5521992390346&text=Olá tudo bem? Gostaria de saber mais sobre os serviços disponíveis! Eu vim através do site de vocês!!">
          <img
            src="/assets/icones/1.png"
            alt=""
            className="w-14 md:w-20 bottom-8 right-5 md:right-10 fixed"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
