import Hero from '../../src/components/Hero';
import About from '../../src/components/About';
import Testimonials from '../../src/components/Testimonials';
import Resturant from '../../src/components/Resturant';
import Meals from '../components/Meals';

function Home() {
  return (
    <div>
      <Hero />
      <Meals />
      <Resturant />
      <About />
      <Testimonials />
    </div>
  )
}

export default Home;