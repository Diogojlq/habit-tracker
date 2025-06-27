import React from "react";

export default function RegisterPage() {
  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <form>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: 4 }}>Username</label>
          <input type="text" id="username" name="username" required style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: 4 }}>Email</label>
          <input type="email" id="email" name="email" required style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: 4 }}>Password</label>
          <input type="password" id="password" name="password" required style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }} />
        </div>
        <button type="submit" style={{ width: "100%", padding: 10, borderRadius: 4, background: "#0070f3", color: "#fff", border: "none", fontWeight: "bold" }}>
          Register
        </button>
      </form>
    </div>
  );
}
