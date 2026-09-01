import { API_URL } from "./client"

export async function logUser(password: string, email: string) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: password,
            email: email
        })
    })
    if (!response.ok) {
        throw new Error("Invalid login")
    }
    return await response.json()
}

export async function SignUpUser(email: string, user: string, password: string) {
    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            user: user,
            password: password
        })
    })
    if (!response.ok) {
        throw new Error("Invalid sign up")
    }
    return await response.json()
}
