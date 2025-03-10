"use client"

import { useEffect, useState } from "react"

declare global {
  interface Window {
    botpressWebChat?: any
  }
}

export default function ChatBot() {
  const [botLoaded, setBotLoaded] = useState(false)

  useEffect(() => {
    console.log("ChatBot component mounted")

    // Check if script already exists
    if (document.getElementById("botpress-script")) {
      console.log("BotPress script already exists")
      return
    }

    const script = document.createElement("script")
    script.id = "botpress-script"
    script.src = "https://cdn.botpress.cloud/webchat/v2/inject.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      console.log("BotPress script loaded, checking botpressWebChat...")

      // Poll every 500ms to check if botpressWebChat is available
      const checkBotPress = setInterval(() => {
        if (window.botpressWebChat) {
          clearInterval(checkBotPress) // Stop polling
          console.log("BotPress WebChat initialized!")
          setBotLoaded(true)

          window.botpressWebChat.init({
            configUrl: "https://files.bpcontent.cloud/2025/03/10/09/20250310091527-9UZXGDSE.json",
            lazyLoad: false,
            hideWidget: false,
            stylesheet: "https://cdn.jsdelivr.net/npm/@botpress/webchat@0.27.0/css/style.css",
            containerStyle: {
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000
            }
          })

          // Show the chatbot after initialization
          setTimeout(() => {
            window.botpressWebChat.sendEvent({ type: "show" })
          }, 2000)
        }
      }, 500) // Check every 500ms

      // Stop checking after 10 seconds
      setTimeout(() => {
        clearInterval(checkBotPress)
        if (!botLoaded) {
          console.error("❌ BotPress WebChat did not initialize.")
        }
      }, 10000)
    }
  }, [])

  return null
}
