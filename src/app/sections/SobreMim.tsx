export default function SobreMim() {
  return (
    <section id="sobre-mim" className="h-screen w-full bg-blue-500 px-5 md:px-40 flex font-raleway">
      <div className="my-auto">
        <h2 className="text-4xl md:text-6xl font-raleway font-bold mb-14">
          /sobre-mim
        </h2>
        <div className="">
          <h2 className="font-raleway font-bold text-lg md:text-4xl mb-3">Quem sou eu?</h2>
          <p className="font-raleway font-medium text-lg md:text-2xl">
            Meu nome Ícaro Teodoro, sou brasileiro, alagoano, nascido em 1998 e conheci a programação em 2013 quando ingressei no ensino médio técnico em informática no Intituto Federal de Alagoas onde me formei.
            Hoje sou graduando em Ciência da Computação pela faculdade Descomplica e também Desenvolvedor FullStack Jr. na ClickEvolue, uma agência de marketing digital de Maceió.
          </p>
        </div>
        <div className="mb-14">
          <p className="font-raleway font-medium text-lg md:text-2xl">
            Já fui monitor de Programação Orientada a Objetos e já ministrei alguns workshops ensinando Java com Hibernate. Atualmente trabalho com HTML, CSS, JavaScript e PHP, mas em meus projetos pessoais, utilizo as bibliotecas React.js para o frontend, ReactNative para apps e Java com Spring para o backend.
          </p>
        </div>
        <a
          href="/"
          className="text-2xl font-raleway font-semibold transition-colors duration-700 text-black bg-white px-8 py-2 rounded hover:bg-gray-800 hover:text-white"
        >
          SABER MAIS
        </a>
      </div>
    </section>
  );
}
