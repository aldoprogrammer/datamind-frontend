import React from 'react'
import { DefaultSidebar } from '../components/DefaultSidebar'
import { TopBar } from '../components/TopBar'
import { DataCatalog } from './Catalog/DataCatalog'
import { WizardChatComponent } from './WizardChat/WizardChatComponent'

const Dashboard = () => {
  return (
    <div className='flex flex-col'>
        <TopBar />
        <div className='flex relative'>
        <DefaultSidebar />
        <DataCatalog />
        <WizardChatComponent />
        </div>
       
    </div>
  )
}

export default Dashboard