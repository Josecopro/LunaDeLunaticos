import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.scss';

function NavBar() {


    const navigate = useNavigate();

    const PathRedirecting = (path) => {
        return () => {
            navigate(path);
            console.log(path);
        }
    }   
    return (
        <header>
        <nav className='NavBar'>
            <ul className='NavBar__Wrapper'>
                <li className='NavBar__Elements'><button onClick={PathRedirecting("/")}>Home</button></li>
                <li className='NavBar__Elements'><button onClick={PathRedirecting("/Simulation")}>Simulation</button></li>
                <li className='NavBar__Elements'><button onClick={PathRedirecting("/OurPlanet")}>Oceanic Moon</button></li>
                <li className='NavBar__Elements'><button onClick={PathRedirecting("/Members")}>Members</button></li>
                <li className='NavBar__Elements'><button onClick={PathRedirecting("/Video")}>Video</button></li>
                <li className='NavBar__Elements'><button onClick={PathRedirecting("/Documents")}>Documents</button></li>
            </ul>
        </nav>
    </header>
  );
}

export {NavBar}