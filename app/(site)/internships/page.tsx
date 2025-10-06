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
                        <p className="text-gray-700 mt-3 max-w-3xl">Choose from our specialized technology tracks and kickstart your software career by working on real projects. Learn industry-standard technologies with mentorship and build your professional portfolio.</p>
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
                        <h2 className="font-semibold text-lg">Our Technology Tracks</h2>
                        <div className="space-y-4 mt-3">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h3 className="font-semibold text-blue-600">Web Development with Python & Django</h3>
                                <p className="text-sm text-gray-700 mt-1">Learn to build robust web applications using Python and Django framework. Master backend development, databases, and REST APIs through hands-on projects.</p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-4">
                                <h3 className="font-semibold text-green-600">Full-Stack JavaScript & TypeScript</h3>
                                <p className="text-sm text-gray-700 mt-1">Master modern web development with JavaScript, TypeScript, NestJS, and Node.js. Build scalable applications from frontend to backend with industry best practices.</p>
                            </div>
                            <div className="border-l-4 border-purple-500 pl-4">
                                <h3 className="font-semibold text-purple-600">Android App Development with Kotlin</h3>
                                <p className="text-sm text-gray-700 mt-1">Create native Android applications using Kotlin. Learn mobile UI/UX, app architecture, and publish your apps to the Google Play Store.</p>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <p className="text-xs text-gray-600"><strong>All tracks include:</strong> Mentorship, Portfolio Building, Career Guidance, and Job Placement Support</p>
                        </div>
                    </div>
                    <form action="/api/internships" method="POST" className="card p-6 space-y-4">
                        <h2 className="font-semibold text-lg">Apply now</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <TextField label="Full name" name="name" required fullWidth />
                            <TextField label="Email" name="email" type="email" required fullWidth />
                        </div>
                        <TextField
                            select
                            label="Preferred Technology Track"
                            name="track"
                            required
                            fullWidth
                            SelectProps={{ native: true }}
                        >
                            <option value="">Select a track</option>
                            <option value="python-django">Web Development with Python & Django</option>
                            <option value="javascript-typescript">Full-Stack JavaScript & TypeScript</option>
                            <option value="android-kotlin">Android App Development with Kotlin</option>
                        </TextField>
                        <TextField label="Portfolio/GitHub" name="portfolio" placeholder="https://github.com/username" fullWidth />
                        <TextField label="Why do you want to join?" name="motivation" multiline rows={6} required fullWidth />
                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit application</Button>
                    </form>
                </div>
            </section>
        </>
    );
}


