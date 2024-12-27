import logoWp from '../../assets/wpN.png'
import logoIg from '../../assets/igN.png'
import logoMap from '../../assets/mapN.png'
import './Footer.css'
import { NavLink, Link } from 'react-router-dom'
import email from '../../assets/emailN.png'

export default function Footer() {

    return (
        <div className='footerDiv'>

            <div className="info">
                <h3 className="datos">1161950112</h3>
                <h3 className="datos">@widistoreok__</h3>
                <h3 className="datos">widistoreok@gmail.com</h3>
                <h3 className="datos">La Boca, CABA</h3>
            </div>

            <div className="icons">
                <Link to="https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0" target="_blank">
                    <div className='contact'>
                        <div className="imgContainer">
                            <img src={logoWp} alt="logoWp" className='logosFooter' /></div>
                    </div>
                </Link>
                <Link to='https://www.instagram.com/widistoreok__' target='_blank'>
                    <div className='contact'>
                        <div className="imgContainer">
                            <img src={logoIg} alt="logoIg" className='logosFooter' /></div>
                    </div>
                </Link>
                <NavLink to='/form'>
                    <div className='contact'>
                        <div className="imgContainer">
                            <img src={email} alt="email" className='logosFooter' /></div>
                    </div>
                </NavLink>
                <Link to='https://www.google.com/maps/place/Puerto+Pampa/@-34.6278066,-58.3646852,17z/data=!3m1!4b1!4m6!3m5!1s0x95a334c89e8c7485:0x459e0fd876ebc5b5!8m2!3d-34.6278111!4d-58.3600718!16s%2Fg%2F11c3wvs87j?entry=ttu' target='_blank'>
                    <div className='contact'>
                        <div className="imgContainer">
                            <img src={logoMap} alt="logoMap" className='logosFooter' /></div>
                    </div>
                </Link>
            </div>
            <div className="footerContent">
                &copy; 2024 Guadalupe Festinese. Todos los derechos reservados.

                <div>Contacto: <a href="mailto:festinese.guadalupe@gmail.com" className='datosContacto'>festinese.guadalupe@gmail.com</a></div>

                <div>Whatsapp: <a href="https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0" target="_blank" className='datosContacto'>  +54 9 1161950112</a></div>

                <div><p>Última actualización: diciembre de 2024</p></div>

            </div>

        </div>

    )
}

/*<div className="footerContainerInfo">
                <div>
                    <Link to="https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0" target="_blank">
                        <div className='contact'>
                            <div className="imgContainer">
                                <img src={logoWp} alt="logoWp" className='logosFooter' /></div>
                            <h3 className="datos">1161950112</h3>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link to='https://www.instagram.com/widistoreok__' target='_blank'>
                        <div className='contact'>
                            <div className="imgContainer">
                                <img src={logoIg} alt="logoIg" className='logosFooter' /></div>
                            <h3 className="datos">@widistoreok__</h3>
                        </div>
                    </Link>
                </div>

                <div>
                    <NavLink to='/form'>
                        <div className='contact'>
                            <div className="imgContainer">
                                <img src={email} alt="email" className='logosFooter' /></div>
                            <h3 className="datos">widistoreok@gmail.com</h3>
                        </div>
                    </NavLink>
                </div>


                <div>
                    <Link to='https://www.google.com/maps/place/Puerto+Pampa/@-34.6278066,-58.3646852,17z/data=!3m1!4b1!4m6!3m5!1s0x95a334c89e8c7485:0x459e0fd876ebc5b5!8m2!3d-34.6278111!4d-58.3600718!16s%2Fg%2F11c3wvs87j?entry=ttu' target='_blank'>
                        <div className='contact'>
                            <div className="imgContainer">
                                <img src={logoMap} alt="logoMap" className='logosFooter' /></div>
                            <h3 className="datos">Puerto Pampa, La Boca, CABA (1157)</h3>
                        </div>
                    </Link>
                </div>
            </div>*/ 