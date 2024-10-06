import { NavBar } from '../pages/Molecules/NavBar';
import {Card} from '../pages/Molecules/Card';
import './styles/Index.scss';

function Index () {
  return (
    <>
        <NavBar/>  
        <section className='CardSection'>
          <Card name="Baco" image="../../public/Baco.png" description="A radiant star that dominates its system with a brilliant, golden glow. Its intense heat and energy sustain the nearby planets, serving as the life-giving heart of its solar neighborhood." link="https://science.nasa.gov/saturn/moons/titan/facts/"/>
          <Card name="Hano" image="../../public/Hano.png" description=" A terrestrial planet similar to Earth, rich in diverse landscapes and ecosystems. Hano features vast oceans, sprawling forests, and an atmosphere teeming with life, making it a cradle for complex organisms." link="https://solarsystem.nasa.gov/moons/jupiter-moons/europa/in-depth/"/>
          <Card name="Odiseo" image="../../public/Odiseo.png" description="A majestic gas giant resembling Saturn, adorned with wide, colorful rings made of ice and rock. Its swirling atmosphere is a stormy realm of clouds and powerful winds, orbiting peacefully in the outer regions of its system." link="https://solarsystem.nasa.gov/moons/neptune-moons/triton/in-depth/"/>
          <Card name="Poseidonis" image="../../public/Poseidonis.png" description="A massive gas giant, akin to Jupiter, with turbulent storms and swirling bands of colorful gases. Its immense gravity attracts dozens of moons, each with unique characteristics, making it a miniature solar system of its own." link="https://science.nasa.gov/saturn/moons/titan/facts/"/>
        </section>
                
    </>
  )
}

export { Index };