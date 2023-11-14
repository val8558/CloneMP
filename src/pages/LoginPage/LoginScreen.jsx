import { useState,useContext } from 'react'
import DrImg from '../../assets/DraBck.svg'
import logo from '../../assets/logoMentalPlus.png'
import style from './login.module.css'
import { AuthContext } from '../../Context/AuthContext'

function Login() {
  const [gameKey, setGameKey] = useState("");
  const { authenticateWithCode } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gameKey )
    authenticateWithCode(gameKey);
  }
   
  return (
    <>
      <div className={style.LoginContainer}>
        <div className={style.LeftSide}>
          <img src={DrImg} alt="" srcSet="" />
        </div>
        <div className={style.FormStyle}>
            
          <form onSubmit={handleSubmit}>
            <img src={logo} />
            <h1>Relatório MentalPlus®</h1>
            <input
              type="text"
              placeholder='Insira a chave de acesso'
              required
              autoFocus
              minLength="10"
              value={gameKey}
              onChange={(e) => setGameKey(e.target.value)} />
            <button className={style.btnLog} type="submit">Acessar</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login