"use client";
import { openingHours, socials } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { GitHubIcon } from "./GithubIcon";

function Contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 60%",
        end: "bottom center",
        // scrub: true,
        toggleActions: "play reverse play reverse",
      },
      ease: "power1.inOut",
    });

    timeLine
      .from(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.02 })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from(
        "#f-left-leaf",
        {
          xPercent: -50,
          yPercent: 50,
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      )
      .from(
        "#f-right-leaf",
        {
          xPercent: 50,
          yPercent: -50,
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  }, []);
  return (
    <footer id="contact">
      <Image
        src="/images/footer-left-leaf.png"
        width={356}
        height={393}
        alt="left-leaf"
        id="f-left-leaf"
      />
      <Image
        src="/images/footer-right-leaf.png"
        alt="right-leaf"
        width={308}
        height={319}
        id="f-right-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit our Juicery</h3>
          <p>456, Raq Blvd. #404, Riyadh, KSA 12222</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>+966 11 443 3221</p>
          <p>hello@freshjuice.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={32}
                  height={32}
                  className="w-auto"
                />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3>Github Source Code</h3>
          <a
            href="https://github.com/Mojahedhu/next_gsap.git"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
          >
            <div className="flex-center">
              <GitHubIcon className="size-8" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
