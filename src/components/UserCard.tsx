import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl first:bg-[#17a2b8] [&:nth-child(2)]:bg-[#28a745] [&:nth-child(3)]:bg-[#ffc107] [&:nth-child(4)]:bg-[#dc3545] p-4 flex-1 min-w-[130px]'>
      <div className='flex items-center justify-between'>
        <span className='text-[10px] bg-white px-2 py-2 rounded-full text-green-600'>2024/25</span>
        <Image src="/more.png" alt='' width={20} height={20} />
      </div>
      <h1 className='text-2xl font-semibold my-4'>1,234</h1>
      <h1 className='capitalize text-sm font-medium  text-gray-100'>{type}</h1>
    </div>
  )
}

export default UserCard
