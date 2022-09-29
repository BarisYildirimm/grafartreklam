import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link } from "react-router-dom";


const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">grafArt</span>
        </Link>
      </div>  
      <hr />
      <div className="center">
        <ul>
          <p  className="title">Ana Sayfa</p>
          <Link to="/admin" style={{textDecoration:"none"}}>
          <li>
            <DashboardIcon className="icon" />     
            <span>Ana Sayfa</span>
          </li>
          </Link>
          <p className="title">Listeler</p>
          <Link to="/admin/haber" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Haberler</span>
            </li>
          </Link>
          <Link to="/admin/kullanici" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Kullanıcı</span>
            </li>
          </Link>
          <Link to="/admin/referans" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Referanslar</span>
            </li>
          </Link>
          <Link to="/admin/istatistik" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>İstatistik</span>
            </li>
          </Link>
          <Link to="/admin/slider" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Slider</span>
            </li>
          </Link>
          <Link to="/admin/principle" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Hizmetlerimiz</span>
            </li>
          </Link>
          <Link to="/admin/yardim" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Yardım</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
        
        ></div>
        <div
          className="colorOption"
        
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
