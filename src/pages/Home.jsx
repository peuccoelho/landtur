import Navbar from '../components/Navbar.jsx'
import About from '../sections/About.jsx'
import Destinations from '../sections/Destinations.jsx'
import Footer from '../sections/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import Stats from '../sections/Stats.jsx'
import Storytelling from '../sections/Storytelling.jsx'
import Voices from '../sections/Voices.jsx'

export default function Home() {
  return (
    <div className="bg-sand-50 text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Storytelling />
        <Stats />
        <Voices />
      </main>
      <Footer />
    </div>
  )
}
