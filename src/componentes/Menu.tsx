import Link from "next/link";
import React from "react";

const Menu: React.FC = () => {
  return (
    <header className="">
      <div>
        <img src="/assets/logotipo.png" alt="Imagem do logotipo" />
        <nav>
          <ul>
            <li>
              <Link href="">HOME</Link>
            </li>
            <li>
              <Link href="">SOBRE</Link>
            </li>
            <li>
              <Link href="">SERVIÇOS</Link>
            </li>
            <li>
              <Link href="">CONTATO</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
