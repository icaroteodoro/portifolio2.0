'use client';
import React from "react";
import { useState } from "react";
import Menu from "./Menu";
import MenuMediaSocial from "./MenuMediaSocial";

import plus from '../assets/plus.svg';
import Image from "next/image";
import MenuMobile from "./MenuMobile";
import Footer from "@/app/sections/Footer";


export default function Layout({children}: {children: React.ReactNode}) {
  const [rotate, setRotate] = useState('');
  const [view, setView] = useState('h-0 w-0 invisible');
  const [viewMobile, setViewMobile] = useState('-right-full');
  const [visible, setVisible] = useState('invisible');
  
  const viewMenu = () => {
    if(rotate == ''){
      setRotate('-rotate-225');
      setView('md:w-72 w-6/12 md:h-96 h-full visible');
      setTimeout(() => setVisible('visible'), 100);
      setViewMobile('right-0');
      
    }else{
      setRotate('');
      setView('h-0 w-0 invisible');
      setVisible('hidden');
      setViewMobile('-right-full');
    }
  };

  return (
    <div>
      <a href="/" className="absolute lg:fixed left-8 top-5 text-6xl text-white drop-shadow-lg font-raleway font-bold">IT.</a>
      <div className="fixed top-8 right-10 lg:right-16 z-50">
        <Image onClick={() => viewMenu()} className={`${rotate} transition duration-500 hover:cursor-pointer mix-blend-color-burn drop-shadow-lg`}  src={plus} width={50} height={50} alt=""/>
      </div>
        {children}
      <Footer/>
      <Menu className={`${view} hidden lg:flex`} src={visible}/>
      <MenuMobile className={`${viewMobile}`}/>

      <MenuMediaSocial className="fixed bottom-10 left-5 hidden lg:flex"/>
    </div>
  );
}
