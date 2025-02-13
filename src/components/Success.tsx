import { useEffect, useState } from "react";

const Success: React.FC = () => {
    const accept = "/assets/cHbD-togepi-and-pikachu.gif";

    function getFormattedDate() {
        const now = new Date();
        const day = now.getDate();
        const suffix = ["th", "st", "nd", "rd"][(day % 10) > 3 || Math.floor(day % 100 / 10) === 1 ? 0 : day % 10];
        const month = now.toLocaleString("en-US", { month: "long" });
        const year = now.getFullYear();
        const time = now.toLocaleString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).toLowerCase();
    
        return `${day}${suffix} ${month} ${year} at ${time}`;
      }


    const messages = [
        "one Sec",
        "Before today, I had been struggling for three years without a job",
        " I learned the MERN stack two years ago, but due to depression, I couldn't focus on my goals.",
        " Randomly I Seeing your portfolio project motivated me, and now I have started coding again with a positive mindset.",
        "THANKS ⸝❤️",
        "Actually, I completed this project in 4 hours.",
        "I sent a link to you on Instagram on February 10th at 10:33 PM, but you didn't see it.",
        "I think you don't use Instagram much, just like me. My goal is for you to see this project.",
        "How???",
        "Okay, in her next video, I will be the first to comment with this project and GitHub link.",
        "Waiting... to see your response ⸝❤️",
        `Finally, ${getFormattedDate()}`,
        "Please accept my friend request on Instagram.",
      ];

      const [visibleCount, setVisibleCount] = useState(0);

      useEffect(() => {
        if (visibleCount < messages.length) {
          const timer = setTimeout(() => {
            setVisibleCount(visibleCount + 1);
          }, 1800); // Display a new div every second
          return () => clearTimeout(timer);
        }
    }, [visibleCount]);

    
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-red-200 p-4">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center">
          {/* Image Container */}
          <div className="w-full h-auto">
            <img src={accept} alt="pikachu" className="w-full h-auto object-cover rounded-lg" />
          </div>
  
          {/* Text Message */}
          <div className="mt-6 text-lg sm:text-xl font-semibold text-gray-900 px-4">
            Thanks for being my Valentine! ⸜(｡˃ ᵕ ˂ )⸝❤️
          </div>
          
 <div className="p-4">
      {messages.slice(0, visibleCount).map((msg, index) => (
        <div key={index} className="mt-6 text-lg sm:text-xl font-semibold text-gray-900 px-4">
          {msg}
        </div>
      ))}
    </div>
          
        </div>
      </div>
    );
  };
  
  export default Success;
  