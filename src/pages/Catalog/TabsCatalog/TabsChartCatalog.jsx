import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import BarCatalogCharts from './CatalogCharts.jsx/BarCatalogCharts'
import DoughnutCatalogChart from './CatalogCharts.jsx/DoughnutCatalogChart'
import StackedBarLineCatalogChart from './CatalogCharts.jsx/StackedBarLineCatalogChart'
import ProgressiveLineCatalogChart from './CatalogCharts.jsx/ProgresiveLineCatalogChart'
import LineCatalogChart from './CatalogCharts.jsx/LineCatalogChart'
import PointStyleCatalogChart from './CatalogCharts.jsx/PointStyleCatalogChart'
import { faChartBar, faChartLine, faInfoCircle, faLightbulb, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomButton from '../../../components/CustomButton'
import WhyPopularTabsCatalog from './MenuListTabsCatalog/WhyPopularTabsCatalog'
import GenerateChart from '../../../components/modal/GenerateChart'
import ProductPopularityChart from './MenuListTabsCatalog/ProductPopularityChart'
import AICatalogGenerateChart from './MenuListTabsCatalog/AICatalogGenerateChart'
import CategoryDistribution from './MenuListTabsCatalog/CategoryDistribution'




const TabsChartCatalog = () => {
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
    <div className='flex flex-col'>
      <div className='w-2/5 mx-4 mt-4'>
      <CustomButton onClick={openGenerateChartModal}>
        <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 mr-2" />
        New Chart
      </CustomButton>
      
      </div>{/* Render Generate Chart modal */}
      <GenerateChart isOpen={isGenerateChartOpen} handleClose={closeGenerateChartModal} />

      <div className='my-6 grid grid-cols-1 md:grid-cols-2'>
        {/* Button New Chart*/}

        <WhyPopularTabsCatalog />
        <Card className="mt-6 lg:w-96 p-4 py-10 h-auto w-11/12 mx-auto">
          <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
            Charts
          </Typography>
          <BarCatalogCharts />
        </Card>
       <ProductPopularityChart />
       <AICatalogGenerateChart />
       
        
        {/* <Card className="mt-6 lg:w-96 p-4 py-10 h-auto w-11/12 mx-auto">
          <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
            Charts
          </Typography>
          <LineCatalogChart />
        </Card>
        <Card className="mt-6 lg:w-96 p-4 py-10 h-auto w-11/12 mx-auto">
          <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
            Charts
          </Typography>
          <PointStyleCatalogChart />
        </Card> */}
      </div>
      <div className='w-full h-auto'>
      <CategoryDistribution />
      </div>
    </div>
  )
}

export default TabsChartCatalog