import Dashboard from './Dashboard';
import './Home.css';
import NavbarComponent from "./NavbarComponent";
import Sidebar from './Sidebar';

const Home = () => {
  return (
    <div className="containerw">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="main-content">
        <NavbarComponent />
        <div className="body-content">
          <Dashboard/>
        </div>
      </div>
    </div>
  );
};

export default Home;