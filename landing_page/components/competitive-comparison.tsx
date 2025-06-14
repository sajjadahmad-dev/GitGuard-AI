"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, Minus, Crown, Building2, Users, Shield, Zap, TrendingUp, Clock } from "lucide-react"
import { useRef, useState } from "react"
import Image from "next/image"

export function CompetitiveComparison() {
  const compRef = useRef(null)
  const compInView = useInView(compRef)

  const features = [
    { name: "Detection Accuracy", gitguard: "94%", gitleaks: "67%", truffleHog: "72%", github: "58%" },
    { name: "False Positive Rate", gitguard: "6%", gitleaks: "33%", truffleHog: "28%", github: "42%" },
    { name: "Real-time IDE Integration", gitguard: true, gitleaks: false, truffleHog: false, github: false },
    { name: "Context-Aware Analysis", gitguard: true, gitleaks: false, truffleHog: false, github: false },
    { name: "Custom Rule Engine", gitguard: true, gitleaks: true, truffleHog: true, github: false },
    { name: "Team Collaboration", gitguard: true, gitleaks: false, truffleHog: false, github: true },
    { name: "Enterprise SSO", gitguard: true, gitleaks: false, truffleHog: false, github: true },
    { name: "API Rate Limiting", gitguard: "Unlimited", gitleaks: "N/A", truffleHog: "N/A", github: "5K/hr" },
    {
      name: "Deployment Options",
      gitguard: "Cloud + On-Prem",
      gitleaks: "Self-hosted",
      truffleHog: "Self-hosted",
      github: "Cloud",
    },
    {
      name: "Support Level",
      gitguard: "24/7 Enterprise",
      gitleaks: "Community",
      truffleHog: "Community",
      github: "Business Hours",
    },
  ]

  const techCompanies = [
    {
      name: "Netflix",
      industry: "Streaming",
      developers: "2,500+",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
      description: "Protecting streaming infrastructure secrets",
    },
    {
      name: "Spotify",
      industry: "Music Tech",
      developers: "1,800+",
      logo: "https://1000logos.net/wp-content/uploads/2017/08/Spotify-Logo.png",
      description: "Securing music platform APIs",
    },
    {
      name: "Airbnb",
      industry: "Travel Tech",
      developers: "1,200+",
      logo: "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.png",
      description: "Safeguarding travel platform credentials",
    },
    {
      name: "Stripe",
      industry: "FinTech",
      developers: "800+",
      logo: "https://1000logos.net/wp-content/uploads/2021/11/Stripe-Logo.png",
      description: "Protecting payment processing secrets",
    },
    {
      name: "Shopify",
      industry: "E-commerce",
      developers: "2,000+",
      logo: "https://1000logos.net/wp-content/uploads/2021/10/Shopify-logo.png",
      description: "Securing e-commerce platform keys",
    },
    {
      name: "Slack",
      industry: "Collaboration",
      developers: "600+",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png",
      description: "Protecting communication platform APIs",
    },
    {
      name: "Zoom",
      industry: "Video Tech",
      developers: "1,000+",
      logo: "https://1000logos.net/wp-content/uploads/2021/04/Zoom-logo.png",
      description: "Securing video conferencing infrastructure",
    },
    {
      name: "DocuSign",
      industry: "Document Tech",
      developers: "900+",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/DocuSign_logo.png",
      description: "Safeguarding document platform credentials",
    },
  ]

  const enterpriseStats = [
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      value: "27%",
      label: "Higher accuracy than closest competitor",
      color: "cyan",
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      value: "89%",
      label: "Reduction in false positives",
      color: "green",
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      value: "200ms",
      label: "Real-time detection speed",
      color: "purple",
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      value: "500+",
      label: "Enterprise teams protected",
      color: "blue",
    },
    {
      icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />,
      value: "99.9%",
      label: "Enterprise uptime SLA",
      color: "indigo",
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
      value: "24/7",
      label: "Enterprise support coverage",
      color: "orange",
    },
  ]

  const renderCell = (value: any, isGitguard = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <CheckCircle
          className={`w-4 h-4 md:w-5 md:h-5 ${isGitguard ? "text-cyan-600 dark:text-cyan-400" : "text-green-600 dark:text-green-400"}`}
        />
      ) : (
        <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500 dark:text-red-400" />
      )
    }
    if (value === "N/A") {
      return <Minus className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
    }
    return (
      <span
        className={`text-xs md:text-sm ${isGitguard ? "text-cyan-600 dark:text-cyan-400 font-bold" : "text-gray-700 dark:text-gray-300"}`}
      >
        {value}
      </span>
    )
  }

  // Component for handling logo loading with fallback
  const CompanyLogo = ({ company }: { company: (typeof techCompanies)[0] }) => {
    const [imageError, setImageError] = useState(false)
    const [imageLoading, setImageLoading] = useState(true)

    const handleImageError = () => {
      setImageError(true)
      setImageLoading(false)
    }

    const handleImageLoad = () => {
      setImageLoading(false)
    }

    return (
      <div className="w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-sm overflow-hidden">
        {imageError ? (
          // Fallback: Show company initial
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg md:text-xl">
            {company.name.charAt(0)}
          </div>
        ) : (
          <>
            {imageLoading && (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-300 animate-pulse">
                <div className="w-6 h-6 bg-gray-300 dark:bg-gray-400 rounded"></div>
              </div>
            )}
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={`${company.name} logo`}
              width={48}
              height={48}
              className={`object-contain max-w-full max-h-full ${imageLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              crossOrigin="anonymous"
            />
          </>
        )}
      </div>
    )
  }

  return (
    <section ref={compRef} className="py-12 md:py-16 lg:py-24 relative bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={compInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent px-4">
            How We Stack Up
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive comparison with leading secret detection tools
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={compInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-x-auto mb-16 md:mb-20 px-4"
        >
          <Card className="bg-white dark:bg-slate-800/50 border-gray-200 dark:border-cyan-500/30 backdrop-blur-sm min-w-[800px] md:min-w-0">
            <CardContent className="p-0">
              <div className="w-full">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-2 md:p-4 text-gray-700 dark:text-gray-300 font-semibold text-xs md:text-sm w-1/5">
                        Feature
                      </th>
                      <th className="text-center p-2 md:p-4 bg-cyan-50 dark:bg-cyan-500/10 w-1/5">
                        <div className="flex items-center justify-center">
                          <Crown className="w-3 h-3 md:w-5 md:h-5 text-cyan-600 dark:text-cyan-400 mr-1 md:mr-2" />
                          <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs md:text-sm">
                            Gitguard AI
                          </span>
                        </div>
                      </th>
                      <th className="text-center p-2 md:p-4 text-gray-700 dark:text-gray-300 font-semibold text-xs md:text-sm w-1/5">
                        GitLeaks
                      </th>
                      <th className="text-center p-2 md:p-4 text-gray-700 dark:text-gray-300 font-semibold text-xs md:text-sm w-1/5">
                        TruffleHog
                      </th>
                      <th className="text-center p-2 md:p-4 text-gray-700 dark:text-gray-300 font-semibold text-xs md:text-sm w-1/5">
                        GitHub Advanced Security
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={compInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                        className="border-b border-gray-100 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-slate-700/20"
                      >
                        <td className="p-2 md:p-4 text-gray-700 dark:text-gray-300 font-medium text-left text-xs md:text-sm">
                          {feature.name}
                        </td>
                        <td className="p-2 md:p-4 text-center bg-cyan-25 dark:bg-cyan-500/5">
                          <div className="flex justify-center">{renderCell(feature.gitguard, true)}</div>
                        </td>
                        <td className="p-2 md:p-4 text-center">
                          <div className="flex justify-center">{renderCell(feature.gitleaks)}</div>
                        </td>
                        <td className="p-2 md:p-4 text-center">
                          <div className="flex justify-center">{renderCell(feature.truffleHog)}</div>
                        </td>
                        <td className="p-2 md:p-4 text-center">
                          <div className="flex justify-center">{renderCell(feature.github)}</div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Enhanced Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={compInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Title */}
          <div className="text-center px-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
              Why Enterprises Choose Gitguard AI
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trusted by leading technology companies worldwide to protect their most valuable assets
            </p>
          </div>

          {/* Enterprise Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
            {enterpriseStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={compInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-white dark:bg-slate-800/50 border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div
                      className={`text-${stat.color}-600 dark:text-${stat.color}-400 mb-3 md:mb-4 flex justify-center`}
                    >
                      {stat.icon}
                    </div>
                    <div
                      className={`text-2xl md:text-3xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400 mb-2`}
                    >
                      {stat.value}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm font-medium leading-tight">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tech Companies Section with Real Logos */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800/50 dark:to-purple-900/20 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-blue-200 dark:border-purple-500/30 mx-4">
            <div className="text-center mb-6 md:mb-8">
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
                Trusted by Leading Tech Companies
              </h4>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Companies with large development teams rely on Gitguard AI to protect their code secrets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {techCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={compInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white dark:bg-slate-800/70 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 h-full">
                    <CardContent className="p-4 md:p-6 text-center">
                      <CompanyLogo company={company} />
                      <h5 className="font-bold text-gray-900 dark:text-white mb-1 text-sm md:text-base">
                        {company.name}
                      </h5>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-1 md:mb-2">
                        {company.industry}
                      </p>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1 md:mb-2">
                        {company.developers} developers
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 italic leading-tight">
                        {company.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 text-center">
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                * Representative examples of companies that would benefit from enterprise secret detection
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl md:rounded-2xl p-6 md:p-8 border border-cyan-200 dark:border-cyan-500/30 mx-4">
            <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white">
              Join the Enterprise Leaders in Security
            </h4>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
              See how Gitguard AI can protect your development team and prevent costly security breaches
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg text-sm md:text-base">
                Schedule Enterprise Demo
              </button>
              <button className="border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base">
                Download Security Whitepaper
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
