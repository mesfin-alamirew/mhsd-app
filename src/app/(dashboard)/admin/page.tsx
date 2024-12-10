import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
            <div className='flex flex-col p-4 gap-4'>
               {/* USER CARDS */}
                <div className='flex gap-4 justify-between w-full flex-wrap'>
                    <UserCard type="memberstate"/>
                    <UserCard type="regional"/>
                    <UserCard type="africanunion"/>
                    <UserCard type="others"/>
                </div>
            <div className='p-2 flex flex-col gap-4 md:flex-row'>
              
                {/* LEFT */}
                <div className='w-full lg:w-2/3 h-[450px]'>
                     <CountChart />
                </div>
            {/* RIGHT */}
            <div className='w-full lg:w-1/3'>R</div>
            
            </div>
          </div>
  )
}

export default AdminPage
