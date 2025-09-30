import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Target, Users, Award, Heart } from "lucide-react"

const management = [
  {
    name: "Andris Liepa",
    role: "Direktors",
    image: "/professional-business-executive-portrait-male.jpg",
  },
  {
    name: "Ilze Kalniņa",
    role: "Sporta direktore",
    image: "/professional-sports-director-female-portrait.jpg",
  },
  {
    name: "Guntis Ozoliņš",
    role: "Finanšu vadītājs",
    image: "/professional-finance-manager-portrait-male.jpg",
  },
]

const supporters = [
  { name: "Latvijas Hokeja Federācija", logo: "/hockey-federation-logo.jpg" },
  { name: "Rīgas Dome", logo: "/city-council-logo.jpg" },
  { name: "Sporta Ministrija", logo: "/sports-ministry-logo.jpg" },
]

const partners = [
  { name: "Bauer Hockey", logo: "/placeholder.svg?height=200&width=300" },
  { name: "CCM Hockey", logo: "/placeholder.svg?height=200&width=300" },
  { name: "Rīgas Ledus Halle", logo: "/placeholder.svg?height=200&width=300" },
  { name: "Sport Depot", logo: "/placeholder.svg?height=200&width=300" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
              Par
              <span className="block text-primary">Ice Academy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Mēs esam vadošā hokeja akadēmija Latvijā, kas piedāvā profesionālu apmācību visiem līmeņiem
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="p-8 bg-secondary border-border text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">Mūsu mērķis</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Attīstīt hokeja talantu Latvijā</p>
            </Card>
            <Card className="p-8 bg-secondary border-border text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">Komanda</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Pieredzējuši profesionāļi</p>
            </Card>
            <Card className="p-8 bg-secondary border-border text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">Kvalitāte</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Augstākie standarti apmācībā</p>
            </Card>
            <Card className="p-8 bg-secondary border-border text-center">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">Kaislība</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Mīlestība pret hokeju</p>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase">Mūsu stāsts</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ice Academy tika dibināta 2010. gadā ar mērķi radīt profesionālu hokeja apmācības centru Latvijā. Mūsu
                akadēmija ir kļuvusi par vienu no vadošajām hokeja skolām Baltijā.
              </p>
              <p>
                Mēs piedāvājam plašu pakalpojumu klāstu - no individuālām nodarbībām līdz vasaras nometnēm un
                starptautiskiem turnīriem. Mūsu treneri ir pieredzējuši profesionāļi ar starptautisku pieredzi.
              </p>
              <p>
                Katru gadu mūsu programmās piedalās vairāk nekā 500 spēlētāju no visas Latvijas un ārvalstīm. Mēs esam
                lepni par saviem absolventiem, kas spēlē profesionālajās līgās visā pasaulē.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section id="management" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 uppercase">Vadība</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {management.map((person, index) => (
              <Card key={index} className="overflow-hidden bg-secondary border-border">
                <div className="relative h-80">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{person.name}</h3>
                  <p className="text-primary font-semibold uppercase tracking-wide text-sm">{person.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supporters */}
      <section id="supporters" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 uppercase">Atbalstītāji</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supporters.map((supporter, index) => (
              <Card key={index} className="p-8 bg-card border-border flex items-center justify-center h-40">
                <img
                  src={supporter.logo || "/placeholder.svg"}
                  alt={supporter.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 uppercase">Sadarbības partneri</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="p-8 bg-secondary border-border flex items-center justify-center h-32">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase text-balance">
              Pievienojies mūsu komandai
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Sāc savu hokeja ceļu kopā ar Ice Academy
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">Sazināties</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
