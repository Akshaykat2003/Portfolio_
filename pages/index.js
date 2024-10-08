import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';

export default function Home() {
  return (
    <div className="p-2">
      <Head>
        <title>Akshay Katoch- Software Developer</title>
        <meta 
          name="description" 
          content="Software developer portfolio using Next.js & tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
        <Navbar />
        <Hero />
        <Experiences />
        <Skills/>
        <Works />
        <Certificates/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
