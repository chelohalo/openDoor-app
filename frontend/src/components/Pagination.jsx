import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({homesPerPage, totalHomes, currentPage}) => {
    let pageNumbers = []

    for (let i=1; i <= Math.ceil(totalHomes/homesPerPage); i++) {
        pageNumbers=[...pageNumbers,i]
    }

  return (
    <nav className='m-5 p-5 flex justify-center'>
        <ul className='inline-flex items-center -space-x-px'>
            {currentPage>1 && 
            <li>
                <Link to={currentPage>1 && `/?page=${Number(currentPage)-1}`} className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </Link>
            </li>
            }

            {pageNumbers.map( page => (
                <li key={page}>
                    <Link to={`/?page=${page}`} /* onClick={() => paginate(page)} */ className={Number(currentPage) === page ? 'z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}>
                        {page}
                    </Link>
                </li>
            ))}
            
            {currentPage<10 && 
            <li>
                <Link to={`/?page=${Number(currentPage)+1}`} className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </Link>
            </li>
            }
        </ul>
    </nav>
  )
}

export default Pagination