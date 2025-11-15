type Variant = "brightGreen" | "lightGreen" | "darkGray" | "white" | "skyBlue" | "red" | "yellow" | "orange" | "purple" | "blue" | "gray" | "lightGray" | "softGray" | "offWhite" | "green" | "brown" | "brightOrange" | "gold" | "lightYellow" | "pink";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: Variant;
  className?: string;
};

export default function DuoButton({ children, onClick, disabled = false, variant = "brightGreen", className = "" }: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium transition shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<Variant, string> = {
    brightGreen: "bg-[#58CC02] text-white hover:bg-[#4db301]",
    lightGreen: "bg-[#89E219] text-white hover:bg-[#7bcF19]",
    darkGray: "bg-[#4B4B4B] text-white hover:bg-[#3c3c3c]",
    white: "bg-white text-[#4B4B4B] hover:bg-[#F7F7F7]",

    skyBlue: "bg-[#1CB0F6] text-white hover:bg-[#17a3e4]",
    red: "bg-[#FF4B4B] text-white hover:bg-[#e64343]",
    yellow: "bg-[#FFC800] text-black hover:bg-[#e6b400]",
    orange: "bg-[#FF9600] text-black hover:bg-[#e68700]",
    purple: "bg-[#CE82FF] text-white hover:bg-[#b573e4]",
    blue: "bg-[#2B70C9] text-white hover:bg-[#2460ad]",

    gray: "bg-[#777777] text-white hover:bg-[#6a6a6a]",
    lightGray: "bg-[#AFAFAF] text-black hover:bg-[#9d9d9d]",
    softGray: "bg-[#E5E5E5] text-black hover:bg-[#d8d8d8]",
    offWhite: "bg-[#F7F7F7] text-black hover:bg-[#ebebeb]",

    green: "bg-[#43C000] text-white hover:bg-[#3ab000]",
    brown: "bg-[#B66E28] text-white hover:bg-[#a26224]",
    brightOrange: "bg-[#F49000] text-white hover:bg-[#db8200]",
    gold: "bg-[#FFC200] text-black hover:bg-[#e6ae00]",
    lightYellow: "bg-[#FFDE00] text-black hover:bg-[#ebcd00]",
    pink: "bg-[#FFCAFF] text-black hover:bg-[#e6b6e6]",
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
