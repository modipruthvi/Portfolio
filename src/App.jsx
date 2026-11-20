import { useState, useEffect } from "react";

/* =========================================================
   YOUR DATA  (edit only this top part)
   ========================================================= */
const profile = {
  name: "Pruthvi Modi",
  email: "pruthvi162006@gmail.com",
  phone: "+91 9099807031",
  location: "Navsari, Gujarat",
  github: "https://github.com/modipruthvi",
  linkedin: "https://www.linkedin.com/in/pruthvi-modi-409a5341a/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
  photo: "/public/IMG_8101.JPG-removebg-preview.png", // put your photo in the public folder
  cv: "/Pruthvi_Modi_Final_Resume.pdf", // put your resume PDF in the public folder
};

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { icon: "bi-github", href: profile.github, label: "GitHub" },
  { icon: "bi-linkedin", href: profile.linkedin, label: "LinkedIn" },
  { icon: "bi-instagram", href: profile.instagram, label: "Instagram" },
  { icon: "bi-youtube", href: profile.youtube, label: "YouTube" },
];

const skills = [
  { name: "HTML", icon: "bi-filetype-html", color: "#e44d26" },
  { name: "CSS", icon: "bi-filetype-css", color: "#1572b6" },
  { name: "Bootstrap", icon: "bi-bootstrap-fill", color: "#7952b3" },
  { name: "JavaScript", icon: "bi-filetype-js", color: "#d9a400" },
  { name: "React", icon: "bi-filetype-jsx", color: "#14a5c9" },
  { name: "PHP", icon: "bi-filetype-php", color: "#777bb3" },
  { name: "C", icon: "bi-code-slash", color: "#3b6ed6" },
  { name: "C++", icon: "bi-braces", color: "#00599c" },
  { name: "Python", icon: "bi-filetype-py", color: "#3776ab" },
];

const softSkills = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Quick Learning",
  "Video Editing",
];

const projects = [
  {
    title: "Phone Guru",
    type: "Academic Project",
    category: "Web",
    year: "2024 - 2025",
    text: "Phone advisor app with brand and price filters and a phone comparison feature. Responsive and easy to use.",
    tech: ["React.js", "MongoDB"],
    image: "/projects/phone-guru.png",
    icon: "bi-phone",
    tone: "pm-tone-1",
    live: "#",
    code: "#",
  },
  {
    title: "Chhukaji Chat & Restaurant",
    type: "Personal Project",
    category: "Web",
    year: "2024 - 2025",
    text: "Dynamic restaurant website with a menu and interactive pages. The bill is calculated automatically from the items and quantity.",
    tech: ["PHP", "MySQL"],
    image: "/projects/chhukaji.png",
    icon: "bi-shop",
    tone: "pm-tone-2",
    live: "#",
    code: "#",
  },
  {
    title: "Student Study Load Prediction",
    type: "Academic Project",
    category: "Machine Learning",
    year: "2025 - 2026",
    text: "Prediction model that analyses student data to estimate study load using basic machine learning techniques.",
    tech: ["Python", "Linear Regression"],
    image: "/projects/study-load.png",
    icon: "bi-graph-up-arrow",
    tone: "pm-tone-3",
    live: "#",
    code: "#",
  },
];

const projectFilters = ["All", "Web", "Machine Learning"];

const services = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    text: "Responsive & modern websites",
  },
  {
    icon: "bi-display",
    title: "Frontend Development",
    text: "Clean & attractive UI",
  },
  {
    icon: "bi-layers-fill",
    title: "Full Stack Development",
    text: "End-to-end solutions",
  },
  {
    icon: "bi-gear-fill",
    title: "Website Maintenance",
    text: "Keep your site updated",
  },
];

const education = [
  {
    icon: "bi-mortarboard-fill",
    title: "MCA",
    place: "Master of Computer Applications",
    note: "Currently pursuing",
    tag: "Ongoing",
  },
  {
    icon: "bi-laptop",
    title: "Full Stack Developer Course",
    place: "Red & White Multimedia Education",
    note: "Alongside my MCA",
    tag: "Ongoing",
  },
  {
    icon: "bi-mortarboard-fill",
    title: "Bachelor of Computer Applications (BCA)",
    place: "S.S. Agrawal College, Navsari",
    note: "2023 - 2026",
    tag: "Completed",
  },
  {
    icon: "bi-book-fill",
    title: "Higher Secondary (12th)",
    place: "J.C. & J.C. Vidhya Sankul",
    note: "2022 - 2023",
    tag: "Completed",
  },
];

