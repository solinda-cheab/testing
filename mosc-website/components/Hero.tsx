import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  className = "",
}: HeroProps) {
  return (
    <section className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden ${className}`} aria-labelledby="hero-title">
      {backgroundImage && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#a14f32]">
              {subtitle}
            </p>
          )}
          <h1 id="hero-title" className="mb-6 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mb-8 text-lg leading-7 text-white/90 sm:text-xl max-w-2xl">
              {description}
            </p>
          )}
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#a14f32] px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-[#8a432a] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#a14f32] focus:ring-offset-2 focus:ring-offset-black"
              >
                {primaryCta.label}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}