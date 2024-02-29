import style from './navBar.module.css';
import chartIcon from '../../assets/chartIcon.svg';
import infoIcon from '../../assets/InfoIcon.svg';
import tableIcon from '../../assets/tableIcon.svg';
import printIcon from '../../assets/printer.svg';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className={style.navBarContainer}>
      <div className={style.btn}>
        <Link to="/Report" className={style.link}>
          <button>
            <img src={infoIcon} alt="" width="37px" height="37" />
            Informações Gerais
          </button>
        </Link>
        <Link to="/Table" className={style.link}>
          <button>
            <img src={tableIcon} alt="" width="37px" height="37" />
            Tabelas
          </button>
        </Link>
        <Link to="/Chart" className={style.link}>
          <button>
            <img src={chartIcon} width="37px" height="37" alt="" />
            Gráficos
          </button>
        </Link>
        <Link to="/impressao" className={style.link}>
          <button>
            <img src={printIcon} width="37px" height="37" alt="" />
            Versão para Impressão
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar