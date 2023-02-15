import { useNavigate } from "react-router-dom";

const Explain = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <h1>Example Explained</h1>
            <hr />
            <p>We wrap our content first with <code>{'<BrowserRouter>'}</code>.</p>
            <p>Then we define our <code>{'<Routes>'}</code>. An application can have multiple <code>{'<Routes>'}</code>. Our basic example only uses one.</p>
            <p><code>{'<Route>'}</code>s can be nested. The first <code>{'<Route>'}</code> has a path of <code>/</code> and renders the <code>Layout</code> component.</p>
            <p>The nested <code>{'<Route>'}</code>s inherit and add to the parent route. So the <code>blogs</code> path is combined with the parent and becomes <code>/blogs</code>.</p>
            <p>The <code>Home</code> component route does not have a path but has an <code>index</code> attribute. That specifies this route as the default route for the parent route, which is <code>/</code>.</p>
            <p>Setting the <code>path</code> to <code>*</code> will act as a catch-all for any undefined URLs. This is great for a 404 error page.</p>

            <br />
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/usage')}>Prev</button>
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/')}>Halaman awal</button>
            <button style={{ margin: '0 5px' }} onClick={() => navigate('/explain')}>Next</button>
        </div>
    )
}

export default Explain;