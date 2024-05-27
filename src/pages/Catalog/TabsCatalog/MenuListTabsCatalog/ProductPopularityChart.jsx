import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import StackedBarLineCatalogChart from '../CatalogCharts.jsx/StackedBarLineCatalogChart'

const ProductPopularityChart = () => {
  return (
    <Card className="mt-6 lg:w-96 p-4 py-10 h-auto w-11/12 mx-auto">
      <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
        Product Popularity Over Time
      </Typography>
      <Typography>
        Explore the evolving popularity trends of our products over time with our dynamic chart.
        </Typography>
      <StackedBarLineCatalogChart />
    </Card>
  )
}

export default ProductPopularityChart
