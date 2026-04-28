import "./globals.css";

export const metadata = {
  title: "Анна | Косметолог",
  description: "Уход за кожей и консультации",
  icons: {
    icon: "images/main-icon-2.png", // файл в public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#f8f6f2] text-[#1f1f1f] antialiased">
        {children}
      </body>
    </html>
  );
}