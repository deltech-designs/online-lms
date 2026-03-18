import { useEffect, useRef, useState } from "react";
import { IconRocket, IconStory, IconCheck, IconGlobe, IconBulb, IconHeart } from "../components/ui/iconrocket";

// ── Styles ──────────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:   #ffffff;
    --off:     #f7f6f2;
    --cream:   #ede9df;
    --ink:     #1a1a2e;
    --ink2:    #2e3250;
    --muted:   #6b7280;
    --blue:    #1e4fd8;
    --blue-lt: #e8eefb;
    --accent:  #f4a118;
    --radius:  14px;
    --shadow:  0 4px 28px rgba(30,79,216,.10);
    --shadow2: 0 12px 48px rgba(30,79,216,.16);
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--off);
    color: var(--ink);
    line-height: 1.65;
  }

  /* scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--blue); border-radius: 99px; }

  /* fade-in on scroll */
  .reveal { opacity: 0; transform: translateY(32px); transition: opacity .65s ease, transform .65s ease; }
  .reveal.visible { opacity: 1; transform: none; }
  .reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity .65s ease, transform .65s ease; }
  .reveal-left.visible { opacity: 1; transform: none; }
  .reveal-right { opacity: 0; transform: translateX(40px); transition: opacity .65s ease, transform .65s ease; }
  .reveal-right.visible { opacity: 1; transform: none; }
