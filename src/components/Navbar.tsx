import { Link } from "react-router-dom";


export default function NavBar() {

    function handleLogOut() {
        localStorage.removeItem("token");
        window.location.href = "https://mi-blog-publico.netlify.app/"
    }

    return (
        <header className="navbar">
            <div className="nav-brand">
                <Link to="/posts/user">CMS Admin</Link>
            </div>
            <nav className="nav-links">
                <Link to="/newpost">New Post</Link>
                <Link to="/posts/user">My Posts</Link>
                <button type="button" onClick={handleLogOut} className="btn-logout">
                    Log Out
                </button>
            </nav>
        </header>
    )
}