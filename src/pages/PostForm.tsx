import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { createPost, editPost, getPostById } from "../services/posts";


export default function PostForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditing = id ? true : false;
    const [formData, setFormData] = useState<{
        name: string;
        body: string;
        published: boolean;
    }>({
        name: "",
        body: "",
        published: false
    });

    useEffect(() => {
        if (!id) return;
        async function fetchPost() {
            const data = await getPostById(Number(id))
            setFormData({ name: data.post.name, body: data.post.body, published: data.post.published })
        }
        fetchPost()
    }, [id])

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        if (isEditing) {
            try {
                await editPost(Number(id), formData.name, formData.body, formData.published);
            } catch (error) {
                throw (error)
            }
            return navigate(`/posts/user`)
        }

        try {
            await createPost(formData.name, formData.body, formData.published)
        } catch (error) {
            throw (error)
        }
        return navigate(`/posts/user`)
    }

    return (
        <>
            <h3>{isEditing ? "Edit Post" : "New Post"}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <label htmlFor="body">Content:</label>
                <textarea
                    name="body"
                    id="body"
                    value={formData.body}
                    onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                />
                <label htmlFor="published">Do you want to post it?</label>
                <input type="checkbox" name="published" id="published" checked={formData.published} onChange={(e) => setFormData({ ...formData, published: e.target.checked })} />
                <button type="submit">Submit</button>
            </form>
            <Link to={`/posts/user`}>Back to your posts</Link>
        </>
    )
}