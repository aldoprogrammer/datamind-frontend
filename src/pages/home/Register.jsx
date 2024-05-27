import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import axios from "../../config/axiosConfig"; // Import the custom Axios instance
import { useAldoAlert } from "aldo-alert";

export default function Register() {
    const { showAldoAlert } = useAldoAlert();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true); // State to track password match

    const handleRegister = async (e) => {
        e.preventDefault();
        // Check if passwords match before registering
        if (password === confirmPassword) {
            try {
                // Passwords match, make a POST request to your backend API using the custom Axios instance
                const response = await axios.post("/register", { // Using relative URL
                    name,
                    email,
                    contact_number: contactNumber, // match the backend's expected field name
                    password,
                });
                console.log("Registration successful!", response.data);
                showAldoAlert('You successfully register!', 'success');
                window.location.reload();
                // Optionally, you can redirect the user or show a success message
            } catch (error) {
                console.error("Error:", error.response.data);
                // Optionally, you can display an error message to the user
            }
        } else {
            // Passwords don't match, display error or handle accordingly
            setPasswordMatch(false);
        }
    };

    return (
        <form className="mt-12 flex flex-col gap-4" onSubmit={handleRegister}>
            <div>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    placeholder="Your Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                >
                    Email
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
                    Contact Number
                </Typography>
                <Input
                    type="text"
                    placeholder="Contact Number"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
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
            <div>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                >
                    Confirm Password
                </Typography>
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {!passwordMatch && (
                    <Typography variant="small" color="red">
                        Passwords do not match!
                    </Typography>
                )}
            </div>
            <Button size="lg" type="submit">Register</Button>
        </form>
    );
}
