import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const coaches = [
  {
    name: "Jānis Kalniņš",
    role: "Galvenais treneris",
    experience: "15+ gadi pieredzes",
    specialization: "Uzbrukuma tehnika, individuālā apmācība",
    image: "/professional-ice-hockey-coach-male-portrait.jpg",
    quote: "Hokejs ir ne tikai spēle, bet dzīvesveids",
  },
  {
    name: "Māris Liepiņš",
    role: "Aizsardzības treneris",
    experience: "12+ gadi pieredzes",
    specialization: "Aizsardzības stratēģija, komandas spēle",
    image: "/ice-hockey-defense-coach-portrait.jpg",
    quote: "Laba aizsardzība ir uzvaras pamats",
  },
  {
    name: "Anna Bērziņa",
    role: "Sieviešu hokeja treneris",
    experience: "10+ gadi pieredzes",
    specialization: "Sieviešu hokejs, jauniešu apmācība",
    image: "/female-ice-hockey-coach-portrait.jpg",
    quote: "Katrs spēlētājs ir unikāls talants",
  },
  {
    name: "Roberts Ozoliņš",
    role: "Vārtsargu treneris",
    experience: "8+ gadi pieredzes",
    specialization: "Vārtsargu tehnika, refleksi",
    image: "/ice-hockey-goalie-coach-portrait.jpg",
    quote: "Vārtsargs ir komandas mugurkauls",
  },
  {
    name: "Kristaps Zariņš",
    role: "Fiziskās sagatavotības treneris",
    experience: "10+ gadi pieredzes",
    specialization: "Kondīcija, spēks, izturība",
    image: "/fitness-coach-ice-hockey-portrait.jpg",
    quote: "Fiziskā sagatavotība ir panākumu atslēga",
  },
  {
    name: "Laura Krūmiņa",
    role: "Jauniešu treneris",
    experience: "7+ gadi pieredzes",
    specialization: "Bērnu un jauniešu apmācība",
    image: "/youth-ice-hockey-coach-female-portrait.jpg",
    quote: "Jaunieši ir hokeja nākotne",
  },
]

export default function CoachesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
              Mūsu
              <span className="block text-primary">Treneri</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Pieredzējuši profesionāļi ar starptautisku pieredzi, kas palīdzēs tev sasniegt savus mērķus hokejā
            </p>
          </div>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border group hover:border-primary transition-all p-0"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{coach.role}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{coach.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{coach.experience}</p>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">{coach.specialization}</p>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground">
                    "{coach.quote}"
                  </blockquote>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase text-balance">
              Sāc trenēties ar labākajiem
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Piesakies individuālai vai grupu nodarbībai un uzlabo savas hokeja prasmes
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/lessons">Skatīt nodarbības</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
