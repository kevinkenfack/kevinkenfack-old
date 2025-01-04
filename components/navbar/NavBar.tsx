"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavBar() {
  const pathname = usePathname()
  const [currentTheme, setCurrentTheme] = useState<string>("")

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === "light") {
      setCurrentTheme("light")
    } else {
      setCurrentTheme("dark")
      localStorage.theme = "dark"
    }
  }, [])

  const setTheme = (theme: string) => {
    document.documentElement.classList.add(`${theme}`)
    document.documentElement.classList.remove(
      `${theme === "dark" ? "light" : "dark"}`
    )
    setCurrentTheme(`${theme}`)
    localStorage.theme = `${theme}`
  }

  return (
    <nav className="fixed top-6 z-30 w-full flex items-center justify-center">
      <div className="px-3 py-2 sm:w-[92%] md:w-[80%] lg:w-[640px] backdrop-blur-[5px] rounded-full m-auto bg-colorWhite/50 dark:bg-colorWhite_DM/50 flex items-center justify-between shadow-glass ring-style loading-border-nav">
        <Link href="/" className="item relative">
          <div className={pathname === "/" ? "display-bubble-on-profile" : ""}>
            <div className="h-[38px] ring-style rounded-full w-[38px] flex items-center justify-center transition-all duration-300 ease-in cursor-pointer overflow-hidden">
              <Image
                className="rounded-full"
                src="/profiles/avatar.jpg"
                width={34}
                height={34}
                alt="avatar"
                priority
              />
              <span className="absolute inset-x-1 w-full -bottom-[7px] h-[1px] bg-gradient-to-r from-colorPrimary/0 via-colorPrimary to-colorPrimary/0"></span>
            </div>
          </div>
        </Link>

        <div className="flex items-center h-full justify-end gap-8">
          <Link 
            href="/skills" 
            className="item relative text-color hover:text-colorPrimary"
          >
            Skills
          </Link>
          <Link 
            href="/works" 
            className="item relative text-color hover:text-colorPrimary"
          >
            Projects
          </Link>
          <Link 
            href="/blog" 
            className="item relative text-color hover:text-colorPrimary"
          >
            Blog
          </Link>

          <div className="cursor-pointer">
            <div className="flex group relative items-center gap-2">
              <div className="icon transition-all ease-in duration-300 ring-style rounded-full py-2 px-2 flex items-center gap-3 justify-between">
                <div className="w-[20px] h-[20px] p-2 text-color rounded-full hover:bg-colorBgLight text-color flex items-center justify-center">
                  {currentTheme === "light" ? (
                    <i 
                      onClick={() => setTheme("dark")}
                      className="text-md bi bi-moon-stars-fill flex items-center justify-center"
                    />
                  ) : (
                    <i 
                      onClick={() => setTheme("light")}
                      className="text-md bi bi-brightness-high-fill flex items-center justify-center"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
