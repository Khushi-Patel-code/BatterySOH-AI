import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "./config";

// Defines the main functional components for the chat interface
export default function ChatBox() {
  // State for the text currently in the message input field
  const [input, setInput] = useState("");
  // State to store the entire conversation history (array of message objects)
  const [messages, setMessages] = useState([]);

  // Handles sending the message and updating the UI immediately
  // Call the API, and then update the UI with the response
  const sendMessage = async () => {
    // Exit if the input field is empty or just whitespace
    if (!input.trim()) return;

    // Create a new message list including the user's latest input
    const newMessages = [...messages, { sender: "user", text: input }];
    // Update the state immediately to show the user's message
    setMessages(newMessages);

    try {
      // Make an asynchronous POST request to the chat API endpoint
      const res = await axios.post(`${API_URL}/chat`, { question: input });
      // Determine the source of the response for transparency
      const source = res.data.source || "chatgpt";
      // Create a display label based on the source type
      const label =
        source === "model" ? "📊 Model" : source === "chatgpt" ? "🤖 ChatGPT" : "🧩 System";

      // Updates the state again to include the bot's responses
      setMessages([
        ...newMessages,
        { sender: "bot", text: res.data.answer || "No response received.", source, label },
      ]);
    } catch (err) {
      // Handles API error by displaying an error message in the chat
      console.error("Chat Error:", err);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Error: Could not connect to backend.", source: "error" },
      ]);
    }

    // Clear the input field after sending
    setInput("");
  };


  return (
    // Main container for the chat interface
    <div style={styles.container}>
      <h2>🔋 Battery SOH Chat Assistant</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div key={i} style={msg.sender === "user" ? styles.user : styles.bot}>
            {msg.sender === "bot" && msg.label && (
              <p style={styles.label}>{msg.label}</p>
            )}
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about SOH or battery health..."
        />
        <button onClick={sendMessage} style={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}

// Object containing all inline CSS styles
const styles = {
  container: { width: "420px", margin: "2rem auto", fontFamily: "Arial" },
  chatBox: {
    border: "1px solid #ccc",
    padding: "10px",
    height: "400px",
    overflowY: "auto",
    marginBottom: "10px",
    background: "#f9f9f9",
    borderRadius: "10px",
  },
  user: {
    textAlign: "right",
    background: "#d1e7dd",
    padding: "8px",
    margin: "5px",
    borderRadius: "10px",
  },
  bot: {
    textAlign: "left",
    background: "#f8d7da",
    padding: "8px",
    margin: "5px",
    borderRadius: "10px",
  },
  label: {
    fontSize: "0.8rem",
    color: "#555",
    marginBottom: "2px",
    fontWeight: "bold",
  },
  inputRow: { display: "flex", gap: "10px" },
  input: { flex: 1, padding: "8px" },
  button: {
    padding: "8px 16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
};
