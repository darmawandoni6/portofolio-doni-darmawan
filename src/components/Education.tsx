import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { EDUCATION_LIST, Education as EducationType } from '../data/cvData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 sm:py-20 relative bg-slate-100/60 dark:bg-slate-950/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none transition-colors">
            <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Academic & Bootcamp Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight transition-colors">
            Education & <span className="text-gradient">Bootcamps</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg transition-colors">
            Continuous engineering education through formal computer science studies and intensive
            developer bootcamps.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EDUCATION_LIST.map((edu: EducationType) => (
            <div
              key={edu.institution}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between group transition-colors"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      edu.type === 'Bootcamp'
                        ? 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/30'
                        : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30'
                    }`}
                  >
                    {edu.type}
                  </span>

                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                    {edu.period}
                  </span>
                </div>

                {/* Institution & Program */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    {edu.type === 'Bootcamp' ? (
                      <Award className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    )}
                    <span>{edu.institution}</span>
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1 transition-colors">
                    {edu.program}
                  </p>
                </div>

                {/* Description */}
                {edu.description && (
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800/80 transition-colors">
                    {edu.description}
                  </p>
                )}
              </div>

              {/* Bottom Actions & Location Footer */}
              <div className="mt-6 space-y-3">
                {edu.certificateUrl && (
                  <a
                    href={edu.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-all font-semibold text-xs group/btn shadow-sm"
                  >
                    <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </a>
                )}

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-500 transition-colors">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {edu.location}
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Completed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
