import skills from "../data/skills";
import Container from "../components/common/Container";
// import SectionTitle from "../components/common/SectionTitle";
import SkillCard from "../components/ui/SkillCard";
import SectionHeading from "../components/common/SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950"
    >
      <Container>

        <SectionHeading
          subtitle="TECH STACK"
          title="Skills & Technologies"
        />

        <div className="space-y-12">

          {skills.map((item) => (

            <div key={item.category}>

              <h2 className="text-2xl font-bold mb-6 text-blue-400">

                {item.category}

              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {item.technologies.map((tech) => (

                  <SkillCard
                    key={tech}
                    name={tech}
                  />

                ))}

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}