export default function Navbar({ onEnroll }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => scrollTo("hero")}>
          <img src="/logo.png" alt="Indian School for Modern Languages" />
      </div>

      <div className="nav-links">
        <span onClick={() => scrollTo("programs")}>Program</span>
        <span onClick={() => scrollTo("languages")}>Languages</span>
        <span onClick={() => scrollTo("mentor")}>Mentor</span>
        <span onClick={() => scrollTo("faq")}>FAQ</span>
      </div>

      <button onClick={onEnroll}>Enroll Now</button>
    </nav>
  );
}
