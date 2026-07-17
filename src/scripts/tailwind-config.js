tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-dim": "#dadad5",
        "surface-variant": "#e3e3de",
        "error": "#ba1a1a",
        "secondary-fixed-dim": "#c5c7bf",
        "on-surface": "#1a1c19",
        "primary-container": "#004d40",
        "inverse-surface": "#2f312e",
        "secondary-container": "#dee1d8",
        "secondary-fixed": "#e1e3db",
        "on-surface-variant": "#3f4945",
        "secondary": "#5c5f59",
        "on-surface-variant": "#3f4945",
        "on-secondary-fixed": "#191d17",
        "on-primary-fixed-variant": "#065043",
        "on-secondary-container": "#60645d",
        "on-tertiary-fixed": "#181d11",
        "tertiary-fixed": "#e0e5d1",
        "on-tertiary-container": "#adb2a0",
        "surface-container": "#eeeee9",
        "background": "#fafaf4",
        "inverse-on-surface": "#f1f1ec",
        "tertiary": "#2a2f21",
        "primary-fixed": "#afefdd",
        "tertiary-container": "#404537",
        "surface-container-low": "#f4f4ee",
        "on-primary-container": "#7ebdac",
        "surface-tint": "#29695b",
        "primary": "#00342b",
        "surface-bright": "#fafaf4",
        "error-container": "#ffdad6",
        "on-primary-fixed": "#00201a",
        "surface-container-lowest": "#ffffff",
        "primary-fixed-dim": "#94d3c1",
        "on-secondary": "#ffffff",
        "outline": "#707975",
        "on-primary": "#ffffff",
        "on-secondary-fixed-variant": "#444841",
        "surface": "#fafaf4",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e3e3de",
        "inverse-primary": "#94d3c1",
        "outline-variant": "#bfc9c4",
        "surface-container-high": "#e8e8e3",
        "on-error": "#ffffff",
        "tertiary-fixed-dim": "#c4c9b6",
        "on-background": "#1a1c19",
        "on-error-container": "#93000a",
        "on-tertiary-fixed-variant": "#43493a"
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px"
      },
      spacing: {
        "content-gap": "32px",
        "gutter": "24px",
        "margin-desktop": "80px",
        "margin-mobile": "20px",
        base: "8px",
        "section-gap": "120px"
      },
      fontFamily: {
        headline: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "headline-lg-mobile": ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "1.2", letterSpacing: "0.1em", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "display-lg": ["72px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-md": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }]
      }
    }
  }
};
