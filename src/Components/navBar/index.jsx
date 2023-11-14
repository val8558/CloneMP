import style from './navBar.module.css';
import chartIcon from '../../assets/chartIcon.svg';
import infoIcon from '../../assets/infoIcon.svg';
import tableIcon from '../../assets/tableIcon.svg';
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
      </div>
    </div>
  );
}

export default NavBar