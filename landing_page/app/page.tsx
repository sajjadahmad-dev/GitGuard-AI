"use client"

import { FloatingParticles } from "@/components/floating-particles"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemStats } from "@/components/problem-stats"
import { TechnicalAdvantage } from "@/components/technical-advantage"
import { ROICalculator } from "@/components/roi-calculator"
import { CompetitiveComparison } from "@/components/competitive-comparison"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function GitguardLanding() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-gray-900 dark:text-white overflow-hidden transition-colors duration-300">
      <FloatingParticles />
      <Navigation />
      <HeroSection />
      <ProblemStats />
      <TechnicalAdvantage />
      <ROICalculator />
      <CompetitiveComparison />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  )
}
