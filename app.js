import React from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";

const profile = {
  name: "Ojeen Gammah",
  role: "Software Engineer",
  location: "San Diego, CA",
  domain: "https://ojeengammah.com",
};

const projects = [
  {
    title: "GIS Workflow Automation",
    stack: "Python, ArcGIS Pro, Pandas",
    summary:
      "Automation work for engineering data, reporting, and spatial workflows. The goal is simple: reduce repetitive steps and make the output easier to trust.",
  },
  {
    title: "Chore Tracker",
    stack: "JavaScript, HTML, CSS, GitHub Actions",
    summary:
      "A responsive web app built with testing, validation, generated documentation, and a CI pipeline.",
  },
  {
    title: "MacroTracker",
    stack: "Java, XML, Android",
    summary:
      "A mobile app for nutrition tracking with food label scanning, manual entry, and personalized calorie-goal planning.",
  },
  {
    title: "Huffman Coding",
    stack: "C++, Algorithms",
    summary:
      "A compression and decompression project using Huffman trees, bitwise buffers, serialization, and runtime profiling.",
  },
];

const skills = [
  "Python",
  "JavaScript",
  "Java",
  "C++",
  "SQL",
  "ArcGIS Pro",
  "Pandas",
  "Azure",
  "GitHub Actions",
  "Linux/Unix",
  "Testing",
  "Data Analysis",
];

function Header() {
  return React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
      "a",
      { className: "brand", href: "#top", "aria-label": "Go to top" },
      React.createElement("span", { className: "brand-mark" }, "OG"),
      React.createElement("span", { className: "brand-text" }, profile.name)
    ),
    React.createElement(
      "nav",
      { className: "nav", "aria-label": "Primary navigation" },
      React.createElement("a", { href: "#about" }, "About"),
      React.createElement("a", { href: "#work" }, "Work"),
      React.createElement("a", { href: "#skills" }, "Skills"),
      React.createElement("a", { href: "#experience" }, "Experience")
    ),
    React.createElement("a", { className: "header-link", href: profile.domain, target: "_blank", rel: "noreferrer" }, "ojeengammah.com")
  );
}

function Hero() {
  return React.createElement(
    "section",
    { className: "hero", id: "top" },
    React.createElement(
      "div",
      { className: "hero-text" },
      React.createElement("p", { className: "eyebrow" }, "Software Engineer in San Diego"),
      React.createElement("h1", null, "Hi, I'm Ojeen. I build useful software with a practical mindset."),
      React.createElement(
        "p",
        { className: "hero-copy" },
        "I'm a UC San Diego computer science graduate and Software Engineer at TSAC Engineering. I like building clean tools, automating repetitive work, and turning technical problems into something people can actually use."
      ),
      React.createElement(
        "div",
        { className: "hero-actions" },
        React.createElement("a", { className: "button primary", href: "#work" }, "See my work"),
        React.createElement("a", { className: "button secondary", href: "#about" }, "About me")
      )
    ),
    React.createElement(
      "figure",
      { className: "portrait-card" },
      React.createElement("img", { src: "assets/ojeen-gammah-photo.jpg", alt: "Portrait of Ojeen Gammah" }),
      React.createElement(
        "figcaption",
        null,
        React.createElement("strong", null, profile.name),
        React.createElement("span", null, `${profile.role} / ${profile.location}`)
      )
    )
  );
}

function About() {
  return React.createElement(
    "section",
    { className: "section about", id: "about" },
    React.createElement(
      "div",
      { className: "section-heading" },
      React.createElement("p", { className: "eyebrow" }, "About"),
      React.createElement("h2", null, "I care about software that makes daily work easier.")
    ),
    React.createElement(
      "div",
      { className: "about-grid" },
      React.createElement(
        "p",
        null,
        "My work sits at the intersection of software engineering, GIS automation, and practical problem solving. I enjoy understanding a workflow first, then building a tool that removes friction without making things more complicated."
      ),
      React.createElement(
        "p",
        null,
        "Before and during my engineering path, I worked in tutoring, technical support, and repair. That background shaped how I approach software: be clear, be useful, and leave things better than you found them."
      )
    )
  );
}

