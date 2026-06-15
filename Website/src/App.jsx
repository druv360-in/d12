import { useState } from 'react'
import './App.css'
import Page17 from './components/17.TemplateDetails'
import Page18 from './components/18.TemplatePreview'
import Page19 from './components/19.TemplateDescription'
import Page20 from './components/20.IncludedList'
import Page21 from './components/21.PreviewScreenshots'

function App() {

  return (
    <div className='bg-[rgb(17,24,39)]'>
      <Page17/>
      <Page18/>
      <Page19/>
      <Page20/>
      <Page21/>
    </div>
  )
}

export default App
