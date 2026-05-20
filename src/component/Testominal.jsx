import React from 'react'

export default function Testominal() {
  return (
    <div className='mx-5'>
        <h1 className='text-center font-bold text-xl my-5'>Review Section</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* Card 1 */}
  <div className="bg-content1 border border-default-200 rounded-2xl p-6 shadow-sm">
    
    <div className="flex items-center gap-4 mb-4">
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="user"
        className="w-14 h-14 rounded-full object-cover"
      />

      <div>
        <h3 className="font-semibold text-foreground">
          Sarah Johnson
        </h3>

        <p className="text-sm text-default-500">
          Startup Founder
        </p>
      </div>
    </div>

    <p className="text-default-600 leading-relaxed">
      “This platform helped me share my startup idea and receive
      amazing feedback from developers and investors.”
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-content1 border border-default-200 rounded-2xl p-6 shadow-sm">
    
    <div className="flex items-center gap-4 mb-4">
      <img
        src="https://i.pravatar.cc/150?img=32"
        alt="user"
        className="w-14 h-14 rounded-full object-cover"
      />

      <div>
        <h3 className="font-semibold text-foreground">
          Michael Lee
        </h3>

        <p className="text-sm text-default-500">
          AI Engineer
        </p>
      </div>
    </div>

    <p className="text-default-600 leading-relaxed">
      “A very clean and professional platform for discovering
      innovative ideas and connecting with talented people.”
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-content1 border border-default-200 rounded-2xl p-6 shadow-sm">
    
    <div className="flex items-center gap-4 mb-4">
      <img
        src="https://i.pravatar.cc/150?img=45"
        alt="user"
        className="w-14 h-14 rounded-full object-cover"
      />

      <div>
        <h3 className="font-semibold text-foreground">
          Emma Watson
        </h3>

        <p className="text-sm text-default-500">
          Product Designer
        </p>
      </div>
    </div>

    <p className="text-default-600 leading-relaxed">
      “I love the user experience and dark mode support.
      Everything feels modern, smooth, and easy to use.”
    </p>
  </div>

</div>
    </div>
  )
}
