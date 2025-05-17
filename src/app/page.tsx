
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, Code, Briefcase, Zap, Puzzle, Quote, TerminalSquare, Code2, Mail,
  Coffee, Leaf, Atom, Database, Cloud, GitFork, Github, Repeat, Network, FastForward, Cpu, School, Building, Braces, DatabaseZap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { FlippableContactCard } from '@/components/flippable-contact-card';
import { DownloadCVButton } from '@/components/download-cv-button';
import type { JourneyPoint, Testimonial, CodingProfile, SkillItem } from '@/types';

// Simple SVG Logo Components (can be moved to a separate file if they grow)
const AngularLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
    <path d="M12 2L2 7l2 12h16l2-12L12 2z" />
    <path d="M12 2v5l6 3" />
    <path d="M12 2v5l-6 3" />
    {/* <path d="M12 12h.01" /> Simplified, original had this for center dot */}
    <path d="M8 17h8" />
    <path d="M10 12l2 5 2-5" />
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
    <path d="M21.95 9.93C21.43 6.46 18.52 4 15 4H9c-3.31 0-6 2.69-6 6s2.69 6 6 6h.59c.25 1.49.92 2.83 1.88 3.92.82.93 1.88 1.66 3.04 2 .26.08.53.12.8.12.88 0 1.68-.38 2.27-.99.47-.5.78-1.12.91-1.8.1-.53.02-1.09-.21-1.59-.59-1.26-1.94-2.04-3.44-2.04H13v-2h1.5c2.48 0 4.5-2.02 4.5-4.5 0-.16-.01-.32-.03-.48.17-.01.33-.02.5-.02 1.02 0 1.9.46 2.48 1.19zM10 11H8v-1h2v1zm0 2H8v-1h2v1zm0 2H8v-1h2v1zm2-4h-1v-1h1v1zm0 2h-1v-1h1v1zm0 2h-1v-1h1v1zm2-4h-1v-1h1v1zm0 2h-1v-1h1v1zm0 2h-1v-1h1v1zm3.5-1c-.83 0-1.5-.67-1.5-1.5S14.67 12 15.5 12s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const KubernetesLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
    <path d="M12 2l7.75 4.5V11L12 15.5 4.25 11V6.5L12 2z" />
    <path d="M4.25 11l7.75 4.5 7.75-4.5" />
    <path d="M12 22V15.5" />
    <circle cx="12" cy="15.5" r="1.5" fill="currentColor" stroke="none"/>
    <path d="M4.25 11v6.5L12 22l7.75-4.5V11" />
  </svg>
);

const Html5Logo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
    <path d="M2 3l1.612 18L12 23.311 20.388 21 22 3H2zm10.449 15.199H8.924l-.471-4.73h3.528v-1.902H7.901l-.358-4.083h8.458l-.338 3.892H11.8v1.91h4.031l-.622 6.71z"/>
  </svg>
);

const Css3Logo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
     <path d="M2 3l1.612 18L12 23.311 20.388 21 22 3H2zm8.449 15.199H6.923l-.472-4.73h3.529v-1.902H5.901l-.359-4.083h10.458l-.141 1.551H7.731l.179 2.532h6.15l-.42 4.72H8.237l.212 2.33h4.031l-.622 6.71zM17.1 10.272h-4.03V8.369h4.32l.199-2.089H8.93V4.2h8.458l-.288 6.072z"/>
  </svg>
);


