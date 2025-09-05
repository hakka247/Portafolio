"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 25 },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full py-6 relative swiper-services" // <-- clase añadida
        >


            {serviceData.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                    <div className="flex flex-col items-center md:items-start gap-4 w-full max-w-[350px] md:max-w-[500px] p-6 rounded-lg bg-[rgba(65,47,123,0.15)] border-2 border-transparent hover:border-secondary hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                        
                        {}
                        <div className="text-4xl text-secondary mb-2 md:mb-0 md:mr-4 flex-shrink-0">
                            {item.icon}
                        </div>

                        {}
                        <div className="text-center md:text-left">
                            <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SliderServices;
