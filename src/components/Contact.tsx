// src/components/Contact.tsx
'use client';

import { portfolioData } from '@/data/portfolioData';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const { personal } = portfolioData;

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/[^0-9+]/g, '')}`,
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-neutral-950 px-4 py-20 md:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Get In <span className="text-cyan-500">Touch</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          <p className="mt-4 text-gray-400">
            I&apos;m always open to discussing new opportunities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
              <h3 className="mb-6 text-xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="rounded-lg bg-cyan-500/10 p-3">
                      <method.icon className="h-6 w-6 text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{method.label}</p>
                      {method.href ? (
                        <a 
                          href={method.href}
                          className="font-medium text-white transition-colors hover:text-cyan-400"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 border-t border-neutral-800 pt-6">
                <h4 className="mb-4 text-sm font-semibold text-gray-400">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-neutral-800 p-3 text-gray-400 transition-all hover:bg-blue-600 hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-neutral-800 p-3 text-gray-400 transition-all hover:bg-neutral-700 hover:text-white"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>

                  <a
                    href={`mailto:${personal.email}`}
                    className="rounded-lg bg-neutral-800 p-3 text-gray-400 transition-all hover:bg-cyan-600 hover:text-white"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Let&apos;s Work Together!
            </h3>
            <p className="mb-6 text-cyan-100">
              I&apos;m currently open to new opportunities in AI/ML, Data Science, and Business Systems. 
              Whether you have a project in mind or just want to connect, feel free to reach out!
            </p>
            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="block rounded-lg bg-white px-6 py-3 font-semibold text-cyan-600 transition-all hover:bg-cyan-50"
              >
                Send me an Email
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}