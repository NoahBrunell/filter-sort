"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FilterComponent({data}:{data:any[]}) {
  const router = useRouter()
  const [quotes, setQuotes] = useState(data)

  function handleSortId() {
    const sortedData = data.sort((a:any,b:any)=> b.id - a.id)
    setQuotes(sortedData)
    router.refresh()
  }

  function handleSortLength() {
    const sortedData = data.sort((a:any,b:any)=> b.quote.length - a.quote.length)
    setQuotes(sortedData)
    router.refresh()
  }

  function handleFilter() {
    const filterData = data.filter((d)=> d.quote.length > 5)
    setQuotes(filterData)
    router.refresh
  }

  return (
    <div className='flex flex-col w-fit h-fit mx-auto items-center mt-20'>
      <h1 className='text-3xl'>Filters</h1>
      {quotes.map((d)=>(
        <div key={d.id}>
          <br />
          <h1 className='text-xl'>{d.quote}</h1>
          <h3 className='text-gray-500'>{d.author}</h3>
        </div>
      ))}
      <button className='mt-10 border-2 rounded border-black p-3' onClick={handleSortId}>Sort after id</button>
      <button className='mt-10 border-2 rounded border-black p-3' onClick={handleSortLength}>Sort after length</button>
      <button className='mt-10 border-2 rounded border-black p-3' onClick={handleFilter}>Filter after quote length</button>
    </div>
  )
}
