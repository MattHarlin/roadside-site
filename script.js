const API = "";

async function sendRequest() {
  const name = document.getElementById("name").value;
  const issue = document.getElementById("issue").value;

  if (!name || !issue) {
    document.getElementById("status").innerText = "Fill all fields";
    return;
  }

  try {
    const res = await fetch(`${API}/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, issue })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Server error");
    }

    document.getElementById("status").innerText = "Request sent!";
  } catch (err) {
    console.error("ERROR:", err);
    document.getElementById("status").innerText = "Error sending request";
  }
}
