"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Code, Brain, Database, Layers } from "lucide-react"
import { useRef } from "react"

export function TeamSection() {
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef)

  const teamMembers = [
    {
      name: "Nguyen Van Hoang",
      role: "Front End & Python Developer",
      initials: "NH",
      description: "Crafting beautiful user interfaces and robust Python backends",
      icon: <Code className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Sajjad Ahmad",
      role: "AI/ML Engineer",
      initials: "SA",
      description: "Building intelligent systems and machine learning models",
      icon: <Brain className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Danish Mustafa",
      role: "AI/ML Engineer & Fullstack Developer",
      initials: "DM",
      description: "Bridging AI innovation with full-stack development expertise",
      icon: <Layers className="w-5 h-5" />,
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "Ye Bhone Lin",
      role: "AI/ML Engineer",
      initials: "YL",
      description: "Developing cutting-edge AI solutions and algorithms",
      icon: <Brain className="w-5 h-5" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Giovanni Carlos",
      role: "AI/ML Engineer",
      initials: "GC",
      description: "Advancing machine learning capabilities and model optimization",
      icon: <Database className="w-5 h-5" />,
      gradient: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section ref={teamRef} className="py-16 md:py-24 relative bg-white dark:bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-500/10 dark:to-purple-500/10 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 border border-cyan-200 dark:border-cyan-500/30">
            <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-cyan-700 dark:text-cyan-300 font-semibold text-sm md:text-base">Meet Our Team</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            The Minds Behind Gitguard AI
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A diverse team of AI experts and developers dedicated to revolutionizing code security
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Card className="bg-white dark:bg-slate-800/50 border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6 md:p-8 text-center">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <span className="text-white font-bold text-xl md:text-2xl">{member.initials}</span>
                    </div>

                    {/* Role Icon */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 dark:border-gray-600">
                      <div className="text-gray-600 dark:text-gray-300">{member.icon}</div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>

                  {/* Role */}
                  <p className="text-cyan-600 dark:text-cyan-400 font-semibold mb-4 text-sm md:text-base">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    {member.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="mt-6 flex justify-center">
                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${member.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-20"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800/50 dark:to-cyan-900/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-200 dark:border-cyan-500/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Expert Engineers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Years Combined Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Dedicated Support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-50 to-purple-50 dark:from-cyan-900/20 dark:to-purple-900/20 rounded-xl md:rounded-2xl p-6 md:p-8 border border-cyan-200 dark:border-cyan-500/30 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
              Want to Work With Us?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              We're always looking for talented individuals to join our mission of securing the world's code
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg text-sm md:text-base">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
