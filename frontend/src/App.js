import { useEffect } from "react";
import "@/App.css";

function App() {
  useEffect(() => {
    window.location.replace("/clioc.html");
  }, []);

  return (
    <div
      data-testid="clioc-redirect"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0F0D",
        color: "#2BEA8C",
        fontFamily: "Inter, sans-serif",
      }}
    >
      Carregando CLIOC…
    </div>
  );
}

export default App;
