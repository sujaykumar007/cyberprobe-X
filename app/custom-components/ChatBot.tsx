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
    console.log("✅ ChatBot component mounted")

    // Function to load a script dynamically
    const loadScript = (id: string, src: string, callback?: () => void) => {
      if (document.getElementById(id)) {
        console.log(`ℹ️ Script ${id} already exists`)
        if (callback) callback()
        return
      }

      const script = document.createElement("script")
      script.id = id
      script.src = src
      script.async = true
      document.body.appendChild(script)

      script.onload = () => {
        console.log(`✅ Script ${id} loaded successfully`)
        if (callback) callback()
      }

      script.onerror = () => {
        console.error(` Failed to load script: ${src}`)
      }
    }

   
    loadScript("botpress-webchat", "https://cdn.botpress.cloud/webchat/v2.2/inject.js", () => {
    
      loadScript("botpress-config", "https://files.bpcontent.cloud/2025/03/10/09/20250310091526-8VRBLBG7.js", initializeBotPress)
    })
  }, [])

  const initializeBotPress = () => {
    if (!window.botpressWebChat) {
      console.warn("BotPress WebChat is not available yet. Retrying...")

      let retries = 0
      const interval = setInterval(() => {
        if (window.botpressWebChat) {
          clearInterval(interval)
          console.log("BotPress WebChat initialized!")
          setBotLoaded(true)
          setupBotPress()
        } else {
          retries++
          if (retries > 10) {
            clearInterval(interval)
         
          }
        }
      }, 500) 
      return
    }

    setupBotPress()
  }

  const setupBotPress = () => {
    window.botpressWebChat.init({
      configUrl: "https://files.bpcontent.cloud/2025/03/10/09/20250310091527-9UZXGDSE.json",
      lazyLoad: false,
      hideWidget: false,
      stylesheet: "https://cdn.jsdelivr.net/npm/@botpress/webchat@0.27.0/css/style.css",
      containerStyle: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      },
    })

 
    setTimeout(() => {
      window.botpressWebChat.sendEvent({ type: "show" })
    }, 2000)
  }

  return null
}