`;

// ── Helpers 
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}


// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      position: "relative",
      minHeight: 520,
      overflow: "hidden",
      borderRadius: "0 0 32px 32px",
      background: "var(--ink)",
      display: "flex", alignItems: "flex-end",
    }}>
      {/* decorative gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(140deg, rgba(30,79,216,.55) 0%, rgba(26,26,46,.0) 60%)",
        zIndex: 1,
      }} />
      {/* placeholder image strip */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80"
        alt="Students collaborating"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: .55 }}
      />
      <div style={{
        position: "relative", zIndex: 2,
        padding: "0 clamp(1.5rem,6vw,5rem) 56px",
        maxWidth: 680,
      }}>
        <p style={{ color: "var(--accent)", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", fontSize: 13, marginBottom: 16 }}>
          AI-Powered Education
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
          fontWeight: 900, color: "#fff",
          lineHeight: 1.12, letterSpacing: "-.03em",
          marginBottom: 20,
        }}>
          Empowering Minds<br />with AI
        </h1>
        <p style={{ color: "rgba(255,255,255,.82)", fontSize: 17, maxWidth: 480, lineHeight: 1.7 }}>
          We're bridging the gap between technology and human potential through intelligent education.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
          <button style={{ background: "var(--blue)", color: "#fff", border: "none", borderRadius: 10, padding: "14px 28px", fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 15, cursor: "pointer", boxShadow: "0 4px 20px rgba(30,79,216,.5)" }}>
            Start for free
          </button>
          <button style={{ background: "rgba(255,255,255,.14)", backdropFilter: "blur(8px)", color: "#fff", border: "1.5px solid rgba(255,255,255,.25)", borderRadius: 10, padding: "14px 28px", fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: 15, cursor: "pointer" }}>
            Watch demo
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Mission ───────────────────────────────────────────────────────────────────
function Mission() {
  return (
    <section style={{ padding: "clamp(3rem,7vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
        {/* left */}
        <div className="reveal-left">
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--blue)", fontWeight: 600, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
            <IconRocket /> Our Mission
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.15, letterSpacing: "-.03em", marginBottom: 20 }}>
            Personalized Learning<br />for Everyone
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 15.5, lineHeight: 1.75, maxWidth: 440 }}>
            At EduStream Pro, we believe that education should be as unique as the person receiving it. Our mission is to leverage cutting-edge AI to democratize high-quality, personalized education for learners worldwide, regardless of their background or location.
          </p>
        </div>

        {/* right card */}
        <div className="reveal-right" style={{
          background: "var(--ink)", borderRadius: 20,
          padding: "32px 36px",
          boxShadow: "var(--shadow2)",
        }}>
          <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: 15, marginBottom: 24 }}>AI-Powered Excellence</p>
          {[
            "Adaptive curriculum that evolves with you",
            "Real-time performance analytics",
            "24/7 AI tutor support across all subjects",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: i < 2 ? 20 : 0 }}>
              <div style={{ flexShrink: 0, marginTop: 2, background: "rgba(30,79,216,.25)", borderRadius: "50%", width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IconCheck />
              </div>
              <p style={{ color: "rgba(255,255,255,.82)", fontSize: 15, lineHeight: 1.6 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Divider ───────────────────────────────────────────────────────────────────
function Divider() {
  return <div style={{ maxWidth: 1100, margin: "0 auto", height: 1, background: "linear-gradient(90deg, transparent, var(--cream) 30%, var(--cream) 70%, transparent)" }} />;
}

// ── Story ─────────────────────────────────────────────────────────────────────
function Story() {
  return (
    <section style={{ padding: "clamp(3rem,7vw,6rem) clamp(1.5rem,5vw,4rem)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        {/* image */}
        <div className="reveal-left" style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
            alt="Dashboard on screen"
            style={{ width: "100%", borderRadius: 20, objectFit: "cover", aspectRatio: "4/3", boxShadow: "var(--shadow2)" }}
          />
          {/* floating badge */}
          <div style={{
            position: "absolute", bottom: -16, right: -16,
            background: "var(--blue)", color: "#fff",
            borderRadius: 12, padding: "14px 20px",
            boxShadow: "0 8px 28px rgba(30,79,216,.4)",
            fontSize: 13, fontWeight: 600,
          }}>
            Founded 2021 🎓
          </div>
        </div>

        {/* text */}
        <div className="reveal-right">
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--blue)", fontWeight: 600, fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 20 }}>
            <IconStory /> Our Story
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.2, letterSpacing: "-.03em", marginBottom: 24 }}>
            Born from a simple observation
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 15.5, lineHeight: 1.8, marginBottom: 18 }}>
            EduStream Pro started in a small university library where our founders noticed a recurring problem: students were struggling not because of a lack of effort, but because the "one-size-fits-all" approach to teaching didn't account for individual learning styles.
          </p>
          <p style={{ color: "var(--muted)", fontSize: 15.5, lineHeight: 1.8 }}>
            In 2021, we set out to build a platform that listens. Using advanced machine learning, we developed an engine that understands when a student is stuck and provides the exact resource they need to break through. What started as a small pilot program has now grown into a global community of lifelong learners.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Why section ───────────────────────────────────────────────────────────────
const pillars = [
  { icon: <IconGlobe />, title: "Global Access", desc: "Removing barriers to ensure every person on earth has access to world-class learning materials." },
  { icon: <IconBulb />, title: "Unlocking Potential", desc: "Helping individuals discover their hidden talents and pursue their passions with confidence." },
  { icon: <IconHeart />, title: "Social Impact", desc: "Investing our resources into educational initiatives that support underserved communities." },
];

function Why() {
  return (
    <section style={{
      background: "var(--ink)", borderRadius: 28,
      margin: "0 clamp(1rem,3vw,2.5rem)",
      padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,4rem)",
      textAlign: "center",
    }}>
      <h2 className="reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 900, color: "#fff", letterSpacing: "-.03em", marginBottom: 16 }}>
        Why We Do It
      </h2>
      <p className="reveal" style={{ color: "rgba(255,255,255,.6)", fontSize: 16, maxWidth: 500, margin: "0 auto 56px" }}>
        Our commitment to education stems from the belief that knowledge is the most powerful tool for positive change.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 32, maxWidth: 900, margin: "0 auto" }}>
        {pillars.map((p, i) => (
          <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
            <div style={{
              width: 68, height: 68, borderRadius: "50%",
              background: "linear-gradient(135deg,var(--blue),#4a78f5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
              boxShadow: "0 8px 24px rgba(30,79,216,.4)",
            }}>
              {p.icon}
            </div>
            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17, marginBottom: 12 }}>{p.title}</h3>
            <p style={{ color: "rgba(255,255,255,.55)", fontSize: 14.5, lineHeight: 1.7, maxWidth: 220, margin: "0 auto" }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  useReveal();

  return (
    <>
      <style>{globalStyles}</style>
      
      <main style={{ paddingTop: 64 }}>
        <Hero />
        <Mission />
        <Divider />
        <Story />
        <Why />
        <div style={{ height: 64 }} />
      </main>
    </>
  );
}
