import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function App() {
  const [isHoveringGoogle, setIsHoveringGoogle] = useState(false);
  const navigate = useNavigate();

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Signed in as:", user.displayName);

        // ✅ Ensure route is lowercase (matches your Route in main.jsx)
        navigate('/info');
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-white px-4">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo and Brand Name */}
        <div className="text-center">
          <img
            src="/logo.jpeg" // Replace with actual logo path
            alt="WayIn Logo"
            className="w-80 h-80 mx-auto mb-2"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0071CE]">WayIn</h1>
          <p className="text-xs sm:text-sm text-[#FFB400] mt-1 tracking-wide">
            Don't Ask. Just Find.
          </p>
        </div>

        {/* Google Login Button */}
        <button
          onMouseEnter={() => setIsHoveringGoogle(true)}
          onMouseLeave={() => setIsHoveringGoogle(false)}
          onClick={handleGoogle}
          className="w-64 h-12 flex items-center justify-center border border-[#0071CE] rounded-md bg-[#0071CE] text-white font-semibold hover:shadow transition"
          style={{
            transform: isHoveringGoogle ? "translateY(-2px)" : "translateY(0)",
            boxShadow: isHoveringGoogle
              ? "0 6px 12px rgba(0,113,206,0.2)"
              : "0 2px 4px rgba(0,113,206,0.1)",
          }}
        >
          <span className="mr-2 text-xl text-white">G</span>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default App;
