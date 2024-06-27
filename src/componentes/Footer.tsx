import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div>
        <div>
          <div>
            <img src="/assets/logotipo.png" alt="Logotipo" />
            <p>
              Transformando Visões em Realidade: Seu Negócio no Ápice do
              Sucesso.unto.
            </p>
          </div>
          <div>
            <Link href="">
              <img src="/assets/icones/4.svg" alt="Icone do Linkedin" />
            </Link>
            <Link href="">
              <img src="/assets/icones/5.svg" alt="Icone do Facebook" />
            </Link>
            <Link href="">
              <img src="/assets/icones/6.svg" alt="Icone do Instagram" />
            </Link>
          </div>
        </div>
        <div>
          <p>Todos os direitos reservados. | © 2020 GRUPO AUTUORI</p>
          <p>54.251.497 BEATRIZ HENRIQUES DIAS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
