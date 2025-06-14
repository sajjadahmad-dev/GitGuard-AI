"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator, Shield, DollarSign } from "lucide-react"
import { useRef } from "react"

export function ROICalculator() {
  const roiRef = useRef(null)
  const roiInView = useInView(roiRef)

  return (
    <section
      ref={roiRef}
      className="py-16 md:py-24 relative bg-gradient-to-br from-gray-50 to-blue-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900/50 dark:to-slate-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={roiInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Proven ROI Calculator
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Real numbers from enterprise deployments, not marketing fluff
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Cost Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={roiInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-red-50 dark:bg-slate-800/80 border-2 border-red-200 dark:border-red-500/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <DollarSign className="w-8 h-8 text-red-600 dark:text-red-400 mr-3" />
                  <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">Without Gitguard AI</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-red-200 dark:border-red-500/30">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Average breaches per year</span>
                    <span className="text-red-600 dark:text-red-400 font-bold">3-5</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200 dark:border-red-500/30">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Cost per breach</span>
                    <span className="text-red-600 dark:text-red-400 font-bold">$1.2M</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200 dark:border-red-500/30">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Incident response time</span>
                    <span className="text-red-600 dark:text-red-400 font-bold">277 days</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-red-200 dark:border-red-500/30">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Developer time lost</span>
                    <span className="text-red-600 dark:text-red-400 font-bold">40 hrs/incident</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-red-100 dark:bg-red-900/20 rounded-lg px-4">
                    <span className="text-gray-900 dark:text-white font-bold">Annual Risk Cost</span>
                    <span className="text-red-600 dark:text-red-400 font-bold text-xl">$3.6M - $6M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Savings Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={roiInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-green-50 dark:bg-slate-800/80 border-2 border-green-200 dark:border-green-500/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">With Gitguard AI</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-green-200 dark:border-green-500/30">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Breaches prevented</span>
                    <span className="text-green-600 dark:text-green-400 font-bold">95%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-green-200 dark:border-green-500/30">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Detection time</span>
                    <span className="text-green-600 dark:text-green-400 font-bold">Real-time</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-green-200 dark:border-green-500/30">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">False positive rate</span>
                    <span className="text-green-600 dark:text-green-400 font-bold">6%</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-green-200 dark:border-green-500/30">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Annual subscription</span>
                    <span className="text-green-600 dark:text-green-400 font-bold">$50K</span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-green-100 dark:bg-green-900/20 rounded-lg px-4">
                    <span className="text-gray-900 dark:text-white font-bold">Net Annual Savings</span>
                    <span className="text-green-600 dark:text-green-400 font-bold text-xl">$3.4M - $5.9M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* ROI Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={roiInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-slate-800/90 dark:via-cyan-900/30 dark:to-green-900/30 border-2 border-blue-200 dark:border-cyan-500/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 text-center">
              <Calculator className="w-16 h-16 text-blue-600 dark:text-cyan-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 dark:from-cyan-400 dark:to-green-400 bg-clip-text text-transparent">
                6,800% - 11,800% ROI
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                Based on preventing just 3 credential leaks per year for a 500+ developer organization
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">68x - 118x</div>
                  <div className="text-gray-600 dark:text-gray-400">Return Multiple</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">2.1 months</div>
                  <div className="text-gray-600 dark:text-gray-400">Payback Period</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">$50K</div>
                  <div className="text-gray-600 dark:text-gray-400">Annual Investment</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
