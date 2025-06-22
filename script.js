function addBubble() {
  const text = document.getElementById('chatInput').value;
  const side = document.getElementById('sideSelect').value;
  const delay = parseInt(document.getElementById('delayInput').value) || 0;
  const timeInput = document.getElementById('timeInput').value;
  const timestamp = timeInput || getCurrentTime();

  if (text.trim() === '') return;

  setTimeout(() => {
    const chat = document.getElementById("chat");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble", side);

    const content = document.createElement("div");
    content.textContent = text;

    const time = document.createElement("div");
    time.textContent = timestamp;
    time.style.fontSize = "0.7em";
    time.style.color = "#888";
    time.style.marginTop = "5px";

    bubble.appendChild(content);
    bubble.appendChild(time);
    chat.appendChild(bubble);

    document.getElementById('chat').scrollTop = chat.scrollHeight;
  }, delay);

  // Reset input
  document.getElementById('chatInput').value = '';
  document.getElementById('delayInput').value = '';
  document.getElementById('timeInput').value = '';
}
function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().slice(0, 5); // Format HH:MM
}
