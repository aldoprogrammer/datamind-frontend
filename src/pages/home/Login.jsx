import { Button, Input, Typography } from "@material-tailwind/react";
import { useAldoAlert } from "aldo-alert";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../config/axiosConfig"; // Import the custom Axios instance


export default function Login() {
    const navigate = useNavigate();
    const { showAldoAlert } = useAldoAlert();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/login", {
                email,
                password
            });

            // Save the entire response object in session storage
            sessionStorage.setItem('loginResponse', JSON.stringify(response.data));
    
            // Assuming the login endpoint returns some data
            console.log(response.data); // Log the response data
            navigate('/dashboard');
            showAldoAlert('You successfully logged in!', 'success');
        } catch (err) {
            console.error(err);
            showAldoAlert('An error occurred while logging in!', 'warning');
        }
    };

    return (
        <form className="mt-12 flex flex-col gap-4">
            <div>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                >
                    Your Email
                </Typography>
                <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                >
                    Password
                </Typography>
                <Input
                    type="password"
                    placeholder="Password"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Button size="lg" onClick={handleLogin}>
                Login
            </Button>
        </form>
    );
}
