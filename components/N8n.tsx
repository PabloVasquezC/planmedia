"use client"
import { useEffect } from "react"
import "@n8n/chat/style.css";


export function N8nChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://n8n.fluxia.cl/webhook/da45a125-9712-48f8-b2bd-6d9043fbef4a/chat",
        mode: "window",
        chatInputKey: "chatInput",
        chatSessionKey: "sessionId",
        loadPreviousSession: true,
        showWelcomeScreen: false,
        initialMessages: [
          "👋 Hola! Soy el asistente virtual de Plan Media y estoy aquí para ayudarte."
        ],
        i18n: {
          en: {
            title: "Plan Media.",
            subtitle: "Asistencia Virtual",
            inputPlaceholder: "Escribe aqui..",
          },
        },
      });
    });
  }, []);

  return null;
}
