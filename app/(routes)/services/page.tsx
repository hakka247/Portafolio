import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import { CoverParticles } from "@/components/cover-particles"; // <- Importa tu fondo

const ServicesPage = () => {
    return (
        <>
            <CoverParticles /> {/* <- Aquí siempre estará de fondo */}
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="relative z-10">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Como <span className="font-semibold text-secondary">desarrollador web</span>, 
                        me especializo en crear experiencias digitales modernas y funcionales. 
                        Diseño y desarrollo sitios web responsivos, optimizados para buscadores 
                        y fáciles de mantener.  
                        <br /><br />
                        Mi enfoque combina buenas prácticas en código con un diseño atractivo 
                        que potencie la identidad de cada proyecto.
                        <br /><br />
                        
                    </p>
                    <a 
                        href="https://wa.me/56983012352" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 transition-all"
                        
                    >
                        Contacta conmigo
                    </a>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;