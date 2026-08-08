export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          background: "#0a0a0a",
          color: "#ededed",
        }}
      >
        <main style={{ textAlign: "center", padding: "2rem" }}>
          <p style={{ color: "#4d6bff", fontSize: "0.875rem" }}>404</p>
          <h1 style={{ fontSize: "2rem", margin: "0.5rem 0" }}>
            Page not found
          </h1>
          <a
            href="/"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.5rem 1.5rem",
              border: "1px solid #262626",
              borderRadius: "9999px",
              color: "#ededed",
              textDecoration: "none",
              fontSize: "0.875rem",
            }}
          >
            Back home
          </a>
        </main>
      </body>
    </html>
  );
}
