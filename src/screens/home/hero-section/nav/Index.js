import { React, Fragment } from 'react'
import '../../../../App.css'
import { Popover } from '@headlessui/react'
import {
    UsersIcon,
    SpeakerphoneIcon,
} from '@heroicons/react/outline'
import Fun from '../../../../img/NASA.gif'


export default function Example() {
    return (
        <Popover className="relative z-10 " style={{ backgroundColor: '#ffec06' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 ">
                        <a href="#" className="flex space-x-4">
                            <img
                                className="w-20 h-20 ml-0 -mr-8"
                                src={Fun}
                                alt=""
                            />
                            <span className="text-4xl text-indigo-600 font-extrabold p-5">Funhut</span>
                        </a>
                    </div>

                    <a href="#" className="text-xl font-medium text-gray-500 hover:text-gray-900 flex space-x-4 ">
                        <SpeakerphoneIcon
                            className="w-10 h-8 ml-2 -mr-4 text-violet-200 hover:text-violet-100"
                        />
                        <p className="text-gray-600">About</p>

                    </a>
                    <a href="#" className="text-xl font-medium text-gray-500 hover:text-gray-900 inline-block flex space-x-4">
                        <UsersIcon
                            className="w-10 h-8 ml-2 -mr-4 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                        <p className="text-gray-600">Contact</p>

                    </a>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a
                            href="#"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium bg-white hover:bg-black hover:text-white"
                        >
                            Open for Contribute
                        </a>
                    </div>
                </div>
            </div>
        </Popover>
    )
}