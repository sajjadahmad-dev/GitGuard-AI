"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Search, CheckCircle, XCircle, Zap, Shield } from "lucide-react"
import { useRef } from "react"

export function TechnicalAdvantage() {
  const techRef = useRef(null)
  const techInView = useInView(techRef)

  return (
    <section ref={techRef} className="py-16 md:py-24 relative bg-white dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={techInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            Why LLM Beats Regex
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Traditional regex-based scanners miss context. Our LLM understands code semantics and intent.
          </p>
        </motion.div>

        {/* Enhanced Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={techInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <div className="relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-gray-50 to-cyan-50 dark:from-red-900/10 dark:via-slate-800/50 dark:to-cyan-900/10 rounded-3xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
              {/* GitLeaks Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={techInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">GL</span>
                  </div>
                  <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-2">GitLeaks</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 bg-red-100 dark:bg-red-900/20 px-3 py-1 rounded-full">
                    Regex-Based
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { text: "67% accuracy", icon: XCircle },
                    { text: "High false positives", icon: XCircle },
                    { text: "No context awareness", icon: XCircle },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={techInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-red-200 dark:border-red-800/30 shadow-sm"
                    >
                      <item.icon className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* VS Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-xl">VS</span>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center font-medium">
                  Traditional vs AI-Powered
                </p>
                <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent mt-4"></div>
              </motion.div>

              {/* Gitguard AI Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={techInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">Gitguard AI</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 bg-cyan-100 dark:bg-cyan-900/20 px-3 py-1 rounded-full">
                    LLM-Powered
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { text: "94% accuracy", icon: CheckCircle },
                    { text: "Context-aware detection", icon: CheckCircle },
                    { text: "Semantic understanding", icon: CheckCircle },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={techInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-800/50 rounded-xl border border-cyan-200 dark:border-cyan-800/30 shadow-sm"
                    >
                      <item.icon className="w-5 h-5 text-cyan-500 dark:text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Contextual Analysis",
              description:
                "Our LLM analyzes code context, variable names, and usage patterns to distinguish between actual secrets and test data or examples.",
              technical: "Uses fine-tuned GPT-4 with custom prompts trained on 10M+ code samples",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: <Search className="w-8 h-8" />,
              title: "Semantic Pattern Recognition",
              description:
                "Goes beyond regex patterns to understand the semantic meaning of code, reducing false positives by 89%.",
              technical: "Employs transformer attention mechanisms to understand code relationships",
              gradient: "from-cyan-500 to-blue-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={techInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="bg-white dark:bg-slate-800/50 border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-4 text-gray-900 dark:text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-900/50 dark:to-slate-800/50 rounded-xl p-4 border border-gray-200 dark:border-cyan-500/20">
                    <div className="flex items-center mb-2">
                      <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mr-2" />
                      <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 uppercase tracking-wide">
                        Technical Details
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                      {feature.technical}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
