import Image from "next/image";
import Link from "next/link";
import { contractVehicles } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const featured = contractVehicles.filter((v) => v.image).slice(0, 4);

/** Contract vehicles as editorial cards: branded thumbnail, then title and detail. */
export function VehicleCards() {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featured.map((vehicle) => (
        <RevealItem key={vehicle.name}>
          <Link href={vehicle.href ?? "/about"} className="group block">
            <div className="relative isolate aspect-[16/10] overflow-hidden rounded-xl bg-deep-900">
              <Image
                src={vehicle.image ?? ""}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="-z-20 object-cover opacity-75 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-br from-deep-950/90 via-deep-950/55 to-deep-950/10"
                aria-hidden
              />
              <div className="flex h-full flex-col justify-between p-4">
                <Image
                  src="/tanvi-it-logo@3x.png"
                  alt=""
                  width={501}
                  height={129}
                  className="h-4 w-auto self-start brightness-0 invert"
                />
                <p className="max-w-[85%] font-display text-xl font-medium leading-tight text-white">
                  {vehicle.name}
                </p>
                <span className="w-fit rounded bg-gold-500 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-deep-950">
                  Contract vehicle
                </span>
              </div>
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-fg transition-colors group-hover:text-gold-700">
              {vehicle.name}
            </h3>
            <p className="mt-1.5 text-sm text-fg-subtle">{vehicle.detail}</p>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
