"use client";
import { allCocktails } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState, useRef } from "react";

function Menu() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      {
        opacity: 0,
        xPercent: -100,
      },
      { opacity: 1, xPercent: 0, duration: 1, ease: "power1.inOut" },
    );

    gsap.fromTo(
      ".details h2, .details p",
      {
        opacity: 0,
        yPercent: 100,
      },
      { opacity: 1, yPercent: 0, ease: "power1.inOut" },
    );
  }, [currentIndex]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    tl.fromTo(
      "#m-right-leaf",
      { yPercent: -50, xPercent: 50 },
      {
        yPercent: 0,
        xPercent: 0,
        ease: "power1.inOut",
      },
    ).fromTo(
      "#m-left-leaf",
      { yPercent: 50, xPercent: -50 },
      {
        yPercent: 0,
        xPercent: 0,
        ease: "power1.inOut",
      },
    );
  }, []);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (offset: number) => {
    return allCocktails[
      (currentIndex + offset + totalCocktails) % totalCocktails
    ];
  };

  const prevCocktail = getCocktailAt(-1);
  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-label="menu-heading">
      <Image
        src="/images/slider-left-leaf.png"
        width={275}
        height={304}
        unoptimized
        id="m-left-leaf"
        alt="left-leaf"
      />
      <Image
        src="/images/slider-right-leaf.png"
        width={241}
        unoptimized
        height={355}
        id="m-right-leaf"
        alt="right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${isActive ? "border-white text-white" : "border-white/50 text-white/50"}`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <Image
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden={true}
              width={38}
              height={38}
            />
          </button>
          <button className="" onClick={() => goToSlide(currentIndex + 1)}>
            <span className="ml-auto text-right">{nextCocktail.name}</span>
            <Image
              src="/images/left-arrow.png"
              alt="left-arrow"
              className="ml-auto"
              aria-hidden={true}
              width={38}
              height={38}
            />
          </button>
        </div>

        <div className="cocktail">
          <Image
            src={currentCocktail.image}
            alt="cocktail"
            width={505}
            height={508}
            className="w-auto"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
