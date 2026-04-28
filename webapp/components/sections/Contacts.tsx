import { Button } from "../ui/Button";
import { FaInstagram, FaTelegramPlane, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-[#f3efe9]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center ">

        {/* Левая часть */}
        <div>

          <h2 className="text-3xl font-medium text-[#4c4a4a]">
            Свяжитесь со мной
          </h2>

          <p className="mt-6 text-[#6b6b6b] leading-relaxed">
            Katusepapi 6, <br /> Tallinn, Estonia
          </p>

          <p className="mt-4 text-[#4c4a4a] leading-relaxed">
            E-mail:
            <a
              href="mailto:anshine.studio@gmail.com"
              className="ml-2 text-[#8e947f] hover:underline font-medium"
            >
              anshine.studio@gmail.com
            </a>
          </p>
          {/* Соцсети */}
          <div className="mt-6 flex items-center gap-4">

            <a
              href="https://www.instagram.com/dreamshine_studio/"
              target="_blank"
              className="text-[#8e947f] hover:opacity-70 transition"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://t.me/dreamshine_studio"
              target="_blank"
              className="text-[#8e947f] hover:opacity-70 transition"
            >
              <FaTelegramPlane size={22} />
            </a>

            <a
              href="https://facebook.com/annkosmetology"
              target="_blank"
              className="text-[#8e947f] hover:opacity-70 transition"
            >
              <FaFacebookF size={22} />
            </a>

            <a
              href="https://tiktok.com/@dreamshine_studio"
              target="_blank"
              className="text-[#8e947f] hover:opacity-70 transition"
            >
              <FaTiktok size={22} />
            </a>

          </div>

          {/* CTA */}
          <div className="mt-12">
            <a href="https://apnt.app/anna_dreamshine" target="_blank">
              <Button>Записаться на консультацию</Button>
            </a>
          </div>

          {/* Политика */}
          <a
            href="/privacy"
            className="block mt-6 text-xs text-[#6b6b6b] underline"
          >
            Политика конфиденциальности
          </a>
        </div>

        {/* Карта */}
        <div className="rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Katusepapi+6+Tallinn&output=embed"
            width="100%"
            height="350"
            loading="lazy"
            className="border-0"
          />
        </div>

      </div>
    </section>
  );
}