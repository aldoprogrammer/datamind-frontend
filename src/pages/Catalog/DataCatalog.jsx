import React, { useState } from "react";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import DataTabsCatalog from "./TabsCatalog/DataTabsCatalog";
import TabsPopularCatalog from "./TabsCatalog/TabsPopularCatalog";
import TabsChartCatalog from "./TabsCatalog/TabsChartCatalog";

const TABS = [
    {
        label: "Data",
        value: "Data",
    },
    {
        label: "Popular",
        value: "Popular",
    },
    {
        label: "Chart & Insights",
        value: "Chart",
    },
];

export function DataCatalog() {
    const [selectedTab, setSelectedTab] = useState("Data");

    const handleTabChange = (value) => {
        console.log("Selected Tab:", value);
        setSelectedTab(value);
    };

    return (
        <Card className="h-full w-full shadow-none">
            <CardHeader floated={false} shadow={false} className="rounded-none ">
                <div className="mb-0 flex md:flex-row flex-col
                items-left md:items-center 
                justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Catalog Analyzer
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all of your catalog
                        </Typography>
                    </div>

                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value={selectedTab} className="w-full md:w-max">
                            <TabsHeader >
                                {TABS.map(({ label, value }) => (
                                    <Tab onClick={() => handleTabChange(value)}
                                        key={value} value={value} className="w-auto">
                                        {label}
                                    </Tab>
                                ))}
                            </TabsHeader>

                        </Tabs>
                    </div>

                </div>

            </CardHeader>
            {/* Render the selected tab component */}
            {selectedTab === "Data" && <DataTabsCatalog />}
            {selectedTab === "Popular" && <TabsPopularCatalog />}
            {selectedTab === "Chart" && <TabsChartCatalog />}
        </Card>
    );
}
