import React from 'react'

const SkeletonCard = () => {
  return (
    <div className="h-full w-full snap-start relative bg-zinc-900 shrink-0 flex flex-col justify-end p-4 animate-pulse">
      <div className="absolute right-4 bottom-10 flex flex-col items-center gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="h-8 w-8 bg-zinc-700 rounded-full"></div>
            <div className="h-2 w-5 bg-zinc-700 rounded"></div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 bg-zinc-700 rounded-full"></div>
        <div className="h-4 w-24 bg-zinc-700 rounded"></div>
        <div className="h-4 w-16 bg-zinc-700 rounded ml-2"></div>
      </div>
      <div className="h-3 w-3/4 bg-zinc-700 rounded mb-2"></div>
      <div className="h-3 w-1/2 bg-zinc-700 rounded"></div>
    </div>
  );
}

export default SkeletonCard
