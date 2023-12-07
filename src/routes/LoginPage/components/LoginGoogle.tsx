import { Icons } from "@/components/Icons";
import { auth } from "@/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const LoginGoogle = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleOnClickPopUp = async () => {
    try {
      await signInWithPopup(auth, provider);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={handleOnClickPopUp}
      className="flex items-center justify-center gap-2 bg-red-600/80 hover:bg-red-600 transition-all cursor-pointer py-2 px-4 w-full max-w-[18rem] rounded-lg text-lg"
    >
      <Icons.Google />
      <p className="text-center">Login with Google</p>
    </div>
  );
};
