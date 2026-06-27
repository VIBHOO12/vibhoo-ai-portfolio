import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
// import SectionTitle from "../components/common/SectionTitle";
import EducationCard from "../components/ui/EducationCard";
import education from "../data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 py-24"
    >
      <Container>

        <SectionHeading
          subtitle="EDUCATION"
          title="My Education"
        />

        {education.map((item) => (
          <EducationCard
            key={item.id}
            item={item}
          />
        ))}

      </Container>
    </section>
  );
}