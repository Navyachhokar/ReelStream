import React, {useState} from 'react'

const ReelCard = ({videoUrl, username, caption}) => {
    const[isLiked, setIsLiked] = useState(false);
    const[isSaved, setIsSaved] = useState(false);
    const[isFollowed, setIsFollowed] = useState(false);
    const[isStory, setIsStory] = useState(false);
  return (
    <div className="reel h-full w-full snap-start relative bg-black shrink-0">
      <video
        src={videoUrl}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute right-4 bottom-10 flex flex-col items-center gap-6 z-10">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setIsLiked(!isLiked)}
        >
          <i
            className={`${isLiked ? "ri-heart-fill " : "ri-heart-line text-white "} text-3xl`}
          ></i>
          <span className="text-xs text-white mt-1">1200</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <i className="ri-chat-3-line text-white text-3xl"></i>
          <span className="text-xs text-white mt-1">450</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <i className="ri-send-plane-fill text-white text-3xl"></i>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setIsSaved(!isSaved)}
        >
          <i
            className={`${isSaved ? "ri-bookmark-fill" : "ri-bookmark-line "} text-white text-3xl`}
          ></i>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <i className="ri-more-2-fill text-white text-3xl"></i>
        </div>
      </div>
      <div className="absolute bottom-6 left-4 right-12 text-white z-10">
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`h-8 w-8 rounded-full 
            ${isFollowed ? "bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600" : "bg-transparent"} p-0.5`}
          >
            <div className={`h-full w-full rounded-full ${isStory ? "border-2 border-black" : "border-none"} overflow-hidden`}>
              <img
                src={`https://ui-avatars.com/api/?name=${username}`}
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h4 className="font-bold text-sm">
            @{username.replace(/\s+/g, "").toLowerCase()}
          </h4>
          <button
            className={`border border-white text-[10px] px-2 py-0.5 rounded ml-2 transition-all 
            ${isFollowed ? "bg-white text-black" :     "bg-transparent text-white"}`}
            onClick={() => {
              setIsFollowed(!isFollowed);
              setIsStory(!isStory);
            }}
          >
            {isFollowed ? "Following" : "Follow"}
          </button>
        </div>
        <p className="text-xs line-clamp-2">
          {caption || "Exploring the world of React and Axios! 🚀"}
        </p>
      </div>
    </div>
  );
}

export default ReelCard
