"use client"

import "../app/globals.css"
import { useEffect } from "react";
export default function LanguageSwitcher() {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=TranslateInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    (window as any).TranslateInit = () => {
      //@ts-ignore
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      // Hide unwanted iframe after translation script loads
      setTimeout(() => {
        const iframe = document.querySelector("iframe.skiptranslate");
        if (iframe) {
          //@ts-ignore
          iframe.style.display = "none";
        }
      }, 1000);
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div className="relative">
      <div id="google_translate_element" className="border px-4 py-2 rounded cursor-pointer text-gray-800 bg-white shadow-md"></div>
    </div>
  );
}
