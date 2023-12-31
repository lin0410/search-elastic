
import Image from 'next/image'
import Link from 'next/link'


import { faker } from '@faker-js/faker';

type User ={
  avatar:string, 
  username:string
}




export default function Home() {

  function createRandomUser(): User{
    return {
      avatar: faker.image.avatar(), 
      username: faker.internet.userName()
    }
  }
  const USERS: User[] = faker.helpers.multiple(createRandomUser,{
    count:100
  })

  return (
    <main className="h-screen flex justify-center items-center content-center flex-col gap-y-1">
  
      {/* Dropdown menu */}
      <div id="dropdownSearch" className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">
        <div className="p-3">
          <label htmlFor="input-group-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="input-group-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user" />
          </div>
        </div>
        <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
          { USERS.map((USER,index) =>(
          <li key={index}>
            <div className="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
              <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <Image className="w-6 h-6 me-2 rounded-full" src={USER.avatar} alt="Jese image" width={24} height={24} />
                {USER.username}
              </Link>
            </div>
          </li>
          )
          )}
          {/* ... (Repeat the pattern for other list items) ... */}
        </ul>
        <Link className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline" href={''}>
          <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z" />
          </svg>
          Delete users 
        </Link>
      </div>
    </main>
  )
}
