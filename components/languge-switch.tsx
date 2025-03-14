
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
  }
}

export default function LanguageSwitcher() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        // script.src = "//translate.google.com/translate_a/element.js?cb=TranslateInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    (window as any).TranslateInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div className="relative">
      <div id="google_translate_element" className="border px-4 py-2 rounded cursor-pointer text-gray-800 bg-white shadow-md"></div>
    </div>
  );
}
