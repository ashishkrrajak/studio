// src/components/about-section.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Briefcase, Coffee, Zap, Puzzle, Users, Quote, TerminalSquare, ArrowRight, MessageCircle, TrendingUp, UsersRound, Code2 } from 'lucide-react';

export function AboutSection() {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git & GitHub', 'REST APIs', 'UI/UX Principles', 'Agile Methodologies', 'Genkit AI'];
  
  const journeyPoints = [
    {
      icon: TrendingUp,
      title: "Early Passion for Tech",
      text: "My fascination with technology began in my early teens, tinkering with hardware and exploring basic programming. This curiosity laid the foundation for a lifelong pursuit of creating innovative digital solutions."
    },
    {
      icon: Code,
      title: "Formal Education & Skill Building",
      text: "I pursued a degree in Computer Science, where I honed my foundational knowledge. During this time, I dived deep into web development, mastering languages like JavaScript and frameworks like React, always eager to learn the next big thing."
    },
    {
      icon: Briefcase,
      title: "Professional Growth",
      text: "Over the past 5+ years, I've had the privilege of working on diverse projects, from e-commerce platforms to collaborative tools. Each role has sharpened my skills in frontend development, UI/UX design, and agile project management, allowing me to contribute effectively to team success."
    },
     {
      icon: Zap,
      title: "Embracing AI and Future Tech",
      text: "Currently, I'm deeply involved in exploring the intersection of AI and web development. Integrating tools like Genkit to build smarter, more intuitive applications is my latest focus, as I believe AI will redefine user experiences."
    }
  ];

  const testimonials = [
    {
      quote: "Alex is a highly skilled developer with a keen eye for detail and a proactive approach to problem-solving. A true asset to any team, consistently delivering high-quality work.",
      name: "Jane Doe",
      title: "Senior Engineer, Tech Solutions Inc.",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "professional portrait"
    },
    {
      quote: "Working with Alex was a pleasure. His ability to translate complex ideas into elegant UI solutions and his collaborative spirit made our projects incredibly successful.",
      name: "John Smith",
      title: "Product Manager, Innovate Corp.",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "business person"
    },
    {
      quote: "Alex's dedication to user experience and clean code is exceptional. He's always learning and bringing fresh perspectives to the table.",
      name: "Sarah Lee",
      title: "UX Lead, Creative Designs Co.",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "creative professional"
    }
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/alexjohnson_dev/", // Placeholder
      icon: Code2,
      username: "alexjohnson_dev"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/alexjohnson_dev", // Placeholder
      icon: TerminalSquare,
      username: "alex_codes_HR"
    },
    {
      name: "GitHub",
      url: "https://github.com/alexjohnson", // Placeholder
      icon: Briefcase, // Using Briefcase as GitHub is project/code hosting
      username: "alexjohnson"
    }
  ];
  
  return (
    <div className="space-y-20 md:space-y-28">
      <section id="about-intro" className="fade-in-section">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-xl bg-card border-border">
            <div className="md:flex md:items-stretch">
              <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-4xl md:text-5xl font-bold text-primary mb-3">About Me</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                    Hello! I'm Alex Johnson, a dedicated Frontend Developer with a strong focus on creating intuitive, performant, and visually appealing web applications. With 5+ years of experience, I specialize in translating complex requirements into elegant, user-friendly interfaces.
                  </p>
                  <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                    My passion lies at the intersection of design and technology. I thrive on building responsive, accessible, and scalable solutions using modern JavaScript frameworks like React and Next.js, coupled with the power of TypeScript and utility-first CSS with Tailwind. I'm also keenly interested in leveraging AI to enhance web experiences.
                  </p>
                  <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                    Beyond coding, I'm an avid learner, always exploring new tools and techniques to enhance my craft. I believe in collaborative development and enjoy working in agile environments to deliver high-quality products.
                  </p>
                </CardContent>
              </div>
              <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
                <Image
                  src="https://placehold.co/800x1200.png"
                  alt="Alex Johnson working at a desk"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  data-ai-hint="workspace developer"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r md:from-card md:via-card/50 md:to-transparent"></div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-center">
            {[
              { icon: Zap, title: "Performance", text: "Optimizing for speed and efficiency." },
              { icon: Puzzle, title: "Problem Solving", text: "Creative solutions to complex challenges." },
              { icon: UsersRound, title: "User-Centric", text: "Focusing on intuitive UX/UI." },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg border border-border/70 hover:shadow-xl transition-shadow">
                <item.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-semibold text-xl text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 md:py-20 bg-card/50 fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Core Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-md px-6 py-3 bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-colors cursor-default shadow-md">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
      
      <section id="journey" className="py-16 md:py-20 fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">My Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 hidden md:block"></div>
            
            {journeyPoints.map((point, index) => (
              <div key={index} className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:flex md:w-5/12"></div> {/* Spacer */}
                <div className="hidden md:flex justify-center md:w-2/12">
                  <div className="relative">
                    <div className="absolute w-8 h-8 bg-primary rounded-full z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-card shadow-lg flex items-center justify-center">
                      <point.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-5/12">
                  <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow border-border/70 p-6 rounded-lg">
                    <div className="flex items-center md:hidden mb-4">
                       <div className="w-8 h-8 bg-primary rounded-full z-10 border-4 border-card shadow-lg flex items-center justify-center mr-4">
                         <point.icon className="h-4 w-4 text-primary-foreground" />
                       </div>
                       <h3 className="text-xl font-semibold text-accent">{point.title}</h3>
                    </div>
                     <h3 className="hidden md:block text-xl font-semibold text-accent mb-3">{point.title}</h3>
                    <p className="text-md text-foreground/80 leading-relaxed">{point.text}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-20 bg-card/50 fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Words From Colleagues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow border-border/70 flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                  <Quote className="w-10 h-10 text-accent mb-6" />
                  <p className="text-foreground/80 italic leading-relaxed mb-6 flex-grow">"{testimonial.quote}"</p>
                  <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                    <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint}/>
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="coding-profiles" className="py-16 md:py-20 fade-in-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Coding & Profile Hub</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {codingProfiles.map((profile) => (
              <Card key={profile.name} className="bg-card shadow-lg hover:shadow-xl transition-shadow border-border/70 hover:border-accent/50">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <profile.icon className="w-16 h-16 text-accent mb-6" />
                  <h3 className="text-2xl font-semibold text-primary mb-2">{profile.name}</h3>
                  <p className="text-muted-foreground mb-6">@{profile.username}</p>
                  <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-transform hover:scale-105 shadow-md">
                    <Link href={profile.url} target="_blank" rel="noopener noreferrer">
                      View Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-cta" className="py-16 md:py-24 fade-in-section">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/80 to-accent/80 shadow-2xl border-none">
            <MessageCircle className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">Interested in Collaborating?</h2>
            <p className="text-lg text-primary-foreground/90 mb-10 leading-relaxed">
              I'm always excited to discuss new projects, innovative ideas, or potential opportunities. Let's connect and build something amazing together!
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-card hover:bg-card/90 text-card-foreground transition-transform hover:scale-105 shadow-xl py-3 px-8 text-lg">
              <Link href="/contact">
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
