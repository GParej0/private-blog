import { useParams } from "react-router-dom";
import { getPostById } from "../services/posts";
import type { Post } from "../types";
import CommentCard from "../components/commentCard";
import { useEffect, useState } from "react";
import { deleteComment } from "../services/comments";
import { Link } from "react-router-dom";

export default function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState<Post>()
    const postId = Number(id)

    useEffect(() => {
        getPostById(postId).then(response => { setPost(response); console.log(response) })
    }, [])


    async function handleDelete(commentId: number) {
        const confirmed = window.confirm("Do you really want to delete this comment?");
        if (!confirmed || !post) return;
        try {
            await deleteComment(commentId)
            setPost({ ...post, comments: post.comments.filter((c) => c.id !== commentId) });
        } catch (error) {
            throw (error)
        }
    }

    return (
        <>
            {post && (
                <div className="post-info">
                    <h2>{post.name}</h2>
                    <h3>{post.user.user}</h3>
                    <p>{post.body}</p>
                </div>
            )}
            <div className="comment-list">
                <h3>Comments:</h3>
                {post?.comments?.map(comment => {
                    return <CommentCard key={comment.id} comment={comment} onDelete={handleDelete} />
                })}
            </div>
            <Link to={`/`}>Back to menu</Link>
        </>
    )
}
