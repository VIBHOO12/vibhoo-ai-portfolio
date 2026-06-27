import portfolioData from "../data/portfolioData";

function normalize(text) {
  return text.toLowerCase().trim();
}

export function getAIResponse(question) {
  const q = normalize(question);

  /* ------------------------------
      PERSONAL
  -------------------------------*/

  if (
    q.includes("about") ||
    q.includes("yourself") ||
    q.includes("who are you") ||
    q.includes("introduce")
  ) {
    return {
      type: "about",

      answer: `
Hi 👋

I'm ${portfolioData.personal.name}.

${portfolioData.personal.summary}

📍 ${portfolioData.personal.location}

💼 ${portfolioData.personal.availability}
`,
    };
  }

  /* ------------------------------
      SKILLS
  -------------------------------*/

  if (
    q.includes("skill") ||
    q.includes("technology") ||
    q.includes("tech stack")
  ) {
    return {
      type: "skills",

      answer: `
Frontend:
${portfolioData.skills.frontend.join(", ")}

Backend:
${portfolioData.skills.backend.join(", ")}

Database:
${portfolioData.skills.database.join(", ")}

Tools:
${portfolioData.skills.tools.join(", ")}
`,
    };
  }

  /* ------------------------------
      PROJECTS
  -------------------------------*/

  if (
    q.includes("project") ||
    q.includes("work") ||
    q.includes("portfolio")
  ) {
    const list = portfolioData.projects
      .map(
        (project) =>
          `• ${project.title}
${project.description}`
      )
      .join("\n\n");

    return {
      type: "projects",

      answer: list,
    };
  }

  /* ------------------------------
      EXPERIENCE
  -------------------------------*/

  if (
    q.includes("experience") ||
    q.includes("internship")
  ) {
    const exp = portfolioData.experience
      .map(
        (item) =>
          `${item.role}
${item.company}
${item.duration}`
      )
      .join("\n\n");

    return {
      type: "experience",

      answer: exp,
    };
  }

  /* ------------------------------
      EDUCATION
  -------------------------------*/

  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("degree")
  ) {
    return {
      type: "education",

      answer: `
${portfolioData.education.degree}

${portfolioData.education.branch}

${portfolioData.education.university}

${portfolioData.education.year}
`,
    };
  }

  /* ------------------------------
      CONTACT
  -------------------------------*/

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone")
  ) {
    return {
      type: "contact",

      answer: `
📧 ${portfolioData.contact.email}

📱 ${portfolioData.personal.phone}

💼 LinkedIn:
${portfolioData.contact.linkedin}

🐙 GitHub:
${portfolioData.contact.github}
`,
    };
  }

  /* ------------------------------
      RESUME
  -------------------------------*/

  if (
    q.includes("resume") ||
    q.includes("cv")
  ) {
    return {
      type: "resume",

      answer: "You can download my resume from the Resume button in the navigation bar.",
    };
  }

  /* ------------------------------
      DEFAULT
  -------------------------------*/

  return {
    type: "default",

    answer:
      "Sorry, I couldn't understand that.\n\nTry asking about Projects, Skills, Experience, Education, Contact, or Resume.",
  };
}