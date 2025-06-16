"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Testimonial } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { QuoteIcon } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alex Johnson",
    role: "CEO",
    company: "TechVision",
    content: "John's work on our web application was outstanding. He delivered a product that exceeded our expectations and has significantly improved our user engagement.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Product Manager",
    company: "InnovateX",
    content: "Working with John was a pleasure. His technical expertise, combined with his eye for design, resulted in a beautiful and functional website that our customers love.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthLabs",
    content: "John's ability to translate our vision into reality was impressive. He was responsive, professional, and the end result was exactly what we needed.",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "LaunchPad",
    content: "As a startup, we needed someone who could wear multiple hats and understand our needs. John was that person - skilled, adaptable, and committed to our success.",
    avatar: "https://i.pravatar.cc/150?img=10"
  },
  {
    id: "5",
    name: "David Thompson",
    role: "CTO",
    company: "Digital Solutions",
    content: "John's technical skills are top-notch. He tackled complex problems with elegant solutions and communicated effectively throughout the entire process.",
    avatar: "https://i.pravatar.cc/150?img=8"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Testimonials" 
          subtitle="What clients and colleagues say about my work"
        />

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-t-4 border-t-blue-500 dark:border-t-blue-400 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          <QuoteIcon className="h-8 w-8 text-blue-500/20 dark:text-blue-400/20 mb-4" />
          
          <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.content}"</p>
          
          <div className="flex items-center">
            <Avatar className="h-12 w-12 border-2 border-primary/10">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}