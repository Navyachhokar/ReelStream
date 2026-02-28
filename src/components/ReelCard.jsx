import React, {useState} from 'react'

const ReelCard = ({id, videoUrl, username, caption}) => {
    const[isLiked, setIsLiked] = useState(() => JSON.parse(localStorage.getItem(`liked_${id}`)) || false);
    const[isSaved, setIsSaved] = useState(()=> JSON.parse(localStorage.getItem(`saved_${id}`))||false);
    const[isFollowed, setIsFollowed] = useState(false);
    const[isStory, setIsStory] = useState(false);

    const[likeCount, setLikeCount] = useState(() => {const saved = localStorage.getItem(`count_${id}`);
    return saved ? parseInt(saved) : Math.floor(Math.random()*5000);
    });
    const[saveCount, setSaveCount] = useState(()=>{
        const saved = localStorage.getItem(`save_count${id}`);
        return saved?parseInt(saved):Math.floor(Math.random()*1000);
    })
    const[commentCount, setCommentCount] = useState(()=>{
        const saved = localStorage.getItem(`comment_count${id}`);
        if(saved) return parseInt(saved);
        const randomCount = Math.floor(Math.random()*2000);
        localStorage.setItem(`comment_count${id}`, randomCount);
        setCommentCount(randomCount);
    })
    const[shareCount, setShareCount] = useState(()=> {
        const saved = localStorage.getItem(`share_count${id}`);
        if(saved) return parseInt(saved);
        const randomShareCount = Math.floor(Math.random()*1000)
        localStorage.setItem(`share_count${id}`, randomShareCount);
        setShareCount(randomShareCount);
    })

    const handleLike = () => {
        let newCount = likeCount;
        let newLikedState = !isLiked;
        newLikedState? newCount = likeCount + 1: newCount = likeCount - 1;
        setLikeCount(newCount);
        setIsLiked(newLikedState);
        localStorage.setItem(`liked_${id}`, JSON.stringify(newLikedState));
        localStorage.setItem(`count_${id}`, newCount);
    }
    const handleSave = () => {
        let nextSavedState = !isSaved;
        let nextSaveCount = nextSavedState ? saveCount+ 1 : saveCount - 1 ;

        setIsSaved(nextSavedState);
        setSaveCount(nextSaveCount);

        localStorage.setItem(`saved${id}`, JSON.stringify(nextSavedState));
        localStorage.setItem(`save_count${id}`, nextSaveCount);
    }

    const handleComment = () => {
        alert("Comments feature coming soon!");
    };

    const handleShare = () => {
      navigator
        .share({
          title: "Check out this Reel!",
          url: videoUrl,
        })
        .catch(() => alert("Sharing not supported on this browser"));
    };
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
          onClick={handleLike}
        >
          <i
            className={`${isLiked ? "ri-heart-fill text-red-500" : "ri-heart-line text-white "} text-3xl`}
          ></i>
          <span className="text-xs text-white mt-1">{likeCount}</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleComment}
        >
          <i className="ri-chat-3-line text-white text-3xl"></i>
          <span className="text-xs text-white mt-1">{commentCount}</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleShare}
        >
          <i className="ri-send-plane-fill text-white text-3xl"></i>
          <span className="text-xs text-white mt-1">{shareCount}</span>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleSave}
        >
          <i
            className={`${isSaved ? "ri-bookmark-fill" : "ri-bookmark-line "} text-white text-3xl`}
          ></i>
          <span className="text-xs text-white mt-1">{saveCount}</span>
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
            <div
              className={`h-full w-full rounded-full ${isStory ? "border-2 border-black" : "border-none"} overflow-hidden`}
            >
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
            ${isFollowed ? "bg-white text-black" : "bg-transparent text-white"}`}
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
