export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, minHeight: "100vh" }}>
      <iframe
        src="/itlab.html"
        title="ITLab"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          display: "block",
        }}
      />
    </main>
  );
}