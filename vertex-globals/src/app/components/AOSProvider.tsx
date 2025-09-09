"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
    children: React.ReactNode;
};

const AOSProvider = ({ children }: Props) => {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            offset: 80,
            easing: 'ease-in-out',
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
        });
    }, []);

    useEffect(() => {
        // Reset all AOS elements and refresh
        const aosElements = document.querySelectorAll('[data-aos]');
        aosElements.forEach(element => {
            element.classList.remove('aos-animate');
        });

        // Use refreshHard to completely reset AOS
        AOS.refreshHard();
    }, [pathname]);

    return <>{children}</>;
};

export default AOSProvider;
