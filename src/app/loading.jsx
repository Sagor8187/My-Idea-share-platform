import React from 'react'

export default function loading() {
  return (
    <div>
          <div className="mt-15 relative overflow-hidden py-5 w-full mx-auto">

      {/* CAROUSEL FRAME */}
      <div className="overflow-hidden rounded-xl">

        <div className="flex">

          {/* SINGLE SLIDE SKELETON */}
          <div className="min-w-full relative">

            {/* IMAGE SKELETON */}
            <div className="w-full h-[400px] bg-gray-200 animate-pulse" />

            {/* OVERLAY TEXT SKELETON */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 space-y-4">

              {/* TITLE */}
              <div className="h-8 w-2/3 bg-gray-300 rounded animate-pulse" />

              {/* SUBTITLE */}
              <div className="h-5 w-3/4 bg-gray-300 rounded animate-pulse" />

              {/* BUTTON */}
              <div className="h-10 w-40 bg-gray-300 rounded-full animate-pulse" />

            </div>

          </div>

        </div>
      </div>

      {/* NAV BUTTONS SKELETON */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse" />
      </div>

    </div>
    </div>
  )
}
