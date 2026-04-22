import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[url('/images/background-hero-right.png')] bg-cover bg-center">
      <div className="relative overflow-hidden rounded-2xl">

        {/* КОНТЕНТ */}
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-16 ">
          
          <div className="bg-[#f3efe9]/50 p-8 rounded-2xl">
            <p className="text-sm text-[#7a9c8f] mb-4">
              Косметолог-нутрициолог
            </p>

            <h1 className="text-3xl md:text-5xl font-medium leading-tight text-[#4c4a4a]">
              Грамотная косметология без хаоса, экспериментов и бесконечных трат.
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#6b6b6b]">
              Помогаю выстроить долговечную систему ухода, которая принесёт результат.
            </p>

            <div className="mt-8">
              <a href="https://apnt.app/anna_dreamshine" target="_blank">
                <Button>Записаться на консультацию</Button>
              </a>
            </div>
          </div>

        </div>


        {/* Фото */}
        {/*<div className="relative">
          <div className="absolute inset-0 bg-[#dfe8e4]/40 rounded-2xl"></div>

          <Image
            src="/images/background-hero.jpg"
            alt="фон для секции Hero"
            width={600}
            height={700}
            className="relative w-full h-130 object-cover rounded-2xl"
          />
        </div>*/}

      </div>
    </section>
  );
}