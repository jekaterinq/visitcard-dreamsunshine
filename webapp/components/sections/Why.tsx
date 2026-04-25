"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Why() {
  const points = [
    {
      title: "Системный подход",
      text: "домашний уход и процедуры подбираются чётко, без случайных назначений",
    },
    {
      title: "Внимание к причинам",
      text: "смотрю глубже: образ жизни, привычки, питание, анализы и внутренние триггеры",
    },
    {
      title: "Бережная работа с кожным барьером",
      text: "без перегруза, агрессии и “быстрых решений”, после которых кожа срывается снова",
    },
    {
      title: "Подбор под любой бюджет",
      text: "можно выстроить результативную систему как с проф. средствами, так и с доступными вариантами",
    },
    {
      title: "Рекомендации с перспективой",
      text: "не временная маскировка проблемы, а решения, которые работают надолго",
    },
    {
      title: "Удобный формат работы",
      text: "очные консультации и процедуры в Таллине или онлайн-сопровождение из любого города",
    },
  ];

  const comments = [
    "/images/comments/comment-1.jpg",
    "/images/comments/comment-2.jpg",
    "/images/comments/comment-3.jpg",
    "/images/comments/comment-4.jpg",
    "/images/comments/comment-5.jpg",
    "/images/comments/comment-6.jpg",
    "/images/comments/comment-7.jpg",
    "/images/comments/comment-8.jpg",
    "/images/comments/comment-9.jpg",
    "/images/comments/comment-10.jpg",
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;

    const scrollLeft = sliderRef.current.scrollLeft;
    const width = sliderRef.current.clientWidth * 0.8;

    const index = Math.round(scrollLeft / width);
    setActive(index);
  };

  return (
    <section id="why" className="py-24 bg-[#f8f6f2]">

      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[60%_40%] gap-12 items-start">
          
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium text-[#4c4a4a] text-center lg:text-left">
            Почему выбирают меня
          </h2>

          <p className="mt-6 text-[#6b6b6b] leading-relaxed text-center lg:text-left">
            За годы практики я поняла: коже не нужен хаотичный набор средств.
            <br />
            Ей нужен грамотный, понятный и бережный план действий, подобранный под конкретную ситуацию. Именно так я и работаю.
          </p>

          <div className="mt-10 space-y-4 text-left">
            {points.map((item, i) => (
              <p key={i} className="flex gap-3 leading-relaxed">
                <span className="text-[#c6a96b]">—</span>
                <span className="text-[#6b6b6b]">
                  <strong className="text-[#4c4a4a] font-semibold">
                    {item.title}
                  </strong>{" "}
                  — {item.text}
                </span>
              </p>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-2xl border border-[#e5e1da] bg-white">
              <p className="font-medium text-[#1f1f1f]">
                Очная консультация
              </p>
              <p className="text-sm text-[#6b6b6b] mt-1">
                Таллин, Katusepapi 6
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-[#e5e1da] bg-white">
              <p className="font-medium text-[#1f1f1f]">
                Онлайн-консультация
              </p>
              <p className="text-sm text-[#6b6b6b] mt-1">
                Для клиентов из любого города
              </p>
            </div>
          </div>

          <div className="mt-12 text-center lg:text-left">
            <a href="https://apnt.app/anna_dreamshine" target="_blank">
              <Button>Записаться на консультацию</Button>
            </a>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block h-[900px] overflow-hidden relative pl-6">

          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#f8f6f2] to-transparent z-10" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#f8f6f2] to-transparent z-10" />

          <div className="flex flex-col gap-6 animate-vertical">
            {[...comments, ...comments].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="отзыв"
                width={260}
                height={140}
                className="rounded-xl shadow-md object-cover w-full"
              />
            ))}
          </div>

        </div>

        {/* MOBILE */}
        <div className="mt-16 lg:hidden">

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 no-scrollbar"
          >
            {comments.map((src, i) => (
              <div key={i} className="snap-start flex-shrink-0 w-[80%]">
                <Image
                  src={src}
                  alt="отзыв"
                  width={300}
                  height={160}
                  className="rounded-xl shadow-md object-cover w-full"
                />
              </div>
            ))}
          </div>

          {/* ТОЧКИ */}
          <div className="flex justify-center gap-2 mt-4">
            {comments.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === active
                    ? "bg-[#4c4a4a] w-5"
                    : "bg-[#d6d3cd] w-2"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}