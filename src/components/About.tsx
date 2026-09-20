"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";

function About() {
  const profileContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    if (profileContainerRef.current) {
      gsap.to("#profile-img", {
        scrollTrigger: {
          trigger: profileContainerRef.current,
          start: "top 90%", // Center of container reaches center of viewport
          end: "bottom 50%",
          //   markers: true,
          scrub: true,
          //   toggleActions: "play none none reverse", // Plays forward, reverses on scroll back
        },
        xPercent: (index) => index * 50,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.1,
      });
    }
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    mm.add("(min-width: 1024px)", () => {
      timeLine
        .from(titleSplit.words, {
          opacity: 0,
          duration: 1,
          yPercent: 100,
          ease: "expo.out",
          stagger: 0.02,
        })
        .from("#grid-img-1", {
          yPercent: 100,
          xPercent: 100,
          rotate: 90,
          duration: 1,
          ease: "power1.inOut",
        })
        .from(
          "#grid-img-2",
          {
            yPercent: 100,
            duration: 1,
            ease: "power1.inOut",
          },
          "<",
        )
        .from(
          "#grid-img-5",
          {
            yPercent: 100,
            xPercent: -100,
            rotate: -90,
            duration: 1,
            ease: "power1.inOut",
          },
          "<",
        )
        .from("#grid-img-4", {
          yPercent: -100,
          xPercent: -100,
          rotate: 90,
          duration: 1,
          ease: "power1.inOut",
        })
        .from(
          "#grid-img-3",
          {
            yPercent: -100,
            duration: 1,
            ease: "power1.inOut",
          },
          "<",
        );
    });
    mm.add("(max-width: 1023px)", () => {
      timeLine
        .from(titleSplit.words, {
          opacity: 0,
          duration: 1,
          yPercent: 100,
          ease: "expo.out",
          stagger: 0.02,
        })
        .from(
          ".top-grid div, .bottom-grid div",
          {
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.04,
          },
          "-=0.5",
        );
    });
  }, []);
  return (
    <div id="about">
      <div className="mb-16 px-5 md:px-0">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail mutters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-xl font-bold md:text-3xl">
                  <span>4.5</span>/5
                </p>
                <p className="text-white-100 text-sm">
                  {" "}
                  More than +12000 customers
                </p>
              </div>
              <span ref={profileContainerRef} className="">
                {Array(4)
                  .fill("")
                  .map((_, i) => (
                    <span key={i} className={`h-10 w-10 overflow-hidden`}>
                      <Image
                        id="profile-img"
                        src={`/images/profile${i + 1}.png`}
                        alt="abt-img"
                        style={{ transform: `translateX(${-40 * i}px)` }}
                        unoptimized
                        width={40}
                        height={40}
                        className="inline rounded-full"
                      />
                    </span>
                  ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <Image
            src="/images/abt1.png"
            alt="grid-img-1"
            id="grid-img-1"
            unoptimized
            width={330}
            height={285}
          />
        </div>
        <div className="md:col-span-6">
          <Image
            src="/images/abt2.png"
            alt="grid-img-2"
            id="grid-img-2"
            unoptimized
            width={580}
            height={285}
          />
        </div>
        <div className="md:col-span-3">
          <Image
            src="/images/abt5.png"
            alt="grid-img-5"
            id="grid-img-5"
            unoptimized
            width={860}
            height={860}
          />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <Image
            src="/images/abt3.png"
            alt="abt3"
            id="grid-img-3"
            unoptimized
            width={780}
            height={285}
          />
        </div>
        <div className="md:col-span-4">
          <Image
            src="/images/abt4.png"
            alt="abt4"
            id="grid-img-4"
            unoptimized
            width={480}
            height={285}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
