import { Button } from "@/components/ui/Button";

export default function Approach() {
  const steps = [
    {
      title: "Диагностика кожи и разбор ухода",
      text: "Оцениваю состояние кожи и провожу подробную диагностику. Детально разбираю ваш домашний уход, изучаю составы средств и нахожу ошибки. Часто уже на этом этапе становится понятно, что мешает коже восстановиться.",
    },
    {
      title: "Поиск причин изменений кожи",
      text: "На коже редко что-то появляется просто так. Изучаю образ жизни, привычки, питание, стресс, при необходимости анализы и историю изменений. Ищем реальные причины, которые влияют на состояние кожи.",
    },
    {
      title: "Подбор системы ухода и тактики",
      text: "Подбираю только нужные средства и процедуры без перегруза кожи и под ваш бюджет. Работаю мягко и бережно, с сохранением кожного барьера. Мой подход — не быстрый стресс для кожи, а стабильный и здоровый результат.",
    },
    {
      title: "Сопровождение и путь к результату",
      text: "Я не оставляю клиента одного. Слежу за динамикой кожи, отвечаю на вопросы, корректирую уход и даю дальнейшие рекомендации. Мне важен не разовый эффект, а стойкий результат надолго.",
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