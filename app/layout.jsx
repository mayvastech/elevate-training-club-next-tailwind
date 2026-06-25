import "./globals.css";

export const metadata = {
  title: "Elevate Training Club | Premium Fitness in Shoreditch",
  description:
    "A fictional premium gym website built as a freelance web development portfolio project.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
