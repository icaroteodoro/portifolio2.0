import { User, LayoutGrid, Code2, MessageSquare } from "lucide-react";

export default function Resumo() {
  return (
    <section className=" flex flex-col lg:flex-row h-screen">
      <div className="w-12/12 lg:w-5/12 h-1/2 lg:h-screen flex justify-end bg-blue-100">
        <div className="my-auto w-12/12 text-black">
          <div className="mb-5">
            <span className="font-regular font-raleway text-2xl md:text-4xl text-blue-500">
              Olá, eu sou
            </span>{" "}
          </div>
          <strong><h3 className="font-extrabold font-raleway text-4xl md:text-6xl 2xl:text-8xl text-blue-500">
            Ícaro Teodoro.
          </h3></strong>
          <div className="mt-5">
            <span className="font-regular font-raleway text-2xl md:text-4xl  text-blue-500">
              Desenvolvedor FullStack
            </span>
          </div>
        </div>
      </div>
      <div className="w-12/12 lg:w-7/12 h-1/2 lg:h-screen bg-blue-100 flex flex-col px-5 md:px-40 py-8">
        <div className="h-full w-12/12 flex">
          <div className="h-1/2 w-full my-0 md:my-auto">
            <div className="flex w-12/12 h-full md:h-1/2 gap-4 lg:gap-4 py-2">
              <a
                href="#sobre-mim"
                className="rounded-3xl bg-blue-300 w-6/12 lg:w-8/12 h-full flex justify-between p-5 transition-colors duration-500 hover:bg-white"
              >
                <p className="text-sm md:text-lg font-raleway font-bold text-blue-950 self-end">
                  /sobre-mim
                </p>
                <User className="self-start lg:self-end w-2/12 text-blue-950"  size={35} />
              </a>
              <a
                href="#meus-projetos"
                className="rounded-3xl bg-blue-500 w-6/12 lg:w-4/12 h-full flex justify-between p-5 transition-colors duration-500 hover:bg-white"
              >
                <p className="text-sm md:text-lg font-raleway font-bold text-blue-950 self-end">
                  /meus-projetos
                </p>
                <LayoutGrid className="self-start lg:self-end w-2/12 text-blue-950" size={35} />
              </a>
            </div>
            <div className="flex w-12/12 h-full md:h-1/2 gap-4 lg:gap-4 py-2 ">
              <a
                href="#rodape"
                className="rounded-3xl  bg-blue-500 w-6/12 lg:w-3/12 h-full flex justify-between p-5 transition-colors duration-500 hover:bg-white"
              >
                <p className="text-sm md:text-lg font-raleway font-bold text-blue-950 self-end">
                  /rodape
                </p>
                <Code2 className="self-start lg:self-end w-2/12 text-blue-950"  size={35} />
              </a>
              <a
                href="#contato"
                className="rounded-3xl bg-blue-300 w-6/12 lg:w-9/12 h-full flex justify-between p-5 transition-all duration-500 hover:bg-white hover:[&>*]:text-blue-950"
              >
                <p className="text-sm md:text-lg font-raleway font-bold text-blue-950 self-end">
                  /contato
                </p>
                <MessageSquare className="self-start lg:self-end w-2/12 text-blue-950" size={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
