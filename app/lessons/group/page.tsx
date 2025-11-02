import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Clock, ArrowLeft } from "lucide-react"

export default function GroupLessonsPage() {
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
              Grupas
              <span className="block text-primary">Nodarbības</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Trenējies kopā ar citiem spēlētājiem savā līmenī un attīsti komandas spēles prasmes.
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
                <img src="/group-hockey-training.jpg" alt="Group Training" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Jaudas hokeja kopā</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  Grupas nodarbības ir lieliski risinājums tiem, kuri vēlas trenēties komandas atmosfērā, jauties
                  motivāciju no pārējiem spēlētājiem un attīstīt komandas spēles prasmes.
                </p>

                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-background">
                        <Users className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Mazas grupas</h3>
                      <p className="text-muted-foreground">
                        Maksimums 8 spēlētāji grupā nodrošina optimālu attiecību starp individuālu uzmanību un komandas
                        sinerģiju.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-background">
                        <Target className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Līmeņa grupas</h3>
                      <p className="text-muted-foreground">
                        Grupas sadalītas pēc vecuma un prasmju līmeņa, lai katrs trenētos ar līdzīga līmeņa spēlētājiem.
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
                      <h3 className="text-xl font-bold mb-2">Regulārs grafiks</h3>
                      <p className="text-muted-foreground">
                        Nodarbības 2-3 reizes nedēļā regulāri grafiku nodrošina konsekventu progreso un spēlētāju
                        saliedēšanu.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-8 rounded-lg mb-8 border border-border">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground uppercase tracking-tight mb-2">Cena</p>
                    <p className="text-4xl font-bold text-primary">
                      €25<span className="text-xl text-muted-foreground font-normal">/nodarbība</span>
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nodarbības ilgums: 60 minūtes | Ieskaitīts: ledus laiks, profesionāla apmācība, komandas spēles vai
                    individuāla fokusa darbības
                  </p>
                </div>

                <Button size="lg" className="w-full text-lg" asChild>
                  <Link href="/contact">Pieteikties grupu nodarbībām</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Groups */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-tighter mb-12 uppercase">Pieejamās grupas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-primary">Bērni (6-10)</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Pamatskaidības un hokeja fundamentu apguve jaunajiem spēlētājiem.
              </p>
              <p className="font-semibold mb-4">Grafiks:</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Otrdiena: 17:00 - 18:00</li>
                <li>• Ceturtdiena: 17:00 - 18:00</li>
                <li>• Sestdiena: 10:00 - 11:00</li>
              </ul>
              <p className="font-bold text-lg mb-4">€25/nodarbība</p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/contact">Pieteikties</Link>
              </Button>
            </Card>

            <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-primary">Jaunieši (11-14)</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Vidējā līmeņa treniņi ar fokusa uz komandas spēles prasmes.
              </p>
              <p className="font-semibold mb-4">Grafiks:</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Pirmdiena: 18:00 - 19:00</li>
                <li>• Trešdiena: 18:00 - 19:00</li>
                <li>• Piektdiena: 18:00 - 19:00</li>
              </ul>
              <p className="font-bold text-lg mb-4">€25/nodarbība</p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/contact">Pieteikties</Link>
              </Button>
            </Card>

            <Card className="p-8 bg-secondary border-border hover:border-primary transition-colors">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-primary">Pieaugušie</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Rekreāciski un amatieru līmeņa hokejs pieaugušajiem jebkurā vecumā.
              </p>
              <p className="font-semibold mb-4">Grafiks:</p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Otdiena: 21:00 - 22:00</li>
                <li>• Ceturtdiena: 21:00 - 22:00</li>
                <li>• Svētdiena: 18:00 - 19:00</li>
              </ul>
              <p className="font-bold text-lg mb-4">€25/nodarbība</p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/contact">Pieteikties</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tighter mb-6 uppercase text-balance">Ir jautājumi?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Sazinies ar mums un mēs palīdzēsim atrast piemērotāko grupu tavai līmeņiem un mērķiem
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
