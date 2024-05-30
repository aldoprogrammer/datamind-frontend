import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons'; // Importing the star and trash icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, CardBody, CardFooter, Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import AIProductOptimization from '../../../components/modal/AIProductOptimization';
import axios from "../../../config/axiosConfig"; // Import the custom Axios instance
import AddProduct from '../../../components/modal/AddProduct';
import AddCategory from '../../../components/modal/AddCategory';


const DataTabsCatalog = () => {
    // State variables to manage the modal's visibility
    const [isOpen, setIsOpen] = useState(false);
    const [productModalOpen, setProductModalOpen] = useState(false); // Add state for AddProduct modal
    const [aiModalOpen, setAiModalOpen] = useState(false); // Add state for AIProductOptimization moda
    const [products, setProducts] = useState([]);
    const [categoryModalOpen, setCategoryModalOpen] = useState(false); // Add state for AddCategory modal


    useEffect(() => {
        fetchProducts();
    }, [productModalOpen]);

    const fetchProducts = async () => {
        try {
            const accessToken = JSON.parse(sessionStorage.getItem('loginResponse'))?.token?.access;
            if (!accessToken) {
                throw new Error('Access token not found');
            }

            const response = await axios.get('/product/get', {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (response.status === 200) {
                setProducts(response.data);
            } else {
                console.error('Failed to fetch products');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Function to handle opening the AIProductOptimization modal
    const handleAiModalOpen = () => {
        setAiModalOpen(true);
    };

    // Function to handle closing the AIProductOptimization modal
    const handleAiModalClose = () => {
        setAiModalOpen(false);
    };

    const handleProductModalOpen = () => {
        setProductModalOpen(true);
    };

    const handleProductModalClose = () => {
        setProductModalOpen(false);
    };

    const TABLE_HEAD = ["Title", "Price", "Description", "Discount", "Final Price", "Quantity", "Magic", "Delete"];

    const TABLE_ROWS = [
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
            name: "John Michael",
            email: "john@creative-tim.com",
            description: "Responsible for overseeing daily operations and ensuring that goals are achieved within the organization.",
            org: "Organization",
            price: "$100",
            date: "23/04/18",
        },
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
            name: "Alexa Liras",
            email: "alexa@creative-tim.com",
            description: "Responsible for developing software applications and ensuring they meet user requirements.",
            org: "Developer",
            price: "$150",
            date: "23/04/18",
        },
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
            name: "Laurent Perrier",
            email: "laurent@creative-tim.com",
            description: "Responsible for managing projects and ensuring timely delivery of project milestones.",
            org: "Projects",
            price: "$200",
            date: "19/09/17",
        },
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            description: "Responsible for coding, testing, and debugging software applications.",
            org: "Developer",
            price: "$120",
            date: "24/12/08",
        },
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
            name: "Richard Gran",
            email: "richard@creative-tim.com",
            description: "Responsible for managing the executive team and ensuring strategic goals are met.",
            org: "Executive",
            price: "$180",
            date: "04/10/21",
        },
    ];

    // Function to handle opening the modal
    const handleOpen = () => {
        setIsOpen(true);
    };

    // Function to handle closing the modal
    const handleClose = () => {
        setIsOpen(false);
    };

    // Function to handle opening the AddCategory modal
    const handleCategoryModalOpen = () => {
        setCategoryModalOpen(true);
    };

    // Function to handle closing the AddCategory modal
    const handleCategoryModalClose = () => {
        setCategoryModalOpen(false);
    };
    return (
        <div>
            <Typography className="text-blue-500 mx-4">
                            You Have to Create Category First to Create Product
                            </Typography>
            <div className="flex justify-start my-2 mx-4 gap-4">
                <Button color="indigo" ripple="light" onClick={handleOpen}>
                    Add Product
                </Button>
                <Button color="indigo" ripple="light" onClick={handleCategoryModalOpen}>
                    Add Category
                </Button>
            </div>
            <AddCategory isOpen={categoryModalOpen} handleClose={handleCategoryModalClose} /> {/* Render AddCategory modal */}
            <AddProduct isOpen={isOpen} handleClose={handleClose} />
            <AIProductOptimization isOpen={aiModalOpen} handleClose={handleAiModalClose} /> {/* Render AIProductOptimization modal */}

            <CardBody className="overflow-scroll px-0">
                <table className="mt-0 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <span>
                                                {/* <FontAwesomeIcon icon={faSortDown} className="h-4 w-4" />
                                <FontAwesomeIcon icon={faSortUp} className="h-4 w-4" /> */}
                                            </span>
                                        )}
                                    </Typography>
                                </th>
                            ))}

                        </tr>
                    </thead>
                    <tbody>
                        {products.data && products.data.map(({ id, title, price, extra_data }, index) => {
                            const isLast = index === products.data.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={id}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            {/* Render product image here */}
                                            <div className="flex items-center gap-2">
                                                <div>
                                                    <Avatar src={extra_data && extra_data.image} alt={title} size="sm" />
                                                </div>
                                                <div className='flex flex-col'>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {title}
                                                    </Typography>
                                                    {/* Render product description or other relevant info here */}
                                                    <Typography variant="small" color="blue-gray" className="font-normal opacity-70">
                                                        {extra_data && extra_data.description}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* price */}
                                    <td className={classes}>
                                        <div className="w-max">
                                            <Chip
                                                variant="ghost"
                                                size="sm"
                                                value={price + '$'}
                                                color={price < "$110" ? "red" : "green"}
                                            />
                                        </div>
                                    </td>
                                    {/* desc */}
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {extra_data && extra_data.description}
                                        </Typography>
                                    </td>

                                    <td className={classes}>
                                        {/* Render product discount */}
                                        <div className="w-max">
                                            <Chip
                                                variant="ghost"
                                                size="sm"
                                                value={extra_data && extra_data.discount + '%'}
                                                color={price < "$110" ? "red" : "blue"}
                                            />
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        {/* Render product final price */}
                                        <div className="w-max">
                                            <Chip
                                                variant="ghost"
                                                size="sm"
                                                value={extra_data && extra_data.final_price + '$'}
                                                color={price < "$110" ? "red" : "purple"}
                                            />
                                        </div>

                                    </td>
                                    <td className={classes}>
                                        {/* Render product quantity */}
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {extra_data && extra_data.quantity}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        {/* Render Magic action */}
                                        <Tooltip content="Magic Click">
                                            <IconButton variant="text" onClick={handleAiModalOpen}>
                                                <FontAwesomeIcon icon={faStar} className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                    <td className={classes}>
                                        {/* Render Delete action */}
                                        <Tooltip content="Delete Item">
                                            <IconButton variant="text">
                                                <FontAwesomeIcon icon={faTrash} className="h-4 w-4 text-red-500" />
                                            </IconButton>
                                        </Tooltip>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>



                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>


        </div>
    )
}

export default DataTabsCatalog;
