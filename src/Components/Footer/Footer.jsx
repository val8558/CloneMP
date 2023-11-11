import style from './Footer.module.css'


function Footer() {
    return (
     <>
        <div className={style.footer}>
            <h1>Professora Dra Livia S S Valentin </h1>
            <p>N° USP 7499305</p>
            <p>CRPSP 69820</p>
            <a href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4429083U2">CV Lattes</a>
        </div>

        <div className={style.tm}>
            <h1>MentalPlus®</h1>
        </div>

     </>   
    )

}

export default Footer