"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, CheckCircle, Shield, Users, Zap } from "lucide-react";
import Scene from "@/components/Scene";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-transparent selection:bg-[#9A81F2] selection:text-white text-white">
      {/* 3D Background */}
      <Scene />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9A81F2] to-[#6BC5A0] shadow-lg shadow-[#9A81F2]/20 flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-xl text-white tracking-tight">ClassCR</span>
        </div>
        <button 
          onClick={() => window.open('https://the-class.vercel.app', '_blank')}
          className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-[14px] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg mb-8">
            <span className="w-2 h-2 rounded-full bg-[#6BC5A0] animate-pulse shadow-[0_0_10px_#6BC5A0]" />
            <span className="text-[12px] font-bold text-white/80 uppercase tracking-wider">The Future of Classroom Management</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-[50px] md:text-[80px] font-extrabold text-white leading-[1.1] tracking-tight mb-6 drop-shadow-2xl">
            Empower Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A81F2] to-[#FF9A76]">
              Classroom Workflow
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[18px] md:text-[22px] text-white/60 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            ClassCR bridges the gap between Class Representatives and students. Share notes, track timetables, and manage assignments in one beautiful, real-time platform.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.open('https://the-class.vercel.app', '_blank')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#9A81F2] text-white font-bold text-[16px] hover:bg-[#886ee3] transition-colors shadow-lg shadow-[#9A81F2]/30 flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Launch Platform <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => window.open('https://github.com/Sujal1057/the-class', '_blank')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-bold text-[16px] hover:bg-white/20 transition-colors shadow-sm border border-white/10 flex items-center justify-center gap-2 hover:-translate-y-1 backdrop-blur-md"
            >
              View GitHub
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-32 px-4 bg-gradient-to-b from-transparent via-black/80 to-black backdrop-blur-sm">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight mb-4 drop-shadow-lg">
              Everything you need,<br />nothing you don't.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<BookOpen className="w-6 h-6 text-[#9A81F2]" />}
              title="Note Sharing"
              desc="Students upload notes, CRs approve them. A single source of truth for all study materials."
              color="bg-[#9A81F2]/10"
            />
            <FeatureCard 
              icon={<Calendar className="w-6 h-6 text-[#FF9A76]" />}
              title="Dynamic Timetable"
              desc="Real-time updates for cancelled or transferred classes. Never miss an announcement again."
              color="bg-[#FF9A76]/10"
            />
            <FeatureCard 
              icon={<CheckCircle className="w-6 h-6 text-[#6BC5A0]" />}
              title="Assignments & Exams"
              desc="Track deadlines, view syllabus PDFs, and keep the whole class synchronized."
              color="bg-[#6BC5A0]/10"
            />
          </div>
        </motion.div>
      </section>

      {/* Security & Workflow Section */}
      <section className="relative z-10 py-32 px-4 bg-black border-t border-white/5">
        <motion.div 
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 space-y-8">
            <h2 className="text-[36px] md:text-[48px] font-bold text-white tracking-tight leading-[1.1] drop-shadow-xl">
              Built with <br />Security First.
            </h2>
            <div className="space-y-6">
              <WorkflowItem 
                icon={<Shield className="w-5 h-5 text-black" />}
                title="Role-Based Access"
                desc="Strict separation between Student and CR workflows. CRs hold the keys to class management."
                color="bg-white"
              />
              <WorkflowItem 
                icon={<Zap className="w-5 h-5 text-white" />}
                title="Real-time Synchronization"
                desc="Powered by Supabase, all approvals, note uploads, and announcements instantly appear."
                color="bg-[#9A81F2]"
              />
              <WorkflowItem 
                icon={<Users className="w-5 h-5 text-white" />}
                title="Access Code Protection"
                desc="Classes are locked behind unique access codes and manual CR approval. No uninvited guests."
                color="bg-[#FF9A76]"
              />
            </div>
          </div>
          <div className="flex-1 relative w-full h-[500px] rounded-[40px] bg-[#1a1a1a] overflow-hidden shadow-[0_0_50px_rgba(154,129,242,0.1)] flex items-center justify-center border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9A81F2]/10 to-[#FF9A76]/10 opacity-50"></div>
            <div className="text-center p-8 relative z-10">
              <div className="w-24 h-24 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] mx-auto mb-6 flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-500">
                <span className="text-4xl drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Production Ready</h3>
              <p className="text-white/50 font-medium mb-6">Fully deployed on Vercel with a live Supabase backend.</p>
              <button 
                onClick={() => window.open('https://the-class.vercel.app', '_blank')}
                className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-[14px] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Launch Now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 text-center text-white/30 border-t border-white/5">
        <p className="font-medium text-sm">© 2026 ClassCR. Designed for the modern classroom.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="p-8 rounded-[32px] bg-[#111111] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-white/20 hover:shadow-[0_0_40px_rgba(154,129,242,0.15)] transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-[20px] font-bold text-white mb-3">{title}</h3>
      <p className="text-[15px] font-medium text-white/50 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

function WorkflowItem({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className="flex gap-4">
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
        {icon}
      </div>
      <div>
        <h4 className="text-[18px] font-bold text-white mb-1">{title}</h4>
        <p className="text-[15px] font-medium text-white/50 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
