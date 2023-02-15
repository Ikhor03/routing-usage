import { useNavigate } from 'react-router-dom';
import '../style/App.css'

const Install = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <h1>Install <code>React Router</code> menggunakan npm</h1>
            <hr />
            <p>To add React Router in your application, run this in the terminal from the root directory of the application: <br /> <code>npm install react-router-dom</code></p>

            <h1>Folder Structure</h1>
            <p>To create an application with multiple page routes, let's first start with the file structure. Within the <code>"src"</code> folder, we'll create a folder named <code>"pages"</code> with several files:</p>
            <li><code>Home.js</code></li>
            <li><code>Blogs.js</code></li>
            <li><code>Contact.js</code></li>
            <p>Each file will contain a very basic React component.</p>

            <br/>
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/')}>Prev</button>
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/')}>Halaman awal</button>
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/usage')}>Next</button>
        </div>
    )
}

export default Install;