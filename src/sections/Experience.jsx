import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
// import SectionTitle from "../components/common/SectionTitle";
import ExperienceCard from "../components/ui/ExperienceCard";
import experience from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24"
    >
      <Container>

        <SectionHeading
          subtitle="EXPERIENCE"
          title="Work Experience"
        />

        <div className="space-y-8">

          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}