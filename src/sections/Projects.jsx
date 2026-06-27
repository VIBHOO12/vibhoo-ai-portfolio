// import Container from "../components/common/Container";
// import SectionHeading from "../components/common/SectionHeading";
// // import SectionTitle from "../components/common/SectionTitle";
// import ProjectCard from "../components/ui/ProjectCard";
// import projects from "../data/projects";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="bg-slate-950 py-24"
//     >
//       <Container>

//         <SectionHeading
//           subtitle="PROJECTS"
//           title="Featured Projects"
//         />

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

//           {projects.map((project) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//             />
//           ))}

//         </div>

//       </Container>
//     </section>
//   );
// }
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
// import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-28"
    >
      <Container>

        <SectionHeading
          subtitle="PORTFOLIO"
          title="Featured Projects"
        />

        <p className="mx-auto mb-16 max-w-2xl text-center text-slate-400">
          Here are some of the projects that showcase my
          frontend, backend, and full-stack development skills.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}