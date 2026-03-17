import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#f8f6f2]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        
        <div>
          <Image
            src="/images/about-test.jpg"
            alt="Анна косметолог"
            width={600}
            height={700}
            className="w-full h-130 object-cover rounded-2xl"
          />
        </div>

        <div>
          <p className="text-sm text-[#7a9c8f] mb-4">
            Обо мне
          </p>

          <h2 className="text-3xl md:text-4xl font-medium text-[#1f1f1f]">
            Системный подход к здоровью кожи
          </h2>

          <p className="mt-6 text-[#6b6b6b] leading-relaxed">
            Я не работаю по шаблонам и не назначаю уход наугад. 
            В основе моей работы — анализ, понимание причин и выстроенная система.
          </p>

          <p className="mt-4 text-[#6b6b6b] leading-relaxed">
            Моя задача — не просто улучшить состояние кожи, а создать устойчивый результат, 
            который сохранится надолго.
          </p>

          <div className="mt-8">
            <a href="https://apnt.app/anna_dreamshine" target="_blank">
              <Button>Записаться</Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}