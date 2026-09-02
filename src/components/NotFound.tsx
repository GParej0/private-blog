import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="notFound">
            <h2>404-Not Found</h2>
            <p>We are sorry, the page you’re trying to access does not exist.</p>
            <Link to={"/posts/user"} className="btn-primary">Back to menu</Link>
        </div>
    )
}