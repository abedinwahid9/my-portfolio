// "use client";
// import { createContext, useContext, useState } from "react";

// interface CursorContextType {
//   setCursorText: (text: string) => void;
//   setCursorVariant: (variant: "default" | "hover" | "button") => void;
// }

// const CursorContext = createContext<CursorContextType | null>(null);

// export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cursorText, setCursorText] = useState("");
//   const [cursorVariant, setCursorVariant] = useState<
//     "default" | "hover" | "button"
//   >("default");

//   return (
//     <CursorContext.Provider value={{ setCursorText, setCursorVariant }}>
//       {children}
//     </CursorContext.Provider>
//   );
// };

// export const useCursor = () => {
//   const context = useContext(CursorContext);
//   if (!context) {
//     throw new Error("useCursor must be used within a CursorProvider");
//   }
//   return context;
// };
