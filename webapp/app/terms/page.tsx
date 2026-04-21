export default function Terms() {
  return (
    <section className="py-24 bg-[#f8f6f2]">
      <div className="max-w-3xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-medium text-[#1f1f1f]">
          Пользовательское соглашение
        </h1>

        <p className="mt-4 text-xs text-[#6b6b6b]">
          Обновлено: 2026
        </p>

        <div className="mt-10 space-y-8 text-sm text-[#4c4a4a] leading-relaxed">

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              1. Общие положения
            </h2>
            <p className="mt-2">
              Используя данный сайт, пользователь соглашается с настоящими условиями.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              2. Услуги
            </h2>
            <p className="mt-2">
              Сайт предоставляет информацию об услугах косметолога. Запись осуществляется
              через сторонний сервис.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              3. Ответственность
            </h2>
            <p className="mt-2">
              Вся информация носит информационный характер и не является медицинской
              рекомендацией.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              4. Изменения
            </h2>
            <p className="mt-2">
              Администрация сайта может изменять содержание без предварительного уведомления.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-[#1f1f1f]">
              5. Контакты
            </h2>
            <p className="mt-2">
              Для связи:
              <a
                href="https://www.instagram.com/dreamshine_studio/"
                target="_blank"
                className="ml-2 text-[#7a9c8f] hover:underline"
              >
                @dreamshine_studio
              </a>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}