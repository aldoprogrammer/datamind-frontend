// AtlastChart.js
import { Card, Typography } from '@material-tailwind/react'
import React from 'react'
import GlobeVisualization from './GlobeVizualization';


const AtlastChart = () => {
  return (
    <Card className="mt-6 p-4 py-10 h-[1060px] 
    w-11/12 mx-auto lg:mx-0">
      <div className='flex flex-col justify-between'> {/* Added items-center class here */}
        <div>
        <Typography variant="h5" color="blue-gray" 
        className="mb-2">
          Customer Location Map
        </Typography>
        <Typography className='mb-4'>
          This chart visualizes the geographic distribution of your customers. By using 3D globes to make it more attractive.
        </Typography>
        </div>
        <div className='flex justify-end items-end'>
          <GlobeVisualization />
        </div>
      </div>
    </Card>
  )
}

export default AtlastChart;
