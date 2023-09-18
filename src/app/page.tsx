import Layout from "@/components/Layout";
import Resumo from "./sections/Resumo";
import SobreMim from "./sections/SobreMim";
import MeusProjetos from "./sections/MeusProjetos";
import Script from 'next/script';


export default function Home() {
  return (    
    <Layout>
      <Resumo/>
      <SobreMim/>
      {/* <MeusProjetos/> */}
    </Layout>
  )
}
