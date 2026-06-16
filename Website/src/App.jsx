import { useState } from 'react'
import './App.css'
import Page17 from './components/17.TemplateDetails'
import Page18 from './components/18.TemplatePreview'
import Page19 from './components/19.TemplateDescription'
import Page20 from './components/20.IncludedList'
import Page21 from './components/21.PreviewScreenshots'
import Page22 from './components/22.CustomerReviewCard'
import Page23 from './components/23.RatingSummaryCard'
import Page24 from './components/24.IndividualReviewCard'
import Page25 from './components/25.Pricing&Action'
import Page26 from './components/26.Tags'
import Page27 from './components/27.LicenceInformation'
import Page28 from './components/28.AboutCreater'
import Page29 from './components/29.BrowserServices'
import Page32 from './components/32.ServiceCard'
function App() {

  return (
    <div className='bg-[rgb(17,24,39)]'>
      <Page17/>
      <Page18/>
      <Page19/>
      <Page20/>
      <Page21/>
      <Page22/>
      <Page25/>
      <Page26/>
      <Page27 />
      <Page28/>
      <Page29/>
      <Page32/>
    </div>
  )
}

export default App
