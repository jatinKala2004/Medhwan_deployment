import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestimonialCarouselArrows({ next, previous }) {
  const buttonBaseClasses = "absolute top-1/2 -translate-y-1/2 z-10 bg-black/10 rounded-full w-10 h-10 flex items-center justify-center text-white/60 hover:bg-black/20 hover:text-white transition-all duration-300";
  
  return (
    <>
      <button
        onClick={previous}
        className={`${buttonBaseClasses} left-0 md:-left-4`}
        aria-label="Previous"
        type="button"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        className={`${buttonBaseClasses} right-0 md:-right-4`}
        aria-label="Next"
        type="button"
      >
        <FaChevronRight />
      </button>
    </>
  );
} 