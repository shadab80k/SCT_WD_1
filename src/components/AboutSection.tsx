import { Target, Users, Award, Zap } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Mission Driven',
    description: 'We are committed to delivering solutions that make a real impact on your business growth.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our diverse team of engineers and designers brings decades of combined experience.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized globally for excellence in innovation and client satisfaction.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile methodologies ensure quick turnaround without compromising quality.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Pioneering <span className="gradient-text">Digital Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Since 2015, NexaTech has been at the forefront of technological innovation. We combine creativity with technical expertise to build solutions that not only meet but exceed expectations.
            </p>
            <p className="text-muted-foreground mb-8">
              Our approach is simple: understand your unique challenges, design tailored solutions, and deliver results that drive growth. We believe in building lasting partnerships with our clients.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent rotate-6" />
              <div className="absolute inset-0 rounded-3xl glass border border-border overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(187_85%_53%_/_0.2),transparent_50%)]" />
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="h-4 w-3/4 bg-border rounded animate-pulse" />
                    <div className="h-4 w-1/2 bg-border rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="h-32 w-full bg-border/50 rounded-lg mt-4" />
                    <div className="flex gap-3">
                      <div className="h-10 w-24 bg-primary/30 rounded-lg" />
                      <div className="h-10 w-24 bg-border rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -right-4 top-1/4 px-4 py-2 glass rounded-lg border border-primary/30 animate-float">
                <span className="text-primary font-semibold">10+ Years</span>
              </div>
              
              {/* Floating Badge 2 */}
              <div className="absolute -left-4 bottom-1/4 px-4 py-2 glass rounded-lg border border-primary/30 animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-primary font-semibold">Global Reach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
