import style from './Header.module.css'
import logo from '../../assets/logoMentalPlus.png'



function Header() {
    return (
        <>
            <div className={style.preHeader}></div>
            <div className={style.header}>
                <img src={logo} alt="logo mental plus" />
                <div className={style.title}>
                    <h1>Relatório MentalPlus®</h1>
                </div>
            </div>
        </>

    )
}

export default Header

