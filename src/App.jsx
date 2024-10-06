import { Routes,Route} from 'react-router-dom';
import { Index } from './pages/Index';
import { Simulation } from './pages/Simulation';
import { OurPlanet } from './pages/OurPlanet';
import { Members } from './pages/Members';
import { Video } from './pages/Video';
import { Documents } from './pages/Documents';
import './App.scss';

  function App() {
    return (
        
          <>
            <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="/Simulation" element={<Simulation/>}/>
              <Route path="/OurPlanet" element={<OurPlanet/>}/>
              <Route path="/Members" element={<Members/>}/>
              <Route path="/Video" element={<Video/>}/>
              <Route path="/Documents" element={<Documents/>}/>
          </Routes>
        </>
    )
  }

  export default App
