import { Icons } from "@/components/Icons";
import { LinkItem } from "./Linkitem";
import { useNavigate } from "react-router-dom";

export const AccountDetailsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/settings/account");
  };

  return (
    <LinkItem.Body className="dark:hover:bg-stone-600 hover:bg-stone-200/70" onClick={handleClick}>
      <LinkItem.IconArea>
        <Icons.User className="w-full h-full" />
      </LinkItem.IconArea>
      <LinkItem.Label>Detalhes da conta</LinkItem.Label>
      <Icons.ChevronRight />
    </LinkItem.Body>
  );
};
