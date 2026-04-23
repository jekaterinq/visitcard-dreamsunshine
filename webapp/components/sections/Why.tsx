import { Button } from "@/components/ui/Button";
import Image from "next/image";

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

  const left = [
    { src: "/images/comment-test.jpg", y: -220, rotate: "-rotate-6", x: "left-4" },
    { src: "/images/comment-test.jpg", y: 0, rotate: "rotate-3", x: "left-10" },
    { src: "/images/comment-test.jpg", y: 220, rotate: "-rotate-3", x: "left-6" },
  ];

  const right = [
    { src: "/images/comment-test.jpg", y: -200, rotate: "rotate-3", x: "right-4" },
    { src: "/images/comment-test.jpg", y: 40, rotate: "-rotate-4", x: "right-10" },
    { src: "/images/comment-test.jpg", y: 240, rotate: "rotate-2", x: "right-6" },
  ];

  return (
    <section id="why" className="py-24 bg-[#f8f6f2] relative overflow-visible">

      {/* DECOR */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full px-[18%]">

          {left.map((item, idx) => (
            <Image
              key={idx}
              src={item.src}
              alt=""
              width={220}
              height={120}
              style={{
                top: "50%",
                transform: `translateY(-50%) translateY(${item.y}px)`
              }}
              className={`absolute ${item.x} ${item.rotate} shadow-md rounded-xl w-[12vw] min-w-[140px] max-w-[400px] h-auto`}
            />
          ))}

          {right.map((item, idx) => (
            <Image
              key={idx}
              src={item.src}
              alt=""
              width={220}
              height={120}
              style={{
                top: "50%",
                transform: `translateY(-50%) translateY(${item.y}px)`
              }}
              className={`absolute ${item.x} ${item.rotate} shadow-md rounded-xl w-[12vw] min-w-[140px] max-w-[400px] h-auto`}
            />
          ))}

        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="bg-[#f3efe9]/50 p-8 md:p-10 rounded-2xl backdrop-blur-sm">

          <h2 className="text-3xl md:text-4xl font-medium text-[#4c4a4a] text-center">
            Почему выбирают меня
          </h2>

          <p className="mt-6 text-[#6b6b6b] leading-relaxed text-center">
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

          <div className="mt-12 text-center">
            <a href="https://apnt.app/anna_dreamshine" target="_blank">
              <Button>Записаться на консультацию</Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}