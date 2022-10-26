import axios from 'axios'
import { 
    START_HOMES_RETRIEVE,
    RETRIEVE_HOMES_OK,
    RETRIEVE_HOMES_ERROR,  
    FILTER_HOMES_ACTION,
    ORDER_RESULTS_BY_NEWEST,
    ORDER_RESULTS_BY_OLDEST,
    FILTER_RESULTS_BY_ACTIVE,
    FILTER_RESULTS_BY_SOLD,    
  } from '../types'

export function getHomesAction() {
    return async (dispatch) => {
        dispatch ( getHomes() )

        try {
            const {data} = await axios.get('http://localhost:4000/')
            dispatch ( getHomesOk(data) )          
            
        } catch (error) {
            dispatch ( getHomesError(error) )
        }
    } 
}

export function filterHomesAction(keyword) {
    return async (dispatch) => {
        dispatch (getFilteredHomes(keyword))
    }
}

export function orderHomes({date, status}) {
    return async (dispatch) => {
        
        if(date==='Newest') {
            dispatch ( orderByNewest() )
        } else if(date==='Oldest') {
            dispatch ( orderByOldest() )
        }
        if(status==='Active') {
            dispatch ( filterByActive() )
        } else if(status==='Sold') {
            dispatch ( filterBySold() )
        }
    }
}



const getHomes = () => ({
    type: START_HOMES_RETRIEVE,
    payload: true
})

const getHomesOk = (homes) => ({
    type: RETRIEVE_HOMES_OK,
    payload: homes
})

const getHomesError = () => ({
    type: RETRIEVE_HOMES_ERROR,
    payload: true
})

const getFilteredHomes = (keyword) => ({
    type: FILTER_HOMES_ACTION,
    payload: keyword
})

const orderByNewest = () => ({
    type: ORDER_RESULTS_BY_NEWEST
})

const orderByOldest = () => ({
    type: ORDER_RESULTS_BY_OLDEST
})

const filterByActive = () => ({
    type: FILTER_RESULTS_BY_ACTIVE
})

const filterBySold = () => ({
    type: FILTER_RESULTS_BY_SOLD
})
