import { NavBar } from '../pages/Molecules/NavBar';
import {Card} from '../pages/Molecules/Card';
import './styles/Index.scss';

function Index () {
  return (
    <>
        <NavBar/>  
        <section className='CardSection'>
          <Card name="Baco" image="../../public/Baco.png" description="Saturn's largest moon, Titan, is an icy world whose surface is completely obscured by a golden hazy atmosphere." link="https://science.nasa.gov/saturn/moons/titan/facts/"/>
          <Card name="Hano" image="../../public/Hano.png" description="Europa is one of the four large moons of Jupiter. It is covered in ice and has a subsurface ocean." link="https://solarsystem.nasa.gov/moons/jupiter-moons/europa/in-depth/"/>
          <Card name="Odiseo" image="../../public/Odiseo.png" description="Triton is the largest moon of Neptune. It is the only large moon in the solar system that orbits in the opposite direction of its planet's rotation." link="https://solarsystem.nasa.gov/moons/neptune-moons/triton/in-depth/"/>
          <Card name="Poseidonis" image="../../public/Poseidonis.png" description="Saturn's largest moon, Titan, is an icy world whose surface is completely obscured by a golden hazy atmosphere." link="https://science.nasa.gov/saturn/moons/titan/facts/"/>
        </section>
                
    </>
  )
}

export { Index };