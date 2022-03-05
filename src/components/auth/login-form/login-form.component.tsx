import { TextField, Button, Link as MiuLink } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [emailErrored, setEmailErrored] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordErrored, setPasswordErrored] = useState(false);

    const handleLogin = () => {
        setEmailErrored(!email);
        setPasswordErrored(!password)
    }

    return (
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-6xl">Cryptostats</h1>
            <div className="flex flex-col gap-2">
                <TextField
                    label="Email"
                    className="w-80"
                    type="email"
                    required
                    helperText={emailErrored && "Please enter a valid email."}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    error={emailErrored}
                />
                <TextField
                    label="Password"
                    className="w-80"
                    type="password"
                    required
                    helperText={passwordErrored && "Password may not be empty."}
                    value={password}
                    onChange={((event) => setPassword(event.target.value))}
                    error={passwordErrored}
                />
                <Link to="/signup" className="justify-self-start self-start mt-2">
                    <MiuLink>Sign Up</MiuLink>
                </Link>
            </div>
            <Button variant="contained" className="w-80" onClick={handleLogin}>
                <span className="p-1">Login</span>
            </Button>
        </div>
    )
};

export { LoginForm };