import React from "react"
import Link from "next/link"

function Button({ text, href }) {
    const className = "bg-orange-500 text-white px-4 py-2 text-sm rounded font-semibold uppercase"

    if (href) {
        return (
            <Link href={href} className={className}>
                {text}
            </Link>
        )
    }

    return (
        <button className={className}>
            {text}
        </button>
    )
}

export default Button