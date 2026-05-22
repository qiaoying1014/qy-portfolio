"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type JourneyItem = {
  label: string;
  title: string;
  description: string;
};

type JourneyRoadmapProps = {
  items: JourneyItem[];
};

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin);

export function JourneyRoadmap({ items }: JourneyRoadmapProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = section?.querySelector<HTMLElement>("[data-roadmap-track]");
      const car = section?.querySelector<HTMLElement>("[data-roadmap-car]");
      const mobileTimeline = section?.querySelector<HTMLElement>("[data-mobile-timeline]");
      const mobileLine = section?.querySelector<HTMLElement>("[data-mobile-line]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-roadmap-card]");

      if (!section || !track || !car) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const horizontalDistance = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);
        const scrollDistance = () => horizontalDistance() * 1.65;

        gsap.set(cards, { autoAlpha: 0.35, y: 24 });
        gsap.set(cards[0], { autoAlpha: 1, y: 0 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1.15,
            start: "top top",
            end: () => `+=${scrollDistance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        timeline.to(
          track,
          {
            x: () => -horizontalDistance(),
            duration: 1,
            ease: "none",
          },
          0,
        );

        timeline.to(
          car,
          {
            motionPath: {
              path: "#journey-road-path",
              align: "#journey-road-path",
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: 0.02,
              end: 0.98,
            },
            duration: 1,
            ease: "none",
          },
          0,
        );

        timeline.to(
          "[data-wheel]",
          {
            rotate: 720,
            transformOrigin: "50% 50%",
            duration: 1,
            ease: "none",
          },
          0,
        );

        cards.forEach((card, index) => {
          const revealAt = index / Math.max(1, cards.length);

          timeline.to(
            card,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.12,
              ease: "power1.out",
            },
            revealAt,
          );
        });

        return () => {
          timeline.kill();
        };
      });

      mm.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
        if (!mobileTimeline || !mobileLine) {
          return;
        }

        gsap.set(mobileLine, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        const lineTween = gsap.to(mobileLine, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: mobileTimeline,
            start: "top 72%",
            end: "bottom 68%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          lineTween.kill();
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="journey-roadmap overflow-hidden border-t border-zinc-200 bg-white"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-12 sm:px-10 lg:px-16">
        <div className="z-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
              My Journey
            </p>
            <h2 className="mt-3 hidden max-w-3xl text-3xl font-semibold sm:text-4xl md:block">
              A curvy roadmap through study, internship, and freelance work.
            </h2>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl md:hidden">
              Study, internship, and freelance milestones.
            </h2>
          </div>
        </div>

        <div className="relative mt-8 hidden flex-1 md:block">
          <div
            data-roadmap-track
            className="relative h-[560px] w-[240vw] max-w-none"
          >
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1920 560"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 80 330 C 220 145 390 120 525 250 S 790 455 960 350 S 1235 115 1410 245 S 1640 430 1840 260"
                fill="none"
                stroke="#18181b"
                strokeLinecap="round"
                strokeWidth="42"
              />
              <path
                id="journey-road-path"
                d="M 80 330 C 220 145 390 120 525 250 S 790 455 960 350 S 1235 115 1410 245 S 1640 430 1840 260"
                fill="none"
                stroke="#ffffff"
                strokeDasharray="26 28"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </svg>

            <div
              data-roadmap-car
              className="absolute left-0 top-0 z-[5] h-14 w-24 will-change-transform"
              aria-hidden="true"
            >
              <svg viewBox="0 0 96 56" className="h-full w-full">
                <path
                  d="M16 33h7l9-14h27l13 14h8c5 0 9 4 9 9v2H8v-2c0-5 3-9 8-9Z"
                  fill="#ffffff"
                  stroke="#09090b"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
                <path
                  d="M35 22h20l8 10H28l7-10Z"
                  fill="#f4f4f5"
                  stroke="#09090b"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <circle
                  data-wheel
                  cx="28"
                  cy="44"
                  r="7"
                  fill="#09090b"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <circle
                  data-wheel
                  cx="70"
                  cy="44"
                  r="7"
                  fill="#09090b"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {items.map((item, index) => (
              <article
                data-roadmap-card
                className={[
                  "absolute z-10 w-[320px] border border-zinc-950 bg-white p-5 shadow-[8px_8px_0_#18181b] lg:w-[360px]",
                  index === 0 && "left-[4vw] top-[18px]",
                  index === 1 && "left-[78vw] top-[204px] lg:left-[88vw] xl:top-[224px]",
                  index === 2 && "left-[172vw] top-[18px]",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={item.title}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center bg-zinc-950 text-sm font-medium text-white">
                    {index + 1}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div data-mobile-timeline className="relative mt-12 space-y-8 md:hidden">
          <div className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-zinc-200" />
          <div
            data-mobile-line
            className="absolute left-4 top-4 h-[calc(100%-2rem)] w-px bg-zinc-950"
          />
          {items.map((item, index) => (
            <article className="relative pl-12" key={item.title}>
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center border border-zinc-950 bg-white text-sm font-medium">
                {index + 1}
              </span>
              <div className="border border-zinc-200 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {item.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
