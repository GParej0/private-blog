import type React from "react";
import { logUser } from "../services/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LogIn() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            const data = await logUser(password, email);
            localStorage.setItem("token", data.token);
            navigate("/posts/user")
        } catch (error) {
            setErrorMessage("Wrong email or password");
        }
    }

    return (
        <>
            <h1>Log in</h1>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email:</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Submit</button>
            </form>
            <p>New user? Click <Link to="/signup">here</Link> to sign up!</p>
        </>
    )
}