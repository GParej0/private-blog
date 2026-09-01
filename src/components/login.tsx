import type React from "react";
import { logUser } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
    const navigate = useNavigate()
    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const user = formData.get("user") as string;
        const password = formData.get("password") as string;

        try {
            const data = await logUser(password, user);
            localStorage.setItem("token", data.token);
            navigate("/")
        } catch (error) {
            throw (error)
        }
    }

    return (
        <>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user">Username:</label>
                <input type="text" name="user" id="user" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Submit</button>
            </form>
            <p>New user? Click <Link to="/signup">here</Link> to sign up!</p>
        </>
    )
}