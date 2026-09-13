"use client";

import React from "react";

import { Container } from "@/components/ui/Container";

/**
 * AboutSection — Adobzone
 *
 * Full-viewport "About Us" section:
 * - Layered extruded 3D logo
 * - Glossy orange/white material
 * - Stronger #F9851C brand color
 * - Soft orange ambient glow
 * - Small subtle shadow
 * - White specular reflections
 * - Gentle floating animation
 */

const LOGO_PATH =
  "M306.759,321.01118c-.27781,24.56748-.10517,49.25355-.08361,73.83716.01885,22.36435,2.64248,44.18411,21.01349,51.48614,13.31508,5.2931,20.03194-2.46185,26.95914-7.2966,25.74044-17.95306,60.79438-8.93613,74.8132,17.43522,21.64177,40.71652-21.426,78.0382-64.97921,66.47852-47.80278-12.68688-51.52926-54.65988-65.73421-80.83175-16.13019-29.71493-47.36595-53.6325-96.55474-50.14063-85.33207,6.05625-111.98925,126.205-28.34785,163.21121,19.05315,8.42914,40.82168,8.6556,60.82939,3.75617a118.13819,118.13819,0,0,0,27.74386-10.60248c4.34668-2.33513,20.22877-10.03889,20.37443-15.6637a8.27865,8.27865,0,0,0-1.1811-3.829,189.84233,189.84233,0,0,0-11.27924-19.3956,3.66584,3.66584,0,0,0-1.82822-1.69607,3.73443,3.73443,0,0,0-2.75036.71189c-15.812,8.93061-33.215,16.06271-51.37291,16.31625-18.158.25345-37.18417-7.43419-46.89678-22.777a45.23963,45.23963,0,0,1-4.63791-37.15717,49.971,49.971,0,0,1,24.27079-28.80086c19.11248-10.10094,44.48887-6.64133,60.20112,8.208C268.27512,464.06635,270.257,495.898,286.735,518.76128a111.67226,111.67226,0,0,0,10.16026,12.18533,108.405,108.405,0,0,0,36.75545,25.01505,112.11681,112.11681,0,0,0,27.52809,7.42061,112.91468,112.91468,0,0,0,27.89213.3559,109.43963,109.43963,0,0,0,13.53084-2.38359,104.622,104.622,0,0,0,12.9646-4.04469,98.179,98.179,0,0,0,12.17183-5.668,91.98429,91.98429,0,0,0,11.16329-7.25619,86.75421,86.75421,0,0,0,9.93373-8.80661,83.18242,83.18242,0,0,0,8.48312-10.32468,82.28434,82.28434,0,0,0,6.81126-11.80514,84.62719,84.62719,0,0,0,4.921-13.2504q.809-2.896,1.41834-5.84048c11.23883-54.13413-31.96916-98.69307-75.614-102.19037-33.24194-2.66675-41.49852,8.0112-50.90106,8.55316l-.26958-80.17377Z";

const LOGO_TRANSFORM = "translate(-123.00225 -320.5474)";

/**
 * Soft orange extrusion.
 *
 * No dark/brown colors.
 * #F9851C is now more dominant.
 */
