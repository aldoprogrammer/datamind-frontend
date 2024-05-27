import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import CustomButton from '../../../components/CustomButton'
import StackedBarLineCatalogChart from '../../Catalog/TabsCatalog/CatalogCharts.jsx/StackedBarLineCatalogChart'

const AgeCustomersChart = () => {
  return (
    <div>
       <Card className="mt-6 lg:w-96 p-4 py-10 h-auto
        w-11/12 mx-auto">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Customer Age Distribution
          </Typography>
          <Typography className='mb-4'>
            This chart displays the distribution of customer ages. Understanding the age demographics of your customer base is crucial for tailoring your products.</Typography>
          <StackedBarLineCatalogChart />
        </Card>
    </div>
  )
}

export default AgeCustomersChart
