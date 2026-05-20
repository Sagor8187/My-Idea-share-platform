import React from 'react'

export default function loading() {
  return (
    <div>
          <div className="mt-15 container mx-auto px-4 py-8">
      
      {/* SEARCH SKELETON */}
      <div className="flex gap-3 mb-6">
        <div className="h-11 w-full rounded-md bg-gray-200 animate-pulse" />
        <div className="h-11 w-40 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-11 w-28 rounded-md bg-gray-200 animate-pulse" />
      </div>

      {/* CARD SKELETON */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col bg-background rounded-md shadow-md overflow-hidden max-w-[400px] w-full"
          >
            
            {/* IMAGE */}
            <div className="h-48 w-full bg-gray-200 animate-pulse" />

            {/* CONTENT */}
            <div className="flex flex-col flex-grow p-5 gap-3">

              {/* CATEGORY */}
              <div className="w-20 h-6 rounded-full bg-gray-200 animate-pulse" />

              {/* TITLE */}
              <div className="space-y-2">
                <div className="h-6 w-3/4 rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
              </div>

              {/* USER INFO */}
              <div className="flex items-center gap-2 mt-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />

                <div className="flex flex-col gap-1">
                  <div className="h-3 w-20 rounded bg-gray-200 animate-pulse" />
                  <div className="h-3 w-28 rounded bg-gray-200 animate-pulse" />
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-2 h-10 w-full rounded-md bg-gray-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