const LOGO_DEPTH = [
  "#FFD0A3",
  "#FFBA78",
  "#FFA957",
  "#FF9B43",
  "#FF8D31",
  "#F9851C",
  "#F9851C",
  "#F9851C",
  "#F9851C",
];

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <Container className="about__shell">
        <div className="about__inner">
          <a href="#work" className="about__arrow" aria-label="See our work">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
              <path
                d="M21.5 8L14.5 1M21.5 8L14.5 15M21.5 8H0.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="about__art" aria-hidden="true">
            <div className="about__glow" />
            <div className="about__sheen" />

            <svg
              className="about__svg"
              viewBox="0 0 420 420"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g-face" x1="0.12" y1="0.05" x2="0.88" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="12%" stopColor="#FFE4CC" />
                  <stop offset="27%" stopColor="#FFB56E" />
                  <stop offset="45%" stopColor="#F9851C" />
                  <stop offset="68%" stopColor="#F9851C" />
                  <stop offset="86%" stopColor="#FF8A29" />
                  <stop offset="100%" stopColor="#F77D14" />
                </linearGradient>

                <radialGradient id="g-specular" cx="28%" cy="18%" r="45%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="22%" stopColor="#FFFFFF" stopOpacity="0.72" />
                  <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="g-shine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="43%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="52%" stopColor="#FFFFFF" stopOpacity="0.25" />
                  <stop offset="57%" stopColor="#FFFFFF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>

                <radialGradient id="g-shadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F9851C" stopOpacity="0.28" />
                  <stop offset="45%" stopColor="#F9851C" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#F9851C" stopOpacity="0" />
                </radialGradient>

                <clipPath id="logo-clip">
                  <path d={LOGO_PATH} transform={LOGO_TRANSFORM} />
                </clipPath>
              </defs>

              <ellipse cx="210" cy="335" rx="130" ry="24" fill="url(#g-shadow)" />

              <g
                className="float float--fast"
                style={{
                  transformOrigin: "210px 195px",
                }}
              >
                <g transform="translate(88 92) scale(0.72)">
                  {LOGO_DEPTH.map((color, i) => {
                    const step = LOGO_DEPTH.length - i;

                    return (
                      <g
                        key={`${color}-${i}`}
                        transform={`translate(${step * 1.05} ${step * 1.3})`}
                      >
                        <path
                          d={LOGO_PATH}
                          transform={LOGO_TRANSFORM}
                          fill={color}
                          fillRule="evenodd"
                        />
                      </g>
                    );
                  })}

                  <path
                    d={LOGO_PATH}
                    transform={LOGO_TRANSFORM}
                    fill="url(#g-face)"
                    fillRule="evenodd"
                  />

                  <g clipPath="url(#logo-clip)">
                    <path
                      d={LOGO_PATH}
                      transform={LOGO_TRANSFORM}
                      fill="url(#g-specular)"
                      fillRule="evenodd"
                    />

                    <rect
                      className="logo-shine"
                      x="0"
                      y="0"
                      width="349.27108"
                      height="243.88687"
                      transform={LOGO_TRANSFORM}
                      fill="url(#g-shine)"
                    />

                    <path
                      d={LOGO_PATH}
                      transform={LOGO_TRANSFORM}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeOpacity="0.72"
                      strokeWidth="2.5"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>

          <div className="about__copy">
            <p className="about__eyebrow">About us</p>

            <h2 className="about__heading">
              We build brands that feel as strong as they look.
            </h2>

            <p className="about__lede">
              Adobzone brings strategy, design, and digital execution together for
              teams ready to stand out.
            </p>

            <p className="about__body">
              What began as a small creative studio has grown into a design partner
              for founders, founders-led brands, and marketing teams who want more
              than a template. We shape identities, websites, and product visuals
              with clarity, craft, and a sharp point of view.
              <br />
              <br />
              From positioning and brand systems to web experiences and campaigns,
              every decision is made to help your business look credible, feel
              memorable, and convert attention into trust.
            </p>

            <p className="about__close">
              We create work that gives your brand a shape worth remembering.
            </p>

            <a href="/about" className="about__link">
              Learn more about Adobzone
            </a>
          </div>
        </div>
      </Container>

      <style>{`
        .about {
          position: relative;
          background: #ffffff;
          color: #171310;
          overflow: hidden;
        }

        .about__shell {
          position: relative;
          z-index: 1;
        }

        .about__inner {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(2rem, 4vw, 4rem);
          min-height: 100vh;
          padding: clamp(5rem, 8vw, 7rem) 0;
        }

        .about__arrow {
          position: absolute;
          top: clamp(1.5rem, 3vw, 2.5rem);
          left: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 999px;
          color: var(--color-highlight);
          border: 1.5px solid var(--color-highlight);
          transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
          z-index: 2;
        }

        .about__arrow:hover {
          background: var(--color-highlight);
          color: #ffffff;
          transform: translateX(3px);
        }

        .about__art {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 420px;
          width: 100%;
        }

        .about__glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(249, 133, 28, 0.16) 0%,
            rgba(249, 133, 28, 0.08) 35%,
            rgba(249, 133, 28, 0) 72%
          );
          filter: blur(4px);
          pointer-events: none;
        }

        .about__sheen {
          position: absolute;
          width: 300px;
          height: 220px;
          top: 20%;
          left: 20%;
          background: radial-gradient(
            ellipse at 30% 20%,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0.3) 30%,
            rgba(255, 255, 255, 0) 70%
          );
          pointer-events: none;
          filter: blur(10px);
        }

        .about__svg {
          width: min(100%, 620px);
          height: auto;
          position: relative;
          filter: drop-shadow(0 14px 18px rgba(249, 133, 28, 0.18))
            drop-shadow(0 4px 7px rgba(249, 133, 28, 0.12));
        }

        .logo-shine {
          animation: shine-sweep 4.5s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes shine-sweep {
          0% {
            transform: translate(-90px, -70px);
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          38% {
            transform: translate(90px, 70px);
            opacity: 0;
          }

          100% {
            transform: translate(90px, 70px);
            opacity: 0;
          }
        }

        .float {
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .float--slow {
          animation-name: float-a;
          animation-duration: 7s;
        }

        .float--mid {
          animation-name: float-b;
          animation-duration: 5.5s;
        }

        .float--fast {
          animation-name: float-c;
          animation-duration: 4.5s;
        }

        @keyframes float-a {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }

          50% {
            transform: translate(-6px, 10px) rotate(-2deg);
          }
        }

        @keyframes float-b {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }

          50% {
            transform: translate(7px, -9px) rotate(2deg);
          }
        }

        @keyframes float-c {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }

          50% {
            transform: translate(-8px, -15px) rotate(-2deg);
          }
        }

        .about__copy {
          max-width: 640px;
          font-family: var(--font-manrope), Arial, sans-serif;
        }

        .about__eyebrow {
          margin: 0 0 1.25rem;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7f7a75;
        }

        .about__heading {
          margin: 0 0 1.5rem;
          font-family: var(--font-manrope), Arial, sans-serif;
          font-weight: 700;
          font-size: clamp(2.4rem, 4vw, 4rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
          color: #171310;
        }

        .about__lede {
          margin: 0 0 1.5rem;
          font-size: 1.08rem;
          font-weight: 600;
          line-height: 1.6;
          color: #171310;
        }

        .about__body {
          margin: 0 0 1.75rem;
          font-size: 1rem;
          line-height: 1.7;
          color: #5d5854;
        }

        .about__close {
          margin: 0 0 1.5rem;
          font-size: 1rem;
          line-height: 1.6;
          color: #171310;
          font-weight: 600;
        }

        .about__link {
          display: inline-block;
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-highlight);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: opacity 0.2s ease;
        }

        .about__link:hover {
          opacity: 0.72;
        }

        @media (max-width: 900px) {
          .about__inner {
            grid-template-columns: 1fr;
            min-height: auto;
            padding-top: 7rem;
            padding-bottom: 4rem;
          }

          .about__art {
            min-height: 320px;
            order: -1;
          }

          .about__svg {
            width: min(85vw, 380px);
          }

          .about__glow {
            width: 360px;
            height: 360px;
          }

          .about__copy {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
