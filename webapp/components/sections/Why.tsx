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

  return (
    <section id="why" className="py-24 bg-[#f8f6f2] relative overflow-hidden">

      <div className="hidden lg:block">
        <Image
          src="/images/comment-test.jpg"
          alt=""
          width={220}
          height={120}
          className="absolute left-10 top-20 -rotate-6 shadow-md rounded-xl"
        />

        <Image
          src="/images/comment-test.jpg"
          alt=""
          width={220}
          height={120}
          className="absolute left-20 top-52 rotate-3 shadow-md rounded-xl"
        />

        <Image
          src="/images/comment-test.jpg"
          alt=""
          width={220}
          height={120}
          className="absolute left-5 top-96 -rotate-2 shadow-md rounded-xl"
        />
      </div>

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-medium text-[#4c4a4a]">
          Почему выбирают меня
        </h2>

        {/* Новый вводный текст */}
        <p className="mt-6 text-[#6b6b6b] leading-relaxed">
          За годы практики я поняла: коже не нужен хаотичный набор средств.
          <br />
          Ей нужен грамотный, понятный и бережный план действий, подобранный под конкретную ситуацию. Именно так я и работаю.
        </p>

        {/* Пункты */}
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

        {/* Форматы работы */}
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

        {/* Кнопка */}
        <div className="mt-12">
          <a href="https://apnt.app/anna_dreamshine" target="_blank">
            <Button>Записаться на консультацию</Button>
          </a>
        </div>
      </div>

      <div className="hidden lg:block">
        <Image
          src="/images/comment-test.jpg"
          alt=""
          width={220}
          height={120}
          className="absolute right-10 top-32 rotate-3 shadow-md rounded-xl"
        />

        <Image
          src="/images/comment-test.jpg"
          alt=""
          width={220}
          height={120}
          className="absolute right-20 top-72 rotate-[-4deg] shadow-md rounded-xl"
        />

        <Image
          src="/images/comment-test.jpg"
          alt=""
          width={220}
          height={120}
          className="absolute right-5 top-130 rotate-2 shadow-md rounded-xl"
        />
      </div>
    </section>
  );
}