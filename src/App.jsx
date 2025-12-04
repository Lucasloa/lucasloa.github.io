import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // <-- make sure this is here

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold">KAKUZENSKY</h1>
        <p className="text-xl mt-2">Content Creator & Developer</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Content Creation</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <h3 className="p-4 font-bold text-lg">YouTube Channel</h3>
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800">
            <h3 className="p-4 font-bold text-lg">Twitch Channel</h3>
            <iframe
              className="w-full h-64"
              src="https://player.twitch.tv/?channel=scartrox_&parent=lucasloa.github.io"
              title="Twitch"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="https://businesshouse.dk/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow"
          >
            <img
              src="/assets/businesshouse-preview.png"
              alt="Business House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Business House Events</h3>
              <p>Website I helped build</p>
            </div>
          </a>
        </div>
      </section>

      <footer className="text-center mt-12">
        <p>© 2025 KAKUZENSKY</p>
      </footer>
    </div>
  );
}

export default App;
