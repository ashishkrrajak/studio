
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Briefcase, Zap, Puzzle, Quote, TerminalSquare, MessageCircle, TrendingUp, Code2, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { FlippableContactCard } from '@/components/flippable-contact-card';
import { DownloadCVButton } from '@/components/download-cv-button';

export default function HomePage() {
  const javaCodeSnippets = [
    { text: "public class Main {}", top: "15%", left: "55%", opacity: "opacity-40", animationDelay: "0.1s" },
    { text: "@SpringBootApplication", top: "25%", left: "75%", opacity: "opacity-30", animationDelay: "0.2s" },
    { text: "System.out.println(\"Hello\");", top: "40%", left: "50%", opacity: "opacity-50", animationDelay: "0.3s" },
    { text: "SELECT * FROM users;", top: "60%", left: "80%", opacity: "opacity-30", animationDelay: "0.4s" },
    { text: "// Java Full Stack", top: "75%", left: "60%", opacity: "opacity-40", animationDelay: "0.5s" },
    { text: "Microservices Arch", top: "50%", left: "45%", opacity: "opacity-20", animationDelay: "0.6s" },
    { text: "docker build -t app .", top: "5%", left: "65%", opacity: "opacity-30", animationDelay: "0.7s" },
  ];

  const skills = ['Java', 'Spring Boot', 'Microservices', 'React', 'Angular', 'SQL', 'NoSQL (MongoDB)', 'Docker', 'Kubernetes', 'AWS/Cloud', 'JavaScript/TypeScript', 'HTML5', 'CSS3', 'Git & GitHub', 'Agile Methodologies', 'REST APIs', 'CI/CD'];
  
  const journeyPoints = [
    {
      icon: TrendingUp,
      title: "Igniting the Spark",
      text: "My journey into the world of programming began with a fascination for how software solves real-world problems. This curiosity quickly evolved into a passion for Java and its robust ecosystem."
    },
    {
      icon: Code,
      title: "Building a Strong Foundation",
      text: "Through dedicated learning and a Computer Science degree, I mastered core Java concepts, data structures, and algorithms. I then expanded my expertise into full-stack development, embracing frameworks like Spring Boot for backend and React/Angular for frontend."
    },
    {
      icon: Briefcase,
      title: "Professional Milestones",
      text: "With over 5+ years in the industry, I've contributed to diverse projects, from enterprise-level applications to scalable microservices. Each experience has honed my ability to architect and deliver high-quality, maintainable code."
    },
     {
      icon: Zap,
      title: "Embracing Modern Technologies",
      text: "I continuously explore emerging technologies, including cloud platforms like AWS, containerization with Docker & Kubernetes, and modern DevOps practices, ensuring my solutions are always cutting-edge and efficient."
    }
  ];

  const testimonials = [
    {
      quote: "Alex is a phenomenal Java Full Stack Developer. His problem-solving skills and deep understanding of the Spring ecosystem were invaluable to our project's success. A true team player!",
      name: "Emily Carter",
      title: "Lead Software Architect, Tech Solutions Inc.",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "architect person"
    },
    {
      quote: "Alex's ability to seamlessly bridge backend and frontend development is remarkable. He consistently delivered robust and scalable solutions. Highly recommended!",
      name: "Michael B. Jordan",
      title: "Engineering Manager, Innovate Solutions",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "manager professional"
    },
    {
      quote: "Working alongside Alex was a masterclass in clean code and efficient design. His dedication to quality and collaborative spirit make him a standout developer.",
      name: "Priya Sharma",
      title: "Senior Backend Engineer, CloudNine Ltd.",
      avatarUrl: "https://placehold.co/100x100.png",
      dataAiHint: "engineer female"
    }
  ];

  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/alexjohnson_java_dev/", // Placeholder
      icon: Code2,
      username: "alex_java_dev"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/alexjohnson_java_dev", // Placeholder
      icon: TerminalSquare,
      username: "alex_codes_java"
    },
    {
      name: "GitHub",
      url: "https://github.com/alexjohnson", // Placeholder
      icon: Briefcase,
      username: "alexjohnson_java"
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
                Hi, I'm Alex Johnson - a <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-400">Java Full Stack Developer</span> with a passion for building robust, scalable, and efficient applications.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  asChild
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))' }}
                >
                  <Link href="/#contact">
                    Contact Me
                    <Mail className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <DownloadCVButton />
              </div>
            </div>
            
            <div className="relative w-full max-w-md mx-auto md:max-w-lg h-80 md:h-[500px] group">
              <div className="absolute inset-0 -m-4 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>
              <Image
                src="https://placehold.co/600x700.png" 
                alt="Alex Johnson - Java Full Stack Developer"
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
      
      {/* About Section Parts - Grouped under a div with id="about" for navigation */}
      <div id="about" className="space-y-20 md:space-y-28 pt-16"> {/* pt-16 for scroll margin */}
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
                      Hello! I'm Alex Johnson, a dedicated Java Full Stack Developer. I specialize in architecting and developing robust, scalable, and high-performance applications, from backend microservices with Spring Boot to dynamic frontends with modern JavaScript frameworks.
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
                    alt="Alex Johnson working at a desk with Java code"
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
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 hidden md:block"></div>
              {journeyPoints.map((point, index) => (
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
      </div> {/* End of #about wrapper div */}

      {/* Contact Section using Flippable Card */}
      <FlippableContactCard id="contact" />
    </div>
  );
}

    