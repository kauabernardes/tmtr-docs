import React from 'react'
import { TypographyH1 } from '../../components/ui/typography'

const Dashboard = ({title}: {title: string}) => {
  return (
    <div>
        <TypographyH1 className='text-white  '>{title}</TypographyH1>
    </div>
  )
}

export default Dashboard