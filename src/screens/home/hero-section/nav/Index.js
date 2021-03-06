import { React } from 'react'
import '../../../../App.css'
import { Popover } from '@headlessui/react'
import {
    UsersIcon,
    SpeakerphoneIcon,
} from '@heroicons/react/outline'
import {
    Link,
    useLocation
} from "react-router-dom";


import '../../../../styles/header.css'
import '../../../../styles/font.css'


import Fun from '../../../../img/NASA.gif'


export default function Example() {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <Popover className="relative z-10 " style={{ backgroundColor: '#ffec06' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1 ">
                        <Link to="/" className="flex space-x-4">
                            <img
                                className="h-4 w-20 sm:h-20"
                                src={Fun}
                                alt=""
                            // style={{width: '20%', height: '80%'}}
                            />
                        </Link>
                    </div>

                    <a href="#" className="text-xl font-medium flex space-x-4 ">
                        <SpeakerphoneIcon
                            className="w-10 h-7 -mr-4 text-gray-700"
                        />
                        <Link to="/about" className={splitLocation[1] === "about" ? "active nav-font" : "nav-font text-gray-700"} >About</Link>

                    </a>
                    <a href="#" className="text-xl font-medium inline-block flex space-x-4">
                        <UsersIcon
                            className="w-10 h-7 ml-2 -mr-4 text-gray-700"
                            aria-hidden="true"
                        />
                        <Link to="/contact" className={splitLocation[1] === "contact" ? "active nav-font" : "nav-font text-gray-700"}>Contact</Link>

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