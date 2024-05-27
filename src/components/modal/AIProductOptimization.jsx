import React, { useState } from 'react';
import axios from 'axios';
import { Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography, Button, CardHeader, Card, List, ListItem, ListItemPrefix, ListItemSuffix, Chip } from '@material-tailwind/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCompressAlt, faProjectDiagram, faAngleDown, faCheckSquare, faPen, faBolt } from '@fortawesome/free-solid-svg-icons';

// Set up OpenAI API service
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
        model: 'gpt-3.5-turbo',  // or another model you have access to
        messages: [{ role: 'user', content: prompt }],
    });
    return response.data;
};

const AIProductOptimization = ({ isOpen, handleClose }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [response, setResponse] = useState('');
    const [displayedText, setDisplayedText] = useState('');
    const [intervalId, setIntervalId] = useState(null);

    const handleSubmit = async () => {
        const prompt = `Product name: ${name}\nDescription: ${description}`;
        const result = await getChatResponse(prompt);
        const fullText = result.choices[0].message.content;
        setResponse(fullText);
        setDisplayedText('');
        
        if (intervalId) {
            clearInterval(intervalId);
        }

        let index = 0;
        const id = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText[index]);
                index += 1;
            } else {
                clearInterval(id);
            }
        }, 50);

        setIntervalId(id);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleCloseModal = () => {
        if (intervalId) {
            clearInterval(intervalId);
        }
        setName('');
        setDescription('');
        setResponse('');
        setDisplayedText('');
        handleClose();
    };

    const menuItems = [
        {
            name: 'Fix Grammar',
            icon: <FontAwesomeIcon icon={faCheckSquare} />,
            suffix: <Chip value="Grammar" variant="ghost" size="sm" className="rounded-full px-2 py-1 text-xs group-hover:bg-white/20 group-hover:text-white" />
        },
        {
            name: 'Improve Writing',
            icon: <FontAwesomeIcon icon={faPen} />,
            suffix: <Chip value="Writing Magic" variant="outlined" size="sm" color="orange" className="rounded-full px-2 py-1 text-xs" />
        },
        {
            name: 'Make it Punchier',
            icon: <FontAwesomeIcon icon={faBolt} />,
            suffix: <Chip value="Punchier" variant="filled" size="sm" color="blue" className="rounded-full px-2 py-1 text-xs" />
        },
        {
            name: 'Condense',
            icon: <FontAwesomeIcon icon={faFileAlt} />,
            suffix: <Chip value="Condense" variant="outlined" size="sm" color="green" className="rounded-full px-2 py-1 text-xs" />
        },
        {
            name: 'Mix It Up',
            icon: <FontAwesomeIcon icon={faCompressAlt} />,
            suffix: <Chip value="Mix Up" variant="filled" size="sm" color="amber" className="rounded-full px-2 py-1 text-xs" />
        },
        {
            name: 'Improve Structure & Spacing',
            icon: <FontAwesomeIcon icon={faProjectDiagram} />,
            suffix: <Chip value="Good Space" variant="outlined" size="sm" color="indigo" className="rounded-full px-2 py-1 text-xs" />
        }
    ];

    return (
        <div>
            <Dialog open={isOpen} size="xs" handler={handleCloseModal}>
                <div className="flex items-center justify-between">
                    <DialogHeader className="flex flex-col items-start">
                        <Typography className="mb-1" variant="h4">
                            AI Optimization Product
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5 cursor-pointer"
                        onClick={handleCloseModal}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <Card>
                    <DialogBody className="h-auto flex flex-col">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        />
                        <List className="my-2 p-0">
                            {menuItems.map((menuItem, index) => (
                                <ListItem key={index} className="group rounded-none py-1.5 px-3 text-sm font-normal text-blue-gray-700 hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white">
                                    <ListItemPrefix>
                                        {menuItem.icon}
                                    </ListItemPrefix>
                                    {menuItem.name}
                                    <ListItemSuffix>
                                        {menuItem.suffix}
                                    </ListItemSuffix>
                                </ListItem>
                            ))}
                        </List>

                        <div className="mt-4">
                            {/* Input field for name with label */}
                            <Typography className="mb-1 text-blue-500" variant="label">
                                <FontAwesomeIcon icon={faAngleDown} className="mr-1" /> Ask AI Anything, like "add more emoji"
                            </Typography>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Enter product name"
                            />
                        </div>

                        {response && (
                            <div className="mt-4 p-2 bg-gray-100 h-24 rounded overflow-y-auto">
                                <Typography variant="body1" color="gray">
                                    {displayedText}
                                </Typography>
                            </div>
                        )}
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button variant="text" color="gray" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                        <Button variant="gradient" color="gray" onClick={handleSubmit}>
                            Ask AI
                        </Button>
                    </DialogFooter>
                </Card>
            </Dialog>
        </div>
    );
};

export default AIProductOptimization;
