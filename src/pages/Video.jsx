import { NavBar } from '../pages/Molecules/NavBar';
import './styles/Video.scss';

function Video() {

    return (
        <>
        <NavBar/>
        <h1 className='VideoTitle'>This is how Aquafira works</h1>
        <div className='Video'>
        <video  width="800" height="450" controls>
        <source src="../../public/AstroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        </div>
        </>

    )
}   

export { Video }