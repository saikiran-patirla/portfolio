// src/components/Skills.tsx
'use client';

import { portfolioData } from '@/data/portfolioData';
import { 
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function Skills() {
  const { skills, certifications, competencies } = portfolioData;

  const categoryIcons: { [key: string]: React.ElementType } = {
    'Programming & ML': CodeBracketIcon,
    'AI/ML Frameworks': CpuChipIcon,
    'Data Engineering & Cloud': CloudIcon,
    'Data Visualization': ChartBarIcon,
    'Business Systems': BuildingOfficeIcon,
  };

  return (
    <section id="skills" className="scroll-mt-20 bg-neutral-950 px-4 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Technical <span className="text-cyan-500">Skills</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          <p className="mt-4 text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory, index) => {
            const IconComponent = categoryIcons[skillCategory.category] || CodeBracketIcon;
            
            return (
              <div 
                key={index}
                className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-neutral-900/50"
              >
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-500/10 p-2">
                    <IconComponent className="h-6 w-6 text-cyan-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-1 flex justify-between">
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-800">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Certifications
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-4 text-center transition-all hover:border-cyan-500/30"
              >
                <div className="mb-2 text-2xl">🏅</div>
                <p className="font-semibold text-white">{cert.name}</p>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Core <span className="text-cyan-500">Competencies</span>
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {competencies.map((comp, index) => (
              <div 
                key={index}
                className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6"
              >
                <h4 className="mb-4 text-lg font-bold text-cyan-400">
                  {comp.title}
                </h4>
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {comp.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}