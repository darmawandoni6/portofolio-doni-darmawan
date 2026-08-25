import React from 'react';
import { Download, Mail, MapPin, ArrowRight, Package, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';
import { PERSONAL_DATA } from '../data/cvData';

export const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-purple-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000d_1px,transparent_1px),linear-gradient(to_bottom,#0000000d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Text & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-cyan-500/40 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-medium shadow-sm dark:shadow-inner max-w-full transition-colors">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="truncate">Available for Frontend & Full-Stack Opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.15] sm:leading-[1.1] transition-colors">
                Hi, I'm <span className="text-gradient">Doni Darmawan</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 flex-wrap transition-colors">
                Software Engineer
                <span className="text-slate-400 dark:text-slate-600 hidden sm:inline">•</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-mono text-base sm:text-lg">
                  Next.js & React Specialist
                </span>
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl transition-colors">
              {PERSONAL_DATA.bio}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-1 w-full sm:w-auto">
              <span className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 transition-colors shadow-sm dark:shadow-none">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                {PERSONAL_DATA.location}
              </span>
              <a
                href={`mailto:${PERSONAL_DATA.email}`}
                className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all truncate shadow-sm dark:shadow-none"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                <span className="truncate">{PERSONAL_DATA.email}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full">
              <a
                href={PERSONAL_DATA.cvPdf}
                download="CV_Doni_Darmawan.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 font-semibold text-sm text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#npm-packages"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 font-semibold text-sm text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-200 group shadow-sm dark:shadow-none"
              >
                <Package className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Open Source NPM</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
                Connect:
              </span>
              <a
                href={PERSONAL_DATA.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm dark:shadow-none"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm dark:shadow-none"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_DATA.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all shadow-sm dark:shadow-none"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative group w-full max-w-[280px] xs:max-w-[320px] sm:max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-lg sm:blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />

              {/* Card Wrapper */}
              <div className="relative rounded-3xl bg-white/90 dark:bg-slate-900/90 p-2.5 sm:p-3 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl backdrop-blur-xl transition-colors">
                {/* Profile Photo */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100 dark:bg-slate-950">
                  <img
                    src={PERSONAL_DATA.profileImage}
                    alt={PERSONAL_DATA.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/40 dark:border-cyan-500/30 text-[11px] sm:text-xs font-semibold text-cyan-700 dark:text-cyan-300 flex items-center gap-1.5 shadow-md transition-colors">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    Verified Engineer
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <p className="text-[11px] font-mono text-cyan-400">@darmawandoni6</p>
                    <h3 className="text-base sm:text-lg font-bold text-white">Doni Darmawan</h3>
                    <p className="text-xs text-slate-300">Software Engineer @ Amartha</p>
                  </div>
                </div>

                {/* Floating Tech Chips Below Image */}
                <div className="flex items-center justify-between gap-1.5 p-2.5 mt-1 bg-slate-100/90 dark:bg-slate-950/60 rounded-xl border border-slate-200 dark:border-slate-800/80 text-[11px] sm:text-xs font-mono text-slate-600 dark:text-slate-400 transition-colors">
                  <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-300 font-semibold">
                    <Terminal className="w-3.5 h-3.5" /> Next.js
                  </span>
                  <span>TypeScript</span>
                  <span>Jest (80%)</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {PERSONAL_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-4 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-center text-center transition-colors"
            >
              <span className="text-2xl sm:text-4xl font-extrabold text-gradient tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1 transition-colors">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
