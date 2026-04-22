import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f8f6f2]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="aspect-3/4 w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/about-anna.jpg"
            alt="Анна косметолог"
            width={600}
            height={700}
            className="object-cover"
          />
        </div>

        <div >

          <p className="mt-6 text-[#6b6b6b] leading-relaxed">
            Меня зовут Анна, я — <strong>косметолог-нутрициолог с опытом более 6 лет</strong>. Работаю в
            Таллине, в собственной студии на Katusepapi 6.
          </p>

          <p className="mt-4 text-[#6b6b6b] leading-relaxed">
            За годы практики я убедилась:<br />
            большинство проблем с кожей возникают не из-за «плохой» генетики, а из-за
            отсутствия правильно выстроенной системы ухода.
          </p>

          <p className="mt-4 text-[#6b6b6b] leading-relaxed">
          Как нутрициолог, я понимаю, что
          кожа — это отражение внутренних процессов. Поэтому в работе всегда учитываю 
          <strong> питание, образ жизни, гормональный фон и индивидуальные реакции организма</strong>. Я не
          верю в хаотичную смену средств и бесконечные эксперименты.
          </p>

          <p className="mt-4 text-[#6b6b6b] leading-relaxed">
          Коже нужна стратегия,
          последовательность и понимание процессов.
          </p>

          <p className="mt-4 text-[#6b6b6b] leading-relaxed">
          Поэтому на консультации я: <br />
          — подробно разберу состояние вашей кожи; <br />
          — составлю индивидуальную систему ухода; <br />
          — дам рекомендации по коррекции причин воспалений; <br />
          — подберу конкретные продукты под ваш бюджет.
          </p>
          
          <p className="mt-4 text-[#6b6b6b] leading-relaxed">
          Моя задача — не временный эффект, а <strong>устойчивый результат и здоровая
          кожа в долгосрочной перспективе</strong>.
          </p>


          <div className="mt-8">
            <a href="https://apnt.app/anna_dreamshine" target="_blank">
              <Button>Записаться на консультацию</Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}