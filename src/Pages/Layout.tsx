import { Block, Outlet } from "@tanstack/react-router";
import { BuildingBlock } from "../Components/Block";

export default function Layout() {
  const blockArray = [
    { color: "bg-red-500", connector: [1, 1, 1, 1], text: "About" },
    { color: "bg-amber-500", connector: [1, 1, 1, 1], text: "Projects" },
    { color: "bg-cyan-700", connector: [1, 1, 1, 1], text: "Contact" },
  ];
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col">
      <header className="h-28 bg-[rgb(1,2,5)] text-white font-mono flex w-full px-6 gap-10 items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">NICK NEWTON</h1>
          <h2 className="text-xl orbitron-sub">Full Stack Web Dev</h2>
        </div>
        <div className="flex gap-8 items-center pt-2">
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
      </header>
      <Outlet />
    </div>
  );
}
