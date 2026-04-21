export default function FAQ() {
  const items = [
    {
      q: "С чего начать, если я никогда не была у косметолога?",
      a: "Начните с консультации — это первый шаг. Мы разберём состояние кожи и я объясню, что происходит. Без обязательных процедур.",
    },
    {
      q: "Нужно ли приходить очно или можно онлайн?",
      a: "Доступны оба формата. Очный приём — в Таллине. Онлайн — вы присылаете фото, я составляю систему ухода.",
    },
    {
      q: "Через сколько будет результат?",
      a: "Первые изменения через 3–4 недели. Устойчивый результат — 2–3 месяца.",
    },
    {
      q: "Вы работаете только с проблемной кожей?",
      a: "Нет, работаю с любым типом кожи — чувствительной, возрастной, обезвоженной и т.д.",
    },
    {
      q: "Работаете ли вы с мужской кожей?",
      a: "Да, учитываю особенности мужской кожи.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#f3efe9]">
      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-medium text-center text-[#4c4a4a]">
          Частые вопросы
        </h2>

        <div className="mt-12 space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="p-5 rounded-2xl border border-[#e5e1da] bg-white"
            >
              <summary className="cursor-pointer font-medium text-[#c6a96b]">
                {item.q}
              </summary>

              <p className="mt-3 text-sm! text-[#6b6b6b] leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}