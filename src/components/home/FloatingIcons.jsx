// import {
//   FaReact,
//   FaJava,
//   FaGitAlt,
// } from "react-icons/fa";

// import {
//   SiSpringboot,
//   SiMysql,
//   SiJavascript,
// } from "react-icons/si";

// const icons = [
//   {
//     Icon: FaReact,
//     top: "5%",
//     left: "-10%",
//     color: "#61DAFB",
//   },

//   {
//     Icon: FaJava,
//     top: "18%",
//     right: "-10%",
//     color: "#f89820",
//   },

//   {
//     Icon: SiSpringboot,
//     bottom: "28%",
//     left: "-12%",
//     color: "#6DB33F",
//   },

//   {
//     Icon: SiMysql,
//     bottom: "10%",
//     right: "-10%",
//     color: "#00758F",
//   },

//   {
//     Icon: FaGitAlt,
//     top: "65%",
//     left: "5%",
//     color: "#F05032",
//   },

//   {
//     Icon: SiJavascript,
//     top: "70%",
//     right: "5%",
//     color: "#F7DF1E",
//   },
// ];

// export default function FloatingIcons() {
//   return (
//     <>
//       {icons.map(({ Icon, ...style }, index) => (
//         <div
//           key={index}
//           className="absolute animate-bounce"
//           style={style}
//         >
//           <Icon
//             size={36}
//             color={style.color}
//           />
//         </div>
//       ))}
//     </>
//   );
// }
const tech = [
  {
    name: "⚛ React",
    top: "5%",
    left: "-10%",
  },
  {
    name: "☕ Java",
    top: "18%",
    right: "-10%",
  },
  {
    name: "🍃 Spring",
    bottom: "28%",
    left: "-12%",
  },
  {
    name: "🐬 MySQL",
    bottom: "12%",
    right: "-10%",
  },
  {
    name: "🐙 Git",
    top: "60%",
    left: "-5%",
  },
];

export default function FloatingIcons() {
  return (
    <>
      {tech.map((item, index) => (
        <div
          key={index}
          className="absolute rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-white backdrop-blur-md shadow-lg"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          {item.name}
        </div>
      ))}
    </>
  );
}