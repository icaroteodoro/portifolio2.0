
import Link from "next/link";
import { Props } from "next/script";
import React from "react";



export default function Menu( props : Props) {
  return (
    <div className={` ${props.className} transition-all duration-300 fixed md:right-16 right-0 md:top-8 top-0 bg-blue-600 flex shadow-lg`}>
      <div className="my-auto space-y-8 px-8">
        <div>
          <Link href="/" className={`${props.src} text-white font-light font-open text-xl`}>
            HOME
          </Link>
        </div>
        <div>
          <Link href="#sobre-mim" className={`${props.src} text-white font-light font-open text-xl`}>
            SOBRE MIM
          </Link>
        </div>
        <div>
          <Link href="#meus-projetos" className={`${props.src} text-white font-light font-open text-xl`}>
            PROJETOS
          </Link>
        </div>
        <div>
          <Link href="#contato" className={`${props.src} text-white font-light font-open text-xl`}>
            CONTATO
          </Link>
        </div>
      </div>
    </div>
  );
}
