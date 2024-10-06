import { NavBar } from '../pages/Molecules/NavBar';
import './styles/Members.scss';

function Members() {
    return (
        <>
        <NavBar/>
            <h1 className='MembersTitle'>Members</h1>
            <section className='MembersSection'>
                <aside className='Members'>
                    <img className='Members__Image' src="../../public/Sary.jpg" alt="sary" />
                    <h2 className='Members__Name'>Sary</h2>
                    <p className='Members__Description'>Physics student in EIA College, I have 17 y/o and cant spell "sh", I like programming too</p>
                    <div className='Members__Description--Links'>
                        <a className='Members__Link' href="https://github.com/sarygarcia">Github</a>
                        <a className='Members__Link' href="">Linkedin</a>
                    </div>
                </aside>
                <aside className='Members'>
                    <img className='Members__Image' src="../../public/Esperanza.jpg" alt="Esperanza" />
                    <h2 className='Members__Name'>Esperanza</h2>
                    <p className='Members__Description'>Laws students, I love Astronomy</p>
                </aside>
                <aside className='Members'>
                    <img className='Members__Image' src="../../public/Mauro.jpg" alt="Mauro" />
                    <h2 className='Members__Name'>Mauricio</h2>
                    <p className='Members__Description'>Tall, strong and flawless man</p>

                </aside>
                <aside className='Members'>
                    <img className='Members__Image' src="../../public/Maria.jpg" alt="Maria" />
                    <h2 className='Members__Name'>Maria</h2>
                    <p className='Members__Description'>Student of a technology in ITM, Jr Full stack dev and digital artist</p>
                    <div className='Members__Description--Links'>
                        <a className='Members__Link' href="https://github.com/Mar-ia00">Github</a>
                        <a className='Members__Link' href="https://www.linkedin.com/in/mar%C3%ADa-fernanda-gonz%C3%A1lez-paniagua-2541b429b/">Linkedin</a>
                    </div>
                </aside>
                <aside className='Members'>
                    <img className='Members__Image' src="../../public/Juan.jpg" alt="Juan" />
                    <h2 className='Members__Name'>Juan José</h2>
                    <p className='Members__Description'>Minecraft player +7000hrs, CS Deegre and basketball player</p>
                    <div className='Members__Description--Links'>
                        <a className='Members__Link' href="https://github.com/Josecopro">Github</a>
                        <a className='Members__Link' href="https://www.linkedin.com/in/juan-jos%C3%A9-becerra-bedoya-457199232/">Linkedin</a>
                    </div>
                </aside>
                <aside className='Members'>
                    <img className='Members__Image' src="../../public/Nina.jpg" alt="Nina" />
                    <h2 className='Members__Name'>Nina</h2>
                    <p className='Members__Description'>Description</p>
                    <div className='Members__Description--Links'>
                        <a className='Members__Link' href="">Github</a>
                        <a className='Members__Link' href="">Linkedin</a>
                    </div>
                </aside>
            </section>
        </>
    )
}

export { Members }