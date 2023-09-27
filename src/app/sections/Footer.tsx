import Link from "next/link";

export default function Footer(){
    const copyEmail = () => {
        navigator.clipboard.writeText("icaro.teodoro84@icloud.com");
        alert("O email foi copiado para a sua área de transferencia!");
    }
    const copyNumber = () => {
        navigator.clipboard.writeText("+5582998389953");
        alert("O número foi copiado para a sua área de transferencia!");
    }
    return(
        <footer id="rodape" className="w-full h-screen bg-blue-950 flex flex-col px-5 md:px-40 font-open">
            <div className="my-auto divide-y divide-white">
                <div className="w-full flex flex-col lg:flex-row mb-10">
                    <div className="w-full lg:w-6/12 flex flex-col gap-8 lg:gap-12">
                        <h2 className="text-3xl lg:text-4xl">FALE COMIGO</h2>
                        <p className="hover:cursor-pointer text-lg lg:text-2xl" onClick={() => {copyEmail()}}>icaro.teodoro84@icloud.com</p>
                        <p className="hover:cursor-pointer text-lg lg:text-2xl" onClick={() => {copyNumber()}}>+55 82 998389953</p>
                    </div>
                    <div className="w-full lg:w-6/12 flex flex-col gap-8 lg:gap-12 mt-20 lg:mt-0 text-left lg:text-right justify-start">
                        <div>
                            <Link className="text-xl font-raleway" href="/">HOME</Link>
                        </div>
                        <div>
                            <Link className="text-xl font-raleway" href="#sobre-mim">SOBRE MIM</Link>
                        </div>
                        <div>
                            <Link className="text-xl font-raleway" href="#meus-projetos">MEUS PROJETOS</Link>
                        </div>
                        <div>
                            <Link className="text-xl font-raleway" href="#contato">CONTATO</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full py-10">
                    <p className="text-xl font-light">© Ícaro Teodoro Canuto 2023</p>
                </div>
            </div>
        </footer>
    );
}