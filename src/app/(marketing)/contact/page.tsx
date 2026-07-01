"use client";

import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Mail, Clock, CheckCircle2 } from "lucide-react";
import { verticals } from "@/data/verticals";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would connect to an API route or Splitforms
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="pt-24 pb-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Let's Build Something Together
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12">
              Tell us about your manual bottlenecks. We'll provide a free ROI calculation and build a visual prototype within 48 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <Card className="bg-[var(--color-background-secondary)] border-[var(--color-border-subtle)] p-2">
                  <CardContent className="p-6 md:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-16">
                        <div className="w-16 h-16 rounded-full bg-[var(--color-accent-success)]/10 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-8 h-8 text-[var(--color-accent-success)]" />
                        </div>
                        <h3 className="text-2xl font-display font-semibold mb-4 text-[var(--color-text-primary)]">Request Received</h3>
                        <p className="text-[var(--color-text-secondary)] mb-8">
                          Thank you for reaching out. We will review your requirements and get back to you within 24 hours with the next steps for your visual prototype.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-primary)]">Name</label>
                            <input
                              type="text"
                              id="name"
                              required
                              className="w-full bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]/50 transition-all"
                              placeholder="John Doe"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-primary)]">Email</label>
                            <input
                              type="email"
                              id="email"
                              required
                              className="w-full bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]/50 transition-all"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="industry" className="text-sm font-medium text-[var(--color-text-primary)]">Industry</label>
                          <select
                            id="industry"
                            required
                            className="w-full bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]/50 transition-all appearance-none"
                          >
                            <option value="">Select your industry</option>
                            {verticals.map(v => (
                              <option key={v.id} value={v.id}>{v.name}</option>
                            ))}
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-primary)]">What is your biggest manual bottleneck?</label>
                          <textarea
                            id="message"
                            required
                            rows={4}
                            className="w-full bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-lg px-4 py-3 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-primary)]/50 transition-all resize-y"
                            placeholder="Tell us about the tasks that take up the most time..."
                          ></textarea>
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                          Start Your Audit
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </FadeUp>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <FadeUp delay={0.2}>
                <div className="bg-[var(--color-surface-glass)] border border-[var(--color-border-subtle)] rounded-2xl p-8">
                  <h3 className="text-xl font-display font-semibold mb-6 text-[var(--color-text-primary)]">Direct Contact</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-[var(--color-accent-primary)] mr-4 shrink-0" />
                      <div>
                        <h4 className="font-medium text-[var(--color-text-primary)] mb-1">Email Us</h4>
                        <a href="mailto:services@sequels.diy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
                          services@sequels.diy
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-[var(--color-accent-primary)] mr-4 shrink-0" />
                      <div>
                        <h4 className="font-medium text-[var(--color-text-primary)] mb-1">Location</h4>
                        <p className="text-[var(--color-text-secondary)]">India</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-[var(--color-accent-primary)] mr-4 shrink-0" />
                      <div>
                        <h4 className="font-medium text-[var(--color-text-primary)] mb-1">Response Time</h4>
                        <p className="text-[var(--color-text-secondary)]">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="bg-[var(--color-accent-primary)]/5 border border-[var(--color-accent-primary)]/20 rounded-2xl p-8">
                  <h3 className="text-lg font-display font-semibold mb-4 text-[var(--color-accent-primary)]">What Happens Next?</h3>
                  <ol className="space-y-4">
                    <li className="flex text-sm text-[var(--color-text-secondary)]">
                      <span className="font-bold text-[var(--color-accent-primary)] mr-3">1.</span>
                      You reach out via form or email.
                    </li>
                    <li className="flex text-sm text-[var(--color-text-secondary)]">
                      <span className="font-bold text-[var(--color-accent-primary)] mr-3">2.</span>
                      We calculate the real rupee cost of your manual processes.
                    </li>
                    <li className="flex text-sm text-[var(--color-text-secondary)]">
                      <span className="font-bold text-[var(--color-accent-primary)] mr-3">3.</span>
                      We build a visual prototype of the solution within 48 hours.
                    </li>
                  </ol>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
