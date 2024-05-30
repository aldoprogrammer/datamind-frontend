import React, { useState } from 'react';
import axios from "../../config/axiosConfig"; // Import the custom Axios instance

import { Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography, Button, CardHeader, Card } from '@material-tailwind/react';
import { useAldoAlert } from 'aldo-alert';

const AddCategory = ({ isOpen, handleClose }) => {
    const { showAldoAlert } = useAldoAlert();
    const [name, setName] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        try {
            const accessToken = JSON.parse(sessionStorage.getItem('loginResponse'))?.token?.access;
            if (!accessToken) {
                throw new Error('Access token not found');
            }

            const categoryData = {
                name: name
            };
            
            const response = await axios.post('/category/create', categoryData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            console.log('Response from backend:', response);

            if (response.status === 200) {
                console.log('Category created successfully:', response.data);
                showAldoAlert('You successfully created a category!', 'success');
                handleClose();
            } else {
                console.error('Failed to create category. Response status:', response.status);
                showAldoAlert('Failed to create category. Response status:', 'warning');
                throw new Error('Failed to create category');
            }
        } catch (error) {
            console.error('Error creating category:', error.message);
            setError(error.message);
        }
    };

    return (
        <div>
            <Dialog open={isOpen} size="xs" handler={handleClose}>
                <div className="flex items-center justify-between">
                    <DialogHeader className="flex flex-col items-start">
                        <Typography className="mb-1" variant="h4">
                            Create Category
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5 cursor-pointer"
                        onClick={handleClose}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <Card>
                    <DialogBody className="h-[70vh] flex flex-col overflow-auto">
                        <div className="mt-4">
                            <Typography className="mb-1" variant="label">
                                Category Name
                            </Typography>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Category Name"
                            />
                        </div>
                        {error && (
                            <div className="text-red-500 mt-2">
                                {error}
                            </div>
                        )}
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button variant="text" color="gray" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="gradient" color="gray" onClick={handleSubmit}>
                            Create Category
                        </Button>
                    </DialogFooter>
                </Card>
            </Dialog>
        </div>
    );
};

export default AddCategory;
