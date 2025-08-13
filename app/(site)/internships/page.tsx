import type { Metadata } from 'next';
import Image from 'next/image';
import { GraduationCap, Code2, Users, Clock } from 'lucide-react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
// Using Tailwind grid wrappers with MUI inputs/buttons

export const metadata: Metadata = {
	title: 'Internships',
	description: 'Learn software development with real projects, mentorship, and a modern stack.'
};

export default function Internships({ searchParams }: { searchParams?: { ok?: string; source?: string } }){
    const ok = searchParams?.ok === '1';
    return (
        <>
            <section className="container-g py-16">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl leading-tight">Internships</h1>
                        <p className="text-gray-700 mt-3 max-w-3xl">Kickstart your software career by working on real web, mobile, and AI projects. Learn modern engineering practices with mentorship and ship features that matter.</p>
                        {ok && <div className="mt-4"><Alert severity="success">Thanks! Your application was submitted successfully.</Alert></div>}
                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            {[{
                                icon: GraduationCap,
                                title: 'Mentorship',
                                body: 'Guidance from senior engineers and regular feedback.'
                            },{
                                icon: Code2,
                                title: 'Modern stack',
                                body: 'Next.js, TypeScript, APIs, mobile basics, and AI workflows.'
                            },{
                                icon: Users,
                                title: 'Team practice',
                                body: 'Code reviews, PRs, sprints, and collaborative delivery.'
                            },{
                                icon: Clock,
                                title: 'Flexible schedule',
                                body: 'Part-time or full-time options while you learn.'
                            }].map(({icon:Icon,title,body},i)=> (
                                <div key={i} className="card p-4">
                                    <div className="h-9 w-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center"><Icon size={16} /></div>
                                    <h3 className="font-semibold mt-3 text-sm">{title}</h3>
                                    <p className="text-xs text-gray-700 mt-1">{body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card overflow-hidden">
                        <div className="relative h-64 md:h-80">
                            <Image src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80" alt="Students collaborating during internship" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-g pb-16">
                <div className="grid md:grid-cols-2 gap-8 mt-2">
                    <div className="card p-6">
                        <h2 className="font-semibold text-lg">What you will learn</h2>
                        <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-1">
                            <li>Modern web stack: Next.js, TypeScript, Tailwind</li>
                            <li>Backend fundamentals: REST APIs, auth, PostgreSQL, caching</li>
                            <li>Android app development: Kotlin/Java, layouts, networking</li>
                            <li>iOS app development: Swift/SwiftUI basics, networking</li>
                            <li>Java & Spring basics for service development</li>
                            <li>Mobile: fundamentals of React Native and native bridges</li>
                            <li>Deployments, monitoring, and observability</li>
                            <li>Intro to AI assistants and RAG with best practices</li>
                        </ul>
                    </div>
                    <form action="/api/internships" method="POST" className="card p-6 space-y-4">
                        <h2 className="font-semibold text-lg">Apply now</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <TextField label="Full name" name="name" required fullWidth />
                            <TextField label="Email" name="email" type="email" required fullWidth />
                        </div>
                        <TextField label="Portfolio/GitHub" name="portfolio" placeholder="https://github.com/username" fullWidth />
                        <TextField label="Why do you want to join?" name="motivation" multiline rows={6} required fullWidth />
                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit application</Button>
                    </form>
                </div>
            </section>
        </>
    );
}


