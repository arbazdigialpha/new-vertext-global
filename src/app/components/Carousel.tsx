"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface CarouselProps {
    children: React.ReactNode;
    autoPlay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showDots?: boolean;
    slidesToShow?: number;
}

const Carousel = (props: CarouselProps) => {
    const {
        children,
        autoPlay = false,
        interval = 3000,
        showArrows = true,
        showDots = true,
        slidesToShow = 4
    } = props;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [responsiveSlidesToShow, setResponsiveSlidesToShow] = useState(slidesToShow);
    const childrenArray = Array.isArray(children) ? children : [children];

    // Responsive breakpoints
    useEffect(() => {
        const updateSlidesToShow = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setResponsiveSlidesToShow(1);
            } else if (width <= 576) {
                setResponsiveSlidesToShow(2);
            } else if (width <= 768) {
                setResponsiveSlidesToShow(2);
            } else if (width <= 992) {
                setResponsiveSlidesToShow(3);
            } else {
                setResponsiveSlidesToShow(4);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, []);

    const totalSlides = Math.ceil(childrenArray.length / responsiveSlidesToShow);

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, totalSlides]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    // Group children into slides based on responsive slidesToShow
    const slides = [];
    for (let i = 0; i < childrenArray.length; i += responsiveSlidesToShow) {
        slides.push(childrenArray.slice(i, i + responsiveSlidesToShow));
    }

    return (
        <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slideItems, slideIndex) => (
                    <div key={slideIndex} className="carousel-slide">
                        {slideItems.map((child, itemIndex) => (
                            <div key={itemIndex} className="carousel-item">
                                {child}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {showArrows && totalSlides > 1 && (
                <>
                {/* <ChevronLeft /> */}
                    <button className="carousel-arrow carousel-prev" onClick={goToPrevious}>
                    {/* <CaretLeftIcon size={20} weight="bold" color="#0a2a4a" /> */}
                    <ChevronLeft color="#1874d2" strokeWidth={2} />
                    </button>
                    <button className="carousel-arrow carousel-next" onClick={goToNext}>
                    <ChevronRight color="#1874d2" strokeWidth={2} />
                    </button>
                </>
            )}

            {showDots && totalSlides > 1 && (
                <div className="carousel-dots">
                    {Array.from({ length: totalSlides }, (_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
