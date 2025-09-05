import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="700" height="600" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                    Hola, soy{" "}
                    <span className="font-bold text-secondary">Daniel</span>
                    <br />
                    <TypeAnimation
                    sequence={[
                        "Técnico en Programación",
                        1200,
                        "Analista de Sistemas",
                        1200,
                        "Desarrollador Web",
                        1200,
                        "Apasionado por la tecnología",
                        1200,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-secondary"
                    />
                    </h1>

                    <p className="mx-auto mb-2 text-lg md:text-xl md:mx-0 md:mb-8">
                        Soy estudiante en etapa final de la carrera de{" "}
                        <strong>Técnico en Programación y Análisis de Sistemas</strong>.
                        Me apasiona crear soluciones digitales que sean prácticas y
                        accesibles, con especial interés en el desarrollo web, el diseño de
                        sistemas y el análisis de datos.  
                        <br />
                        Estoy en búsqueda de mi primera experiencia laboral para aportar
                        mis conocimientos y seguir creciendo como profesional.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="https://wa.me/56983012352"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                        Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;