import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "The Andrew Company",
  description: "We turn blank whiteboards into big things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
