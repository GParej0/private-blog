
import { API_URL, token } from "./client";


export async function getPostById(id: number | undefined) {

    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    if (!response.ok) {
        throw new Error("Wrong data")
    }

    return await response.json()
}


export async function getUserPosts() {

    const response = await fetch(`${API_URL}/posts/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    if (!response.ok) {
        throw new Error("Wrong profile")
    }

    const data = await response.json();
    return data.allUserPosts
}

export async function togglePublish(id: string, published: boolean) {

    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            published: published
        })
    })

    if (!response.ok) {
        throw new Error("Wrong data")
    }
    return await response.json()
}

export async function createPost(name: string, body: string, published: boolean) {

    const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            body: body,
            published: published
        })
    })

    if (!response.ok) {
        throw new Error("Wrong data")
    }

    return await response.json()
}

export async function editPost(id: number, name: string, body: string, published: boolean) {

    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            name: name,
            body: body,
            published: published
        })
    })

    if (!response.ok) {
        throw new Error("Wrong data")
    }
    return await response.json()
}

export async function deletePost(id: number) {
    const response = await fetch(`${API_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("error")
    }

    return await response.json()
}