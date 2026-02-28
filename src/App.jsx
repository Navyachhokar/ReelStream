import React, { useState, useEffect } from "react";
import './App.css'
import ReelCard from "./components/ReelCard";
import SkeletonCard from "./components/SkeletonCard";
import axios from "axios";

function App() {
  const [reels, setReels] = useState([]);
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(
          "https://api.pexels.com/videos/popular?per_page=5",
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
    <main className="h-screen w-full bg-black flex justify-center items-center overflow-hidden">
    
      <section className="h-[90vh] w-full max-w-87.5 bg-zinc-900 rounded-2xl overflow-hidden relative border border-zinc-800">
       
        <div className="all-reels h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar">
          {loading ? ([...Array(5)].map((_, i) => <SkeletonCard key={i} />))
          :(reels.map((reel) => (
           <ReelCard
             key={reel.id}
             id={reel.id}
             videoUrl={reel.video_files[0].link}
             username={reel.user.name}
             caption={reel.url}
           />    
          ))
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
