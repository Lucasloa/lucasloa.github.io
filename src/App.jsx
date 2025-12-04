import React from "react";
import "./index.css";
import ProjectCard from "./components/ProjectCard.jsx";
import EmbedCard from "./components/EmbedCard.jsx";



export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0f0f0", color: "#000", padding: "24px" }}>
      <header style={{ marginBottom: "48px", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>KAKUZENSKY</h1>
        <p style={{ fontSize: "1.25rem", marginTop: "8px" }}>Content Creator & Developer</p>
      </header>

     <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "16px" }}>Content Creation</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <EmbedCard
            title="YouTube Channel"
            embedUrl="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          />
          <EmbedCard
            title="Twitch Channel"
            embedUrl="https://player.twitch.tv/?channel=scartrox_&parent=localhost"
          />
        </div>
      </section>
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "16px" }}>Projects</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <ProjectCard
            title="Business House Events"
            description="Website I helped build"
            imageUrl="/assets/businesshouse-preview.png"
            link="https://businesshouse.dk/events/"
          />
          {/* Add more ProjectCards here */}
        </div>
      </section>
      <footer style={{ textAlign: "center", marginTop: "48px" }}>
        <p>© 2025 KAKUZENSKY</p>
      </footer>
    </div>
  );
}
