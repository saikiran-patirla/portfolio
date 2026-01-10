// src/components/About.tsx
'use client';

import Image from 'next/image';
import { portfolioData } from '@/data/portfolioData';
import { 
  MapPinIcon, 
  AcademicCapIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

// Base path for production (GitHub Pages)
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

export default function About() {
  const { personal, education } = portfolioData;

  const infoItems = [
    { icon: MapPinIcon, label: "Location", value: personal.location },
    { icon: EnvelopeIcon, label: "Email", value: personal.email },
    { icon: PhoneIcon, label: "Phone", value: personal.phone },
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-neutral-950 px-4 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            About <span className="text-cyan-500">Me</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          
          {/* Profile Card */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              {/* Profile Image - Sharp */}
              <div className="h-44 w-44 overflow-hidden rounded-full border-4 border-cyan-500/30 shadow-xl shadow-cyan-500/10">
                <Image
                  src={`${basePath}/images/profile.jpg`}
                  alt="Sai Kiran Patirla"
                  width={176}
                  height={176}
                  className="h-full w-full object-cover"
                  quality={100}
                  unoptimized
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-cyan-500" />
              <div className="absolute -bottom-1 -left-1 h-3 w-3 rounded-full bg-blue-500" />
            </div>
            
            <h3 className="text-xl font-bold text-white">{personal.name}</h3>
            <p className="mt-1 text-cyan-400">Business Systems Consultant</p>
            
            {/* Quick Links */}
            <div className="mt-4 flex gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-neutral-800 p-2 text-gray-400 transition-all hover:bg-blue-600 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-neutral-800 p-2 text-gray-400 transition-all hover:bg-neutral-700 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* About Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Bio */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6">
              <p className="text-base leading-relaxed text-gray-300">
                {personal.about}
              </p>
            </div>
            
            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {infoItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/30 p-4"
                >
                  <div className="shrink-0 rounded-lg bg-cyan-500/10 p-2">
                    <item.icon className="h-4 w-4 text-cyan-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className={`font-medium text-white ${
                      item.label === 'Email' ? 'text-[11.1px]' : 'text-xs'
                    }`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mt-16">
          <h3 className="mb-8 flex items-center justify-center gap-3 text-2xl font-bold text-white">
            <AcademicCapIcon className="h-8 w-8 text-cyan-500" />
            Education
          </h3>
          
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-neutral-900/50"
              >
                {/* Gradient accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
                
                <div className="mb-3 flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-cyan-500" />
                  <span className="text-xs font-medium text-cyan-400">{edu.duration}</span>
                </div>
                
                <h4 className="mb-2 font-bold text-white">
                  {edu.degree}
                </h4>
                <p className="mb-3 text-sm text-gray-400">
                  {edu.institution}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
