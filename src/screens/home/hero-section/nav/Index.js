import { React, Fragment } from 'react'
import '../../../../App.css'
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    UsersIcon,
    PhoneIcon,
    PlayIcon,
    SpeakerphoneIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'


const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
        icon: SupportIcon,
    },
    {
        name: 'Guides',
        description: 'Learn how to maximize our platform to get the most out of it.',
        href: '#',
        icon: BookmarkAltIcon,
    },
    {
        name: 'Events',
        description: 'See what meet-ups and other events we might be planning near you.',
        href: '#',
        icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Popover className="relative z-10 " style={{ backgroundColor: '#ffec06' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#" className="flex space-x-4">
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                alt=""
                            />
                            <span className="text-3xl text-indigo-600 font-extrabold">Workflow</span>
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