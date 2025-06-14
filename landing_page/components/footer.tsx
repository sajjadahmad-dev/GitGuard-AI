"use client"

import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Gitguard AI
            </span>
          </div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          © 2025 Gitguard AI. Protecting developers, one secret at a time.
        </div>
      </div>
    </footer>
  )
}
