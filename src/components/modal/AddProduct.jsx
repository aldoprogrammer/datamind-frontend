import React, { useState, useEffect } from 'react';
import axios from "../../config/axiosConfig"; // Import the custom Axios instance

import { Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography, Button, CardHeader, Card, Select, Option } from '@material-tailwind/react';
import { useAldoAlert } from 'aldo-alert';

const AddProduct = ({ isOpen, handleClose }) => {
    const { showAldoAlert } = useAldoAlert();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState(''); // State variable for selected category
    const [categories, setCategories] = useState([]); // State variable for list of categories
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const accessToken = JSON.parse(sessionStorage.getItem('loginResponse'))?.token?.access;
                if (!accessToken) {
                    throw new Error('Access token not found');
                }
    
                const response = await axios.get('/category/get', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
    
                if (response.status === 200) {
                    setCategories(response.data.results); // Update to setCategories(response.data.results)
                } else {
                    console.error('Failed to fetch categories');
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
    
        fetchCategories();
    }, []);
    

    const handleSubmit = async () => {
        try {
            const accessToken = JSON.parse(sessionStorage.getItem('loginResponse'))?.token?.access;
            if (!accessToken) {
                throw new Error('Access token not found');
            }

            const productData = {
                products: [
                    { 
                        title: name,
                        image: imageUrl,
                        price: parseFloat(price),
                        discount: parseFloat(discount),
                        final_price: parseFloat(price) - (parseFloat(price) * (parseFloat(discount) / 100)),
                        quantity: parseInt(quantity),
                        features: "",
                        description: description,
                        catalogue: "",
                        category_id: 1, // Use selected category ID
                    }
                ]
            };
            
            const response = await axios.post('/product/create', productData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            console.log('Response from backend:', response);

            if (response.status === 200) {
                console.log('Product created successfully:', response.data.products);
                showAldoAlert('You successfully created product!', 'success');
                window.location.reload();
                handleClose();
            } else {
                console.error('Failed to create product. Response status:', response.status);
                showAldoAlert('Failed to create product. Response status:', 'warning');
                throw new Error('Failed to create product');
            }
        } catch (error) {
            console.error('Error creating product:', error.message);
            setError(error.message);
        }
    };

    return (
        <div>
            <Dialog open={isOpen} size="xs" handler={handleClose}>
                <div className="flex items-center justify-between">
                    <DialogHeader className="flex flex-col items-start">
                        <Typography className="mb-1" variant="h4">
                            Generate Product
                        </Typography>
                        <Typography className="text-blue-500">
                            You have to Create Category First to Create Product
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
                                Image URL
                            </Typography>
                            <Input
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="Enter image URL"
                            />
                        </div>
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt="Product Image"
                                />
                            )}
                        </CardHeader>
                        <div className="mt-4">
                            <Typography className="mb-1" variant="label">
                                Product Name
                            </Typography>
                            <Input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter product name"
                            />
                        </div>
                        <div className="mt-4">
                            <Typography className="mb-1" variant="label">
                                Product Description
                            </Typography>
                            <Input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                multiline
                                rows={4}
                                placeholder="Enter product description"
                            />
                        </div>
                        {/* <div className="mt-4">
                            <Typography className="mb-1" variant="label">
                                Product Category
                            </Typography>
                            <Select 
    value={category !== null ? category.toString() : ''} 
    onChange={(value) => setCategory(value !== '' ? parseInt(value) : '')}
>
    <Option value="">Select Category</Option>
    {categories.map((cat) => (
        <Option key={cat.id} value={cat.id.toString()}>{cat.name}</Option>
    ))}
</Select>



                        </div> */}
                        <div className="mt-4">
                            <Typography className="mb-1" variant="label">
                                Price
                            </Typography>
                            <Input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter price"
                            />
                        </div>
                        <div className="mt-4">
                            <Typography className="mb-1" variant="label">
                                Discount (%)
                            </Typography>
                            <Input
                                type="number"
                                value={discount}
                                onChange={(e) => setDiscount(e.target.value)}
                                placeholder="Enter discount percentage"
                            />
                        </div>
                        <div className="mt-4">
                            <Typography className="mb-1" variant="label">
                                Quantity
                            </Typography>
                            <Input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                placeholder="Enter quantity"
                            />
                        </div>
                        {error && (
                            <Typography className="text-red-500 mt-4">
                                {error}
                            </Typography>
                        )}
                    </DialogBody>
                    <DialogFooter className="space-x-2">
                        <Button variant="text" color="gray" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="gradient" color="gray" onClick={handleSubmit}>
                            Create Product
                        </Button>
                    </DialogFooter>
                </Card>
            </Dialog>
        </div>
    );
};

export default AddProduct;
