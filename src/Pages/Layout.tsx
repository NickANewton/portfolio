import { Outlet } from "@tanstack/react-router";

export default function Layout() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col">
      <header className="h-28 bg-blue-500">App Header here</header>
      <Outlet />
    </div>
  );
}
