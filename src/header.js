import * as React from "react";

import { Fragment } from "react";
import {
  ShieldCheckIcon,
  CameraIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  return (
    <div className="bg-gray-100 lg:flex lg:items-center lg:justify-between">
      <div className="mt-20 min-w-0 flex-1">
        <h2 className="mx-3 mt-20 text-2xl font-bold leading-7 text-black sm:text-3xl ">
          Transform an Unwalkable SF Street Instantly 🪄
        </h2>

        <p className="mt-3 mx-3 text-black">
          This is a tool urban planners can use to identify the exact street
          venues where areas are{" "}
          <span class="underline text-indigo-600"> least walkable</span> for
          pedestrians, gain direct suggestions on how to pedestrianize the
          space, and generate what a walkable version looks like!
        </p>
        <div className="mt-10 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mx-3 mt-2 flex items-center text-sm text-gray-500">
            <ShieldCheckIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-600"
              aria-hidden="true"
            />
            Super-duper accurate location data
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <ShieldCheckIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-600"
              aria-hidden="true"
            />
            See what huge urban fixes would look like instantly.
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <ShieldCheckIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-indigo-600"
              aria-hidden="true"
            />
            Make SF more walkable!
          </div>
        </div>
        <p className="mt-4 mx-3">
          1. Start by clicking any marker on the map. Each heat map represents
          high foot traffic areas. 👣{" "}
        </p>
        <p className="mx-3">
          2. See what the street looks like IRL using Google Maps street view. 🗺
        </p>
        <p className="mx-3">3. Generate location-specific fixes. 🫡 </p>
        <p className="mx-3">
          4. See what the location would look like instantly if it was improved.
          🚶🏻‍♀️{" "}
        </p>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className=" hidden sm:block"></span>

        <span className="sm:ml-3"></span>

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            More
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
