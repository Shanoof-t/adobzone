"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { services } from "@/data/services";
import { getWhatsAppLink } from "@/lib/whatsapp";

type Service = (typeof services)[number];

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const handleClick = () => {
    window.open(
      getWhatsAppLink(service.name, service.message),
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        -mt-px
        h-[260px]
        overflow-hidden
        bg-[#111111]
        transition-[height]
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]
        hover:h-[380px]
        first:mt-0
        md:h-[360px]
        md:hover:h-[480px]
        lg:h-[420px]
        lg:hover:h-[560px]
      "
    >
      <button
        type="button"
        onClick={handleClick}
        className="relative block h-full w-full overflow-hidden text-left"
      >
        {/* Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Image */}
        <Image
          src={service.image}
          alt={service.name}
          width={1600}
          height={900}
          className="block h-full w-full object-cover opacity-95"
        />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-4 sm:p-6 lg:p-8">
          <div>
            {/* Label */}
            {/* <span className="mb-2 inline-block rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[0.56rem] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              {service.shortLabel}
            </span> */}

            {/* Name */}
            <h3 className="text-[clamp(2.5rem,5vw,6rem)] font-medium leading-[0.88] tracking-[-0.08em] text-white">
              {service.name}
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-xl
                translate-y-4
                text-sm
                leading-relaxed
                text-white/70
                opacity-0
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:translate-y-0
                group-hover:opacity-100
                sm:text-base
              "
            >
              {service.description}
            </p>
          </div>

          {/* Arrow */}
          <span
            className="
              inline-flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-white
              text-black
              shadow-[0_10px_30px_rgba(255,255,255,0.2)]
              transition-transform
              duration-500
              ease-out
              group-hover:-translate-y-1
              group-hover:translate-x-1
            "
          >
            <ArrowUpRight size={20} />
          </span>
        </div>
      </button>
    </motion.div>
  );
}