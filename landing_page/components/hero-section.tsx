"use client"

import { motion, useInView } from "framer-motion"
import { Shield, Github, ArrowDown, Sparkles, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

export function HeroSection() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pb-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:bg-gradient-to-b dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 px-4 md:px-0"
    >
      <div className="container mx-auto px-4 md:px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/50 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 border border-blue-200 dark:border-cyan-500/30 shadow-lg backdrop-blur-sm text-sm md:text-base"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-cyan-400" />
            <span className="text-blue-700 dark:text-cyan-400 font-semibold">AI-Powered Secret Detection</span>
          </motion.div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight px-2">
            Stop Secret Leaks
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Before They Cost Millions
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            Advanced LLM-powered IDE integration that outperforms regex-based scanners by 94%. Prevent credential leaks
            that cost enterprises an average of{" "}
            <span className="text-blue-600 dark:text-cyan-400 font-semibold">$1.2M per breach</span>.
          </p>

          <div className="bg-red-50 dark:bg-slate-800/30 rounded-lg p-3 md:p-4 mb-6 md:mb-8 max-w-2xl mx-auto border border-red-200 dark:border-red-500/30 shadow-sm">
            <p className="text-red-700 dark:text-red-300 text-sm md:text-base">
              <AlertTriangle className="w-4 h-4 inline mr-2" />
              <strong>10,000+ API keys</strong> are leaked on GitHub daily
              <span className="block text-xs text-red-600 dark:text-gray-400 mt-1">
                Source: GitGuardian 2024 State of Secrets Report
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 shadow-lg"
            >
              <Shield className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 dark:border-cyan-500 dark:text-cyan-400 dark:hover:bg-cyan-500/10 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              View Demo
            </Button>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-blue-600 dark:text-cyan-400"
          >
            <ArrowDown className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating code elements - Hidden on mobile for cleaner look */}
      <motion.div
        className="hidden md:block absolute top-1/4 left-4 md:left-10 bg-white/90 dark:bg-slate-800/80 rounded-lg p-3 md:p-4 border border-blue-200 dark:border-cyan-500/30 z-10 shadow-lg backdrop-blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      >
        <code className="text-blue-600 dark:text-cyan-400 text-sm font-mono">API_KEY=sk-proj_abc123...</code>
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-1/3 right-4 md:right-10 bg-white/90 dark:bg-slate-800/80 rounded-lg p-3 md:p-4 border border-red-200 dark:border-red-500/30 z-10 shadow-lg backdrop-blur-sm"
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
      >
        <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500 dark:text-red-400" />
      </motion.div>
    </section>
  )
}
