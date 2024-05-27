import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import DoughnutCatalogChart from '../CatalogCharts.jsx/DoughnutCatalogChart'

const CategoryDistribution = () => {
  return (
    <Card className="mt-6 mb-4 p-4 py-10 h-auto w-11/12 mx-auto">
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Category Distribution
      </Typography>
      <Typography>
        Gain valuable insights into the distribution of product categories with our Doughnut Chart. 
        Understand the proportion of each category within your catalog, 
        enabling informed decisions and strategic planning.
        </Typography>
      <DoughnutCatalogChart />
    </Card>
  )
}

export default CategoryDistribution
