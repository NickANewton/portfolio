import { Outlet } from "@tanstack/react-router";
import { BuildingBlock } from "../Components/Block";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Layout() {
  const blockArray = [
    { color: "bg-red-500", connector: [1, 1, 1, 1], text: "About" },
    { color: "bg-amber-500", connector: [1, 1, 1, 1], text: "Projects" },
    { color: "bg-cyan-700", connector: [1, 1, 1, 1], text: "Contact" },
  ];

  const [theme, setTheme] = useState<"dark" | "light">("light");

  return (
    <div className={twMerge("h-[100vh] w-[100vw] flex flex-col", theme)}>
      <header
        className={twMerge(
          "h-28 font-mono flex justify-between w-full px-6 gap-20 items-center bg-header-primary text-header-secondary"
        )}
      >
        <div className="flex gap-20 items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">NICK NEWTON</h1>
            <h2 className="text-xl orbitron-sub">Full Stack Web Dev</h2>
          </div>
          <div className="flex gap-20 items-center pt-2">
            {blockArray.map((block) => (
              <button>
                <BuildingBlock
                  color={block.color}
                  connector={block.connector}
                  text={block.text}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <SunIcon className="h-10 w-10 stroke-white" />
            ) : (
              <MoonIcon className="h-8 w-8 stroke-white" />
            )}
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
