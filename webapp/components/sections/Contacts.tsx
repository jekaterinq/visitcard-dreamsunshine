export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-[#f3efe9]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="text-sm text-[#7a9c8f] mb-4">
            Контакты
          </p>

          <h2 className="text-3xl font-medium">
            Свяжитесь со мной
          </h2>

          <p className="mt-6 text-[#6b6b6b]">
            Katusepapi 6, Tallinn
          </p>

          <a
            href="https://www.instagram.com/dreamshine_studio/"
            className="block mt-2 text-[#7a9c8f]"
          >
            @dreamshine_studio
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Katusepapi+6+Tallinn&output=embed"
            width="100%"
            height="350"
          />
        </div>

      </div>
    </section>
  );
}