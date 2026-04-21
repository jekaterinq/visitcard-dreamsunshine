/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/Button";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Косметология Анны",
  description: "Системный подход к здоровью кожи",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-[#f8f6f2] text-[#1f1f1f] antialiased">

        <div className="flex">
          
          {/* SIDEBAR */}
          <aside className="hidden md:flex fixed left-0 top-0 h-full w-56 px-6 py-10 flex-col justify-between">
            
            <nav className="space-y-3 text-sm">
              <a href="#about" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#7a9c8f] transition">
                <img src="/icons/about.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Обо мне
              </a>

              <a href="#problems" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#7a9c8f] transition">
                <img src="/icons/problems.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Проблемы
              </a>

              <a href="#approach" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#7a9c8f] transition">
                <img src="/icons/approach.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Подход
              </a>

              <a href="#cases" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#7a9c8f] transition">
                <img src="/icons/cases.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Результаты
              </a>

              <a href="#why" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#7a9c8f] transition">
                <img src="/icons/why.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Почему я
              </a>

              <a href="#faq" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#7a9c8f] transition">
                <img src="/icons/faq.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Вопросы
              </a>

              <a href="#contacts" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#C8D8C0] transition">
                <img src="/icons/contacts.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Контакты
              </a>
            </nav>

            <a href="https://apnt.app/anna_dreamshine" target="_blank">
              <Button size="sm">Записаться на консультацию</Button>
            </a>

          </aside>

          <div className="w-full md:ml-56">
            <main>{children}</main>
          </div>

        </div>

      </body>
    </html>
  );
}