"use client"

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href='/'>
                    
                        <h1 className="text-4xl font-bold text-secondary">
                            Daniel
                            <span className="my-3 text-4xl font-bold text-center md:text-left"> Bozo</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
               
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Estudiante Técnico en Programación
                            <span className="text-secondary"> y Análisis de Sistemas</span>
                        </h1>
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;