import { Button } from "@/components/ui/Button";

export default function Approach() {
  const steps = [
    {
      title: "Диагностика состояния кожи",
      text: "Оцениваю состояние кожи и детально анализирую текущий уход. Часто уже на этом этапе становится понятна главная ошибка, которая мешает коже восстановиться.",
    },
    {
      title: "Поиск причин проблем",
      text: "Кожа не воспаляется просто так. Изучаю образ жизни, привычки, питание и реакции кожи. Ищем реальные триггеры: неподходящие средства, стресс, гормональный фон.",
    },
    {
      title: "Подбор системы ухода",
      text: "Никаких лишних шагов. Подбираю средства и процедуры без перегрузки для кожи — только то, что действительно нужно, с учётом вашего бюджета.",
    },
    {
      title: "Сопровождение и корректировка",
      text: "Я не оставляю вас после консультации. Слежу за динамикой, отвечаю на вопросы и корректирую уход по мере изменений и первых результатов.",
    },
  ];

  return (
    <section id="approach" className="py-24 bg-[#f8f6f2]">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-medium text-[#4c4a4a]">
          Как проходит работа
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-8 text-left">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-[#e5e1da] bg-white"
            >
              <span className="text-sm text-[#c6a96b]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="mt-3 text-[#1f1f1f] font-medium">
                {step.title}
              </p>

              <p className="mt-2 text-[#6b6b6b] text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a href="https://apnt.app/anna_dreamshine" target="_blank">
            <Button>Записаться на консультацию</Button>
          </a>
        </div>

      </div>
    </section>
  );
}