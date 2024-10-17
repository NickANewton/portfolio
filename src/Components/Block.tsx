import { twMerge } from "tailwind-merge";

type BlockProps = {
  color: string;
  connector: number[];
  text?: string;
};

export function BuildingBlock({ color, connector, text }: BlockProps) {
  //The connector array is the number of block teeth that are visible

  return (
    <div className={twMerge(`w-[150px] h-[45px] relative`, color)}>
      <div className="flex w-full items-center justify-center h-full">
        {text ? <p className="text-white text-xl font-mono">{text}</p> : null}
      </div>
      <div className="px-2 flex h-[10px] w-[150px] justify-between absolute -top-[10px] left-0">
        {connector.map((c) => (
          <div
            className={twMerge(
              `w-[20px] h-[10px] rounded-t-sm`,
              color,
              !c && "invisible"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
