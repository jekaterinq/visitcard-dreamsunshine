import { Button } from "@/components/ui/Button";

export default function Why() {
  const points = [
    "Индивидуальный подход",
    "Работа с причинами",
    "Деликатное восстановление кожи",
    "Долгосрочный результат",
  ];

  return (
    <section id="why" className="py-24 bg-[#f8f6f2]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <p className="text-sm text-[#7a9c8f] mb-4">
          Преимущества
        </p>

        <h2 className="text-3xl md:text-4xl font-medium">
          Почему выбирают меня
        </h2>

        <div className="mt-10 space-y-4 text-left">
          {points.map((p, i) => (
            <p key={i} className="flex gap-3">
              <span className="text-[#c6a96b]">—</span>
              <span>{p}</span>
            </p>
          ))}
        </div>

        <div className="mt-12">
          <a href="https://apnt.app/anna_dreamshine" target="_blank">
            <Button>Записаться</Button>
          </a>
        </div>

      </div>
    </section>
  );
}