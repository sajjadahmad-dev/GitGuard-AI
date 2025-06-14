"use client"

import { motion } from "framer-motion"
import { Star, Shield, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-20 relative bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-500/20 dark:to-purple-500/20 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-cyan-200 dark:border-cyan-500/30 backdrop-blur-sm"
        >
          <Star className="w-12 h-12 md:w-16 md:h-16 text-cyan-600 dark:text-cyan-400 mx-auto mb-4 md:mb-6" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent px-4">
            Stop Your Next $1.2M Breach
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Join 500+ enterprise development teams who've eliminated credential leaks with Gitguard AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-cyan-600 dark:text-cyan-400" />
              <span className="text-cyan-700 dark:text-cyan-300 text-sm md:text-base">94% Detection Accuracy</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-300 text-sm md:text-base">6,800% Average ROI</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-300 text-sm md:text-base">2.1 Month Payback</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
            >
              Start 30-Day Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
            >
              Schedule ROI Demo
            </Button>
          </div>

          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-4">
            No credit card required • Enterprise SSO available • SOC 2 Type II certified
          </p>
        </motion.div>
      </div>
    </section>
  )
}
