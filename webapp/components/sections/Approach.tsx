import { Button } from "@/components/ui/Button";

export default function Approach() {
  const steps = [
    "Диагностика состояния кожи",
    "Поиск причин проблем",
    "Подбор системы ухода",
    "Сопровождение и корректировка",
  ];

  return (
    <section id="approach" className="py-24 bg-[#f8f6f2]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <p className="text-sm text-[#7a9c8f] mb-4">
          Подход
        </p>

        <h2 className="text-3xl md:text-4xl font-medium">
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
                {step}
              </p>
            </div>
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