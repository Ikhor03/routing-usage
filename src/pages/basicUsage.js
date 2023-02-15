import { useNavigate } from "react-router-dom";

const ExampleUsage = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
            <h1>Basic Usage</h1>
            <hr />
            <p>Now we will use our Router in our <code>index.js</code> file.</p>
            <h4>Exemple:</h4>
            <p>Use React Router to route to pages based on URL:</p>
            <br />
            <p><code>
            {`
            import ReactDOM from "react-dom/client";
            import { BrowserRouter, Routes, Route } from "react-router-dom";
            import Layout from "./pages/Layout";
            import Home from "./pages/Home";
            import Blogs from "./pages/Blogs"; 
            import Contact from "./pages/Contact";
            import NoPage from "./pages/NoPage";

            export default function App() {
                return (
                    <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                    </BrowserRouter>
                );
            }

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<App />);
            `}
            </code></p>

            <br/>
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/install')}>Prev</button>
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/')}>Halaman awal</button>
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/explain')}>Next</button>
        </div>
    )
}

export default ExampleUsage;