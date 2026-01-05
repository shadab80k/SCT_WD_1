import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title?: string
  description?: string
  testimonials?: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

const defaultTestimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using NexaTech has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, a tech partner that actually understands context! The quality of service is impressive."
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@mikechen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "NexaTech's cloud solutions helped us scale from startup to enterprise in record time. Highly recommended!",
    href: "https://twitter.com/mikechen"
  },
  {
    author: {
      name: "Sarah Williams",
      handle: "@sarahw",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Outstanding cybersecurity services. They identified vulnerabilities we didn't even know existed."
  }
];

export function TestimonialsSection({ 
  title = "What Our Clients Say",
  description = "Join thousands of businesses who trust NexaTech to power their digital transformation",
  testimonials = defaultTestimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className={cn("relative py-24 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </div>

          <div className="relative w-full max-w-6xl mx-auto">
            <div className="flex gap-5 overflow-hidden [--gap:1.25rem] [--duration:40s]">
              <div className="flex shrink-0 gap-5 animate-marquee">
                {[...Array(4)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <TestimonialCard
                      key={`${setIndex}-${i}`}
                      {...testimonial}
                      className="w-[350px] shrink-0"
                    />
                  ))
                ))}
              </div>
            </div>

            {/* Gradient Overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection;
