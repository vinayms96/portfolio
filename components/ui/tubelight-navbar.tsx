"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState("")
  // Sync active tab to scroll position
  useEffect(() => {
    const handleScroll = () => {
      // When scrolled to the very bottom, force the last item (Contact/Footer)
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80
      if (atBottom) {
        setActiveTab(items[items.length - 1].name)
        return
      }

      // Find the last section whose top is above 40% down the viewport
      const scrollMid = window.scrollY + window.innerHeight * 0.4
      let active = ""

      for (const item of items) {
        const el = document.getElementById(item.url.replace("#", ""))
        if (el && el.offsetTop <= scrollMid) {
          active = item.name
        }
      }

      if (active) {
        setActiveTab(active)
      } else {
        // Above the first tracked section (still in Hero) — deselect all
        const firstEl = document.getElementById(items[0].url.replace("#", ""))
        if (!firstEl || scrollMid < firstEl.offsetTop) {
          setActiveTab("")
        }
        // Between sections: keep the current selection (no change)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // No call on mount — initial default (items[0]) stays until user scrolls
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 sm:bottom-auto left-1/2 -translate-x-1/2 z-40 mb-6 sm:pt-6 pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center gap-1 bg-surface/80 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg pointer-events-auto">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors duration-200",
                isActive
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-accent/10 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full">
                    <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
