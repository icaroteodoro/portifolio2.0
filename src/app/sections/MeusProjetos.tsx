"use client";
import CardProjeto from "@/components/CardProjeto";
import Link from "next/link";



export default function MeusProjetos() {


  return (
    <section id="meus-projetos" className="h-screen w-full bg-slate-200 px-5 md:px-40 flex flex-col justify-center items-center">
      <div className="w-full">
        <div className="self-start">
          <h2 className="text-4xl md:text-6xl font-raleway font-bold mb-14 text-blue-950">
            /meus-projetos
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-4/6 justify-between">
          <CardProjeto
            href="/"
            title="MEU PROJETO"
            srcImg="/img/biota.png"
            description="Projeto feito para um teste técnico usando PHP."
          />
          {/* <CardProjeto
            href="/"
            title="Meu Projeto"
            srcImg="/img/biota.png"
            description="Projeto feito para um teste técnico usando PHP."
          /> */}
          {/* <CardProjeto
            href="/"
            title="Meu Projeto"
            srcImg="/img/biota.png"
            description="Projeto feito para um teste técnico usando PHP."
          /> */}
        </div>
        <div className=" flex justify-center">
          <Link
            className="bg-blue-950 text-white font-raleway px-40 py-4 text-3xl rounded hover:bg-white hover:text-blue-950 transition-colors duration-700"
            href="/"
          >
            VER TODOS
          </Link>
        </div>
      </div>
    </section>
  );
}
