export type Variant = "brightGreen" | "lightGreen" | "darkGray" | "white" | "skyBlue" | "red" | "yellow" | "orange" | "purple" | "blue" | "gray" | "lightGray" | "softGray" | "offWhite" | "green" | "brown" | "brightOrange" | "gold" | "lightYellow" | "pink";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: Variant;
  className?: string;
  style?: React.CSSProperties;
  isCorrect?: boolean;
};

export default function Button({ children, onClick, disabled = false, variant = "brightGreen", className = "", style }: ButtonProps) {
  const base = "px-4 py-3 rounded-[16px] font-medium transition-all inline-flex border-2 border-b-6 active:border-b-2 shadow-sm disabled:cursor-not-allowed disabled:text-white";

  const variants: Record<Variant, { bg: string; hoverBg: string; border: string; hoverBorder: string; disabledBg?: string; disabledBorder?: string; text: string }> = {
    brightGreen: {
      bg: "rgb(88, 204, 2)",
      hoverBg: "rgb(77, 179, 1)",
      border: "rgb(70, 169, 1)",
      hoverBorder: "rgb(70, 169, 1)",
      text: "white",
    },
    lightGreen: {
      bg: "rgb(137, 226, 25)",
      hoverBg: "rgb(123, 207, 25)",
      border: "rgb(112, 196, 20)",
      hoverBorder: "rgb(112, 196, 20)",
      text: "white",
    },
    darkGray: {
      bg: "rgb(75, 75, 75)",
      hoverBg: "rgb(60, 60, 60)",
      border: "rgb(58, 58, 58)",
      hoverBorder: "rgb(58, 58, 58)",
      text: "white",
    },
    white: {
      bg: "white",
      hoverBg: "rgb(247, 247, 247)",
      border: "rgb(204, 204, 204)",
      hoverBorder: "rgb(204, 204, 204)",
      text: "rgb(75, 75, 75)",
    },
    skyBlue: {
      bg: "rgb(28, 176, 246)",
      hoverBg: "rgb(23, 163, 228)",
      border: "rgb(22, 152, 214)",
      hoverBorder: "rgb(22, 152, 214)",
      disabledBg: "rgb(55, 70, 79)",
      disabledBorder: "rgb(46, 59, 69)",
      text: "white",
    },
    red: {
      bg: "rgb(255, 75, 75)",
      hoverBg: "rgb(230, 67, 67)",
      border: "rgb(204, 60, 60)",
      hoverBorder: "rgb(204, 60, 60)",
      text: "white",
    },
    yellow: {
      bg: "rgb(255, 200, 0)",
      hoverBg: "rgb(230, 180, 0)",
      border: "rgb(204, 172, 0)",
      hoverBorder: "rgb(204, 172, 0)",
      text: "black",
    },
    orange: {
      bg: "rgb(255, 150, 0)",
      hoverBg: "rgb(230, 135, 0)",
      border: "rgb(204, 122, 0)",
      hoverBorder: "rgb(204, 122, 0)",
      text: "black",
    },
    purple: {
      bg: "rgb(206, 130, 255)",
      hoverBg: "rgb(181, 115, 228)",
      border: "rgb(167, 111, 204)",
      hoverBorder: "rgb(167, 111, 204)",
      text: "white",
    },
    blue: {
      bg: "rgb(43, 112, 201)",
      hoverBg: "rgb(36, 96, 173)",
      border: "rgb(35, 95, 163)",
      hoverBorder: "rgb(35, 95, 163)",
      text: "white",
    },
    gray: {
      bg: "rgb(119, 119, 119)",
      hoverBg: "rgb(106, 106, 106)",
      border: "rgb(96, 96, 96)",
      hoverBorder: "rgb(96, 96, 96)",
      text: "white",
    },
    lightGray: {
      bg: "rgb(175, 175, 175)",
      hoverBg: "rgb(157, 157, 157)",
      border: "rgb(140, 140, 140)",
      hoverBorder: "rgb(140, 140, 140)",
      text: "black",
    },
    softGray: {
      bg: "rgb(229, 229, 229)",
      hoverBg: "rgb(216, 216, 216)",
      border: "rgb(190, 190, 190)",
      hoverBorder: "rgb(190, 190, 190)",
      text: "black",
    },
    offWhite: {
      bg: "rgb(247, 247, 247)",
      hoverBg: "rgb(235, 235, 235)",
      border: "rgb(216, 216, 216)",
      hoverBorder: "rgb(216, 216, 216)",
      text: "black",
    },
    green: {
      bg: "rgb(67, 192, 0)",
      hoverBg: "rgb(58, 176, 0)",
      border: "rgb(53, 154, 0)",
      hoverBorder: "rgb(53, 154, 0)",
      text: "white",
    },
    brown: {
      bg: "rgb(182, 110, 40)",
      hoverBg: "rgb(162, 98, 36)",
      border: "rgb(149, 88, 34)",
      hoverBorder: "rgb(149, 88, 34)",
      text: "white",
    },
    brightOrange: {
      bg: "rgb(244, 144, 0)",
      hoverBg: "rgb(219, 130, 0)",
      border: "rgb(199, 118, 0)",
      hoverBorder: "rgb(199, 118, 0)",
      text: "white",
    },
    gold: {
      bg: "rgb(255, 194, 0)",
      hoverBg: "rgb(230, 174, 0)",
      border: "rgb(204, 159, 0)",
      hoverBorder: "rgb(204, 159, 0)",
      text: "black",
    },
    lightYellow: {
      bg: "rgb(255, 222, 0)",
      hoverBg: "rgb(235, 205, 0)",
      border: "rgb(204, 185, 0)",
      hoverBorder: "rgb(204, 185, 0)",
      text: "black",
    },
    pink: {
      bg: "rgb(255, 202, 255)",
      hoverBg: "rgb(230, 182, 230)",
      border: "rgb(204, 155, 204)",
      hoverBorder: "rgb(204, 155, 204)",
      text: "black",
    },
  };

  const colors = variants[variant];
  const bgColor = disabled && colors.disabledBg ? colors.disabledBg : colors.bg;
  const borderColor = colors.border;
  const textColor = colors.text;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${className}`}
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