export default function HomePage() {
  const javaCodeSnippets = [
    { text: "public class Main {}", top: "15%", left: "55%", opacity: "opacity-40", animationDelay: "0.1s" },
    { text: "@SpringBootApplication", top: "25%", left: "75%", opacity: "opacity-30", animationDelay: "0.2s" },
    { text: "System.out.println(\"Hello\");", top: "40%", left: "50%", opacity: "opacity-50", animationDelay: "0.3s" },
    { text: "entityManager.persist(entity);", top: "60%", left: "80%", opacity: "opacity-30", animationDelay: "0.4s" },
    { text: "// Java Full Stack", top: "75%", left: "60%", opacity: "opacity-40", animationDelay: "0.5s" },
    { text: "new KafkaProducer<>(props);", top: "50%", left: "45%", opacity: "opacity-20", animationDelay: "0.6s" },
    { text: "Flux.just(\"Reactive\");", top: "5%", left: "65%", opacity: "opacity-30", animationDelay: "0.7s" },
  ];

  const skills: SkillItem[] = [
    { name: 'Java', icon: Coffee },
    { name: 'Spring Boot', icon: Leaf },
    { name: 'Microservices', icon: Puzzle },
    { name: 'React', icon: Atom },
    { name: 'Angular', icon: AngularLogo },
    { name: 'SQL', icon: Database },
    { name: 'NoSQL (MongoDB)', icon: DatabaseZap },
    { name: 'Docker', icon: DockerLogo },
    { name: 'Kubernetes', icon: KubernetesLogo },
    { name: 'AWS/Cloud', icon: Cloud },
    { name: 'JavaScript/TypeScript', icon: Braces },
    { name: 'HTML5', icon: Html5Logo },
    { name: 'CSS3', icon: Css3Logo },
    { name: 'Git & GitHub', icon: Github },
    { name: 'Agile Methodologies', icon: Repeat },
    { name: 'REST APIs', icon: Network },
    { name: 'CI/CD', icon: FastForward },
  ];
  
  const professionalJourneyPoints: JourneyPoint[] = [
    {
      icon: Building,
      title: "Senior Java Developer at Tech Solutions Inc.",
      text: "Led development of scalable microservices using Spring Boot and Kafka. Mentored junior developers and championed best practices in Agile environment. Successfully delivered three major product features ahead of schedule."
    },
    {
      icon: Code,
      title: "Full Stack Developer at Innovate Apps Ltd.",
      text: "Developed and maintained full-stack applications using Java, Spring, Angular, and React. Contributed to database design (SQL & NoSQL) and CI/CD pipeline automation. Key player in migrating legacy systems to modern cloud architecture on AWS."
    },
     {
      icon: Briefcase,
      title: "Software Engineer at Future Systems Co.",
      text: "Started as a junior engineer, quickly progressing by contributing to various Java-based enterprise projects. Gained foundational experience in backend development, API design, and software testing methodologies."
    }
  ];

  const educationalJourneyPoints: JourneyPoint[] = [
    {
      icon: School,
      title: "Master of Science in Computer Science",
      text: "XYZ University - Specialized in Distributed Systems and Advanced Algorithms. Thesis on 'Performance Optimization in Microservice Architectures'."
    },
    {
      icon: Zap, // Using Zap as a generic "spark" or achievement icon
      title: "Bachelor of Engineering in Information Technology",
      text: "ABC College of Engineering - Graduated with First Class Honours. Active member of the coding club and participated in national-level hackathons."
    },
    {
      icon: Cpu,
      title: "Certifications & Continuous Learning",
      text: "AWS Certified Developer, Oracle Certified Professional Java Programmer. Continuously learning through online courses on platforms like Coursera and Udemy, focusing on new technologies in cloud computing and big data."
    }
  ];


  const testimonials: Testimonial[] = [
    {
      quote: "Ashish is a phenomenal Java Full Stack Developer. His problem-solving skills and deep understanding of the Spring ecosystem were invaluable to our project's success. A true team player!",
      name: "Emily Carter",
      title: "Lead Software Architect, Tech Solutions Inc.",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "architect person"
    },
    {
      quote: "Ashish's ability to seamlessly bridge backend and frontend development is remarkable. He consistently delivered robust and scalable solutions. Highly recommended!",
      name: "Michael B. Jordan",
      title: "Engineering Manager, Innovate Solutions",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "manager professional"
    },
    {
      quote: "Working alongside Ashish was a masterclass in clean code and efficient design. His dedication to quality and collaborative spirit make him a standout developer.",
      name: "Priya Sharma",
      title: "Senior Backend Engineer, CloudNine Ltd.",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "engineer female"
    }
  ];

  const codingProfiles: CodingProfile[] = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/ashishkumarrajak_java_dev/", 
      icon: Code2,
      username: "ashish_java_dev"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/ashishkumarrajak_java_dev", 
      icon: TerminalSquare,
      username: "ashish_codes_java"
    },
    {
      name: "GitHub",
      url: "https://github.com/ashishkumarrajak", 
      icon: Github, // Changed from Briefcase to Github icon for consistency
      username: "ashishkumarrajak"
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-5rem-70px)] flex items-center justify-center overflow-hidden fade-in-section py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8 text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-600 leading-tight">
                  JAVA FULL STACK
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-600 leading-tight mt-1 md:mt-2">
                  DEVELOPER
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
                Hi, I'm Ashish Kumar Rajak - a <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-400">Java Full Stack Developer</span> with a passion for building robust, scalable, and efficient applications.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  asChild
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))' }}
                ><Link href="/#contact">
                    Contact Me
                    <Mail className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link></Button>
                <DownloadCVButton />
              </div>
            </div>
            
            <div className="relative w-full max-w-md mx-auto md:max-w-lg h-80 md:h-[500px] group">
              <div className="absolute inset-0 -m-4 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>
              <Image
                src="https://placehold.co/600x700.png" 
                alt="Ashish Kumar Rajak - Java Full Stack Developer"
                width={600}
                height={700}
                priority
                className="rounded-lg object-cover shadow-2xl border-2 border-card/50 relative z-10 transform transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="developer professional"
              />
              {javaCodeSnippets.map((snippet, index) => (
                <div
                  key={index}
                  className={`absolute font-mono text-xs md:text-sm text-foreground/70 ${snippet.opacity} transform group-hover:scale-110 transition-all duration-500 animate-fadeIn`}
                  style={{ top: snippet.top, left: snippet.left, animationDelay: snippet.animationDelay }}
                >
                  {snippet.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div id="about" className="space-y-20 md:space-y-28 pt-16">
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
                      Hello! I'm Ashish Kumar Rajak, a dedicated Java Full Stack Developer. I specialize in architecting and developing robust, scalable, and high-performance applications, from backend microservices with Spring Boot to dynamic frontends with modern JavaScript frameworks.
                    </p>
                    <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                      My passion lies in tackling complex challenges and delivering elegant, efficient solutions. I thrive in collaborative environments, leveraging Agile methodologies to build impactful software. I'm proficient across the full development lifecycle, from concept to deployment and maintenance.
                    </p>
                    <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                      Beyond coding, I'm an avid learner, always exploring new tools and techniques to enhance my craft and contribute to innovative projects.
                    </p>
                  </CardContent>
                </div>
                <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
                  <Image
                    src="https://placehold.co/800x1200.png"
                    alt="Ashish Kumar Rajak working at a desk with Java code"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    data-ai-hint="workspace developer java"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r md:from-card md:via-card/50 md:to-transparent"></div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-center">
              {[
                { icon: Zap, title: "Scalability", text: "Building systems that grow with demand." },
                { icon: Puzzle, title: "Problem Solving", text: "Elegant solutions for complex challenges." },
                { icon: Code, title: "Clean Code", text: "Focusing on maintainable and efficient code." },
              ].map((item, idx) => (
                <div key={item.title} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg border border-border/70 hover:shadow-xl transition-shadow fade-in-section" style={{animationDelay: `${0.2 * (idx + 1)}s`}}>
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
                <Badge 
                  key={skill.name} 
                  variant="secondary" 
                  className="text-md px-4 py-3 bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-all duration-200 ease-in-out hover:scale-110 cursor-default shadow-md flex items-center space-x-2"
                >
                  <skill.icon />
                  <span>{skill.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </section>
        
        <section id="journey" className="py-16 md:py-20 fade-in-section">
          <div className="container mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Professional Journey</h2>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 hidden md:block"></div>
                {professionalJourneyPoints.map((point, index) => (
                  <div key={index} className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:flex md:w-5/12"></div>
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

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Educational Journey</h2>
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 hidden md:block"></div>
                {educationalJourneyPoints.map((point, index) => (
                  <div key={index} className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="hidden md:flex md:w-5/12"></div>
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
      </div> 

      <FlippableContactCard id="contact" />
    </div>
  );
}
