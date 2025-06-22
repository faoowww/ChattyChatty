function addBubble() {
  const text = document.getElementById('chatInput').value;
  const side = document.getElementById('sideSelect').value;

  if (text.trim() === "") return;

  const chat = document.getElementById("chat");
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", side);
  bubble.innerText = text;
  chat.appendChild(bubble);

  document.getElementById('chatInput').value = "";
  chat.scrollTop = chat.scrollHeight;
}
function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().slice(0, 5); // Format HH:MM
}
