import { useEffect, useRef } from "react";
import Image from "next/image";
import TextFillAnimation from "@/components/Animations/TextFillAnimation/TextFillAnimation";

const STRIP_IMAGES = [
  {
    src: "/buzzinga-assets/images/hero/jabfab.png",
    alt: "JabFab dashboard project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/melisa.png",
    alt: "MeLiSA mobile project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/911switch.png",
    alt: "911Switch mobile project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/predictr.png",
    alt: "Predictr mobile project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/forecast.png",
    alt: "Forecast dashboard project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/zigzek.png",
    alt: "Zigzek mobile project preview",
  },
  {
    src: "/buzzinga-assets/images/hero/additional-preview.png",
    alt: "Additional project preview",
  },
];

export default function HeroSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const slider = sliderRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!slider || cards.length === 0) return;

    let frameId = 0;
    const startTime = performance.now();
    let pausedAt = 0;
    let pausedTotal = 0;
    let isLinearPaused = false;

    // One-time circular intro before the slider becomes a normal left-moving row.
    const circularDuration = 3000;
    // Smoothly moves every card from its circular slot into its row slot.
    const morphDuration = 800;
    // Time for one full row loop once the slider phase has started.
    const linearDuration = 25000;
    const introDuration = circularDuration + morphDuration;

    const wrap = (value: number, size: number) => ((value % size) + size) % size;
    const easeInOut = (value: number) =>
      value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
    const hasSliderStarted = (time: number) => time - startTime - pausedTotal >= introDuration;

    const pauseLinearSlider = () => {
      if (!hasSliderStarted(performance.now()) || isLinearPaused) return;

      isLinearPaused = true;
      pausedAt = performance.now();
    };

    const resumeLinearSlider = () => {
      if (!isLinearPaused) return;

      pausedTotal += performance.now() - pausedAt;
      isLinearPaused = false;
      pausedAt = 0;
    };

    const animate = (now: number) => {
      const effectiveNow = isLinearPaused ? pausedAt : now;
      const sliderRect = slider.getBoundingClientRect();
      const firstCardRect = cards[0].getBoundingClientRect();
      const count = cards.length;
      const cardWidth = firstCardRect.width || 480;
      const cardHeight = firstCardRect.height || 366;
      const gap = Math.max(16, Math.min(24, sliderRect.width * 0.017));
      const centerX = sliderRect.width / 2 - cardWidth / 2;
      const availableY = Math.max(0, sliderRect.height - cardHeight - 16);
      const radiusX = Math.max(cardWidth * 0.78, Math.min(sliderRect.width * 0.34, cardWidth * 1.58));
      const radiusY = Math.max(0, Math.min(availableY / 2, sliderRect.height * 0.23, cardHeight * 0.58));
      const centerY = 8 + radiusY;
      const lineY = Math.max(0, sliderRect.height - cardHeight);
      const totalLineWidth = count * (cardWidth + gap);
      const elapsed = Math.max(0, effectiveNow - startTime - pausedTotal);
      const isCircular = elapsed < circularDuration;
      const isMorphing = elapsed >= circularDuration && elapsed < circularDuration + morphDuration;
      const isLinear = elapsed >= introDuration;
      const linearElapsed = Math.max(0, elapsed - introDuration);
      const circularTurns = (Math.min(elapsed, circularDuration) / circularDuration) * (count / 2);
      const morphProgress = isMorphing
        ? easeInOut((elapsed - circularDuration) / morphDuration)
        : isLinear
          ? 1
          : 0;

      // Show the full circular motion, then clip only the left/right slider loop.
      slider.style.overflow = isLinear ? "hidden" : "visible";

      cards.forEach((card, index) => {
        const circularSlot = index + circularTurns;
        const angle = -Math.PI / 2 + (circularSlot / count) * Math.PI * 2;
        const circularX = centerX + Math.cos(angle) * radiusX;
        const circularY = centerY + Math.sin(angle) * radiusY;
        const circularScale = 0.82 + ((Math.sin(angle) + 1) / 2) * 0.16;
        const circularOpacity = isCircular || isMorphing ? 1 : 0;
        const targetLineX = centerX + (index - (count - 1) / 2) * (cardWidth + gap);
        const lineTravel = (linearElapsed / linearDuration) * totalLineWidth;
        const linearX = wrap(targetLineX - lineTravel + cardWidth, totalLineWidth) - cardWidth;
        const morphX = circularX + (targetLineX - circularX) * morphProgress;
        const morphY = circularY + (lineY - circularY) * morphProgress;
        const morphScale = circularScale + (1 - circularScale) * morphProgress;

        card.style.transform = `translate3d(${isLinear ? linearX : morphX}px, ${
          isLinear ? lineY : morphY
        }px, 0) scale(${isLinear ? 1 : morphScale})`;
        card.style.opacity = `${isLinear ? 1 : circularOpacity}`;
        card.style.zIndex = `${Math.round(100 + Math.sin(angle) * 20)}`;
      });

      frameId = requestAnimationFrame(animate);
    };

    slider.addEventListener("pointerenter", pauseLinearSlider);
    slider.addEventListener("pointerleave", resumeLinearSlider);
    frameId = requestAnimationFrame(animate);

    return () => {
      slider.removeEventListener("pointerenter", pauseLinearSlider);
      slider.removeEventListener("pointerleave", resumeLinearSlider);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="w-full bg-white pt-[164px] pb-0">
      {/* Hero text block */}
      <div className="mx-auto w-full px-6 text-center">
        <TextFillAnimation
          as="h1"
          className="text-[28px] leading-[1.1] font-semibold text-[#262D30] tracking-normal min-[810px]:text-[44px] xl:text-[56px]"
          color="#262D30"
        >
          Ship Better Products, Faster,
          <br />
          With AI&#8209;Native Design &amp; Development
        </TextFillAnimation>

        <div className="mt-6 flex flex-col items-center gap-0">
          <p className="text-[18px] leading-[1.5] text-[#262D30] md:text-[20px]">
            We blend design, engineering, and AI to deliver better outcomes, faster.
          </p>
          <p className="text-[18px] leading-[1.5] text-[#262D30] md:text-[20px]">
            Transform your ideas into intelligent digital products.
          </p>
        </div>
      </div>

      {/* Image motion slider */}
      <div
        ref={sliderRef}
        className="hero-motion-slider w-full overflow-hidden"
        style={{ "--hero-slide-count": STRIP_IMAGES.length } as React.CSSProperties}
      >
        <div className="hero-motion-stage">
          {STRIP_IMAGES.map((img, i) => (
            <div
              key={i}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              className="hero-motion-card overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={480}
                height={366}
                className="object-cover w-full h-full"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
