import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, CardBody, CardFooter, Chip, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import React from 'react'

const TabsPopularCatalog = () => {
    const TABLE_HEAD = ["Title", "Most Popular", "Total Sold", "Total Sales", ""];

    const TABLE_ROWS = [
        {
            title: "John Michael",
            mostPopular: "Yes",
            totalSold: 50,
            totalSales: 5000,
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        },
        {
            title: "Alexa Liras",
            mostPopular: "No",
            totalSold: 30,
            totalSales: 4500,
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        },
        {
            title: "Laurent Perrier",
            mostPopular: "Yes",
            totalSold: 60,
            totalSales: 12000,
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        },
        {
            title: "Michael Levi",
            mostPopular: "No",
            totalSold: 40,
            totalSales: 4800,
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        },
        {
            title: "Richard Gran",
            mostPopular: "Yes",
            totalSold: 70,
            totalSales: 12600,
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        },
    ];


    return (
        <div>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
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
                        {TABLE_ROWS.map(
                            ({ img, name, email, mostPopular, totalSold, totalSales }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img} alt={name} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {email}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {mostPopular}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {totalSold}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={"$" + totalSales}
                                                    color={totalSales >= "5000" ? "green" : "red"}
                                                />


                                            </div>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
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

export default TabsPopularCatalog