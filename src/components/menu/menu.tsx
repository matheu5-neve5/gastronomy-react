import style from './style.module.scss'
import logo from '../../images/logo.png'


export function Menu () {
    return(
    <header className={style.mainHeader}>
        <div className={style.mainHeaderContent}>
            <a href="#" className="col-6 m-3 col-md-4">
                <img src={logo} alt="Logo da marca" title="Logo da marca"></img>
            </a>

            <nav className={style.mainHeaderConntentMenu}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="./login.html" target="_blank">Portal do Aluno</a></li>
                    <li><a href="#">A Escola</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>

            <nav className={style.mainHeaderConntentMenuMobile}>
                <ul>
                    <li><span className={style.mainHeaderConntentMenuMobileObj}></span></li>
                        <ul className={style.mainHeaderConntentMenuMobileSub}>
                            <li><a href="#">Home</a></li>
                            <li><a href="./login.html" target="_blank">Portal do Aluno</a></li>
                            <li><a href="#">A Escola</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                </ul>
            </nav>
        </div>
    </header>
)
}