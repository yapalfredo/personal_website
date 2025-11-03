import Head from 'next/head';
import { Inter } from 'next/font/google';
import { CgDarkMode } from 'react-icons/cg';
import SocialIcons from './socials';
import FrontEndSkills from './frontendskill';
import BackEndSkills from './backendskill';
import OtherSkills from './otherskill';
import { useState, useEffect } from 'react';
import CompanyLogoBlack from './logoblack';
import CompanyLogoWhite from './logowhite';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Alfredo Yap | alfredoyap.com | Portfolio</title>
        <meta name="description" content="alfredo yap | personal website |" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-white px-4 sm:px-6 md:px-10 lg:px-16 dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500 min-h-screen relative dark:overflow-hidden">
        <div className="hidden dark:block absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-950/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-emerald-950/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-1/3 h-1/3 bg-purple-950/20 rounded-full blur-3xl"></div>
        </div>
        <section className="relative z-10 min-h-screen flex flex-col justify-center">
          <nav className="py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 mb-0 sm:mb-2 md:mb-4 lg:mb-6 xl:mb-12 flex justify-between items-center animate-fade-in">
            <div className="animate-slide-in-left">
            {!darkMode ? <CompanyLogoBlack /> : <CompanyLogoWhite />}
            </div>

            <ul className="flex items-center content-center">
              <li className="animate-slide-in-right">
                {!darkMode ? (
                  <CgDarkMode
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl sm:text-2xl transition-all duration-300 hover:scale-110 hover:rotate-180 active:scale-95"
                    aria-label="Toggle dark mode"
                  />
                ) : (
                  <CgDarkMode
                    className="cursor-pointer text-xl sm:text-2xl text-white transition-all duration-300 hover:scale-110 hover:rotate-180 active:scale-95"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label="Toggle light mode"
                  />
                )}
              </li>
            </ul>
          </nav>
          
          <div className="text-center px-4 py-0 sm:py-2 md:py-4 lg:py-6 xl:p-8 flex-1 flex flex-col justify-center relative overflow-hidden">
            {/* Background Effects - Light Mode */}
            <div className={`absolute inset-0 pointer-events-none ${darkMode ? 'hidden' : 'block'}`}>
              {/* Web Tech Gradient Orbs */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-indigo-200/25 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Blockchain/Web3 Network Nodes */}
              <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-emerald-200/20 rounded-full blur-2xl animate-network-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-teal-200/25 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
              
              {/* AI Neural Network Pattern */}
              <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Infrastructure Circuit Pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="circuit-pattern-light" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,20 L40,20 M20,0 L20,40" stroke="rgb(59, 130, 246)" strokeWidth="0.5" fill="none"/>
                    <circle cx="20" cy="20" r="2" fill="rgb(59, 130, 246)"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-pattern-light)"/>
              </svg>
              
              {/* Code-like Grid */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            {/* Background Effects - Dark Mode */}
            <div className={`absolute inset-0 pointer-events-none ${darkMode ? 'block' : 'hidden'}`}>
              {/* Web Tech Gradient Orbs */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
              <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Blockchain/Web3 Network Nodes */}
              <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl animate-network-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
              
              {/* AI Neural Network Pattern */}
              <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
              
              {/* Infrastructure Circuit Pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="circuit-pattern-dark" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,20 L40,20 M20,0 L20,40" stroke="rgb(14, 165, 233)" strokeWidth="0.5" fill="none"/>
                    <circle cx="20" cy="20" r="2" fill="rgb(14, 165, 233)"/>
                    <path d="M10,10 L30,30 M30,10 L10,30" stroke="rgb(34, 211, 238)" strokeWidth="0.3" fill="none" opacity="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit-pattern-dark)"/>
              </svg>
              
              {/* Code-like Grid with Glow */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
                filter: 'blur(0.5px)'
              }}></div>
              
              {/* Network Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M20,30 Q50,50 80,40" 
                  stroke="rgb(34, 211, 238)" 
                  strokeWidth="0.3" 
                  fill="none"
                  strokeDasharray="2,2"
                  className="animate-code-typing"
                />
                <path 
                  d="M30,60 Q50,40 70,50" 
                  stroke="rgb(14, 165, 233)" 
                  strokeWidth="0.3" 
                  fill="none"
                  strokeDasharray="2,2"
                  className="animate-code-typing"
                  style={{ animationDelay: '1s' }}
                />
                <circle cx="20" cy="30" r="0.8" fill="rgb(14, 165, 233)" className="animate-network-pulse"/>
                <circle cx="80" cy="40" r="0.8" fill="rgb(34, 211, 238)" className="animate-network-pulse" style={{ animationDelay: '0.5s' }}/>
                <circle cx="30" cy="60" r="0.8" fill="rgb(59, 130, 246)" className="animate-network-pulse" style={{ animationDelay: '1s' }}/>
                <circle cx="70" cy="50" r="0.8" fill="rgb(14, 165, 233)" className="animate-network-pulse" style={{ animationDelay: '1.5s' }}/>
              </svg>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-0 sm:py-1 md:py-2 lg:py-3 text-sky-600 font-bold dark:text-sky-300 transition-all duration-500 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Alfredo Yap
              </h2>
              <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl py-1 sm:py-2 md:py-3 dark:text-slate-100 transition-all duration-500 animation-delay-100 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Software Developer
              </h3>
              <p className={`text-sm sm:text-base md:text-lg pt-2 pb-1 sm:pt-3 sm:pb-2 md:pt-4 md:pb-3 lg:py-4 xl:py-5 leading-6 sm:leading-7 md:leading-8 text-gray-800 dark:text-slate-300 max-w-3xl mx-auto px-2 sm:px-4 transition-all duration-500 animation-delay-200 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
                I&apos;m a software developer with expertise spanning modern web technologies, 
                blockchain and Web3, and artificial intelligence. Beyond software development, 
                I have hands-on experience with low voltage systems, including security cameras 
                and smart intercom installations. This diverse technical background allows me to 
                approach projects with a unique perspective, bridging the gap between digital 
                innovation and physical infrastructure. Whether building scalable applications, 
                exploring decentralized technologies, or integrating smart security solutions, 
                I enjoy tackling complex challenges across different domains.
              </p>
            </div>
          </div>
          
          <div className="text-3xl sm:text-4xl md:text-5xl flex justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 pt-0 pb-2 sm:pt-1 sm:pb-3 md:pt-2 md:pb-4 lg:py-4 xl:py-5 transition-all duration-500">
            <SocialIcons url="https://github.com/yapalfredo/" icon="git" darkMode={darkMode} mounted={mounted} />
            <SocialIcons
              url="https://www.linkedin.com/in/yapalfredo/"
              icon="linkedin"
              darkMode={darkMode}
              mounted={mounted}
            />
            <SocialIcons url="mailto:al@alfredoyap.com" icon="email" darkMode={darkMode} mounted={mounted} />
          </div>
          
          <div className="relative w-full flex justify-center items-center mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20">
            {/* Background Effects Container */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              {/* Light Mode Effects */}
              <div className={`absolute inset-0 flex items-center justify-center ${darkMode ? 'hidden' : 'block'}`}>
                {/* Orbiting Tech Nodes */}
                <div className="absolute w-full h-full flex items-center justify-center">
                  {/* Web Tech Orbiting Node */}
                  <div className="absolute animate-orbit">
                    <div className="w-4 h-4 bg-blue-400/60 rounded-full blur-sm shadow-lg shadow-blue-400/50"></div>
                  </div>
                  {/* Blockchain Node */}
                  <div className="absolute animate-orbit-reverse" style={{ animationDelay: '2s' }}>
                    <div className="w-3 h-3 bg-emerald-400/60 rounded-full blur-sm shadow-lg shadow-emerald-400/50"></div>
                  </div>
                  {/* AI Node */}
                  <div className="absolute animate-orbit" style={{ animationDelay: '4s', transform: 'translateX(90px)' }}>
                    <div className="w-3.5 h-3.5 bg-purple-400/60 rounded-full blur-sm shadow-lg shadow-purple-400/50"></div>
                  </div>
                  {/* Infrastructure Node */}
                  <div className="absolute animate-orbit-reverse" style={{ animationDelay: '6s', transform: 'translateX(-90px)' }}>
                    <div className="w-2.5 h-2.5 bg-indigo-400/60 rounded-full blur-sm shadow-lg shadow-indigo-400/50"></div>
                  </div>
                </div>

                {/* Glowing Rings */}
                <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] border border-blue-300/30 rounded-full animate-tech-ring"></div>
                <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[440px] lg:h-[440px] border border-indigo-300/20 rounded-full animate-tech-ring" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] border border-emerald-300/20 rounded-full animate-tech-ring" style={{ animationDelay: '2s' }}></div>

                {/* Rotating Circuit Pattern */}
                <svg className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] opacity-20 animate-rotate-slow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="rgb(59, 130, 246)" strokeWidth="0.5" fill="none" strokeDasharray="2,2"/>
                  <circle cx="50" cy="50" r="40" stroke="rgb(99, 102, 241)" strokeWidth="0.5" fill="none" strokeDasharray="2,2"/>
                  <path d="M50,5 L50,25 M50,75 L50,95 M5,50 L25,50 M75,50 L95,50" stroke="rgb(59, 130, 246)" strokeWidth="0.5" fill="none"/>
                  <circle cx="50" cy="50" r="3" fill="rgb(59, 130, 246)" opacity="0.6"/>
                </svg>

                {/* Particle Effects */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-indigo-400/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-emerald-400/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
              </div>

              {/* Dark Mode Effects */}
              <div className={`absolute inset-0 flex items-center justify-center ${darkMode ? 'block' : 'hidden'}`}>
                {/* Orbiting Tech Nodes with Glow */}
                <div className="absolute w-full h-full flex items-center justify-center">
                  {/* Web Tech Orbiting Node */}
                  <div className="absolute animate-orbit">
                    <div className="w-5 h-5 bg-blue-400/40 rounded-full blur-md shadow-lg shadow-blue-400/30 animate-glow-pulse"></div>
                  </div>
                  {/* Blockchain Node */}
                  <div className="absolute animate-orbit-reverse" style={{ animationDelay: '2s' }}>
                    <div className="w-4 h-4 bg-emerald-400/40 rounded-full blur-md shadow-lg shadow-emerald-400/30 animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  {/* AI Node */}
                  <div className="absolute animate-orbit" style={{ animationDelay: '4s', transform: 'translateX(110px)' }}>
                    <div className="w-4.5 h-4.5 bg-purple-400/40 rounded-full blur-md shadow-lg shadow-purple-400/30 animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  {/* Infrastructure Node */}
                  <div className="absolute animate-orbit-reverse" style={{ animationDelay: '6s', transform: 'translateX(-110px)' }}>
                    <div className="w-3.5 h-3.5 bg-cyan-400/40 rounded-full blur-md shadow-lg shadow-cyan-400/30 animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>

                {/* Glowing Rings with Enhanced Visibility */}
                <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] border-2 border-blue-400/40 rounded-full animate-tech-ring shadow-lg shadow-blue-400/20"></div>
                <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] lg:w-[440px] lg:h-[440px] border border-cyan-400/30 rounded-full animate-tech-ring shadow-lg shadow-cyan-400/20" style={{ animationDelay: '1s' }}></div>
                <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[460px] lg:h-[460px] border border-emerald-400/30 rounded-full animate-tech-ring shadow-lg shadow-emerald-400/20" style={{ animationDelay: '2s' }}></div>

                {/* Rotating Enhanced Circuit Pattern */}
                <svg className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] lg:w-[420px] lg:h-[420px] opacity-30 animate-rotate-slow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="rgb(14, 165, 233)" strokeWidth="0.8" fill="none" strokeDasharray="2,2"/>
                  <circle cx="50" cy="50" r="40" stroke="rgb(34, 211, 238)" strokeWidth="0.6" fill="none" strokeDasharray="2,2"/>
                  <circle cx="50" cy="50" r="35" stroke="rgb(59, 130, 246)" strokeWidth="0.4" fill="none" strokeDasharray="1,1"/>
                  <path d="M50,5 L50,25 M50,75 L50,95 M5,50 L25,50 M75,50 L95,50 M30,30 L20,20 M70,30 L80,20 M30,70 L20,80 M70,70 L80,80" stroke="rgb(14, 165, 233)" strokeWidth="0.6" fill="none"/>
                  <circle cx="50" cy="50" r="4" fill="rgb(14, 165, 233)" opacity="0.8"/>
                  <circle cx="20" cy="20" r="1.5" fill="rgb(34, 211, 238)" opacity="0.6"/>
                  <circle cx="80" cy="20" r="1.5" fill="rgb(34, 211, 238)" opacity="0.6"/>
                  <circle cx="20" cy="80" r="1.5" fill="rgb(34, 211, 238)" opacity="0.6"/>
                  <circle cx="80" cy="80" r="1.5" fill="rgb(34, 211, 238)" opacity="0.6"/>
                </svg>

                {/* Enhanced Particle Effects */}
                <div className="absolute top-1/4 left-1/4 w-2.5 h-2.5 bg-blue-400/50 rounded-full animate-float shadow-lg shadow-blue-400/30" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-400/50 rounded-full animate-float shadow-lg shadow-cyan-400/30" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-emerald-400/50 rounded-full animate-float shadow-lg shadow-emerald-400/30" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-400/50 rounded-full animate-float shadow-lg shadow-purple-400/30" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-indigo-400/50 rounded-full animate-float shadow-lg shadow-indigo-400/30" style={{ animationDelay: '4s' }}></div>
                <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-teal-400/50 rounded-full animate-float shadow-lg shadow-teal-400/30" style={{ animationDelay: '5s' }}></div>
              </div>
            </div>

            {/* Avatar Container */}
            <div className={`mx-auto bg-gradient-to-b from-slate-500 dark:from-slate-700 rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 relative overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl z-10 ${mounted ? 'animate-fade-in-up animate-float' : ''}`} style={{ opacity: mounted ? 1 : 0 }}>
              {/* Avatar Glow Effect */}
              <div className={`absolute inset-0 rounded-full ${darkMode ? 'shadow-[0_0_40px_rgba(14,165,233,0.3)]' : 'shadow-[0_0_30px_rgba(59,130,246,0.2)]'} animate-glow-pulse`}></div>
              
              <picture style={{ objectFit: 'cover' }}>
                <source
                  srcSet={require('../../public/avatar.webp')}
                  type="image/webp"
                />
                <img 
                  src="/avatar.webp" 
                  alt="alfred-avatar" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 relative z-10"
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </section>
        <section className="relative z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="overflow-hidden">
              <div className="w-full flex flex-col items-center justify-center">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-3 sm:pb-4 animate-fade-in-up transition-all duration-300 tracking-tight bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 dark:from-sky-300 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent drop-shadow-sm dark:drop-shadow-md hover:scale-105 hover:drop-shadow-lg">
                  Skills
                </h3>
                <div className="relative w-full flex justify-center -mt-4 mb-2">
                  <div className="w-24 h-1 sm:w-32 md:w-40 bg-gradient-to-r from-transparent via-sky-500 to-transparent dark:via-sky-300 rounded-full animate-fade-in-up animation-delay-200 opacity-0" style={{ animationDelay: '200ms' }}></div>
                  <div className="absolute w-16 h-0.5 sm:w-20 md:w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-200 rounded-full animate-fade-in-up animation-delay-300 opacity-0" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 mt-4 sm:mt-6 md:mt-8 w-full">
              <div className="animate-fade-in-up animation-delay-100 opacity-0 w-full">
                <FrontEndSkills />
              </div>
              <div className="animate-fade-in-up animation-delay-200 opacity-0 w-full">
                <BackEndSkills />
              </div>
              <div className="animate-fade-in-up animation-delay-300 opacity-0 w-full md:col-span-2 lg:col-span-1">
                <OtherSkills />
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 pb-6 sm:pb-8 md:pb-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center text-sm sm:text-base md:text-lg">
              <div className="transition-all duration-300 hover:scale-110 transform">
                <a 
                  href="mailto:al@alfredoyap.com" 
                  className={`underline-offset-4 hover:underline focus:outline-none focus:ring-2 rounded px-2 py-1 transition-all duration-300 ${
                    darkMode 
                      ? "text-slate-300 hover:text-sky-300 hover:drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] focus:ring-sky-400" 
                      : "text-gray-700 hover:text-sky-600 hover:drop-shadow-lg focus:ring-sky-500"
                  }`}
                >
                  al@alfredoyap.com
                </a>
              </div>
              <div className={`hidden sm:block text-xl transition-all duration-300 ${darkMode ? "text-slate-600" : "text-gray-400"}`}>•</div>
              <div className="transition-all duration-300 hover:scale-110 transform">
                <a 
                  href="tel:+17162222609" 
                  className={`underline-offset-4 hover:underline focus:outline-none focus:ring-2 rounded px-2 py-1 transition-all duration-300 ${
                    darkMode 
                      ? "text-slate-300 hover:text-sky-300 hover:drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] focus:ring-sky-400" 
                      : "text-gray-700 hover:text-sky-600 hover:drop-shadow-lg focus:ring-sky-500"
                  }`}
                >
                  716-222-2609
                </a>
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <p className={`text-center text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 transform ${
                darkMode 
                  ? "text-slate-500 hover:text-slate-300" 
                  : "text-gray-600 hover:text-gray-800"
              }`}>
                Copyright © Alfredo Yap {new Date().getFullYear()}.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// text-center text-lg dark:text-white
