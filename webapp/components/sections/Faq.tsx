import Image from "next/image";

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
      a: "Первые изменения через 2-3 месяца. Устойчивый результат примерно через 6 месяцев, в зависимости от состояния кожи и особенностей организма",
    },
    {
      q: "Вы работаете только с проблемной кожей?",
      a: "Нет, я работаю не только с проблемной кожей. Ко мне обращаются с сухостью, чувствительностью, розацеа, пигментацией, возрастными изменениями, отёчностью, снижением тонуса и тусклым цветом лица. Также помогаю подобрать грамотный уход, сохранить молодость кожи и улучшить её качество.",
    },
    {
      q: "Работаете ли вы с мужской кожей?",
      a: "Да, учитываю особенности мужской кожи.",
    },
    {
      q: "Работаете ли вы с подростками?",
      a: "Да, работаю с подростковой кожей. Обычно беру подростков примерно с 10 лет, если уже начались изменения кожи. До 18 лет консультация проводится с согласия родителей(письменное или согласие в переписке) или в сопровождении родителя на «первом визите».",
    },
  ];

  const step = 140; // 🔥 расстояние между элементами

  const left = [
    { src: "/images/question-mark.png", i: 0, rotate: "-rotate-6", x: "left-4", size: "w-[110px]" },
    { src: "/images/comment-mark.png", i: 1, rotate: "rotate-6", x: "left-10", size: "w-[80px]" },
    { src: "/images/question-mark.png", i: 2, rotate: "-rotate-3", x: "left-2", size: "w-[100px]" },
    { src: "/images/comment-mark.png", i: 3, rotate: "rotate-3", x: "left-8", size: "w-[75px]" },
  ];

  const right = [
    { src: "/images/comment-mark.png", i: 0, rotate: "rotate-6", x: "right-6", size: "w-[80px]" },
    { src: "/images/question-mark.png", i: 1, rotate: "-rotate-6", x: "right-8", size: "w-[110px]" },
    { src: "/images/comment-mark.png", i: 2, rotate: "rotate-3", x: "right-4", size: "w-[75px]" },
    { src: "/images/question-mark.png", i: 3, rotate: "-rotate-2", x: "right-2", size: "w-[95px]" },
  ];

  return (
    <section className="py-24 bg-[#f8f6f2] relative overflow-hidden">

      {/* LEFT */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="max-w-5xl mx-auto relative h-full">

          {left.map((item, idx) => (
            <Image
              key={idx}
              src={item.src}
              alt=""
              width={300}
              height={300}
              style={{ top: `${item.i * step + 100}px` }}
              className={`absolute ${item.x} ${item.rotate} ${item.size} opacity-60`}
            />
          ))}

        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <div className="max-w-5xl mx-auto relative h-full">

          {right.map((item, idx) => (
            <Image
              key={idx}
              src={item.src}
              alt=""
              width={300}
              height={300}
              style={{ top: `${item.i * step + 100}px` }}
              className={`absolute ${item.x} ${item.rotate} ${item.size} opacity-60`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-4 relative z-10">
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

              <p className="mt-3 text-sm text-[#6b6b6b] leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>

    </section>
  );
}