const experience = [
  {
    role: "Intern",
    company: "Apa Serverless Bytes Pvt. Ltd.",
    place: "Kabilpor, Navsari, Gujarat",
    when: "2026",
    points: [
      "Developed and improved UI components using HTML, CSS and React.",
      "Collaborated on real-time projects and learned the development workflow.",
      "Focused on responsive design and user experience.",
    ],
  },
];

const certificates = [
  { title: "HTML & CSS", by: "Zikshaa | Nasscom Foundation" },
  { title: "C Programming Complete Guide", by: "Unstop" },
];

/* =========================================================
   SMALL HELPERS
   ========================================================= */
// Shows your image if the file exists, otherwise shows the fallback.
function SmartImg({ src, alt, className, fallback }) {
  const [failed, setFailed] = useState(false);
  if (failed) return fallback;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

function Heading({ small, children }) {
  return (
    <>
      <div className="pm-kicker">
        <span className="pm-kicker-line"></span>
        {small}
      </div>
      <h2 className="pm-h2">{children}</h2>
    </>
  );
}

/* =========================================================
   NAVBAR
   ========================================================= */
function Navbar({ active, theme, toggleTheme }) {
  return (
    <header className="pm-nav-wrap">
      <nav className="navbar navbar-expand-lg pm-nav container" aria-label="Main">
        <a className="pm-brand" href="#home">
          <i className="bi bi-code-slash pm-brand-icon"></i>
          <span>
            Pruthvi <b>Modi</b>
          </span>
        </a>

        <button
          className="navbar-toggler pm-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pm-menu"
          aria-controls="pm-menu"
          aria-label="Open menu"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="pm-menu">
          <ul className="navbar-nav mx-auto pm-menu">
            {navLinks.map((l) => (
              <li className="nav-item" key={l.id}>
                <a
                  className={`pm-link ${active === l.id ? "is-active" : ""}`}
                  href={`#${l.id}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-3 pm-nav-actions">
            <button
              type="button"
              className="pm-icon-btn"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <i className={`bi ${theme === "dark" ? "bi-sun-fill" : "bi-moon-fill"}`}></i>
            </button>
            <a className="pm-btn pm-btn-dark" href={profile.cv} download>
              Download CV <i className="bi bi-download"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* =========================================================
   HERO
   ========================================================= */
function Hero() {
  return (
    <section id="home" className="pm-hero">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <span className="pm-hello">
              <span className="pm-hello-dot"></span> Hello, I'm
            </span>
            <h1 className="pm-hero-title">
              Pruthvi <span>Modi</span>
              <br />
              Web Developer
            </h1>
            <svg className="pm-squiggle" viewBox="0 0 60 8" aria-hidden="true">
              <path d="M2 5 C 12 0, 22 8, 32 4 S 50 2, 58 4" />
            </svg>
            <p className="pm-lead">
              I'm a passionate web developer, skilled in building modern and
              responsive websites using HTML, CSS, JavaScript, React and more.
              I'm growing into a full stack developer.
            </p>
            <div className="d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="pm-btn pm-btn-primary">
                <i className="bi bi-rocket-takeoff-fill"></i> View My Projects{" "}
                <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#contact" className="pm-btn pm-btn-outline">
                <i className="bi bi-envelope"></i> Contact Me
              </a>
            </div>
            <div className="d-flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="pm-social"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <i className={`bi ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="pm-hero-art">
              <div className="pm-blob"></div>
              <div className="pm-blob-dot"></div>
              <svg className="pm-sparks" viewBox="0 0 40 40" aria-hidden="true">
                <path d="M8 30 L16 18 M18 32 L28 14 M30 34 L36 24" />
              </svg>
              <SmartImg
                src={profile.photo}
                alt={`${profile.name} portrait`}
                className="pm-photo"
                fallback={<div className="pm-photo-fallback">PM</div>}
              />
              <div className="pm-code" aria-hidden="true">
                <div>
                  <span className="c-key">const</span> developer = {"{"}
                </div>
                <div className="ps-3">
                  code: <span className="c-val">true</span>,
                </div>
                <div className="ps-3">
                  create: <span className="c-val">true</span>,
                </div>
                <div className="ps-3">
                  innovate: <span className="c-val">true</span>
                </div>
                <div>{"};"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT + SKILLS
   ========================================================= */
function About() {
  return (
    <section id="about" className="pm-section">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-5">
            <div className="pm-about-img">
              <SmartImg
                src="/about.jpg"
                alt="Working on a laptop"
                className="pm-about-photo"
                fallback={
                  <div className="pm-about-fallback">
                    <i className="bi bi-laptop"></i>
                  </div>
                }
              />
              <span className="pm-badge-float">
                <i className="bi bi-mortarboard-fill"></i> MCA Student
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="pm-kicker">
              <span className="pm-kicker-line"></span>About Me
            </div>
            <h2 className="pm-h2">
              Passionate about <span>Web Development</span>
            </h2>
            <p className="pm-text">
              I completed my BCA from S.S. Agrawal College, Navsari, and I'm
              now pursuing my MCA. Alongside it, I'm doing a Full Stack
              Developer course at Red &amp; White Multimedia Education. I enjoy
              turning ideas into real web applications with clean design, good
              performance and a smooth user experience. I also interned at Apa
              Serverless Bytes, where I worked on real projects with React.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="pm-chipbox">
                <i className="bi bi-mortarboard-fill"></i> BCA Completed
              </span>
              <span className="pm-chipbox">
                <i className="bi bi-journal-code"></i> Pursuing MCA
              </span>
              <span className="pm-chipbox">
                <i className="bi bi-geo-alt-fill"></i> {profile.location}
              </span>
              <span className="pm-chipbox">
                <i className="bi bi-heart-fill"></i> Always Learning
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SKILLS (its own section, right below About)
   ========================================================= */
function Skills() {
  return (
    <section id="skills" className="pm-section pm-skills-band">
      <div className="container">
        <div className="text-center mb-4">
          <div className="pm-kicker justify-content-center">
            <span className="pm-kicker-line"></span>My Skills
          </div>
          <h2 className="pm-h2">
            Tools I <span>work with</span>
          </h2>
          <p className="pm-text mx-auto">
            Technologies I have used in college work, personal projects and my
            internship.
          </p>
        </div>

        <div className="pm-skill-grid">
          {skills.map((s) => (
            <div className="pm-skill" key={s.name}>
              <i className={`bi ${s.icon}`} style={{ color: s.color }}></i>
              <span>{s.name}</span>
            </div>
          ))}
        </div>

        <div className="pm-soft">
          <div className="pm-soft-title">Soft skills</div>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {softSkills.map((s) => (
              <span className="pm-chipbox" key={s}>
                <i className="bi bi-check-circle-fill"></i> {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROJECTS
   ========================================================= */
function Projects() {
  const [filter, setFilter] = useState("All");
  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="pm-section pm-section-tight">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
          <div>
            <Heading small="My Projects">
              Some of <span>My Works</span>
            </Heading>
          </div>
          <div className="pm-filters" role="group" aria-label="Filter projects">
            {projectFilters.map((f) => (
              <button
                key={f}
                type="button"
                className={`pm-filter-btn ${filter === f ? "is-on" : ""}`}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {shown.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.title}>
              <article className="pm-pcard">
                <div className={`pm-pcard-media ${p.tone}`}>
                  <SmartImg
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="pm-pcard-img"
                    fallback={
                      <div className="pm-shot" aria-hidden="true">
                        <div className="pm-shot-bar">
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <div className="pm-shot-body">
                          <i className={`bi ${p.icon}`}></i>
                        </div>
                      </div>
                    }
                  />
                  <span className="pm-pcard-type">{p.type}</span>
                </div>

                <div className="pm-pcard-body">
                  <div className="pm-pcard-year">
                    <i className="bi bi-calendar3"></i> {p.year}
                  </div>
                  <h3 className="pm-h3">{p.title}</h3>
                  <p className="pm-small">{p.text}</p>
                  <div className="pm-tech">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="pm-pcard-actions">
                    <a
                      href={p.live}
                      className="pm-btn pm-btn-primary pm-btn-xs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                    <a
                      href={p.code}
                      className="pm-btn pm-btn-outline pm-btn-xs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-github"></i> Code
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICES
   ========================================================= */
function Services() {
  return (
    <section id="services" className="pm-section pm-section-tight">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-3">
            <Heading small="My Services">
              What <span>I Do</span>
            </Heading>
            <p className="pm-text">
              I provide modern and creative solutions for your web needs.
            </p>
            <a href="#contact" className="pm-btn pm-btn-primary pm-btn-sm">
              Get In Touch <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <div className="col-lg-9">
            <div className="row g-3">
              {services.map((s) => (
                <div className="col-6 col-md-3" key={s.title}>
                  <div className="pm-service">
                    <i className={`bi ${s.icon}`}></i>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EDUCATION & EXPERIENCE + CONTACT
   ========================================================= */
function EduHead({ icon, title }) {
  return (
    <div className="pm-edu-head">
      <span className="pm-edu-head-icon">
        <i className={`bi ${icon}`}></i>
      </span>
      <h3>{title}</h3>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="pm-section pm-section-tight">
      <div className="container">
        <Heading small="My Journey">
          Education &amp; <span>Experience</span>
        </Heading>

        {/* 1. Education */}
        <EduHead icon="bi-mortarboard-fill" title="Education" />
        <div className="row g-3">
          {education.map((e) => (
            <div className="col-md-6" key={e.title}>
              <div className="pm-edu">
                <span className="pm-edu-icon">
                  <i className={`bi ${e.icon}`}></i>
                </span>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <h3>{e.title}</h3>
                    <span className={`pm-tag ${e.tag === "Ongoing" ? "is-on" : ""}`}>
                      {e.tag}
                    </span>
                  </div>
                  <div className="pm-edu-place">{e.place}</div>
                  <div className="pm-edu-note">{e.note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Experience */}
        <EduHead icon="bi-briefcase-fill" title="Experience" />
        {experience.map((x) => (
          <div className="pm-exp" key={x.company}>
            <div className="d-flex flex-wrap justify-content-between align-items-start gap-2">
              <div>
                <h3 className="pm-exp-role">{x.role}</h3>
                <div className="pm-exp-company">{x.company}</div>
                <div className="pm-edu-note">{x.place}</div>
              </div>
              <span className="pm-tag is-on">{x.when}</span>
            </div>
            <ul className="pm-exp-list">
              {x.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* 3. Certificates */}
        <EduHead icon="bi-patch-check-fill" title="Certificates" />
        <div className="row g-3">
          {certificates.map((c) => (
            <div className="col-md-6" key={c.title}>
              <div className="pm-edu">
                <span className="pm-edu-icon">
                  <i className="bi bi-award-fill"></i>
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <div className="pm-edu-place">{c.by}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="pm-section pm-section-tight pb-5">
      <div className="container">
        <div className="pm-cta">
          <i className="bi bi-send-fill pm-cta-plane" aria-hidden="true"></i>
          <div className="row gy-4 align-items-center">
            <div className="col-lg-7">
              <div className="pm-cta-kicker">Get In Touch</div>
              <h2 className="pm-cta-title">Let's Work Together</h2>
              <p className="pm-cta-text">
                Have a project or just want to say hi? Feel free to contact me!
              </p>
              <p className="pm-cta-meta">
                <i className="bi bi-envelope-fill"></i> {profile.email}
                <span className="mx-2">|</span>
                <i className="bi bi-telephone-fill"></i> {profile.phone}
              </p>
              <a
                href={`mailto:${profile.email}?subject=Hello%20Pruthvi`}
                className="pm-btn pm-btn-white"
              >
                Contact Me <i className="bi bi-arrow-right"></i>
              </a>
            </div>
            <div className="col-lg-5">
              <div className="pm-cta-icons">
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <i className="bi bi-envelope-fill"></i>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pm-footer">
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
        <span className="pm-footer-brand">
          <i className="bi bi-code-slash"></i> {profile.name}
        </span>
        <span>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span>
          Made with <i className="bi bi-heart-fill pm-heart"></i> using Bootstrap
        </span>
      </div>
    </footer>
  );
}

/* =========================================================
   APP
   ========================================================= */
export default function App() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  // apply light / dark theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  // highlight the menu link of the section you are viewing
  useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "services", "education", "contact"];
    const onScroll = () => {
      let current = "home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar
        active={active}
        theme={theme}
        toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
