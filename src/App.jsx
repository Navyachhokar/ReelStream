import React, { useState, useEffect } from "react";
import './App.css'
import axios from "axios";

function App() {
  const [reels, setReels] = useState([]);

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
      }
    };

    getVideos();
  }, []);

  return (
    <main className="h-screen w-full bg-black flex justify-center items-center overflow-hidden">
      {/* 1. THE SECTION: This is your "Phone". It MUST have a fixed height and overflow-hidden */}
      <section className="h-[90vh] w-full max-w-[350px] bg-zinc-900 rounded-2xl overflow-hidden relative border border-zinc-800">
        {/* 2. THE FEED: This is the scrollable part. It must be h-full (100% of the phone) */}
        <div className="all-reels h-full w-full overflow-y-scroll snap-y snap-mandatory no-scrollbar">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="reel h-full w-full snap-start relative bg-black flex-shrink-0"
            >
              {/* 3. THE VIDEO: Must be h-full to fill the snap-start div */}
              <video
                src={reel.video_files[0].link}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Overlay */}
              <div className="absolute bottom-6 left-4 text-white z-10">
                <h4 className="font-bold text-sm">
                  @{reel.user.name.replace(/\s+/g, "").toLowerCase()}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