function Work() {
  return React.createElement(
    "section",
    { className: "section", id: "work" },
    React.createElement(
      "div",
      { className: "section-heading" },
      React.createElement("p", { className: "eyebrow" }, "Work"),
      React.createElement("h2", null, "Projects and technical work.")
    ),
    React.createElement(
      "div",
      { className: "work-grid" },
      projects.map((project) =>
        React.createElement(
          "article",
          { className: "work-card", key: project.title },
          React.createElement("p", { className: "project-stack" }, project.stack),
          React.createElement("h3", null, project.title),
          React.createElement("p", null, project.summary)
        )
      )
    )
  );
}

function ResumeFeature() {
  return React.createElement(
    "section",
    { className: "section resume-feature" },
    React.createElement(
      "div",
      { className: "resume-text" },
      React.createElement("p", { className: "eyebrow" }, "Resume Snapshot"),
      React.createElement("h2", null, "Python, Azure, GIS automation, and full-stack fundamentals."),
      React.createElement(
        "p",
        null,
        "The design stays personal, but the technical story is still easy to see: software engineering, automation, data, and reliable delivery."
      )
    ),
    React.createElement(
      "figure",
      { className: "resume-image" },
      React.createElement("img", { src: "assets/resume-brand-hero.png", alt: "Resume graphic for Ojeen Gammah" })
    )
  );
}

function Skills() {
  return React.createElement(
    "section",
    { className: "section skills", id: "skills" },
    React.createElement(
      "div",
      { className: "section-heading" },
      React.createElement("p", { className: "eyebrow" }, "Skills"),
      React.createElement("h2", null, "Tools I work with.")
    ),
    React.createElement(
      "div",
      { className: "skill-list" },
      skills.map((skill) => React.createElement("span", { key: skill }, skill))
    )
  );
}

function Experience() {
  return React.createElement(
    "section",
    { className: "section experience", id: "experience" },
    React.createElement(
      "div",
      { className: "section-heading" },
      React.createElement("p", { className: "eyebrow" }, "Experience"),
      React.createElement("h2", null, "A practical path into engineering.")
    ),
    React.createElement(
      "div",
      { className: "timeline" },
      React.createElement(
        "article",
        null,
        React.createElement("span", null, "Jan 2024 - Present"),
        React.createElement("h3", null, "Software Engineer, TSAC Engineering"),
        React.createElement("p", null, "Building Python automation and GIS workflows for engineering data, reporting, and operations.")
      ),
      React.createElement(
        "article",
        null,
        React.createElement("span", null, "Sep 2021 - Dec 2023"),
        React.createElement("h3", null, "B.S. Computer Science, UC San Diego"),
        React.createElement("p", null, "Graduated with Provost Honors, with coursework across systems, algorithms, security, and software design.")
      ),
      React.createElement(
        "article",
        null,
        React.createElement("span", null, "Earlier Experience"),
        React.createElement("h3", null, "Tutor, Lab Tech, Repair Technician"),
        React.createElement("p", null, "Hands-on experience helping people solve problems, debug issues, and understand technical systems.")
      )
    )
  );
}

function Footer() {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement("p", null, `${profile.name} / ${profile.role}`),
    React.createElement(
      "div",
      { className: "footer-links" },
      React.createElement("a", { href: profile.domain, target: "_blank", rel: "noreferrer" }, "Website"),
      React.createElement("a", { href: "#top" }, "Back to top")
    )
  );
}

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement(
      "main",
      null,
      React.createElement(Hero),
      React.createElement(About),
      React.createElement(Work),
      React.createElement(ResumeFeature),
      React.createElement(Skills),
      React.createElement(Experience)
    ),
    React.createElement(Footer)
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
