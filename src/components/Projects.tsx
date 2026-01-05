// src/components/Projects.tsx
'use client';

import { portfolioData } from '@/data/portfolioData';
import { 
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Projects() {
  const { projects } = portfolioData;
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isExpanded = (index: number) => expandedProjects.has(index);

  return (
    <section id="projects" className="scroll-mt-20 bg-black px-4 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Featured <span className="text-cyan-500">Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
          <p className="mt-4 text-gray-400">
            End-to-end solutions showcasing my technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                isExpanded(index)
                  ? 'border-cyan-500/50 bg-neutral-900/70'
                  : 'border-neutral-800 bg-neutral-900/30 hover:border-neutral-700'
              }`}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className={`rounded-lg p-3 transition-colors duration-300 ${
                    isExpanded(index) ? 'bg-cyan-500/20' : 'bg-neutral-800'
                  }`}>
                    <CodeBracketIcon className={`h-6 w-6 transition-colors duration-300 ${
                      isExpanded(index) ? 'text-cyan-400' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-neutral-800 p-2 text-gray-400 transition-all hover:bg-neutral-700 hover:text-white"
                      title="View Code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-neutral-800 p-2 text-gray-400 transition-all hover:bg-cyan-600 hover:text-white"
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Headline */}
                <h3 className="mb-2 text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-cyan-400">
                  {project.headline}
                </p>

                {/* Tech Stack Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => toggleProject(index)}
                  className="flex items-center gap-2 text-sm font-medium text-cyan-400 transition-all hover:text-cyan-300"
                >
                  {isExpanded(index) ? 'Hide Details' : 'View Pipeline'}
                  <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${isExpanded(index) ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Expanded Details - Pure CSS Animation */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isExpanded(index) ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-neutral-800 p-6">
                    {/* Description */}
                    <p className="mb-4 text-sm text-gray-400">
                      {project.description}
                    </p>

                    {/* Tech Stack Details */}
                    <div className="mb-6">
                      <h4 className="mb-3 text-sm font-semibold text-white">Tech Stack</h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {project.techStack.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                            <div>
                              <span className="text-sm font-medium text-cyan-400">{tech.name}: </span>
                              <span className="text-sm text-gray-400">{tech.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pipeline */}
                    <div>
                      <h4 className="mb-3 text-sm font-semibold text-white">End-to-End Pipeline</h4>
                      <div className="space-y-2">
                        {project.pipeline.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-400">
                              {stepIndex + 1}
                            </span>
                            <span className="text-sm text-gray-300">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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