import Image from "next/image";

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-[#f3efe9]">
      <div className="max-w-6xl mx-auto px-4">


        <h2 className="text-3xl md:text-4xl font-medium text-center text-[#4c4a4a]">
          Результаты
        </h2>

        <div className="mt-16 space-y-24">

          {/* КЕЙС 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Фото */}
            <div className="flex flex-col gap-6 items-center">

              {/* ДО */}
              <div className="relative w-full max-w-[400px] aspect-[3/2] overflow-hidden rounded-xl mx-auto">
                <Image
                  src="/images/before-first-case.jpg"
                  alt="до"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="relative w-full max-w-[400px] aspect-[3/2] overflow-hidden rounded-xl mx-auto">
                <Image
                  src="/images/after-first-case.jpg"
                  alt="после"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

            </div>

            {/* Текст */}
            <div>
              <h3 className="text-xl! font-medium text-[#4c4a4a]!">
                6 лет борьбы с кожей после беременности
              </h3>

              <p className="mt-6 font-medium">
                С чем пришла:
              </p>

              <ul className="mt-3 space-y-2 text-[#6b6b6b]">
                <li>— Постоянные воспаления и закрытые комедоны 6 лет</li>
                <li>— Уход не давал результата</li>
                <li>— Частая смена средств без эффекта</li>
              </ul>

              <p className="mt-6 font-medium text-[#c6a96b]! text-xl!">
                Результат:
              </p>

              <ul className="mt-3 space-y-2 text-[#6b6b6b] text-l!">
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Чистая, спокойная кожа без воспалений
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Значительное уменьшение высыпаний
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Выравнивание тона и текстуры
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Комедоны исчезли безвозвратно
                </li>
              </ul>

              <p className="mt-6 italic text-[#6b6b6b]">
                «…Теперь я чувствую себя уверенно и свободно, пропала необходимость скрывать что-то под слоем грима…»
              </p>
            </div>
          </div>

          {/* КЕЙС 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Текст */}
            <div className="md:order-1">
              <h3 className="text-xl! font-medium text-[#4c4a4a]!">
                Чувствительная кожа и воспаления — результат без процедур
              </h3>

              <p className="mt-6 font-medium">
                С чем пришла:
              </p>

              <ul className="mt-3 space-y-2 text-[#6b6b6b]">
                <li>— Более года беспокоили воспаления и забитые поры</li>
                <li>— Покраснения после высыпаний и чувствительность кожи</li>
                <li>— Хаотичный уход без понимания, что подходит коже</li>
              </ul>

              <p className="mt-6 font-medium text-[#c6a96b]! text-xl!">
                Результат:
              </p>

              <ul className="mt-3 space-y-2 text-[#6b6b6b] text-l!" >
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Воспаления сократились, кожа стала чище
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Покраснения снижены до 90%, кожа перестала “гореть”
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Пятна пост-акне заметно осветлились
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Подобрана простая система ухода с доступными средствами
                </li>
              </ul>

              <p className="mt-6 italic text-[#6b6b6b]!">
                «...Очень довольна итоговым видом своей кожи! Это результат правильно подобранных средств на каждом этапе лечения, промежуточных консультаций и рутины...»
              </p>
            </div>

             {/* Фото */}
            <div className="flex flex-col gap-4 md:order-1 items-start ">
              <div className="relative w-full max-w-[400px] aspect-[3/2] overflow-hidden rounded-xl mx-auto">
                <Image
                  src="/images/before-second-case.jpg"
                  alt="до"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="relative w-full max-w-[400px] aspect-[3/2] overflow-hidden rounded-xl mx-auto">
                <Image
                  src="/images/after-second-case.PNG"
                  alt="после"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}