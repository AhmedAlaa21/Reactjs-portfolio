import type { CSSProperties } from "react";
import { SiNextdotjs, SiTypescript, SiReactquery } from "react-icons/si";
import ReactAtom from "./ReactAtom";
import "./HeroVisual.css";

const orbitBadges = [
  {
    id: "react",
    label: "React",
    className: "hero_visual__badge--react",
    content: <ReactAtom size={22} />,
    angle: 0,
  },
  {
    id: "nextjs",
    label: "Next.js",
    className: "hero_visual__badge--nextjs",
    content: <SiNextdotjs size={22} />,
    angle: 90,
  },
  {
    id: "typescript",
    label: "TypeScript",
    className: "hero_visual__badge--typescript",
    content: <SiTypescript size={22} />,
    angle: 180,
  },
  {
    id: "tanstack",
    label: "TanStack Query",
    className: "hero_visual__badge--tanstack",
    content: <SiReactquery size={22} />,
    angle: 270,
  },
];

const HeroVisual = () => {
  return (
    <div className="hero_visual">
      <div className="hero_visual__orbit-group" aria-hidden="true">
        <div className="hero_visual__glow" />
        <div className="hero_visual__ring hero_visual__ring--outer" />
        <div className="hero_visual__ring hero_visual__ring--inner" />

        <div className="hero_visual__core">
          <ReactAtom size={56} />
        </div>

        <div className="hero_visual__orbit">
        {orbitBadges.map((badge) => (
          <div
            key={badge.id}
            className={`hero_visual__badge-slot hero_visual__badge-slot--${badge.id}`}
            style={{ "--slot-angle": `${badge.angle}deg` } as CSSProperties}
          >
            <div className="hero_visual__badge-counter">
              <div
                className={`hero_visual__badge ${badge.className}`}
                title={badge.label}
              >
                {badge.content}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="hero_visual__code" aria-hidden="true">
        <span className="hero_visual__bracket">&lt;</span>
        <span className="hero_visual__slash">/</span>
        <span className="hero_visual__bracket">&gt;</span>
      </div>
    </div>
  );
};

export default HeroVisual;
