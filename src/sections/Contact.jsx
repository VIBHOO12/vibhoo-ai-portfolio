import profile from "../data/profile";
import Container from "../components/common/Container";
// import SectionTitle from "../components/common/SectionTitle";
import SectionHeading from "../components/common/SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-28"
    >
      <Container>

        <SectionHeading
          subtitle="CONTACT"
          title="Let's Work Together"
        />

        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-bold">
              Let's Build Something Amazing 🚀
            </h2>

            <p className="mt-6 text-slate-400 leading-8">
              Whether it's an internship, freelance project,
              or full-time opportunity, I'd love to hear from you.
            </p>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl border border-slate-700 bg-white/5 p-5">

                <h3 className="text-blue-400 font-semibold">
                  📧 Email
                </h3>

                <p>{profile.personal.email}</p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-white/5 p-5">

                <h3 className="text-blue-400 font-semibold">
                  📍 Location
                </h3>

                <p>{profile.personal.location}</p>

              </div>

              <div className="rounded-2xl border border-slate-700 bg-white/5 p-5">

                <h3 className="text-blue-400 font-semibold">
                  📱 Phone
                </h3>

                <p>{profile.personal.phone}</p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 outline-none focus:border-blue-500"
            />

            <button
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-4 font-semibold transition hover:scale-[1.02]"
            >
              Send Message 🚀
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
}