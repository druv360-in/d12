import { useState } from 'react'
import './App.css'
import OngoingProjectsPageHeader97 from './components/ongoingProjectsPageHeader97.jsx'
import ProjectDetailCard98 from './components/projectDetailCard98.jsx'
import TeamCollaboratorItemSection99 from './components/teamCollaboratorItemSection99.jsx'
import ProjectTasksItemHeader103 from './components/projectTaskItemHeader103.jsx'
import ProjectTaskItem102 from './components/projectTaskItem102.jsx'
import CompletedWorkItemSection104 from './components/completedWorkItemSection104.jsx'
import RecentActivitySection106 from './components/recentActivitySection106.jsx'
import FileSharingSection108 from './components/fileSharingSection108.jsx'
import ProjectChatSection109 from './components/projectChatSection109.jsx'
import ContactUsPageHeader110 from './components/contactUsPageHeader110.jsx'
import SupportOptionLiveChatCard111 from './components/supportOptionLiveChatCard111(1).jsx'
import SupportOptionEmailSupportCard111 from './components/supportOptionEmailSupportCard111(2).jsx'
import SendUsAMessageForm112 from './components/sendUsAMessageForm112.jsx'
import ProfileEditSkillsSection150 from './components/profileEditSkillSection150.jsx'
import EarningsPageHeader140 from './components/earningsPageHeader140.jsx'
import EarningsBalanceCards141 from './components/earningsBalanceCards141.jsx'
import EarningsSummaryCard142 from './components/earningsSummaryCard142.jsx'
import WithdrawalMethodsList143 from './components/withDrawalMethodList143.jsx'
import EditProfilePageHeader147 from './components/editProfilePageHeader147.jsx'
import TransactionHistorySection146 from './components/transactionHistoryItem146.jsx'
import ProfilePhotoSection148 from './components/profilePhotoSection148.jsx'
import BasicInformationCard149 from './components/basicInformationCard149.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OngoingProjectsPageHeader97 />
      <ProjectDetailCard98 />
      <TeamCollaboratorItemSection99 />
      <ProjectTasksItemHeader103 />
      <ProjectTaskItem102 />
      <CompletedWorkItemSection104 />
      <RecentActivitySection106 />
      <FileSharingSection108 />
      <ProjectChatSection109 />
      <ContactUsPageHeader110 />
      <SupportOptionLiveChatCard111 />
      <SupportOptionEmailSupportCard111 />
      <SendUsAMessageForm112 />
      <EarningsPageHeader140 />
      <EarningsBalanceCards141 />
      <EarningsSummaryCard142 />
      <WithdrawalMethodsList143 />
      <EditProfilePageHeader147 />
      <TransactionHistorySection146 />
      <ProfilePhotoSection148 />
      <BasicInformationCard149 />
      <ProfileEditSkillsSection150 />
      
    </>
  )
}

export default App
