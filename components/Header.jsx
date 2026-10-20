import React from "react"
import Button from "@/components/ui/Button"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto py-5 w-full">
      <h1 className="font-semibold">WEB BLOG</h1>
      <nav className="flex gap-3 items-center uppercase text-sm">
        <Link href="">Home</Link>
        <Link href="/blogs">Blog</Link>
        <Link href="/about-us">About</Link>
        <Link href="/contact-us">Contact US</Link>
      </nav>

      <div className="flex gap-3 items-center">
        <Button text={"Sign Up"} href="/auth/register" />
        <Button text={"Login"} href="/auth/login" />
      </div>
    </header>
  )
}

export default Header