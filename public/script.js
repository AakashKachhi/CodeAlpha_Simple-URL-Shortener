const form = document.getElementById("urlForm");
const originalUrlInput = document.getElementById("originalUrl");
const shortenBtn = document.getElementById("shortenBtn");
const message = document.getElementById("message");
const result = document.getElementById("result");
const shortUrl = document.getElementById("shortUrl");
const generatedShortCode = document.getElementById("generatedShortCode");
const copyUrlBtn = document.getElementById("copyUrlBtn");
const copyCodeBtn = document.getElementById("copyCodeBtn");

const redirectForm = document.getElementById("redirectForm");
const shortCodeInput = document.getElementById("shortCode");
const redirectMessage = document.getElementById("redirectMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const originalUrl = originalUrlInput.value.trim();

  message.textContent = "";
  result.classList.add("hidden");
  shortenBtn.disabled = true;
  shortenBtn.textContent = "Shortening...";

  try {
    const response = await fetch("/api/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ originalUrl })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Unable to create short URL");
    }

    shortUrl.textContent = data.shortUrl;
    shortUrl.href = data.shortUrl;
    generatedShortCode.value = data.shortCode;

    result.classList.remove("hidden");
    message.textContent = "Short URL created successfully.";
    form.reset();
  } catch (error) {
    message.textContent = error.message;
  } finally {
    shortenBtn.disabled = false;
    shortenBtn.textContent = "Shorten URL";
  }
});

copyUrlBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(shortUrl.href);
    copyUrlBtn.textContent = "Copied!";

    setTimeout(() => {
      copyUrlBtn.textContent = "Copy";
    }, 1500);
  } catch {
    message.textContent = "Could not copy the URL.";
  }
});

copyCodeBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(generatedShortCode.value);
    copyCodeBtn.textContent = "Copied!";

    setTimeout(() => {
      copyCodeBtn.textContent = "Copy";
    }, 1500);
  } catch {
    message.textContent = "Could not copy the short code.";
  }
});

redirectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const shortCode = shortCodeInput.value.trim();

  if (!shortCode) {
    redirectMessage.textContent = "Please enter a short code.";
    return;
  }

  redirectMessage.textContent = "Opening original URL...";
  window.location.href = `/api/urls/${encodeURIComponent(shortCode)}`;
});
