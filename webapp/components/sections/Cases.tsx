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
            <div className="flex flex-col gap-6">
              <div>
                <Image
                  src="/images/before-test.png"
                  alt="до"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>

              <div>
                <Image
                  src="/images/after-test.png"
                  alt="после"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full h-auto"
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
                «Я не верила, что что-то поможет после стольких лет. Аня не просто назначила процедуры — она объяснила причину и дала систему. Результат увидела уже через месяц.»
              </p>
            </div>
          </div>

          {/* КЕЙС 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Текст */}
            <div className="md:order-1">
              <h3 className="text-xl! font-medium text-[#4c4a4a]!">
                Восстановление чувствительной кожи
              </h3>

              <p className="mt-6 font-medium">
                С чем пришла:
              </p>

              <ul className="mt-3 space-y-2 text-[#6b6b6b]">
                <li>— Реакция на любые средства и внешние факторы</li>
                <li>— Жжение после умывания</li>
                <li>— Страх менять уход из-за негативного опыта</li>
              </ul>

              <p className="mt-6 font-medium text-[#c6a96b]! text-xl!">
                Результат:
              </p>

              <ul className="mt-3 space-y-2 text-[#6b6b6b] text-l!" >
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Покраснения снижены на 80%
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Кожа перестала «гореть»
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Подобран мягкий уход
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Появился комфорт и уверенность
                </li>
              </ul>

              <p className="mt-6 italic text-[#6b6b6b]!">
                «Я думала, что у меня просто такая кожа. Теперь понимаю, что проблема была в уходе. Спасибо Ане за индивидуальный подход.»
              </p>
            </div>

             {/* Фото */}
            <div className="flex flex-col gap-4 md:order-1 items-start">
              <div>
                <Image
                  src="/images/before-test.png"
                  alt="до"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>

              <div>
                <Image
                  src="/images/after-test.png"
                  alt="после"
                  width={500}
                  height={500}
                  className="rounded-xl object-cover w-full h-auto"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}