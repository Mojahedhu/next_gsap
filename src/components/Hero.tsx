"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom center";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        tl.to(videoRef.current, {
          currentTime: videoRef.current?.duration,
        });
      };
    }
  }, []);

  return (
    <>
      <section id="hero" className="noisy min-h-[120vh]">
        <h1 className="title">FREJUIC</h1>

        <Image
          src="/images/hero-left-leaf.png"
          width={266}
          height={461}
          unoptimized
          alt="left-leaf"
          className="left-leaf"
        />
        <Image
          src="/images/hero-right-leaf.png"
          width={266}
          height={461}
          alt="right-leaf"
          unoptimized
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
}

export default Hero;
