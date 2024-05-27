import React from 'react'
import { TopBar } from '../components/TopBar'
import { DefaultSidebar } from '../components/DefaultSidebar'
import { DataCatalog } from './Catalog/DataCatalog'
import ChartCustomers from './Customers/ChartCustomers'

const Customers = () => {
  return (
    <div className='flex flex-col'>
        <TopBar />
        <div className='flex'>
        <DefaultSidebar />
        <ChartCustomers />
        </div>
    </div>
  )
}

export default Customers
