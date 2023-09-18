import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React, { ComponentProps } from "react";

type CardProjetoProps =   ComponentProps<'a'>  &{
    srcImg: string;
    title: string;
    description: string;
}


export default function CardProjeto({srcImg, title, description, ...props} : CardProjetoProps) {
    return (
        <a className={`h-5/6 w-9/12 transition-all duration-500 rounded-md overflow-hidden bg-blue-950 hover:bg-blue-600 shadow-2xl mx-auto ${props.className}`} {...props}>
            <div className="h-4/6 w-full">
                <Image alt="" className="h-full w-full object-cover" width={600} height={600} src={srcImg}/>
            </div>
            <div className="h-2/6 w-full px-5 py-5">
                <h3 className="font-bold font-raleway">
                    {title}
                </h3>
                <p className="font-light font-raleway">
                    {description}
                </p>
            </div>
        </a>
    );
}