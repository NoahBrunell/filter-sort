import { getData } from '@/utils/handleDatabase'
import React from 'react'
import FilterComponent from '@/components/FilterComponent'

export default async function Filter() {
    const data = await getData()
    const sortedData = data.sort((a,b)=> a.id - b.id)
    const filterData = data.filter((e)=> e.quote == "5")
    // console.log(filterData);
    
  return (
    <div>
        <FilterComponent data={data} />
    </div>
  )
}
