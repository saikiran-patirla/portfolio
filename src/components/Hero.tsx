// src/components/Hero.tsx
'use client';

import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// Base path for production (GitHub Pages)
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* RIGHT 50% – normal image */}
        <div className="absolute right-0 top-0 h-full w-1/2">
          <Image
            src={`${basePath}/images/header-background.jpeg`}
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="50vw"
          />
        </div>

        {/* LEFT 50% – mirrored image */}
        <div className="absolute left-0 top-0 h-full w-1/2 scale-x-[-1]">
          <Image
            src={`${basePath}/images/header-background.jpeg`}
            alt="Background mirrored"
            fill
            className="object-cover"
            quality={100}
            sizes="50vw"
          />
        </div>

        {/* BOTTOM HALF REFLECTION (full width, subtle) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 scale-y-[-1] opacity-20">
          <Image
            src={`${basePath}/images/header-background.jpeg`}
            alt="Background reflection"
            fill
            className="object-cover"
            quality={100}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* SINGLE uniform overlay */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <div className="flex flex-col items-center text-center">

          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative h-36 w-36 md:h-44 md:w-44">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                <div className="h-full w-full rounded-full bg-black p-1">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src={`${basePath}/images/profile.jpg`}
                      alt="Sai Kiran Patirla"
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                      priority
                      quality={100}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 h-5 w-5 rounded-full border-4 border-black bg-emerald-500" />
            </div>
          </div>

          {/* Readability Container */}
          <div className="mb-10 max-w-3xl rounded-2xl bg-black/40 p-6 backdrop-blur-md ring-1 ring-white/10">
            <p className="mb-2 text-lg text-gray-300">👋 Hello, I&apos;m</p>

            <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              {personal.name}
            </h1>

            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              <span className="rounded-full border border-cyan-400/50 bg-cyan-500/20 px-4 py-1.5 text-sm font-medium text-cyan-300 backdrop-blur-sm">
                Business Systems Consultant
              </span>
              <span className="rounded-full border border-blue-400/50 bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-300 backdrop-blur-sm">
                Data, ML and Agentic Driven
              </span>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-base text-gray-200 md:text-lg">
                Bridging <span className="font-semibold text-cyan-400">Business Strategy</span> with{' '}
                <span className="font-semibold text-blue-400">AI/ML solutions</span>
              </p>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                I leverage <span className="font-semibold text-cyan-400">Data Analysis</span>,{' '}
                <span className="font-semibold text-blue-400">Machine Learning</span>,{' '}
                <span className="font-semibold text-indigo-400">Generative AI</span> and{' '}
                <span className="font-semibold text-purple-400">AI Agents</span> to solve complex business problems into tangible outcomes
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mb-8 grid w-full max-w-sm grid-cols-3 gap-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-cyan-400">4</p>
              <p className="text-xs text-gray-400">Years Exp</p>
            </div>
            <div className="border-x border-white/20 text-center">
              <p className="text-2xl font-bold text-blue-400">4</p>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-400">3</p>
              <p className="text-xs text-gray-400">Degrees</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:bg-cyan-400 hover:shadow-cyan-500/50"
            >
              View My Work
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={`${basePath}/resume.pdf`}
              download="SAIKIRANPATIRLA.pdf"
              className="group flex items-center gap-2 rounded-full bg-gray-700 px-6 py-3 font-semibold text-white shadow-lg shadow-gray-500/30 transition-all hover:bg-gray-500 hover:shadow-gray-500/50"
            >
              Download Resume
              <svg className="h-5 w-5 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20"
            >
              Get In Touch
            </a>
          </div>

          {/* ================= SOCIAL ICONS ================= */}
          <div className="flex items-center justify-center gap-4">
            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-blue-600 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-cyan-600 hover:scale-110"
              aria-label="Email"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <a
          href="#about"
          className="animate-bounce rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-cyan-500"
        >
          <ChevronDownIcon className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
