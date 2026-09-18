"use client";
import { cocktailLists, mockTailLists } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

function Cocktails() {
  useGSAP(() => {
    const parallaxTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeLine.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });

    parallaxTimeLine.from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
  }, []);
  return (
    <section id="cocktails" className="noisy">
      <Image
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        id="c-left-leaf"
        loading="eager"
        width={294}
        height={332}
        unoptimized
      />
      <Image
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        id="c-right-leaf"
        width={315}
        height={332}
        unoptimized
      />
      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cocktails;
