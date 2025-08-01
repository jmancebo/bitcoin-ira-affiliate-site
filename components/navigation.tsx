"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Bitcoin } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Bitcoin className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Bitcoin IRA Guide</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/comparison"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Compare Providers
              </Link>
              <Link
                href="#about"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/comparison"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
            >
              Compare Providers
            </Link>
            <Link href="#about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
              About
            </Link>
            <Link href="#contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
