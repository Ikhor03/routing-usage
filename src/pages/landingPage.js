import logo from './logo.svg';
import '../style/App.css';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Belajar implementasi <code>Routing</code> di react Js.
                </p>
                <Link to={'/install'} className="App-link">
                    Start Learning
                </Link>
            </header>
        </div>
    );
}

export default LandingPage;
