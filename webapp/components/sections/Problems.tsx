import Image from "next/image";

export default function Problems() {
  const problems = [
    {
      text: "Новое средство вызывает раздражение или высыпания",
      icon: "/icons/problems-page/sredstvo.svg",
    },
    {
      text: "Воспаления возвращаются снова и снова",
      icon: "/icons/problems-page/vospalenija.svg",
    },
    {
      text: "Покраснения долго не проходят",
      icon: "/icons/problems-page/pokrasnenija.svg",
    },
    {
      text: "Кожа то сухая, то жирная, и непонятно что ей нужно",
      icon: "/icons/problems-page/kozha.svg",
    },
    {
      text: "Потрачено много денег, а результата нет",
      icon: "/icons/problems-page/koshelek.svg",
    },
    {
      text: "Уже страшно пробовать что-то новое",
      icon: "/icons/problems-page/strashno.svg",
    },
  ];

  return (
    <section
      id="problems"
      className="py-24 bg-[url('/images/background-problems.png')] bg-cover bg-center"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium text-[#4c4a4a]">
          Кажется, вы уже перепробовали всё?
        </h2>

        <h3 className="mt-4 text-[#6b6b6b] leading-relaxed">
          Ко мне часто приходят после дорогих баночек, советов из TikTok и
          бесконечной смены ухода.
        </h3>

        {/* Блоки */}
        <div className="mt-10 space-y-4 text-left">
          {problems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-2xl px-6 py-5 shadow-sm"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ebe7df]">
                <Image
                  src={item.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <p className="text-[#2a2a2a]">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[#6b6b6b] leading-relaxed">
          Проблема часто не в коже, а в отсутствии грамотной системы. Когда уход
          подобран под вашу ситуацию — <strong>кожа начинает меняться</strong>.
        </p>
      </div>
    </section>
  );
}