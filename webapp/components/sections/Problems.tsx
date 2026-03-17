export default function Problems() {
  const problems = [
    "уход не даёт результата",
    "кожа реагирует на новые средства",
    "воспаления возвращаются",
    "тусклый цвет лица",
    "ощущение, что вы перепробовали всё",
  ];

  return (
    <section id="problems" className="py-24 bg-[#f3efe9]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        <p className="text-sm text-[#7a9c8f] mb-4">
          Проблемы
        </p>

        <h2 className="text-3xl md:text-4xl font-medium">
          Возможно, вам это знакомо
        </h2>

        <div className="mt-10 space-y-4 text-[#6b6b6b] text-lg">
          {problems.map((item, i) => (
            <p key={i}>— {item}</p>
          ))}
        </div>

        <p className="mt-10 text-[#1f1f1f] font-medium">
          Это можно изменить с помощью системного подхода.
        </p>

      </div>
    </section>
  );
}