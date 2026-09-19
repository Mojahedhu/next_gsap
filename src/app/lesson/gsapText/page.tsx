"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  // TODO: Implement gsap text animation

  useGSAP(() => {
    gsap.to("#text", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      ".para",
      {
        opacity: 0,
        y: 20,
        ease: "power1.inOut",
      },
      {
        stagger: 0.1,
        delay: 1,
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      },
    );
  }, []);

  return (
    <main>
      <h1 id="text" className="translate-y-10 opacity-0">
        GsapText
      </h1>

      <p className="para mt-5 text-gray-500">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="para mt-5 text-gray-500">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="para mt-5 text-gray-500">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="para mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </main>
  );
};

export default GsapText;
