// import profile from "../../data/profile";
// import { TypeAnimation } from "react-type-animation";
// import HeroButtons from "./HeroButtons";
// import HeroStats from "./HeroStats";

// export default function HeroContent() {

//   const typeSequence = profile.personal.roles.flatMap((role) => [
//     role,
//     2000,
//   ]);

//   return (
//     <div>

//       <span className="rounded-full bg-green-500/10 px-4 py-2 text-green-400">
//         🟢 Available for Opportunities
//       </span>

//       <h1 className="mt-6 text-6xl font-extrabold leading-tight">

//         Hi,

//         <br />

//         I'm

//         <span className="text-blue-500">

//           {" "}
//           {profile.personal.firstName}

//           {" "}

//           {profile.personal.lastName}

//         </span>

//       </h1>

//       <TypeAnimation
//         sequence={typeSequence}
//         speed={40}
//         repeat={Infinity}
//         wrapper="h2"
//         className="mt-6 text-3xl font-semibold text-slate-300"
//       />

//       <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

//         {profile.personal.tagline}

//       </p>

//       <HeroButtons />

//       <HeroStats />

//     </div>
//   );
// }

// import profile from "../../data/profile";
// import HeroButtons from "./HeroButtons";
// import HeroStats from "./HeroStats";
// import { TypeAnimation } from "react-type-animation";

// export default function HeroContent() {

//   const roles = profile.personal.roles.flatMap(role => [
//     role,
//     2000,
//   ]);

//   return (

//     <div>

//       <span className="rounded-full bg-blue-500/10 px-5 py-2 text-blue-400">

//         👋 Hello There

//       </span>

//       <h1 className="mt-8 text-6xl lg:text-8xl font-black leading-none">

//         Crafting

//         <br/>

//         <span className="text-blue-500">

//           Digital

//         </span>

//         <br/>

//         Experiences

//       </h1>

//       <h2 className="mt-8 text-3xl font-bold">

//         {profile.personal.firstName}

//         {" "}

//         {profile.personal.lastName}

//       </h2>

//       <TypeAnimation

//         sequence={roles}

//         speed={40}

//         repeat={Infinity}

//         className="mt-5 block text-xl text-blue-400"

//       />

//       <p className="mt-8 max-w-xl leading-8 text-slate-400">

//         {profile.personal.tagline}

//       </p>

//       <HeroButtons />

//       <HeroStats />

//     </div>

//   );
// }

import profile from "../../data/profile";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { TypeAnimation } from "react-type-animation";

export default function HeroContent() {
  const typeSequence = profile.personal.roles.flatMap((role) => [
    role,
    2000,
  ]);

  return (
    <div className="space-y-8">

      {/* Available Badge */}

      <div className="inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2">

        <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

        <span className="text-sm font-medium text-green-400">
          Available for Opportunities
        </span>

      </div>

      {/* Heading */}

      <div>

        <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">

          Crafting

          <br />

          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">

            Digital Experiences

          </span>

        </h1>

      </div>

      {/* Name */}

      <div>

        <h2 className="text-3xl font-bold text-white lg:text-4xl">
          {profile.personal.firstName} {profile.personal.lastName}
        </h2>

        <div className="mt-3 text-xl font-semibold text-blue-400">
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

      </div>

      {/* Description */}

      <p className="max-w-xl text-lg leading-8 text-slate-400">
        {profile.personal.tagline}
      </p>

      {/* Buttons */}

      <HeroButtons />

      {/* Stats */}

      <HeroStats />

    </div>
  );
}