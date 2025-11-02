import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User, Target, Clock, ArrowLeft } from "lucide-react"

export default function IndividualLessonsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Back Button */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <Link
            href="/lessons"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Atpakaļ uz nodarbībām
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
              Individuālās
              <span className="block text-primary">Nodarbības</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Personalizēta apmācība ar pieredzējušu treneri, speciāli pielāgota tavām vajadzībām un mērķiem.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-card border-border">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/individual-hockey-training.jpg"
                  alt="Individual Training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Kas tevi gaida?</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Individuālās nodarbības ir ideālas risinājums ikvienam hokejistam neatkarīgi no prasmju līmeņa.
                  Fokusējamies uz tavas spēles uzlabošanu un personiskajiem mērķiem.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-background">
                        <Target className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Personalizēta programma</h3>
                      <p className="text-muted-foreground">
                        Treniņu plāns, kas pielāgots tavam līmenim, vecumam un konkrētajiem mērķiem. Fokusējamies uz
                        tavajām vājajām pusēm.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-background">
                        <User className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">100% uzmanība</h3>
                      <p className="text-muted-foreground">
                        Treneris ves nodarbiības tikai ar tevi, nodrošinot maksimālu efektivitāti un tūlītēju
                        atgriezenisko saiti.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-background">
                        <Clock className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Elastīgs grafiks</h3>
                      <p className="text-muted-foreground">
                        Izvēlies sev piemērotāko laiku un dienu. Mēs pielāgosimies tavajam horārijam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-8 rounded-lg mb-8 border border-border">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-tight mb-2">Cena</p>
                    <p className="text-4xl font-bold text-primary">
                      €45<span className="text-xl text-muted-foreground font-normal">/nodarbība</span>
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nodarbības ilgums: 60 minūtes | Ieskaitīts: ledus laiks, profesionāla apmācība un atgriezeniskā
                    saite
                  </p>
                </div>

                <Button size="lg" className="w-full text-lg" asChild>
                  <Link href="/contact">Pieteikties individuālajām nodarbībām</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 uppercase">Ko saka mūsu klients?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-secondary border-border">
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "Individuālās nodarbības pavisam mainīja manu spēli. Treneris identificēja manas vājas puses un
                palīdzēja tās uzlabot. Ieteicu ikvienam!"
              </p>
              <div>
                <p className="font-bold">Jānis K.</p>
                <p className="text-sm text-muted-foreground">Hokejists, 16 gadi</p>
              </div>
            </Card>

            <Card className="p-8 bg-secondary border-border">
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "Patīk elastīgais grafiks. Es biju varējis pieteikties tik bieži cik man vēlējās. Liela paldies trenerei
                par profesionālo pieeju!"
              </p>
              <div>
                <p className="font-bold">Anna B.</p>
                <p className="text-sm text-muted-foreground">Hokejiste, 14 gadi</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase text-balance">Gatavs sākt?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Pieteikies individuālajām nodarbībām un sāc uzlabot savu spēli
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
