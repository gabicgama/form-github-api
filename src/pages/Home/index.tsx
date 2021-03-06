import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
      </div>
      <Link to="/findperfil">
        <button className="btn btn-primary home-button-start">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
