const API_BASE =
  window.location.hostname === "localhost"
    ? "http://localhost:5000" : "https://vs-tailors.onrender.com";


// ===== BACK BUTTON =====
function goBack() {
  window.location.href = "index.html"; // change to your actual home page
}

// ===== TAB SWITCHING =====
const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

loginTab.addEventListener("click", () => {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
  loginForm.classList.add("active");
  signupForm.classList.remove("active");
});

signupTab.addEventListener("click", () => {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  signupForm.classList.add("active");
  loginForm.classList.remove("active");
});

// ===== HELPER FUNCTION TO SHOW MESSAGES =====
function showMsg(form, text, type = "success", duration = 2500) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("msg", type);
  msgDiv.innerText = text;
  form.appendChild(msgDiv);
  setTimeout(() => msgDiv.remove(), duration);
}

// ===== SIGNUP (Optional) =====
signupForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (!signupForm.checkValidity()) {
    signupForm.reportValidity();
    return;
  }

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      showMsg(signupForm, "✅ Signup Successful! You can now login.", "success", 2500);
      setTimeout(() => loginTab.click(), 2500);
    } else {
      showMsg(signupForm, `❌ ${data.message}`, "error", 3000);
    }
  } catch (err) {
    console.error(err);
    showMsg(signupForm, "❌ Server Error. Try again.", "error", 3000);
  }
});

// ===== LOGIN (Optional, Not Compulsory) =====
loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  if (!loginForm.checkValidity()) {
    loginForm.reportValidity();
    return;
  }

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
    // ✅ Save token for future use
    localStorage.setItem("token", data.token);
    localStorage.setItem("loggedIn", "true"); // <-- add this

    // Show message
    showMsg(loginForm, "🎉 Login Successful! Redirecting...", "success", 2000);

    // Redirect to home after 2s
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
    
    } else {
      showMsg(loginForm, `❌ ${data.message}`, "error", 3000);
    }
  } catch (err) {
    console.error(err);
    showMsg(loginForm, "❌ Server Error. Try again.", "error", 3000);
  }
});
