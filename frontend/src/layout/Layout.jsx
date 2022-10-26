import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getHomesAction } from '../actions/homesActions'
import SearchBar from '../components/SearchBar'
import Houses from '../components/Houses'
import Map from '../components/Map'


const Layout = () => {
  const dispatch = useDispatch()

  useEffect(()=> {
      dispatch ( getHomesAction() )
  }, [])
  
  return (
    <div>
      <div className='flex flex-col md:w-2/3 m-auto pt-10 pb-5 md:flex-row justify-around'>
        <h1 className='text-blue-700 font-bold text-2xl text-center mb-5'>OpenDoor</h1>
        <SearchBar className=''/>
      </div>
      <div className='flex flex-col grow md:flex-row'>
        <Map />
        <Houses />
      </div>

    </div>
  )
}

export default Layout