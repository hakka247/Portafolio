"use client"

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles";

const AboutMePage = () => {
    return (
        <>
            <CoverParticles /> {/* Fondo fijo detrás */}
            <TransitionPage />
            <div className="relative z-10"> {/* Esto asegura que el contenido esté encima */}
                <ContainerPage>
                    <Avatar />
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10 text-white">
                        Toda mi{' '}
                        <span className="font-bold text-secondary">
                            trayectoria
                        </span>
                    </h1>

                    <TimeLine />
                </ContainerPage>
            </div>
        </>
    );
}

export default AboutMePage;
