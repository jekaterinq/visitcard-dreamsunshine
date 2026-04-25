/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isOtherPage =
    pathname === "/privacy" || pathname.startsWith("/privacy/");

  return (
    <html lang="ru">
      <body className="bg-[#f8f6f2] text-[#1f1f1f] antialiased">

        {/* 🔙 НАЗАД */}
        {isOtherPage && (
          <button
            onClick={() => (window.location.href = "/")}
            className="fixed top-4 left-4 z-50 bg-white rounded-full px-4 py-2 shadow"
          >
            ← Назад
          </button>
        )}

        {/* 🔘 БУРГЕР */}
        {!isOtherPage && (
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden fixed top-4 left-4 z-50 bg-white rounded-full p-2 shadow"
          >
            {open ? "✕" : "☰"}
          </button>
        )}

        {/* 📱 MOBILE MENU */}
        {!isOtherPage && open && (
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          >
            <div
              className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-[#f8f6f2] px-6 py-8 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-6 text-base mt-30">
                <a href="#about" onClick={() => setOpen(false)}>Обо мне</a>
                <a href="#problems" onClick={() => setOpen(false)}>Проблемы</a>
                <a href="#approach" onClick={() => setOpen(false)}>Подход</a>
                <a href="#cases" onClick={() => setOpen(false)}>Результаты</a>
                <a href="#why" onClick={() => setOpen(false)}>Почему я</a>
                <a href="#faq" onClick={() => setOpen(false)}>Вопросы</a>
                <a href="#contacts" onClick={() => setOpen(false)}>Контакты</a>
              </nav>

              <div className="mt-auto pt-10">
                <a
                  href="https://apnt.app/anna_dreamshine"
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  <Button size="sm" className="w-full">
                    Записаться на консультацию
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="flex">

          {/* 🖥 SIDEBAR */}
          {!isOtherPage && (
            <aside className="hidden md:flex fixed left-0 top-0 h-full w-56 px-6 py-10 flex-col justify-between">
              <nav className="space-y-3 text-sm">
                 <a href="#about" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#C8D8C0] transition">
                <img src="/icons/about.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Обо мне
              </a>

              <a href="#problems" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#C8D8C0] transition">
                <img src="/icons/problems.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Проблемы
              </a>

              <a href="#approach" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#C8D8C0] transition">
                <img src="/icons/approach.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Подход
              </a>

              <a href="#cases" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#C8D8C0] transition">
                <img src="/icons/cases.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Результаты
              </a>

              <a href="#why" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#C8D8C0] transition">
                <img src="/icons/why.svg" alt="" className="w-4 h-4 opacity-70! group-hover:opacity-100" />
                Почему я
              </a>

              <a href="#faq" className="group flex items-center gap-2 text-[#6b6b6b] hover:text-[#C8D8C0] transition">
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
          )}

          {/* 📄 CONTENT */}
          <div className={`w-full ${!isOtherPage ? "md:ml-56" : ""}`}>
            <main>{children}</main>
          </div>

        </div>
      </body>
    </html>
  );
}