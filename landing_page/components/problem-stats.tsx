"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, DollarSign, Clock, AlertCircle } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const AnimatedCounter = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function ProblemStats() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef)

  const stats = [
    {
      icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8" />,
      value: <AnimatedCounter end={1200000} prefix="$" />,
      label: "Average cost per credential breach",
      source: "GitGuardian 2024 Report",
      color: "red",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-500/30",
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      value: <AnimatedCounter end={10000} suffix="+" />,
      label: "API keys leaked on GitHub daily",
      source: "GitGuardian 2024 Report",
      color: "orange",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-500/30",
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
      value: <AnimatedCounter end={277} />,
      label: "Days to identify a breach",
      source: "IBM Security Report 2024",
      color: "yellow",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      borderColor: "border-yellow-200 dark:border-yellow-500/30",
    },
    {
      icon: <AlertCircle className="w-6 h-6 md:w-8 md:h-8" />,
      value: <AnimatedCounter end={83} suffix="%" />,
      label: "Of breaches involve exposed credentials",
      source: "Verizon DBIR 2024",
      color: "red",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      borderColor: "border-red-200 dark:border-red-500/30",
    },
  ]

  return (
    <section ref={statsRef} className="py-12 md:py-16 lg:py-24 relative z-30 bg-gray-100 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white px-4">
            The Secret Leak Crisis
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Every day, thousands of credentials are accidentally exposed, leading to devastating security breaches
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card
                className={`${stat.bgColor} ${stat.borderColor} border-2 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full`}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div
                    className={`text-${stat.color}-600 dark:text-${stat.color}-400 mb-3 md:mb-4 flex justify-center`}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className={`text-xl md:text-2xl lg:text-3xl font-bold text-${stat.color}-700 dark:text-${stat.color}-400 mb-2`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm mb-2 font-medium leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-500">{stat.source}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
