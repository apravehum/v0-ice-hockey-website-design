import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { User, Users, Clock, Target } from "lucide-react"

export default function LessonsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
              Hokeja
              <span className="block text-primary">Nodarbības</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Profesionāla apmācība individuāli vai grupās. Izvēlies sev piemērotāko variantu.
            </p>
          </div>
        </div>
      </section>

      {/* Lesson Types */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Individual Lessons */}
            <Card className="overflow-hidden bg-card border-border group hover:border-primary transition-all">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Individual Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <User className="w-12 h-12 text-primary mb-2" />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-4 uppercase tracking-tight">Individuālās nodarbības</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Personalizēta apmācība ar pieredzējušu treneri. Fokuss uz tavām stiprajām un vājajām pusēm.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Personalizēta programma</h4>
                      <p className="text-sm text-muted-foreground">
                        Treniņu plāns, kas pielāgots tavam līmenim un mērķiem
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Elastīgs grafiks</h4>
                      <p className="text-sm text-muted-foreground">Izvēlies sev ērtāko laiku un dienu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">100% uzmanība</h4>
                      <p className="text-sm text-muted-foreground">Treneris strādā tikai ar tevi</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Cena no</p>
                  <p className="text-3xl font-bold text-primary">
                    €45<span className="text-lg text-muted-foreground">/nodarbība</span>
                  </p>
                </div>

                <Button size="lg" className="w-full" asChild>
                  <Link href="/lessons/individual">Uzzināt vairāk</Link>
                </Button>
              </div>
            </Card>

            {/* Group Lessons */}
            <Card className="overflow-hidden bg-card border-border group hover:border-primary transition-all">
              <div className="relative h-96 overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Group Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Users className="w-12 h-12 text-primary mb-2" />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-4 uppercase tracking-tight">Nodarbības grupām</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Trenējies kopā ar citiem spēlētājiem savā līmenī. Attīsti komandas spēles prasmes.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Mazas grupas</h4>
                      <p className="text-sm text-muted-foreground">Maksimums 8 spēlētāji grupā</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Līmeņa grupas</h4>
                      <p className="text-sm text-muted-foreground">Grupas sadalītas pēc vecuma un prasmju līmeņa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Regulārs grafiks</h4>
                      <p className="text-sm text-muted-foreground">Nodarbības 2-3 reizes nedēļā</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Cena no</p>
                  <p className="text-3xl font-bold text-primary">
                    €25<span className="text-lg text-muted-foreground">/nodarbība</span>
                  </p>
                </div>

                <Button size="lg" className="w-full" asChild>
                  <Link href="/lessons/group">Uzzināt vairāk</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 uppercase">Papildus pakalpojumi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Korporatīvie pasākumi</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Organizējam hokeja pasākumus uzņēmumiem - komandas saliedēšanas aktivitātes, turnīrus un treniņus.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Pieprasīt piedāvājumu</Link>
              </Button>
            </Card>

            <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Bērnu ballītes</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Neaizmirstamas dzimšanas dienas ballītes uz ledus ar spēlēm, treniņiem un profesionālu uzraudzību.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Pieprasīt piedāvājumu</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase text-balance">Gatavs sākt trenēties?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Sazinies ar mums un izvēlies sev piemērotāko nodarbību veidu
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
