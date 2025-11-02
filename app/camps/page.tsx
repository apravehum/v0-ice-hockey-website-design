"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Users, Trophy, Zap } from "lucide-react"

export default function CampsPage() {
  const camps = [
    {
      id: 1,
      title: "Vasaras hokeja nometne",
      icon: Trophy,
      dates: "Jūlijs - Augusts",
      age: "7-12 gadi",
      duration: "1-2 nedēļas",
      description: "Intensīva apmācība vasarā. Attīsti pamatprasmes un tiecienes uz profesionalitāti.",
      highlights: [
        "Pastāvīgas nodarbības 5 dienas nedēļā",
        "Pieredzējušu treneru vadība",
        "Spēļu un turnīru organizācija",
        "Eiropas klases objekti",
      ],
      price: "€400-600",
    },
    {
      id: 2,
      title: "Rudens hokeja nometne",
      icon: Zap,
      dates: "Septembris - Oktobris",
      age: "8-14 gadi",
      duration: "1-2 nedēļas",
      description: "Sezonas priekšgatavošana. Gatavo sevi jaunu sezonas izaicinājumiem.",
      highlights: [
        "Fokuss uz fizisko treniņu",
        "Taktiskas spēles izpēte",
        "Komandas veidošana",
        "Profesionāla aprīkošana",
      ],
      price: "€400-600",
    },
    {
      id: 3,
      title: "Ziemas hokeja nometne",
      icon: Calendar,
      dates: "Decembris - Janvāris",
      age: "6-16 gadi",
      duration: "1-3 nedēļas",
      description: "Populāra nometne skolēniem. Ideāla brīvlaika pavadīšanai un prasmju attīstīšanai.",
      highlights: ["Fleksībls grafiks", "Visu līmeņu grupas", "Draudzīgi turnīri", "Jautrums un attīstība"],
      price: "€300-700",
    },
    {
      id: 4,
      title: "Pavasara hokeja nometne",
      icon: Users,
      dates: "Aprīlis - Maijs",
      age: "7-13 gadi",
      duration: "1-2 nedēļas",
      description: "Sezonas noslēgums. Labā iespēja atkārtot iegūtās prasmes un gatavoties vasarai.",
      highlights: ["Attīstības fokuss", "Pozitīvi rezultāti", "Jaunu draugu atrašana", "Iespēja piedalīties turnīrā"],
      price: "€350-550",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
              Hokeja
              <span className="block text-primary">Nometnes</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Attīsti savus hokeja talantus intensīvās nometn ēs, vadītas profesionālo treneru.
            </p>
          </div>
        </div>
      </section>

      {/* Camps Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {camps.map((camp) => {
              const IconComponent = camp.icon
              return (
                <Card
                  key={camp.id}
                  className="overflow-hidden bg-card border-border hover:border-primary transition-all group"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-2">{camp.dates}</p>
                        <h2 className="text-3xl font-bold uppercase tracking-tight">{camp.title}</h2>
                      </div>
                      <IconComponent className="w-10 h-10 text-primary flex-shrink-0" />
                    </div>

                    <div className="flex gap-4 mb-6 text-sm">
                      <div>
                        <p className="text-muted-foreground">Vecums</p>
                        <p className="font-semibold">{camp.age}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Ilgums</p>
                        <p className="font-semibold">{camp.duration}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{camp.description}</p>

                    <div className="space-y-3 mb-8">
                      {camp.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm">{highlight}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-secondary p-4 rounded-lg mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Cena</p>
                      <p className="text-2xl font-bold text-primary">{camp.price}</p>
                    </div>

                    <Button size="lg" className="w-full" asChild>
                      <Link href="/contact">Pieteikties</Link>
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 uppercase">Kas iekļauts nometn ē?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 uppercase">Apmācība</h3>
              <p className="text-muted-foreground leading-relaxed">
                Profesionāli treneri vadīs tavus treniņus katru dienu, fokusējot uz individuālo attīstību.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 uppercase">Objekti</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eiropas klases ledus halle ar moderner aprīkojumu un ērtas ģerboņu istabas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 uppercase">Komunika</h3>
              <p className="text-muted-foreground leading-relaxed">
                Iespēja izklaidēties ar jauniešiem no dažādiem klubiem un draudzības turnīrus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase text-balance">Reģistrējies uz nometni</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Vietas ir ierobežotas. Sazinies ar mums, lai uzzinātu vairāk un pieteiktos uz izvēlēto nometni.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">Pieteikties</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
