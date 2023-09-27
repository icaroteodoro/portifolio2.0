"use client";
import CardProjeto from "@/components/CardProjeto";
import Link from "next/link";



export default function MeusProjetos() {


  return (
    <section id="meus-projetos" className="h-auto w-full bg-blue-100 px-5 py-20 md:p-40 flex flex-col items-center">
      <div className="my-auto w-full">
        <div className="self-start">
          <h2 className="text-4xl md:text-6xl font-raleway font-bold mb-14 text-blue-500">
            /meus-projetos
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-3 justify-between mb-16">
          <CardProjeto
            title="API ENTREGÔ"
            href="https://github.com/icaroteodoro/EntregoAPI"
            description="Essa é uma uma API que estou desenvolvendo para um APP de delivery."
            technologies={["JAVA", "Spring", "MySQL"]}
          />
          <CardProjeto
            title="API DE FINANÇAS"
            href="https://github.com/icaroteodoro/desafio5-backend"
            description="Fiz esse projeto para um teste técnico e resolvi evoluir ele com novas funcionalidades."
            technologies={["JAVA", "SPRING"]}
          />
          <CardProjeto
            title="BUSCADOR DE CEP"
            href="https://github.com/icaroteodoro/buscador-cep"
            description="Fiz um buscador com o intuito de aprender a usa a API de busca de CEP."
            technologies={["React.js", "Axios"]}
          />
        </div>
        <div className=" flex justify-center">
          <Link
            className="bg-white text-blue-500 font-raleway px-24 lg:px-40 py-4 text-3xl rounded hover:bg-blue-950 hover:text-white transition-colors duration-700"
            href="/"
          >
            VER TODOS
          </Link>
        </div>
      </div>
    </section>
  );
}
