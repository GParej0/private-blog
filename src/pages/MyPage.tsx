import PostCard from "../components/postCard";
import type { Post } from "../types";
import { useState, useEffect } from "react";
import { getUserPosts, togglePublish, deletePost } from "../services/posts";

export default function MyPosts() {

    const [posts, setPosts] = useState<Post[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    useEffect(() => {
        getUserPosts().then(response => setPosts(response))
    }, []);

    async function handleToggle(id: string, currentPublished: boolean) {
        const updatePost = await togglePublish(id, currentPublished)
        setPosts((prevPosts) => {
            return prevPosts.map((p) => (p.id === updatePost.id ? updatePost : p))
        })
    }

    async function handleDelete(postId: number) {
        const confirmed = window.confirm("Do you really want to delete this post?");
        if (!confirmed) return;
        try {
            await deletePost(postId)
            setPosts((prevPosts) => prevPosts.filter((p) => p.id !== postId));
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    }

    return (
        <main className="posts-container">
            <h2>My Posts</h2>
            {posts.length === 0 ? (
                <p>You haven't created any posts yet.</p>
            ) : (
                posts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onDelete={handleDelete}
                        onToggle={handleToggle}
                    />
                ))
            )}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </main>
    )

}