import Image from "next/image";
import { Link2 } from "lucide-react";
import React, { ComponentProps } from "react";

type CardProjetoProps = ComponentProps<"a"> & {
  title: string;
  description: string;
  technologies: string[];
  href: string;
};

export default function CardProjeto({
  title,
  description,
  technologies,
  href,
  ...props
}: CardProjetoProps) {
  return (
    <a
      href={href}
      className={`h-full w-9/12 transition-all duration-500 rounded-md overflow-hidden bg-white hover:bg-blue-100 shadow-2xl mx-auto ${props.className}`}
      {...props}
    >
      <div className="h-3/6 w-full px-5 py-5 mb-2">
        <div className="flex justify-between ">
          <h3 className="font-bold my-auto font-raleway text-blue-500">
            {title}
          </h3>
          <a href={href}>
            <Link2 className="text-blue-500" size={32} />
          </a>
        </div>
        <p className="font-regular font-raleway text-blue-500">{description}</p>
      </div>
      <div className="h-3/6 flex px-5">
        <div className="flex gap-3 my-auto">
          {technologies.map((item) => {
            return (
              <div
                key={item}
                className="px-2 py-1 w-auto bg-gray-100 rounded-md"
              >
                <p className="text-black font-raleway">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </a>
  );
}
