type Variant = "brightGreen" | "lightGreen" | "darkGray" | "white" | "skyBlue" | "red" | "yellow" | "orange" | "purple" | "blue" | "gray" | "lightGray" | "softGray" | "offWhite" | "green" | "brown" | "brightOrange" | "gold" | "lightYellow" | "pink";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
};

export default function DuoButton({ children, onClick, disabled = false, variant = "brightGreen", className = "", style }: ButtonProps) {
  const base = "px-4 py-3 rounded-[16px] font-medium transition-all inline-flex justify-center items-center " + "border-2 border-b-6 active:border-b-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<Variant, { bg: string; hoverBg: string; border: string; hoverBorder: string; disabledBg?: string; disabledBorder?: string; text: string }> = {
    brightGreen: {
      bg: "#58CC02",
      hoverBg: "#4db301",
      border: "#46A901",
      hoverBorder: "#46A901",
      text: "white",
    },
    lightGreen: {
      bg: "#89E219",
      hoverBg: "#7bcF19",
      border: "#70C414",
      hoverBorder: "#70C414",
      text: "white",
    },
    darkGray: {
      bg: "#4B4B4B",
      hoverBg: "#3c3c3c",
      border: "#3a3a3a",
      hoverBorder: "#3a3a3a",
      text: "white",
    },
    white: {
      bg: "#FFFFFF",
      hoverBg: "#F7F7F7",
      border: "#CCCCCC",
      hoverBorder: "#CCCCCC",
      text: "#4B4B4B",
    },
    skyBlue: {
      bg: "#1CB0F6",
      hoverBg: "#17a3e4",
      border: "#1698D6",
      hoverBorder: "#1698D6",
      disabledBg: "#37464f",
      disabledBorder: "#2E3B45",
      text: "white",
    },
    red: {
      bg: "#FF4B4B",
      hoverBg: "#e64343",
      border: "#CC3C3C",
      hoverBorder: "#CC3C3C",
      text: "white",
    },
    yellow: {
      bg: "#FFC800",
      hoverBg: "#e6b400",
      border: "#CCAC00",
      hoverBorder: "#CCAC00",
      text: "black",
    },
    orange: {
      bg: "#FF9600",
      hoverBg: "#e68700",
      border: "#CC7A00",
      hoverBorder: "#CC7A00",
      text: "black",
    },
    purple: {
      bg: "#CE82FF",
      hoverBg: "#b573e4",
      border: "#A76FCC",
      hoverBorder: "#A76FCC",
      text: "white",
    },
    blue: {
      bg: "#2B70C9",
      hoverBg: "#2460ad",
      border: "#235FA3",
      hoverBorder: "#235FA3",
      text: "white",
    },
    gray: {
      bg: "#777777",
      hoverBg: "#6a6a6a",
      border: "#606060",
      hoverBorder: "#606060",
      text: "white",
    },
    lightGray: {
      bg: "#AFAFAF",
      hoverBg: "#9d9d9d",
      border: "#8C8C8C",
      hoverBorder: "#8C8C8C",
      text: "black",
    },
    softGray: {
      bg: "#E5E5E5",
      hoverBg: "#d8d8d8",
      border: "#BEBEBE",
      hoverBorder: "#BEBEBE",
      text: "black",
    },
    offWhite: {
      bg: "#F7F7F7",
      hoverBg: "#ebebeb",
      border: "#D8D8D8",
      hoverBorder: "#D8D8D8",
      text: "black",
    },
    green: {
      bg: "#43C000",
      hoverBg: "#3ab000",
      border: "#359A00",
      hoverBorder: "#359A00",
      text: "white",
    },
    brown: {
      bg: "#B66E28",
      hoverBg: "#a26224",
      border: "#955822",
      hoverBorder: "#955822",
      text: "white",
    },
    brightOrange: {
      bg: "#F49000",
      hoverBg: "#db8200",
      border: "#C77600",
      hoverBorder: "#C77600",
      text: "white",
    },
    gold: {
      bg: "#FFC200",
      hoverBg: "#e6ae00",
      border: "#CC9F00",
      hoverBorder: "#CC9F00",
      text: "black",
    },
    lightYellow: {
      bg: "#FFDE00",
      hoverBg: "#ebcd00",
      border: "#CCB900",
      hoverBorder: "#CCB900",
      text: "black",
    },
    pink: {
      bg: "#FFCAFF",
      hoverBg: "#e6b6e6",
      border: "#CC9BCC",
      hoverBorder: "#CC9BCC",
      text: "black",
    },
  };

  const colors = variants[variant];
  const bgColor = disabled && colors.disabledBg ? colors.disabledBg : colors.bg;
  const borderColor = disabled && colors.disabledBorder ? colors.disabledBorder : colors.border;
  const textColor = colors.text;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={base}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        color: textColor,
        ...style,
      }}>
      {children}
    </button>
  );
}
