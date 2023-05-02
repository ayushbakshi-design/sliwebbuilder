import Hero from '@/componenets/Home/Hero'
import Navbar from '@/componenets/Home/Navbar'
import { Inter } from 'next/font/google'


import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>

      <Script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js' />
      <Navbar />
      <Hero />
    </main>
  )
}

