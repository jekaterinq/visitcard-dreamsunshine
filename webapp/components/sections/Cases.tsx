import Image from "next/image";

export default function Cases() {
  return (
    <section id="cases" className="py-24 bg-[#f3efe9]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Заголовок */}
        <p className="text-sm text-[#7a9c8f] text-center mb-4">
          Результаты
        </p>

        <h2 className="text-3xl md:text-4xl font-medium text-center text-[#1f1f1f]">
          Кейсы
        </h2>

        <div className="mt-16 space-y-20">
          
          {/* КЕЙС 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Фото */}
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/before-test.png"
                alt="до"
                width={400}
                height={400}
                className="rounded-xl object-cover"
              />
              <Image
                src="/images/after-test.png"
                alt="после"
                width={400}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            {/* Текст */}
            <div>
              <h3 className="text-xl font-medium text-[#1f1f1f]">
                6 лет борьбы с кожей после беременности
              </h3>

              <p className="mt-4 text-[#6b6b6b] leading-relaxed">
                Постоянные воспаления и закрытые комедоны в течение 6 лет. 
                Уход не давал результата, а смена средств не улучшала ситуацию.
              </p>

              <ul className="mt-6 space-y-2 text-[#1f1f1f]">
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Чистая, спокойная кожа
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Уменьшение воспалений
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Выравнивание тона
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Комедоны исчезли
                </li>
              </ul>
            </div>

          </div>

          {/* КЕЙС 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Фото (меняем сторону для "дорогого" вида) */}
            <div className="grid grid-cols-2 gap-4 md:order-2">
              <Image
                src="/images/before-test.png"
                alt="до"
                width={400}
                height={400}
                className="rounded-xl object-cover"
              />
              <Image
                src="/images/after-test.png"
                alt="после"
                width={400}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            {/* Текст */}
            <div className="md:order-1">
              <h3 className="text-xl font-medium text-[#1f1f1f]">
                Восстановление чувствительной кожи
              </h3>

              <p className="mt-4 text-[#6b6b6b] leading-relaxed">
                Кожа была чувствительной, реагировала на большинство средств 
                и склонна к покраснениям.
              </p>

              <ul className="mt-6 space-y-2 text-[#1f1f1f]">
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Снижение чувствительности
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Уменьшение покраснений
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Ровный тон кожи
                </li>
                <li className="flex gap-2">
                  <span className="text-[#c6a96b]">✔</span>
                  Комфорт без раздражения
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}