export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        padding: 0,
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <iframe
        src="/itlab.html"
        title="ITLab"
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
          display: "block",
          margin: 0,
          padding: 0,
        }}
      />
    </main>
  );
}