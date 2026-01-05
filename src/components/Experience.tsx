// src/components/Experience.tsx
'use client';

import { portfolioData } from '@/data/portfolioData';
import { 
  BriefcaseIcon, 
  MapPinIcon,
  CalendarIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Experience() {
  const { experience } = portfolioData;
  // Allow multiple items to be open - using Set
  // Start with none open (empty Set) to prevent auto-opening
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isOpen = (index: number) => openItems.has(index);

  return (
    <section id="experience" className="scroll-mt-20 bg-black px-4 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Professional <span className="text-cyan-500">Experience</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
          <p className="mt-4 text-gray-400">
            My journey through technology and business systems
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                isOpen(index) 
                  ? 'border-cyan-500/50 bg-neutral-900/70' 
                  : 'border-neutral-800 bg-neutral-900/30 hover:border-neutral-700'
              }`}
            >
              {/* Header - Always Visible */}
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-start justify-between p-6 text-left"
              >
                <div className="flex items-start gap-4">
                  <div className={`rounded-lg p-3 transition-colors duration-300 ${
                    isOpen(index) ? 'bg-cyan-500/20' : 'bg-neutral-800'
                  }`}>
                    <BriefcaseIcon className={`h-6 w-6 transition-colors duration-300 ${
                      isOpen(index) ? 'text-cyan-400' : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <p className="text-cyan-400">{exp.company}</p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <ChevronDownIcon 
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                    isOpen(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expandable Content - Pure CSS Animation */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen(index) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-neutral-800 px-6 pb-6 pt-4">
                    {/* If has categories (like current job) */}
                    {exp.categories && exp.categories.length > 0 ? (
                      <div className="space-y-6">
                        {exp.categories.map((category, catIndex) => (
                          <div key={catIndex}>
                            <h4 className="mb-3 text-sm font-semibold text-cyan-400">
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.points.map((point, pointIndex) => (
                                <li 
                                  key={pointIndex}
                                  className="flex items-start gap-3 text-sm text-gray-300"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Regular highlights */
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li 
                            key={hIndex}
                            className="flex items-start gap-3 text-sm text-gray-300"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}