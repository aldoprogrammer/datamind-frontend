import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { faCreditCard, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "./home/Login";
import Register from "./home/Register";
import LogoImage from '../assets/logo-removebg-preview.png'

export default function Home() {
    const [type, setType] = React.useState("login");

    return (
        <div className="flex items-center justify-center my-10">
            <Card className="w-11/12 mx-auto max-w-[24rem]">
                <CardHeader
                    color="gray"
                    floated={false}
                    shadow={false}
                    className="m-0 flex flex-col justify-center
                     items-center 
                    px-4 py-8 text-center"
                >
                    <div className="mb-9 mt-4 flex justify-center items-center
                     h-20 p-6 text-white">
                        <img
                            alt="paypal "
                            className="w-3/5"
                            src={LogoImage}
                        />
                    </div>
                    <Typography variant="h5" color="white">
                        {type === "login" ? "Welcome Back" : "Join Us"}
                    </Typography>


                </CardHeader>
                <CardBody>
                    <Tabs value={type} className="overflow-visible">
                        <TabsHeader className="relative z-0 ">
                            <Tab value="login" onClick={() => setType("login")}>
                                Login
                            </Tab>
                            <Tab value="register" onClick={() => setType("register")}>
                                Register
                            </Tab>
                        </TabsHeader>
                        <TabsBody
                            className="!overflow-x-hidden !overflow-y-visible"
                            animate={{
                                initial: {
                                    x: type === "login" ? 400 : -400,
                                },
                                mount: {
                                    x: 0,
                                },
                                unmount: {
                                    x: type === "login" ? 400 : -400,
                                },
                            }}
                        >
                            <TabPanel value="login" className="p-0">
                                <Login />
                            </TabPanel>
                            <TabPanel value="register" className="p-0">
                                <Register/>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                    <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center 
                        justify-center mt-4 gap-2 font-bold 
                        opacity-60 italic"
                    >
                        Serve the Best,

                        For Your
                        Marketplace.

                    </Typography>



                </CardBody>
            </Card>
        </div>
    );
}
