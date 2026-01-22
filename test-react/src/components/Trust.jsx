export default function Trust() {
  return (
    <section id="programs" className="trust-section fade-up show">
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>
        Why Learners Trust ISML
      </h2>

      <div className="trust-wrapper">
        {/* BEFORE */}
        <div className="trust-box before fade-up show">
          <div className="trust-header before-header">
            😟 Frustration Before
          </div>

          <ul>
            <li>❌ I don’t know where to start learning a language</li>
            <li>❌ Grammar feels confusing</li>
            <li>❌ Speaking confidently feels difficult</li>
            <li>❌ I forget words while speaking</li>
            <li>❌ Fear of making mistakes</li>
            <li>❌ Progress feels slow and unclear</li>
            <li>❌ I feel stuck without improvement</li>
          </ul>
        </div>

        {/* AFTER */}
        <div className="trust-box after fade-up show">
          <div className="trust-header after-header">
            😍 Freedom After
          </div>

          <ul>
            <li>✅ Clear learning roadmap to follow</li>
            <li>✅ Strong grammar foundation</li>
            <li>✅ Confidence in speaking & listening</li>
            <li>✅ Improved vocabulary usage</li>
            <li>✅ Comfort with making mistakes</li>
            <li>✅ Consistent and measurable progress</li>
            <li>✅ Confidence, clarity, and fluency</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
