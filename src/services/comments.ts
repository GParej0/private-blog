import { API_URL } from "./client";
import { token } from "./client";


export async function deleteComment(commentId: number) {
    const response = await fetch(`${API_URL}/comments/${commentId}`, {
        method: `DELETE`,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    })
    if (!response.ok) {
        throw new Error("error")
    }

    return await response.json()
}
