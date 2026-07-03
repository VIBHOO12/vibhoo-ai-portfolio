
import profile from "../data/profile";
import Container from "../components/common/Container";
// import SectionTitle from "../components/common/SectionTitle";
import FeatureCard from "../components/ui/FeatureCard";
import profileImage from "../assets/images/profile.jpg";
import SectionHeading from "../components/common/SectionHeading";

const features = [
  "Problem Solver",
  "Fast Learner",
  "Team Player",
  "Clean Code",
];

const timeline = [
  { year: "2022", title: "Started Programming" },
  { year: "2023", title: "Frontend Development" },
  { year: "2024", title: "Java & Spring Boot" },
  { year: "2025", title: "Full Stack Projects" },
  { year: "2026", title: "AI Applications" },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 py-28">
      <Container>

        <SectionHeading
          subtitle="ABOUT ME"
          title="Know Me Better"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="rounded-3xl border border-slate-700 bg-white/5 p-6 backdrop-blur-xl">

              <img
                src={profileImage}
                alt="Profile"
                className="mx-auto h-72 w-72 rounded-2xl object-cover"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <h2 className="text-4xl font-bold">

              Hi,

              I'm

              <span className="text-blue-500">

                {" "}

                {profile.personal.firstName}

              </span>

            </h2>

            <p className="mt-6 leading-8 text-slate-400">

              I enjoy building scalable,
              responsive,
              and user-friendly applications.

              My primary technologies include
              React,
              Java,
              Spring Boot,
              and MySQL.

            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">

              {features.map((item) => (

                <FeatureCard
                  key={item}
                  title={item}
                />

              ))}

            </div>

          </div>

        </div>

        {/* Timeline */}

        <div className="mt-24">

          <h2 className="mb-12 text-center text-3xl font-bold">

            My Journey

          </h2>

          <div className="relative mx-auto max-w-3xl border-l border-slate-700 pl-8">

            {timeline.map((item) => (

              <div
                key={item.year}
                className="relative mb-10"
              >

                <div className="absolute -left-[38px] h-4 w-4 rounded-full bg-blue-500"></div>

                <h3 className="text-blue-400 font-semibold">

                  {item.year}

                </h3>

                <p className="text-lg">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}