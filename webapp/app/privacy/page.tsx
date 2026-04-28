"use client";

import { useRouter } from "next/navigation";

export default function Privacy() {
  const router = useRouter();

  return (
    <section className="py-24 bg-[#f8f6f2]">
      <div className="max-w-3xl mx-auto px-4">

        {/* 🔙 КНОПКА НАЗАД (как раньше) */}
        <button
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/");
            }
          }}
          className="fixed top-4 left-4 z-50 bg-white rounded-full px-4 py-2 shadow"
        >
          ← Назад
        </button>

        <h1 className="text-3xl md:text-4xl font-medium text-[#1f1f1f]">
          Политика конфиденциальности
        </h1>

        <p className="mt-4 text-xs text-[#6b6b6b]">
          Обновлено: 2026
        </p>

        <div className="mt-10 space-y-8 text-sm text-[#4c4a4a] leading-relaxed">

          <p>
            Данный сайт предоставляет информацию об услугах косметолога и не
            осуществляет прямой сбор персональных данных. Все записи на услуги
            происходят через сторонний сервис.
          </p>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              1. Сбор данных
            </h2>
            <p className="mt-2">
              Персональные данные могут быть предоставлены пользователем добровольно
              при записи через сервис apnt.app (имя, контактные данные и др.).
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              2. Цель обработки
            </h2>
            <p className="mt-2">
              Данные используются исключительно для связи с клиентом, записи на услуги
              и оказания консультаций.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              3. Хранение и защита
            </h2>
            <p className="mt-2">
              Предпринимаются разумные меры для защиты данных от несанкционированного доступа.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              4. Передача третьим лицам
            </h2>
            <p className="mt-2">
              Данные не передаются третьим лицам, за исключением сервисов,
              необходимых для записи и обслуживания клиента.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              5. Права пользователя
            </h2>
            <p className="mt-2">
              Пользователь имеет право запросить доступ, изменение или удаление
              своих персональных данных.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              6. Контакты
            </h2>
            <p className="mt-2">
              По вопросам обработки данных:
              <a
                href="mailto:anshine.studio@gmail.com"
                className="ml-2 text-[#8e947f] hover:underline font-medium"
              >
                anshine.studio@gmail.com
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}