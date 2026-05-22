"use client";

import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

const features = [
  {
    title: 'Role-Based Access Control',
    description:
      'Strict separation between Student and Class Representative (CR) workflows. CRs hold the keys to class management, while students enjoy a read-only, distraction-free environment locked behind secure access codes.',
    src: 'security.jpg',
    link: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=500&auto=format&fit=crop',
    color: '#5196fd',
  },
  {
    title: 'Note & Syllabus Sharing',
    description:
      'A single source of truth for all study materials. Students can upload their notes for CR approval, ensuring high-quality resources. Store syllabus PDFs and access them anytime through our Supabase cloud storage.',
    src: 'notes.jpg',
    link: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&auto=format&fit=crop',
    color: '#8f89ff',
  },
  {
    title: 'Dynamic Live Timetables',
    description:
      'Say goodbye to confusing WhatsApp groups. Real-time timetable updates with cancellation and transfer notices instantly synced to every student in the class.',
    src: 'timetable.jpg',
    link: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&auto=format&fit=crop',
    color: '#13006c',
  },
  {
    title: 'Exams & Assignments Tracker',
    description:
      'Track deadlines, view syllabus PDFs, and keep the whole class synchronized with an interactive assignment dashboard. Never miss a submission again.',
    src: 'exams.jpg',
    link: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop',
    color: '#ed649e',
  },
  {
    title: 'Automated Profile Sync',
    description:
      'Onboarding made simple. Joining a class automatically syncs the student\'s profile with the class\'s academic year, semester, branch, and division. No manual data entry required.',
    src: 'profile.jpg',
    link: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop',
    color: '#fd521a',
  },
];

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <ReactLenis root>
      <main className='relative w-full bg-transparent' ref={container}>
        {/* Animated Background */}
        <Scene />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full p-6 z-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#9A81F2] to-[#6BC5A0] shadow-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-white tracking-tight drop-shadow-md">ClassCR</span>
          </div>
          <button 
            onClick={() => window.open('https://the-class.vercel.app', '_blank')}
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-[14px] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Launch App
          </button>
        </nav>

        {/* Hero Section */}
        <section className='text-white h-[100vh] w-full flex flex-col items-center justify-center relative'>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8">
              <span className="w-2 h-2 rounded-full bg-[#6BC5A0] animate-pulse shadow-[0_0_10px_#6BC5A0]" />
              <span className="text-[12px] font-bold text-white uppercase tracking-wider">The Future of Classroom Management</span>
            </div>
            <h1 className='text-5xl md:text-8xl font-extrabold text-center tracking-tight leading-[110%] drop-shadow-2xl mb-6'>
              Empower Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A81F2] to-[#FF9A76]">
                Workflow.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 font-medium max-w-2xl mx-auto drop-shadow-md">
              Scroll down to discover the features that make ClassCR the ultimate tool for Class Representatives. 👇
            </p>
          </motion.div>
        </section>

        {/* Stacking Cards Section */}
        <section className='w-full text-white pb-32'>
          {features.map((feature, i) => {
            const targetScale = 1 - (features.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={feature.link}
                src={feature.src}
                title={feature.title}
                color={feature.color}
                description={feature.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* Footer */}
        <footer className='group relative w-full overflow-hidden bg-black/50 backdrop-blur-md border-t border-white/10'>
          <h1 className='text-[14vw] pt-20 pb-10 leading-[100%] uppercase font-black text-center text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/10 transition-all ease-linear'>
            ClassCR
          </h1>
          <div className='relative z-10 flex flex-col items-center justify-center pb-12 gap-4'>
            <button 
              onClick={() => window.open('https://the-class.vercel.app', '_blank')}
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-[18px] hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Start Using ClassCR Today
            </button>
            <p className="font-medium text-sm text-white/40 mt-4">© 2026 ClassCR. Designed for the modern classroom.</p>
          </div>
        </footer>
      </main>
    </ReactLenis>
  );
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
      <motion.div
        style={{
          backgroundColor: `${color}20`, // 12% opacity to let the blur show through clearly
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[15%] md:-top-[25%] h-[500px] w-[90%] md:w-[75%] rounded-3xl lg:p-10 sm:p-6 p-4 origin-top shadow-2xl border border-white/20 backdrop-blur-3xl`}
      >
        <h2 className='text-3xl md:text-4xl text-center font-bold mb-4 drop-shadow-md'>{title}</h2>
        <div className={`flex flex-col-reverse md:flex-row h-full mt-2 gap-6 md:gap-10 items-center`}>
          <div className={`w-full md:w-[40%] flex flex-col justify-center`}>
            <p className='text-[16px] md:text-lg leading-relaxed text-white/90 drop-shadow-sm'>
              {description}
            </p>
            <span className='flex items-center gap-2 pt-6'>
              <a
                href='https://the-class.vercel.app'
                target='_blank'
                rel='noreferrer'
                className='underline font-bold cursor-pointer text-white hover:text-white/80 transition-colors'
              >
                Experience it now
              </a>
              <svg
                width='22'
                height='12'
                viewBox='0 0 22 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z'
                  fill='white'
                />
              </svg>
            </span>
          </div>

          <div
            className={`relative w-full md:w-[60%] h-[200px] md:h-full rounded-2xl overflow-hidden shadow-inner`}
          >
            <motion.div
              className={`relative w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image 
                fill 
                src={url} 
                alt={title} 
                className='object-cover opacity-90 hover:opacity-100 transition-opacity duration-500' 
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
