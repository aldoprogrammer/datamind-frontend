import React from 'react'
import { DefaultSidebar } from '../components/DefaultSidebar'
import { TopBar } from '../components/TopBar'
import { DataCatalog } from './Catalog/DataCatalog'
import { WizardChatComponent } from './WizardChat/WizardChatComponent'

const WizardChat = () => {
  return (
    <div className='flex flex-col'>
        <TopBar />
        <div className='flex'>
        <DefaultSidebar />
        <WizardChatComponent />
        </div>
    </div>
  )
}

export default WizardChat