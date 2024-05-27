import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'

import { faChartBar, faChartLine, faInfoCircle, faLightbulb, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GenerateChart from '../../components/modal/GenerateChart'
import WhyPopularTabsCatalog from '../Catalog/TabsCatalog/MenuListTabsCatalog/WhyPopularTabsCatalog'
import BarCatalogCharts from '../Catalog/TabsCatalog/CatalogCharts.jsx/BarCatalogCharts'
import DoughnutCatalogChart from '../Catalog/TabsCatalog/CatalogCharts.jsx/DoughnutCatalogChart'
import StackedBarLineCatalogChart from '../Catalog/TabsCatalog/CatalogCharts.jsx/StackedBarLineCatalogChart'
import ProgressiveLineCatalogChart from '../Catalog/TabsCatalog/CatalogCharts.jsx/ProgresiveLineCatalogChart'
import LineCatalogChart from '../Catalog/TabsCatalog/CatalogCharts.jsx/LineCatalogChart'
import PointStyleCatalogChart from '../Catalog/TabsCatalog/CatalogCharts.jsx/PointStyleCatalogChart'
import AgeCustomersChart from './ChartTypesCustomers.jsx/AgeCustomersChart'
import LifeTimeValueChartCustomer from './ChartTypesCustomers.jsx/LifeTimeValueChartCustomer'
import AtlastChart from '../../components/Charts/AtlastChart'





const ChartCustomers = () => {
  // State to manage the visibility of the Generate Chart modal
  const [isGenerateChartOpen, setIsGenerateChartOpen] = useState(false);

  // Function to handle opening the Generate Chart modal
  const openGenerateChartModal = () => {
    setIsGenerateChartOpen(true);
  };

  // Function to handle closing the Generate Chart modal
  const closeGenerateChartModal = () => {
    setIsGenerateChartOpen(false);
  };
  return (
    <div className='w-full flex flex-col'>
      <div className='my-6 lg:flex 
      justify-between grid grid-cols-1
      lg:flex-col xl:flex-row
      '>
        {/* Button New Chart*/}
       <div className='xl:w-[20%] grid 
       grid-cols-1 md:grid-cols-2 gap-10 
       xl:flex xl:flex-col'>
        <AgeCustomersChart />
        <LifeTimeValueChartCustomer />
            </div>

        <div className='xl:w-[58%]'>
        <AtlastChart />
        </div>
        
       
       
        
        

      </div>
    </div>
  )
}

export default ChartCustomers