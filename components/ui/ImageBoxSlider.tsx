import { useRef, useState } from "react";
import Image from "next/image";

const PROJECT_DETAIL_IMAGE_PATH = "/buzzinga-assets/images/project-detail";
const SLIDE_GAP = 10;

function ImageBoxSliderArrow({
  direction,
  disabled,
  onClick,
}: {
  direction: "Previous" | "Next";
  disabled: boolean;
  onClick: () => void;
}) {
  const image =
    direction === "Previous"
      ? "carousel-arrow-prev.svg"
      : "carousel-arrow-next.svg";

  return (
    <button
      type="button"
      aria-label={direction}
      disabled={disabled}
      onClick={onClick}
      className={`absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 overflow-hidden rounded-[40px] border-0 bg-[rgba(0,0,0,0.2)] p-0 transition-opacity ${
        direction === "Previous" ? "left-5" : "right-5"
      } ${disabled ? "cursor-default opacity-0" : "cursor-pointer opacity-100"}`}
    >
      <Image
        src={`${PROJECT_DETAIL_IMAGE_PATH}/${image}`}
        alt=""
        width={40}
        height={40}
        unoptimized
        className="block h-10 w-10"
      />
    </button>
  );
}

export function ImageBoxSlider({
  images,
  label,
  className = "pt-24 min-[810px]:pt-16",
  containerClassName = "max-w-[1152px]",
}: {
  images: string[];
  label?: string;
  className?: string;
  containerClassName?: string;
}) {
  const sliderRef = useRef<HTMLUListElement>(null);
  const snapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelLockRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = images.length;

  const getSlideWidth = (slider: HTMLUListElement) =>
    slider.children[0]?.getBoundingClientRect().width ?? slider.clientWidth;

  const scrollToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const nextIndex = Math.max(0, Math.min(slideCount - 1, index));
    slider.scrollTo({
      left: nextIndex * (getSlideWidth(slider) + SLIDE_GAP),
      behavior: "smooth",
    });
    setActiveIndex(nextIndex);
  };

  const snapToNearestSlide = (slider: HTMLUListElement) => {
    if (snapTimeoutRef.current) {
      clearTimeout(snapTimeoutRef.current);
    }

    snapTimeoutRef.current = setTimeout(() => {
      scrollToSlide(Math.round(slider.scrollLeft / (getSlideWidth(slider) + SLIDE_GAP)));
    }, 120);
  };

  const handleWheel = (event: React.WheelEvent<HTMLUListElement>) => {
    if (Math.abs(event.deltaX) < 8) return;

    event.preventDefault();

    if (wheelLockRef.current) return;
    wheelLockRef.current = true;
    scrollToSlide(activeIndex + (event.deltaX > 0 ? 1 : -1));

    window.setTimeout(() => {
      wheelLockRef.current = false;
    }, 520);
  };

  return (
    <section
      className={`flex w-full justify-center overflow-hidden px-4 min-[810px]:px-8 min-[1200px]:px-16 ${className}`}
    >
      <div className={`flex w-full ${containerClassName} flex-col items-center gap-6 min-[810px]:gap-4`}>
        <div className="relative flex w-full overflow-hidden min-[810px]:rounded-[32px]">
          <ul
            ref={sliderRef}
            className="project-scrollbar m-0 flex w-full snap-x snap-mandatory list-none gap-[10px] overflow-x-auto overflow-y-hidden scroll-smooth p-0"
            onScroll={(event) => {
              const slideWidth = getSlideWidth(event.currentTarget);
              setActiveIndex(
                Math.round(event.currentTarget.scrollLeft / (slideWidth + SLIDE_GAP)),
              );
              snapToNearestSlide(event.currentTarget);
            }}
            onWheel={handleWheel}
          >
            {images.map((image) => (
              <li key={image} className="w-full shrink-0 snap-start">
                <Image
                  src={`${PROJECT_DETAIL_IMAGE_PATH}/${image}`}
                  alt=""
                  width={1200}
                  height={700}
                  unoptimized
                  sizes="(min-width: 1200px) 1152px, calc(100vw - 32px)"
                  className="block h-auto w-full"
                />
              </li>
            ))}
          </ul>
          <ImageBoxSliderArrow
            direction="Previous"
            disabled={activeIndex === 0}
            onClick={() => scrollToSlide(activeIndex - 1)}
          />
          <ImageBoxSliderArrow
            direction="Next"
            disabled={activeIndex === slideCount - 1}
            onClick={() => scrollToSlide(activeIndex + 1)}
          />
        </div>
        {label ? (
          <p className="m-0 w-full text-center text-[16px] font-normal leading-[25.6px] text-[rgba(36,36,36,0.7)]">
            {label}
          </p>
        ) : null}
      </div>
    </section>
  );
}
