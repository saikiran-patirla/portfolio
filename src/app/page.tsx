// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Landing page with name and intro */}
      <Hero />
      
      {/* About Section - Bio, education highlights */}
      <About />
      
      {/* Experience Section - Work history timeline */}
      <Experience />
      
      {/* Skills Section - Technical skills with progress bars */}
      <Skills />
      
      {/* Projects Section - Featured projects with details */}
      <Projects />
      
      {/* Contact Section - Contact info and CTA */}
      <Contact />
      
      {/* Footer - Social links and copyright */}
      <Footer />
    </main>
  );
}