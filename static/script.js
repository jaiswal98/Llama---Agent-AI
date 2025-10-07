const chatButton = document.getElementById("chat-button");
const chatContainer = document.getElementById("chat-container");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

chatButton.addEventListener("click", () => {
  chatContainer.classList.toggle("hidden");
});

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  userInput.value = "";

  const response = await fetch("/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  const botReply = data.choices[0].message.content.trim();
  appendMessage("bot", botReply);
}

function appendMessage(role, text) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", role);
  msgDiv.innerHTML = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
