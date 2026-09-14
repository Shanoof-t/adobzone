
"use client";

import React from "react";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <Container className="contact__shell">
        <div className="contact__inner">
          {/* ================================
              LEFT — CONTENT
          ================================= */}

          <div className="contact__copy">
            <p className="contact__eyebrow">Contact us</p>

            <h2 className="contact__heading">
              Let’s create something worth talking about.
            </h2>

            <p className="contact__lede">
              Have a project, idea, or brand that needs a sharper direction?
              Tell us what you’re working on and let’s make it happen.
            </p>

       

            {/* CTA */}

            {/* <a
              href="mailto:hello@adobzone.com"
              className="contact__button"
            >
              <span>Start a conversation</span>

              <span className="contact__button-icon">
                <ArrowUpRight size={19} strokeWidth={2} />
              </span>
            </a> */}

             <a href="/contact" className="contact__button">
              Start a conversation
            </a>
          </div>

          {/* ================================
              RIGHT — PAPER PLANE
          ================================= */}

          <div className="contact__art" aria-hidden="true">
            {/* Orange glow */}
            <div className="contact__glow" />

            <div className="contact__drawing">
              {/* =================================
                  DASHED FLIGHT PATH
              ================================== */}

              <svg
                className="contact__trail"
                viewBox="0 0 720 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="
                    M 0 270

                    C 55 260 100 245 125 210

                    C 150 175 145 125 115 105

                    C 85 85 55 110 55 145

                    C 55 180 85 205 125 215

                    C 175 230 230 220 280 205

                    C 330 190 355 165 375 125

                    C 390 100 405 80 425 65
                  "
                  stroke="#171310"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="18 16"
                  className="contact__trail-path"
                />
              </svg>

              {/* =================================
                  PAPER PLANE
              ================================== */}

              <svg
                className="contact__plane"
                viewBox="0 0 520 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Orange shadow */}
                <path
                  d="
                    M300 245
                    L470 92
                    L350 250
                    L315 226
                    L300 245
                  "
                  stroke="#F9851C"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.14"
                  filter="blur(8px)"
                />

                {/* Main plane */}
                <path
                  d="
                    M120 165
                    L470 75
                    L355 250
                    L300 205
                    L275 275
                    L245 205
                    L120 165
                    Z
                  "
                  fill="#FFFFFF"
                  stroke="#171310"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Upper fold */}
                <path
                  d="
                    M120 165
                    L470 75
                    L300 205
                    L120 165
                  "
                  fill="#FFFFFF"
                  stroke="#171310"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Lower wing */}
                <path
                  d="
                    M300 205
                    L355 250
                    L470 75
                  "
                  fill="#FAF8F6"
                  stroke="#171310"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Bottom leaf */}
                <path
                  d="
                    M300 205
                    L275 275
                    L265 205
                  "
                  fill="#F7F3EF"
                  stroke="#171310"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Internal diagonal */}
                <path
                  d="
                    M245 205
                    L470 75
                  "
                  stroke="#171310"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Hatching */}
                <path
                  d="M255 190 L265 215"
                  stroke="#171310"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <path
                  d="M266 183 L277 208"
                  stroke="#171310"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <path
                  d="M278 177 L289 201"
                  stroke="#171310"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <path
                  d="M290 171 L301 194"
                  stroke="#171310"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                <path
                  d="M302 165 L313 187"
                  stroke="#171310"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Orange edge */}
                <path
                  d="
                    M470 75
                    L355 250
                  "
                  stroke="#F9851C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>

              
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        /* =========================================
           SECTION
        ========================================== */

        .contact {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #ffffff;
          color: #171310;
        }

        .contact__shell {
          position: relative;
          z-index: 1;
        }

        .contact__inner {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(3rem, 6vw, 7rem);

          min-height: 100vh;

          padding: clamp(5rem, 8vw, 7rem) 0;
        }

        /* =========================================
           LEFT CONTENT
        ========================================== */

        .contact__copy {
          max-width: 620px;
          font-family: var(--font-manrope), Arial, sans-serif;
        }

        .contact__eyebrow {
          margin: 0 0 1.25rem;

          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;

          color: #77716b;
        }

        .contact__heading {
          max-width: 650px;

          margin: 0 0 1.5rem;

          font-family: var(--font-manrope), Arial, sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 750;
          line-height: 0.98;
          letter-spacing: -0.065em;

          color: #171310;
        }

        .contact__lede {
          max-width: 570px;

          margin: 0 0 1rem;

          font-size: 1.08rem;
          font-weight: 500;
          line-height: 1.65;

          color: #625d58;
        }

        /* =========================================
           CONTACT DETAILS
        ========================================== */

        .contact__details {
          display: flex;
          flex-direction: column;
          gap: 1.05rem;

          margin-bottom: 2.5rem;
        }

        .contact__detail {
          display: flex;
          align-items: center;
          gap: 1rem;

          width: fit-content;

          color: inherit;
          text-decoration: none;

          transition: transform 0.25s ease;
        }

        .contact__detail:hover {
          transform: translateX(5px);
        }

        .contact__icon {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 3rem;
          height: 3rem;

          flex-shrink: 0;

          border-radius: 50%;
          border: 1px solid #f1e6dc;

          background: #fff8f1;

          color: var(--color-highlight, #f9851c);

          transition:
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .contact__detail:hover .contact__icon {
          background: #fff1e5;
          border-color: rgba(249, 133, 28, 0.3);
        }

        .contact__detail-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .contact__detail small {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;

          color: #8e8781;
        }

        .contact__detail strong {
          font-size: 0.98rem;
          font-weight: 650;

          color: #171310;
        }

        /* =========================================
           CTA
        ========================================== */

        .contact__button {
          display: inline-block;
          font-size: 1rem;
          font-weight: 600;          
          color: var(--color-highlight);
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: opacity 0.2s ease;
        }

        .contact__button:hover {
          opacity: 0.72;
        }

        /* =========================================
           RIGHT ART
        ========================================== */

        .contact__art {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 100%;
          min-height: 560px;
        }

        /* =========================================
           ORANGE GLOW
        ========================================== */

        .contact__glow {
          position: absolute;

          width: 500px;
          height: 500px;

          border-radius: 50%;

          background: radial-gradient(
            circle,
            rgba(249, 133, 28, 0.14) 0%,
            rgba(249, 133, 28, 0.07) 32%,
            rgba(249, 133, 28, 0) 70%
          );

          filter: blur(8px);
        }

        /* =========================================
           DRAWING
        ========================================== */

        .contact__drawing {
          position: relative;

          width: min(100%, 600px);
          height: 500px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* =========================================
           DASHED TRAIL
        ========================================== */

        .contact__trail {
          position: absolute;

          width: min(92%, 540px);

          right: -2%;
          top: 85%;

          z-index: 1;

          overflow: visible;
          pointer-events: none;

          transform: translateY(-50%);
        }

        .contact__trail-path {
          animation: trail-flow 5s linear infinite;
        }

        @keyframes trail-flow {
          from {
            stroke-dashoffset: 0;
          }

          to {
            stroke-dashoffset: -68;
          }
        }

        /* =========================================
           PAPER PLANE
        ========================================== */

        .contact__plane {
          position: absolute;

          width: min(78%, 470px);

          right: -2%;
          top: 50%;

          z-index: 2;

          overflow: visible;

          transform: translateY(-50%);

          filter: drop-shadow(
            0 18px 20px rgba(23, 19, 16, 0.08)
          );
        }

        /* =========================================
           ORANGE DOT
        ========================================== */

        .contact__accent-dot {
          position: absolute;

          width: 11px;
          height: 11px;

          top: 13%;
          right: 7%;

          z-index: 3;

          border-radius: 50%;

          background: #f9851c;

          box-shadow:
            0 0 0 9px rgba(249, 133, 28, 0.07),
            0 0 28px rgba(249, 133, 28, 0.2);
        }

        /* =========================================
           TABLET
        ========================================== */

        @media (max-width: 900px) {
          .contact__inner {
            grid-template-columns: 1fr;

            min-height: auto;

            gap: 2rem;

            padding-top: 5rem;
            padding-bottom: 5rem;
          }

          .contact__copy {
            max-width: 100%;
          }

          .contact__art {
            min-height: 470px;
          }

          .contact__drawing {
            height: 430px;
          }

          .contact__trail {
            width: 92%;
            right: 0;
          }

          .contact__plane {
            width: 82%;
            right: 0;
          }

          .contact__glow {
            width: 400px;
            height: 400px;
          }
        }

        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {
          .contact__inner {
            padding-top: 4rem;
            padding-bottom: 4rem;
          }

          .contact__heading {
            font-size: clamp(2.6rem, 12vw, 3.6rem);
          }

          .contact__lede {
            font-size: 1rem;
          }

          .contact__art {
            min-height: 390px;
          }

          .contact__drawing {
            height: 350px;
          }

          .contact__trail {
            width: 110%;
            right: -10%;
          }

          .contact__plane {
            width: 90%;
            right: -5%;
          }

          .contact__glow {
            width: 330px;
            height: 330px;
          }

          .contact__accent-dot {
            right: 2%;
            top: 12%;
          }

          .contact__button {
            font-size: 0.86rem;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .contact__trail-path {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
