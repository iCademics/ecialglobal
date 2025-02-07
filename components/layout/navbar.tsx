"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = {
    main: [
      { name: "HOME", href: "/" },
      {
        name: "OUR WORK",
        href: "#",
        dropdownItems: [
          { name: "Sister Somalia", href: "/our-work/sister-somalia" },
          {
            name: "Drop the Gun, Pick Up the Pen",
            href: "/our-work/drop-the-gun",
          },
          {
            name: "Front Line Activists",
            href: "/our-work/front-line-activists",
          },
          { name: "Equal Voices", href: "/our-work/equal-voices" },
          { name: "She Will", href: "/our-work/she-will" },
          { name: "Skills Training", href: "/our-work/skills-training" },
          { name: "Job Creation", href: "/our-work/job-creation" },
          { name: "Ocean Therapy", href: "/our-work/ocean-therapy" },
        ],
      },
      {
        name: "GET INVOLVED",
        href: "#",
        dropdownItems: [
          { name: "Volunteer", href: "/get-involved/volunteer" },
          { name: "Donate", href: "/get-involved/donate" },
          { name: "Partnerships", href: "/get-involved/partnerships" },
        ],
      },
      { name: "CONTACT", href: "/contact" },
    ],
  };

  return (
    <nav className="w-full bg-white py-4 px-6 md:px-8 fixed top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex gap-2 items-center">
          <Image
            src="/logo.png"
            alt="ECIAL Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
            priority
          />
          <p className="text-brand-blue text-lg">Logo should be here</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigationItems.main.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`text-brand-blue hover:text-brand-rose transition-colors duration-200 font-medium py-2 ${
                  activeDropdown === item.name ? "text-brand-rose" : ""
                }`}
              >
                {item.name}
                {item.dropdownItems && <span className="ml-1">▾</span>}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdownItems && activeDropdown === item.name && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-brand-blue hover:bg-gray-50 hover:text-brand-rose transition-colors duration-200"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span
              className={`block w-8 h-0.5 bg-brand-blue transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-brand-blue transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-brand-blue transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navigationItems.main.map((item) => (
            <div key={item.name} className="space-y-2">
              <div
                className="flex justify-between items-center"
                onClick={() => {
                  if (item.dropdownItems) {
                    setActiveDropdown(
                      activeDropdown === item.name ? null : item.name
                    );
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="text-brand-blue hover:text-brand-rose transition-colors duration-200 font-medium"
                  onClick={() => !item.dropdownItems && setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdownItems && (
                  <span
                    className={`transform transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdownItems && activeDropdown === item.name && (
                <div className="pl-4 space-y-2">
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block text-sm text-brand-blue hover:text-brand-rose transition-colors duration-200 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
