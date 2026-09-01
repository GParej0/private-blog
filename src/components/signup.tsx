import React from "react"
import { SignUpUser } from "../services/auth"
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react";

export default function SignUp() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const email = formData.get("email") as string;
        const user = formData.get("user") as string;
        const password = formData.get("password") as string;
        try {
            await SignUpUser(email, user, password)
            navigate("/login")
        } catch (error) {
            setErrorMessage("The account could not be created. Please check your details or try using a different email address.");
        }
    }
    return (
        <>
            <h1>Sign Up</h1>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="example@example.com" />
                <label htmlFor="user">Username:</label>
                <input type="text" name="user" id="user" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Submit</button>
            </form>
            <p>Already have an account? <Link to="/login">Log in</Link></p>
        </>
    )
}