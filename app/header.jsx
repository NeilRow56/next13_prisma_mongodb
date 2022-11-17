import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <nav className="px-8 py-4 border-b border-gray-300">
      <Link href="/" className="text-gray-800 font-semibold text-4xl"
          style={{
            textDecoration: 'underline',
            textDecorationColor: '#6e28d9',
            textDecorationThickness: '6px'
             }}
        >
          Threadz
       
      </Link>
    </nav>
  )
}

export default Navbar
