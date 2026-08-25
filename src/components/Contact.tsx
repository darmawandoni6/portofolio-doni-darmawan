import { Check, Copy, Download, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { PERSONAL_DATA } from '../data/cvData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const rawPhoneDigits = PERSONAL_DATA.phone.replace(/\D/g, '');
  const waDigits = rawPhoneDigits.startsWith('62')
    ? rawPhoneDigits
    : `62${rawPhoneDigits.replace(/^0/, '')}`;
  const waUrl = `https://wa.me/${waDigits}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link with pre-filled subject & message body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    const mailtoUrl = `mailto:${PERSONAL_DATA.email}?subject=${subject}&body=${body}`;

    // Trigger email client opening
    window.location.href = mailtoUrl;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[400px] bg-cyan-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none transition-colors">
            <MessageSquare className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Let's Build Something Great Together</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight transition-colors">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg transition-colors">
            Whether you have an upcoming project, engineering role, or open-source collaboration,
            feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5 sm:gap-4 transition-colors">
              <div className="p-3 sm:p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">
                  Email Address
                </p>
                <a
                  href={`mailto:${PERSONAL_DATA.email}`}
                  className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate block mt-0.5"
                >
                  {PERSONAL_DATA.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-800 transition-all shadow-sm dark:shadow-none"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />{' '}
                      Copied to Clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Email Address
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5 sm:gap-4 transition-colors">
              <div className="p-3 sm:p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">
                  Phone / WhatsApp
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block mt-0.5"
                >
                  {PERSONAL_DATA.phone}
                </a>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 transition-all shadow-sm dark:shadow-none"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs font-mono text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-800 transition-all shadow-sm dark:shadow-none"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5 sm:gap-4 transition-colors">
              <div className="p-3 sm:p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider transition-colors">
                  Location
                </p>
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-0.5 transition-colors">
                  {PERSONAL_DATA.location}
                </p>
                <p className="text-xs text-slate-500 mt-1">Open to Remote & Hybrid Roles</p>
              </div>
            </div>

            {/* Resume Download CTA Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-50 dark:from-cyan-950/60 via-white dark:via-slate-900 to-indigo-50 dark:to-indigo-950/60 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md dark:shadow-none transition-colors">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm transition-colors">
                  Need a PDF Resume?
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 transition-colors">
                  Download official CV version
                </p>
              </div>
              <a
                href={PERSONAL_DATA.cvPdf}
                download="CV_Doni_Darmawan.pdf"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 font-semibold text-xs text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 flex-shrink-0"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-5 sm:p-8 border border-slate-200/80 dark:border-slate-800 transition-colors">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors">
                Send a Message
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-6 transition-colors">
                Fill in your message below or send an email directly to{' '}
                <span className="text-cyan-600 dark:text-cyan-400 font-mono font-semibold">
                  {PERSONAL_DATA.email}
                </span>
                .
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-center space-y-2 animate-in fade-in transition-colors">
                  <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-base">Opening Email Client...</h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400/80">
                    Your email app has been opened with your pre-filled message addressed to{' '}
                    <span className="font-mono font-semibold">{PERSONAL_DATA.email}</span>. Click
                    send in your email app!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 transition-colors">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors shadow-sm dark:shadow-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 transition-colors">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors shadow-sm dark:shadow-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5 transition-colors">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Doni, I'd like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none shadow-sm dark:shadow-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 font-bold text-sm text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
