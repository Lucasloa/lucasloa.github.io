import React from "react";

export default function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        flex: "1 1 300px",
        display: "block",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        overflow: "hidden",
        backgroundColor: "#fff",
        textDecoration: "none",
        color: "#000",
        transition: "box-shadow 0.2s",
        marginBottom: "16px",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "192px", objectFit: "cover" }}
      />
      <div style={{ padding: "16px" }}>
        <h3 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "8px" }}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
