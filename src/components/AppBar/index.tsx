import { NavLink } from "react-router-dom";
import { Icons } from "../Icons";

const navItems = [
  {
    name: "Inicio",
    to: "/",
    icon: Icons.House,
  },
  {
    name: "Favoritos",
    to: "/search-book",
    icon: Icons.Search,
  },
  {
    name: "Configurações",
    to: "/settings",
    icon: Icons.Gear,
  },
];

export const AppBar = () => {
  return (
    <nav className="flex justify-center z-[999] fixed bottom-0 w-full">
      <ul className="flex items-center justify-around w-full max-w-[25rem] h-16 rounded-t-3xl bg-sky-700 shadow-md shadow-gray-400 dark:shadow-gray-800 overflow-hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            id="appbar"
            className="flex items-center justify-center hover:bg-sky-200 group cursor-pointer w-full h-full"
            to={item.to}
          >
            <li className="">
              <item.icon className="text-white group-hover:text-sky-700" />
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
