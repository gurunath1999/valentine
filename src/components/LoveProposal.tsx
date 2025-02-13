import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoveProposal: React.FC = () => {
  const navigate = useNavigate();
  const lovePropose = "/assets/UF8j-togepi-love.gif";
  const dontAccept: string[] = [
    "/assets/x-VI-togepi-sad-1.gif",
    "/assets/6Iw--togepi-sad-2.gif",
    "/assets/aWFc-togepi-crying.gif",
  ];

  const buttonMessages = [
    "NO",
    "Are you sure??",
    "Pookie PLEASE",
    "You can't do this to me!",
  ];

  const [imgURL, setImgURL] = useState(lovePropose);
  const [count, setCount] = useState(0);
  const [yesSize, setYesSize] = useState(1); // YES button grows
  const [noSize, setNoSize] = useState(1); // NO button shrinks

  const HandleYesButton = () => {
    navigate("/success");
  };

  const HandleNoButton = () => {
    setCount(count + 1);

    // Increase YES button size and decrease NO button size
    if (count < 8) {
      setYesSize(yesSize + 0.05);
      setNoSize(Math.max(0.6, noSize - 0.05)); // Prevents shrinking too much
    }

    if (count > 8) {
      setImgURL(dontAccept[2]);
    } else if (count % 2 === 0) {
      setImgURL(dontAccept[0]);
    } else {
      setImgURL(dontAccept[1]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-red-200 flex flex-col justify-center items-center p-4">
      <div className="text-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {/* Image */}
        <div className="w-full h-auto">
          <img src={imgURL} alt="Togepi Reaction" className="w-full h-auto object-cover mx-auto rounded-lg" />
        </div>

        {/* Question */}
        <div className="mt-6 text-xl sm:text-2xl font-semibold text-[#130505]">
          Will you be my Valentine? (˶ᵔ ᵕ ᵔ˶)❤️
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
          {/* YES Button - Grows */}
          <button
            onClick={HandleYesButton}
            className="bg-green-700 text-white rounded-md font-bold transition-transform duration-300"
            style={{
              transform: `scale(${yesSize})`,
              width: `${100 * yesSize}px`,
              height: `${50 * yesSize}px`,
            }}
          >
            YES
          </button>

          {/* NO Button - Shrinks */}
          <button
            onClick={HandleNoButton}
            className="bg-red-500 text-white rounded-md font-bold transition-transform duration-300"
            style={{
              transform: `scale(${noSize})`,
              width: `${100 * noSize}px`,
              height: `${50 * noSize}px`,
              fontSize: `${Math.max(12, 16 * noSize)}px`, // Prevents text from being too small
            }}
          >
            {count === 0
              ? buttonMessages[0]
              : count > 8
              ? buttonMessages[3]
              : count % 2 === 1
              ? buttonMessages[1]
              : buttonMessages[2]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveProposal;
