import React, { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false) // Close the mobile menu after navigation
    }
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Home Button */}
        <span
          className="font-clash text-2xl font-bold border-2 border-neon-yellow text-neon-yellow py-2 px-8 rounded-full cursor-pointer hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          onClick={() => scrollToSection('home')}
        >
          Em Moore
        </span>

        {/* Centered Navigation Buttons */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-4">
          <button
            onClick={() => scrollToSection('design')}
            className="font-clash px-8 py-2 border-2 border-neon-yellow rounded-full text-neon-yellow hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          >
            Design
          </button>
          <button
            onClick={() => scrollToSection('drafting')}
            className="font-clash px-8 py-2 border-2 border-neon-yellow rounded-full text-neon-yellow hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          >
            Drafting
          </button>
          <button
            onClick={() => scrollToSection('modeling')}
            className="font-clash px-8 py-2 border-2 border-neon-yellow rounded-full text-neon-yellow hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          >
            Modeling
          </button>
        </div>

        {/* About Button on the Far Right */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection('about')}
            className="font-clash px-8 py-2 border-2 border-neon-yellow rounded-full text-neon-yellow hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          >
            About
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-neon-yellow" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-neon-yellow" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-deep-black-blue py-4">
          <button
            onClick={() => scrollToSection('design')}
            className="block w-full px-8 py-3 my-2 border-2 border-neon-yellow rounded-full font-clash text-neon-yellow hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          >
            Design
          </button>
          <button
            onClick={() => scrollToSection('drafting')}
            className="block w-full px-8 py-3 my-2 border-2 border-neon-yellow rounded-full font-clash text-neon-yellow hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          >
            Drafting
          </button>
          <button
            onClick={() => scrollToSection('modeling')}
            className="block w-full px-8 py-3 my-2 border-2 border-neon-yellow rounded-full font-clash text-neon-yellow hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          >
            Modeling
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full px-8 py-3 my-2 border-2 border-neon-yellow rounded-full font-clash text-neon-yellow hover:bg-neon-yellow hover:text-deep-black-blue transition-all duration-300"
          >
            About
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
