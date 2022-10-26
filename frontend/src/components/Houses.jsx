import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Filter from './Filter'
import House from './House'
import Offer from './Offer'
import Pagination from './Pagination'

const Houses = () => {
  const search = useLocation().search
  const page = new URLSearchParams(search).get('page') || 1

  const [currentPage, setCurrentPage] = useState(page)
  const [homesPerPage, setHomesPerPage] = useState(10)

  const homes = useSelector(state => state.homes.homesByStatus) // es un array

  const indexOfLastHome = currentPage * homesPerPage
  const indexOfFirstHome = indexOfLastHome - homesPerPage
  const currentHomes = homes.slice(indexOfFirstHome, indexOfLastHome)

  useEffect( () => {
    setCurrentPage(page)
  }, [page])
  
  return (
    <div className='w-full px-5 pt-5 md:w-1/2 '>
      <h4 className='font-bold text-lg px-5'>Homes for sale in Tampa</h4>
      <p className='px-5 py-2'>{homes.length} listings found</p>
      
      <Filter />
      
      {currentHomes.map((home, index) => 
          <>
            <House
              key={home._id} 
              images={home.images} 
              price={home.purchasePrice}
              bedroom={home.units[0].bedroom} 
              bathroom={home.units[0].bathroom} 
              squareFootage={home.units[0].squareFootage}
              streetNumber={home.addressObject.streetNumber}  
              route={home.addressObject.route} 
              locality={home.addressObject.locality}  
              stateCode={home.addressObject.stateCode}  
            />
            {index===1 && <Offer />}
          </>
        
      )}

      <Pagination homesPerPage={homesPerPage} totalHomes={homes.length} currentPage={currentPage} />
    </div>
  )
}

export default Houses