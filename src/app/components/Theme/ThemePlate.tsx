// "use client";

// import { motion, Variants } from "framer-motion";
// import { ReactNode, useEffect, useState } from "react";

// interface LayoutProps {
//   children: ReactNode;
// }

// const ThemePlate = ({ children }: LayoutProps) => {

//     const [themeColor,setThemeColor] = useState(null)

//   const themeVariants: Variants = {
//     default: {
//       clipPath: "circle(20px at 35px 35px)",
//       transition: {
//         duration: 2,
//       },
//     },
//     open: {
//       clipPath: "circle(350px at 40px 40px)",
//       transition: {
//         duration: 2,
//       },
//     },
//   };

//   useEffect(()=>{

//   console.log()

//   },[])

//   return (
//     <motion.div  className="w-full h-full bg-gradient-to-tr dark:from-lg-secondary from-dr-button dark:to-lg-primary to-dr-primary to-45% bg-no-repeat">
//       {children}
//     </motion.div>
//   );
// };

// export default ThemePlate;
