import React from 'react'

export default function loading() {
  return (
    <div>
         <div>
      <main className="mt-15 min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto bg-content1 rounded-2xl shadow-xl overflow-hidden border border-divider">

          {/* IMAGE */}
          <div className="w-full h-64 sm:h-80 bg-gray-200 animate-pulse" />

          {/* CONTENT */}
          <div className="p-6 sm:p-8 space-y-6">

            {/* CATEGORY */}
            <div className="w-24 h-6 rounded-full bg-gray-200 animate-pulse" />

            {/* TITLE */}
            <div className="space-y-3">
              <div className="h-10 w-3/4 rounded bg-gray-200 animate-pulse" />
              <div className="h-5 w-full rounded bg-gray-200 animate-pulse" />
              <div className="h-5 w-5/6 rounded bg-gray-200 animate-pulse" />
            </div>

            {/* AUTHOR */}
            <div className="flex items-center gap-3 bg-content2 p-3 rounded-xl w-fit border border-divider">
              
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />

              <div className="space-y-2">
                <div className="h-4 w-24 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-32 rounded bg-gray-200 animate-pulse" />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="space-y-3 border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg">
              <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
              <div className="h-4 w-4/6 rounded bg-gray-200 animate-pulse" />
            </div>

            {/* TAG */}
            <div className="flex gap-2">
              <div className="h-8 w-20 rounded-md bg-gray-200 animate-pulse" />
              <div className="h-8 w-24 rounded-md bg-gray-200 animate-pulse" />
            </div>

            {/* DIVIDER */}
            <hr className="border-divider my-6" />

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-content2 p-5 rounded-xl border border-divider">

              <div className="space-y-2">
                <div className="h-3 w-28 rounded bg-gray-200 animate-pulse" />
                <div className="h-5 w-40 rounded bg-gray-200 animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="h-3 w-28 rounded bg-gray-200 animate-pulse" />
                <div className="h-6 w-24 rounded bg-gray-200 animate-pulse" />
              </div>

            </div>

            {/* PROBLEM */}
            <div className="space-y-3">
              <div className="h-4 w-40 rounded bg-gray-200 animate-pulse" />

              <div className="space-y-2 bg-gray-100 p-4 rounded-xl">
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
              </div>
            </div>

            {/* SOLUTION */}
            <div className="space-y-3">
              <div className="h-4 w-40 rounded bg-gray-200 animate-pulse" />

              <div className="space-y-2 bg-gray-100 p-4 rounded-xl">
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-4/6 rounded bg-gray-200 animate-pulse" />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* COMMENT BOX */}
      <div className="max-w-xl mx-auto mt-6 space-y-4">

        {/* COMMENT INPUT */}
        <div className="border rounded-2xl p-4 shadow-md">
          <div className="h-10 w-full rounded bg-gray-200 animate-pulse" />
        </div>

        {/* COMMENT LIST */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border p-4 shadow-md bg-background"
          >
            <div className="flex gap-3">

              {/* AVATAR */}
              <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />

              {/* CONTENT */}
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 rounded bg-gray-200 animate-pulse" />
                <div className="h-3 w-24 rounded bg-gray-200 animate-pulse" />

                <div className="pt-2 space-y-2">
                  <div className="h-4 w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-4 w-5/6 rounded bg-gray-200 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
