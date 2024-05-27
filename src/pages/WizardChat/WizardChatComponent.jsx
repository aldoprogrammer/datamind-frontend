import React, { useState, useEffect } from "react";
import {
    Card,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";
import { faBox, faBoxesPacking, faChartLine, faStar, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_OPENAPI_KEY;

const openaiService = axios.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
    },
});

const getChatResponse = async (prompt) => {
    const response = await openaiService.post('/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
    });
    return response.data;
};

export function WizardChatComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([]);
    const [displayedText, setDisplayedText] = useState("");
    const [intervalId, setIntervalId] = useState(null);

    const handleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    const handleSubmit = async () => {
        if (userMessage.trim() !== "") {
            const newChatMessages = [...chatMessages, { role: 'user', content: userMessage }];
            setChatMessages(newChatMessages);

            const response = await getChatResponse(userMessage);
            const fullText = response.choices[0].message.content;

            // Display the AI response gradually
            setDisplayedText('');
            let index = 0;
            const id = setInterval(() => {
                if (index < fullText.length) {
                    setDisplayedText(prev => prev + fullText[index]);
                    index += 1;
                } else {
                    clearInterval(id);
                    setDisplayedText("");  // Clear the displayedText after completion
                    setChatMessages(prevMessages => [...prevMessages, { role: 'ai', content: fullText }]);
                    setIntervalId(null);
                }
            }, 50);

            setIntervalId(id);
            setUserMessage("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleClose = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        setIsOpen(false);
        setUserMessage("");
        setDisplayedText("");
        setChatMessages([]);
    };

    return (
        <Card className="fixed bottom-6 left-1/2 transform -translate-x-1/2 p-2">
            <div className="mx-auto text-center w-11/12">
                <div className="flex items-center w-fit gap-4 p-2 text-black">
                    <FontAwesomeIcon icon={faBoxesPacking} className="mr-2 h-5 w-5 cursor-pointer hover:bg-blue-gray-400 hover:rounded-full hover:p-3 duration-300 ease-in-out" />
                    <FontAwesomeIcon icon={faVolumeHigh} className="mr-2 h-5 w-5 cursor-pointer hover:bg-blue-gray-400 hover:rounded-full hover:p-3 duration-300 ease-in-out" />
                    <Button className="w-[120px] flex items-center" onClick={handleOpen}>
                        <FontAwesomeIcon icon={faStar} className="mr-2" />
                        AI Chat
                    </Button>
                    <FontAwesomeIcon icon={faBox} className="mr-2 h-5 w-5 cursor-pointer hover:bg-blue-gray-400 hover:rounded-full hover:p-3 duration-300 ease-in-out" />
                    <FontAwesomeIcon icon={faChartLine} className="mr-2 h-5 w-5 cursor-pointer hover:bg-blue-gray-400 hover:rounded-full hover:p-3 duration-300 ease-in-out" />
                </div>
                <Dialog open={isOpen} size="xs" handler={handleOpen}>
                    <div className="flex items-center justify-between">
                        <DialogHeader className="flex flex-col items-start">
                            <Typography className="mb-1" variant="h4">
                                Magic ChatBot AI
                            </Typography>
                        </DialogHeader>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-3 h-5 w-5 cursor-pointer"
                            onClick={handleOpen}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <DialogBody className="h-[70vh] flex flex-col">
                        <div className="flex-grow overflow-y-auto">
                            {chatMessages.map((msg, index) => (
                                <div key={index} className={`p-2 m-1 rounded-md ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                                    <p>{msg.content}</p>
                                </div>
                            ))}
                            {displayedText && (
                                <div className="p-2 m-1 rounded-md bg-gray-100">
                                    <p>{displayedText}</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-auto">
                            <Input
                                label="Type it here ..."
                                value={userMessage}
                                onChange={(e) => setUserMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </div>
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button variant="text" color="gray" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="gradient" color="gray" onClick={handleSubmit}>
                            Send Message
                        </Button>
                    </DialogFooter>
                </Dialog>
            </div>
        </Card>
    );
}
