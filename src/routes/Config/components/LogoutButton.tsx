import { Icons } from "@/components/Icons";
import { LinkItem } from "./Linkitem";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    try {
      await signOut(auth);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinkItem.Body
      onClick={handleClickLogout}
      className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
    >
      <LinkItem.IconArea>
        <Icons.Logout className="w-full h-full" />
      </LinkItem.IconArea>
      <LinkItem.Label>Logout</LinkItem.Label>
      <Icons.ChevronRight />
    </LinkItem.Body>
  );
};
