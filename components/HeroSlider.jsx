'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroSliderSkeleton from "../components/skalaton/HeroSliderSkeleton";
import convertImagesToWebP from "../lib/convertImagesToWebP";

import 'swiper/css';
import 'swiper/css/effect-fade';


/* ─── Main component ────────────────────────────────────────── */

export default function HeroSlider() {
    const swiperRef = useRef(null);
    const [allBanner, setallBanner] = useState([]);
    const [IsLoading, setIsLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState('');

    const goTo = (index) => {
        swiperRef.current?.slideToLoop(index);
    };



    const fetchAccessories = async () => {
        try {

            setIsLoading(true);

            // Make API call to get all the product
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/allbanner`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            const res = await response.json();
            setallBanner(res?.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setIsLoading(false);
        }
    };


    useEffect(() => {


        // Handler to call on window resize
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }


        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // fetch data from the server
        fetchAccessories();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, [])


    // Inside HeroSlider, at the top of the return:
    if (IsLoading && allBanner.length === 0) return <HeroSliderSkeleton />;




    console.log(allBanner);


    return (
        <section className="relative w-full min-h-fit lg:min-h-[400px] h-fit overflow-hidden">

            <Swiper
                key={allBanner.length}   // 👈 important
                onSwiper={(swiper) => { swiperRef.current = swiper; }}
                onSlideChange={(swiper) => { setActiveIndex(swiper.realIndex) }}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                loop={allBanner.length > 1}
                speed={900}
                className="!w-full !h-full"
            >
                {allBanner.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive }) => <SlideContent slide={slide} isActive={isActive} windowWidth={windowWidth} />}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ── Custom Pagination ── */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {allBanner.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`rounded-full cursor-pointer transition-all duration-300 ease-out ${activeIndex === i ? 'w-8 h-3 bg-white border-2 border-white' : 'w-3 h-3 rounded bg-transparent border-2 border-white'}`} />
                ))}
            </div>

        </section>
    );
}




/* ─── Individual slide ──────────────────────────────────────── */
function SlideContent({ slide, isActive, windowWidth }) {
    const stagger = (i) => ({
        hidden: { opacity: 0, y: 26 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
        },
    });

    return (
        <Link href={slide?.Route} className={`w-full h-fit bg-gray-200 flex items-center overflow-hidden`}>


            <Image src={convertImagesToWebP(windowWidth > 768 ? slide?.img : slide?.smallimg)} alt={"Hero Banner Image"} width={0} height={0} sizes="100vw" className="w-full h-full object-cover" priority />


        </Link >
    );
}