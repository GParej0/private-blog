import { Link, useNavigate } from "react-router-dom";
import type { Post } from "../types";

interface PostCardProps {
    post: Post;
    onDelete: (id: number) => void;
    onToggle: (id: string, published: boolean) => void;
}

export default function PostCard({ post, onDelete, onToggle }: PostCardProps) {
    const navigate = useNavigate()
    return (
        <>
            <div className="post-card">
                <p>{post.user.user}</p>
                <h3>{post.name}</h3>
                <p>{post.body}</p>
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                {post.updatedAt && <p>Updated on: {new Date(post.updatedAt).toLocaleDateString()}</p>}
                <button className="btn-action edit" onClick={() => navigate(`/posts/edit/${post.id}`)}>Edit Post</button>
                <button className="btn-action delete" onClick={() => onDelete(post.id)}>Delete Post</button>
                {post.published ? <button onClick={() => onToggle(`${post.id}`, !post.published)}>Unpublish post</button> : <button onClick={() => onToggle(`${post.id}`, !post.published)}>Publish post</button>}
                <Link to={`/posts/${post.id}`}>Read More</Link>
            </div>

        </>
    )
}

