import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className='App'>
      <nav className='App-header'>
        <Link to="/"><h3>Jacob Payne</h3></Link>
        {/* <ul style={{listStyle: 'none'}}>
          <li>
            <Link to="/">Work</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul> */}
      </nav>
      <Outlet />
    </div>
  );
}
