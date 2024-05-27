import { Card, Chip, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ProgressiveLineCatalogChart from '../CatalogCharts.jsx/ProgresiveLineCatalogChart'
import CustomButton from '../../../../components/CustomButton'

const AICatalogGenerateChart = () => {
  return (
    <Card className="mt-6 lg:w-96 p-4 py-10 h-auto w-11/12 mx-auto">
      <div className='w-2/5'>
        <Chip color="indigo" className='flex items-center mb-4' value="AI Generated" 
          icon={<FontAwesomeIcon icon={faChartLine} className='mt-1 ml-1' />} />
      </div>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Products Popularity
      </Typography>
      <Typography>
      Discover product popularity trends with our dynamic chart driven by AI insights.
</Typography>
      <ProgressiveLineCatalogChart />
      <div  className='mt-10 flex justify-center w-full'>
      <CustomButton>
            <FontAwesomeIcon icon={faLightbulb} className="h-5 w-5 mr-2" />
            Prompt: Why this product is populer?
          </CustomButton>
          </div>
    </Card>
  )
}

export default AICatalogGenerateChart
