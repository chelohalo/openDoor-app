import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { orderHomes } from '../actions/homesActions'

const Filter = () => {
    const [filter, setFilter] = useState({
        date: '',
        status: ''
    })
  
    const dispatch = useDispatch()

    useEffect(() => {
        if(filter.date==='Newest' || filter.date==='Oldest' || filter.status==='Active' || filter.status==='Sold' ) {
            dispatch ( orderHomes(filter) ) 
        }
        
    }, [filter])


    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.target.id]: e.target.value
        })
    }

    return (
    <div className='flex justify-start m-5'>
        <select 
            id="date" 
            className="mx-2 w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}    
        >
            <option selected>--Order By Date--</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
        </select>

        <select 
            id="status" 
            className="mx-2 w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}    
        >
            <option selected>--Status--</option>
            <option value="Active">Active</option>
            <option value="Sold">Sold</option>
        </select>
    </div>
  )
}

export default Filter