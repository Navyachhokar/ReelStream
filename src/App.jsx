import React, { useState, useEffect, useRef } from "react";
import './App.css'
import ReelCard from "./components/ReelCard";
import SkeletonCard from "./components/SkeletonCard";
import axios from "axios";

function App() {
  const [reels, setReels] = useState([]);
  const[loading, setLoading] = useState(true);
  const[currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([],{
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }));

  useEffect(() => {
    const timer = setInterval(()=> {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    },60000);

    return() =>clearInterval(timer);
  },[]);

  const containerRef = useRef(null);

  const scrollToTop = () => {
    if(containerRef.current){
      containerRef.current.style.scrollSnapType = 'none';
      containerRef.current.scrollTo({
        top:0,
        behaviour: 'smoooth'
      });

      setTimeout(() => {
        if(containerRef.current) {
          containerRef.current.style.scrollSnapType = 'y mandatory';
        }
      },800);
    }
  };

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/videos/popular?per_page=10",
          {
            headers: {
              Authorization: import.meta.env.VITE_PEXELS_API_KEY,
            },
          },
        );
        setReels(response.data.videos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally{
        setLoading(false);
      }
    };

    getVideos();
  }, []);

  return (
    <main className="h-screen w-full bg-black flex justify-center items-center px-8 py-4">
      <section className="aspect-9/16 mx-auto h-full  max-h-175 max-w-190 bg-zinc-900 rounded-2xl overflow-hidden relative border border-zinc-800">
        <div
          onClick={scrollToTop}
          className="absolute flex top-0 left-0 w-full h-8 z-60 cursor-pointer justify-between px-6 pt-3 text-white text-[15px] font-medium items-center hover:bg-white/5 transition-colors"
          title="Back to top"
        >
          <span>{currentTime}</span>
          <div className="flex  gap-1.5 items-center">
            <i className="ri-signal-tower-fill"></i>
            <i className="ri-wifi-line"></i>
            <i className="ri-battery-fill"></i>
          </div>
        </div>

        <div
          ref={containerRef}
          className="all-reels h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar"
        >
          {loading
            ? [...Array(5)].map((_, i) => <SkeletonCard key={i} />)
            : reels.map((reel) => (
                <ReelCard
                  key={reel.id}
                  id={reel.id}
                  videoUrl={reel.video_files[0].link}
                  username={reel.user.name}
                  caption={reel.url}
                />
              ))}
        </div>
      </section>
    </main>
  );
}

export default App;
