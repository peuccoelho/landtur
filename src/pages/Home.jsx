import Navbar from '../components/Navbar.jsx'
import About from '../sections/About.jsx'
import Destinations from '../sections/Destinations.jsx'
import Footer from '../sections/Footer.jsx'
import Hero from '../sections/Hero.jsx'
import Secult from '../sections/Secult.jsx'
import Semop from '../sections/Semop.jsx'
import Stats from '../sections/Stats.jsx'
import Storytelling from '../sections/Storytelling.jsx'
import Students from '../sections/Students.jsx'

export default function Home() {
  return (
    <div className="bg-sand-50 text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Secult />
        <Destinations />
        <Semop />
        <Students />
        <Storytelling />
      </main>
      <Footer />
    </div>
  )
}
