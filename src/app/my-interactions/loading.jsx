import React from 'react'

export default function loading() {
  return (
    <div>
        <div className="mt-18 space-y-4">

      {/* TITLE */}
      <div className="px-6 space-y-3">
        <div className="h-6 w-48 rounded bg-gray-200 animate-pulse" />
      </div>

      <hr className="mx-6" />

      {/* LIST SKELETON */}
      <div className="space-y-4 px-4">

        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex gap-3 p-4 rounded-xl border bg-background"
          >
            {/* AVATAR */}
            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />

            {/* CONTENT */}
            <div className="flex-1 space-y-3">

              {/* NAME + TIME */}
              <div className="space-y-2">
                <div className="h-4 w-32 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-24 rounded bg-gray-200 animate-pulse" />
              </div>

              {/* TEXT */}
              <div className="space-y-2 pt-1">
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 pt-2">
                <div className="h-4 w-16 rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-16 rounded bg-gray-200 animate-pulse" />
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
    </div>
  )
}
