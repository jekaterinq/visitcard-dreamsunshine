"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function Sidebar() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full w-56 px-6 py-10 flex-col justify-between">

      <nav className="space-y-3 text-sm">
        <a href="#about">Обо мне</a>
        <a href="#problems">Проблемы</a>
        <a href="#approach">Подход</a>
        <a href="#cases">Результаты</a>
        <a href="#why">Почему я</a>
        <a href="#faq">Вопросы</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <a href="https://apnt.app/anna_dreamshine" target="_blank">
        <Button size="sm">Записаться</Button>
      </a>

    </aside>
  );
}