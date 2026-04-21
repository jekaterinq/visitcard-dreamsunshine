import { Button } from "@/components/ui/Button";

export default function Why() {
  const points = [
    "Системный подход, а не хаотичное назначение средств",
    "Внимание к причинам, а не к последствиям",
    "Деликатная работа с чувствительной кожей",
    "Подбор средств и процедур под любой бюджет — без навязывания",
    "Долгосрочная стратегия: результат на годы, а не на месяц",
    "Возможность онлайн-консультации для клиентов из других городов",
  ];

  return (
    <section id="why" className="py-24 bg-[#f8f6f2]">
      <div className="max-w-3xl mx-auto px-4 text-center">


        <h2 className="text-3xl md:text-4xl font-medium text-[#4c4a4a]">
          Почему выбирают меня
        </h2>

        {/* Вводный текст */}
        <p className="mt-6 text-[#6b6b6b] leading-relaxed">
          За 6 лет практики я поняла: <u>клиенты устали от косметологов,
          которые назначают процедуры «на потоке»</u>. Поэтому мой подход
          выстроен иначе — <br /> через <strong>понимание, системность и бережную работу с кожей</strong>.
        </p>

        {/* Пункты */}
        <div className="mt-10 space-y-4 text-left">
          {points.map((p, i) => (
            <p key={i} className="flex gap-3">
              <span className="text-[#c6a96b]">—</span>
              <span className="text-[#6b6b6b]">{p}</span>
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
    </section>
  );
}