
import FloatingIcons from "./FloatingIcons";
import profile from "../../data/profile";
import profileImage from "../../assets/images/profile.jpg";
export default function HeroImage() {
  return (
    <div className="relative flex justify-center">

      {/* Floating Tech */}
      <FloatingIcons />

      {/* Profile Card */}
      <div className="w-[360px] rounded-3xl border border-slate-700 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="h-60 w-60 rounded-2xl object-cover border-4 border-slate-700"
          />
        </div>

        {/* Details */}
        <div className="mt-6 text-center">

          <h2 className="text-2xl font-bold text-white">
            {profile.personal.firstName} {profile.personal.lastName}
          </h2>

          <p className="mt-2 text-blue-400">
            Full Stack Java Developer
          </p>

          <div className="mt-4 flex items-center justify-center gap-2">

            <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-green-400 text-sm">
              Available for Work
            </span>

          </div>

          <div className="mt-4 text-slate-400 text-sm">
            📍 {profile.personal.location}
          </div>

        </div>

      </div>

    </div>
  );
}