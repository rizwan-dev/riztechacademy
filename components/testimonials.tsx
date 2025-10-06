'use client';

import { TrendingUp, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function Statistics(){
  const stats = [
    {
      icon: Award,
      value: '100%',
      label: 'Industry Ready Students',
      description: 'After our training programs'
    },
    {
      icon: TrendingUp,
      value: '100%',
      label: 'Project-Based Learning',
      description: 'Hands-on experience guaranteed'
    }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container-g py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Our Impact</h2>
          <p className="text-gray-600 mt-2">Real results from our free education programs</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="card p-6 text-center">
                <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FAQ(){
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Is RizTech Academy completely free?",
      answer: "Yes! RizTech Academy provides 100% free education. There are no tuition fees, no hidden costs, or any payment requirements for our training programs, internships, or mentorship."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "No prior experience is required. Our programs are designed for beginners, but we also welcome students with some programming knowledge who want to advance their skills."
    },
    {
      question: "Where are the classes held?",
      answer: "All our programs are conducted at our facility in Pune, India. We provide hands-on, in-person training to ensure the best learning experience for our students."
    },
    {
      question: "What are the program durations?",
      answer: "Our comprehensive programs typically run for 6 months, combining intensive training, real project work, and mentorship. Part-time options may also be available."
    },
    {
      question: "Will I get a job after completing the program?",
      answer: "We make all our deserving students industry ready after our training. While we don't guarantee job placement, we provide career guidance, interview preparation, and connect students with our partner companies to help them succeed in their careers."
    },
    {
      question: "Can I choose my preferred technology track?",
      answer: "Yes! We offer three specialized tracks: Python & Django, Full-Stack JavaScript & TypeScript, and Android Development with Kotlin. You can apply for your preferred track."
    }
  ];

  return (
    <section className="bg-gray-50">
      <div className="container-g py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">Everything you need to know about our free programs</p>
        </div>
        <div className="max-w-3xl mx-auto mt-8">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div key={index} className="card mb-4">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Testimonials(){
  const items = [
    {
      quote: 'RizTech Academy completely transformed my career. I went from struggling with basic programming to building full-stack applications. The mentorship was incredible!',
      name: 'Arjun Patel',
      track: 'Full-Stack JavaScript & TypeScript',
      outcome: 'Hired as Junior Developer at TechCorp'
    },
    {
      quote: 'The Python & Django track gave me the confidence to pursue my dream job. The hands-on projects were exactly what I needed to understand real-world development.',
      name: 'Priya Sharma',
      track: 'Web Development with Python & Django',
      outcome: 'Backend Developer at StartupXYZ'
    },
    {
      quote: 'As someone with no prior coding experience, the Android development program was perfect. I built my first app and got a job offer within 2 months!',
      name: 'Rahul Kumar',
      track: 'Android App Development with Kotlin',
      outcome: 'Mobile Developer at AppStudio'
    }
  ];
  return (
    <section className="bg-white">
      <div className="container-g py-16">
        <h2 className="text-2xl">Student Success Stories</h2>
        <p className="text-gray-600 mt-2">Hear from our graduates who transformed their careers through our free programs</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {items.map((t,i)=> (
            <figure key={i} className="card p-6">
              <blockquote className="text-sm text-gray-800">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="mt-4">
                <figcaption className="text-xs font-semibold text-gray-900">{t.name}</figcaption>
                <p className="text-xs text-blue-600 mt-1">{t.track}</p>
                <p className="text-xs text-green-600 mt-1">🎯 {t.outcome}</p>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


