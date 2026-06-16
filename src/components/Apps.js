import React from "react";

const Apps = () => {
  const tradingApps = [
    {
      name: "Kite",
      desc: "Fast and feature-rich trading platform for web and mobile",
      icon: "📈",
      bg: "#E6F1FB",
      link: "https://kite.zerodha.com",
    },
    {
      name: "Coin",
      desc: "Invest in direct mutual funds with zero commission",
      icon: "🪙",
      bg: "#EAF3DE",
      link: "https://coin.zerodha.com",
    },
    {
      name: "Console",
      desc: "Your complete account and portfolio management hub",
      icon: "💼",
      bg: "#FAEEDA",
      link: "https://console.zerodha.com",
    },
    {
      name: "Streak",
      desc: "Algo trading platform — no coding required",
      icon: "⚡",
      bg: "#EEEDFE",
      link: "https://streak.tech",
    },
  ];

  const researchApps = [
    {
      name: "Varsity",
      desc: "Free stock market education — beginner to advanced",
      icon: "📚",
      bg: "#FAECE7",
      link: "https://varsity.zerodha.com",
    },
    {
      name: "Sentinel",
      desc: "Set alerts on charts and market events",
      icon: "🔔",
      bg: "#E1F5EE",
      link: "https://sentinel.zerodha.com",
    },
    {
      name: "Nudge",
      desc: "Timely insights and nudges to improve your trades",
      icon: "💡",
      bg: "#FBEAF0",
      link: "https://nudge.zerodha.com",
    },
    {
      name: "Tax P&L",
      desc: "Generate your capital gains report for tax filing",
      icon: "🧾",
      bg: "#F1EFE8",
      link: "https://console.zerodha.com/tax-pnl",
    },
  ];

  return (
    <div className="apps-container" style={{ padding: "1.5rem" }}>
      <h1 style={{ fontSize: "22px", fontWeight: "500", marginBottom: "0.25rem" }}>
        Apps
      </h1>
      <p style={{ color: "#666", fontSize: "14px", marginBottom: "1.5rem" }}>
        Tools and platforms to enhance your trading experience
      </p>

      {/* Trading Tools */}
      <p style={{ fontSize: "13px", fontWeight: "500", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
        Trading tools
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "2rem" }}>
        {tradingApps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>

      {/* Research & Education */}
      <p style={{ fontSize: "13px", fontWeight: "500", color: "#888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem" }}>
        Research & education
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
        {researchApps.map((app, index) => (
          <AppCard key={index} app={app} />
        ))}
      </div>
    </div>
  );
};

const AppCard = ({ app }) => {
  return (
    <div style={{
      background: "#fff",
      border: "0.5px solid #e0e0e0",
      borderRadius: "12px",
      padding: "1.25rem",
      cursor: "pointer",
      transition: "border-color 0.15s",
    }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "#bbb"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "#e0e0e0"}
    >
      {/* Icon */}
      <div style={{
        width: "48px",
        height: "48px",
        borderRadius: "8px",
        background: app.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "22px",
        marginBottom: "12px",
      }}>
        {app.icon}
      </div>

      {/* Name */}
      <p style={{ fontSize: "15px", fontWeight: "500", margin: "0 0 4px", color: "#111" }}>
        {app.name}
      </p>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "#666", margin: "0 0 12px", lineHeight: "1.5" }}>
        {app.desc}
      </p>

      {/* Button */}
      <button
        onClick={() => window.open(app.link, "_blank")}
        style={{
          fontSize: "12px",
          padding: "4px 12px",
          borderRadius: "8px",
          border: "0.5px solid #ccc",
          background: "transparent",
          color: "#555",
          cursor: "pointer",
        }}
      >
        Open
      </button>
    </div>
  );
};

export default Apps;