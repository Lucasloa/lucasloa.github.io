import React from "react";

export default function EmbedCard({ title, embedUrl }) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800 mb-6">
      <h3 className="text-lg font-bold p-4">{title}</h3>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
