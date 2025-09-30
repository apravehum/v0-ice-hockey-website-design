import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, Trophy, Calendar, Target } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <img
          src="/ice-hockey-player-dramatic-action-shot-on-ice.jpg"
          alt="Ice Hockey"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-balance">
              ELITE HOCKEY
              <span className="block text-primary">TRAINING</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Profesionāla hokeja apmācība visiem līmeņiem. Individuālās nodarbības, nometnes un turnīri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/lessons">
                  Sākt trenēties
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/about">Par mums</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-secondary border-border hover:border-primary transition-colors">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Profesionāli treneri</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pieredzējuši treneri ar starptautisku pieredzi
              </p>
            </Card>
            <Card className="p-6 bg-secondary border-border hover:border-primary transition-colors">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Individuāla pieeja</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Personalizētas treniņu programmas katram spēlētājam
              </p>
            </Card>
            <Card className="p-6 bg-secondary border-border hover:border-primary transition-colors">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Nometnes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vasaras un ziemas nometnes visām vecuma grupām
              </p>
            </Card>
            <Card className="p-6 bg-secondary border-border hover:border-primary transition-colors">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 uppercase tracking-wide">Turnīri</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Regulāri turnīri un sacensības dažādos līmeņos
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-4 uppercase">Gaidāmie pasākumi</h2>
              <p className="text-muted-foreground text-lg">Piesakies jau šodien</p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/tournaments">
                Skatīt visus
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden bg-card border-border group hover:border-primary transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                    Turnīrs
                  </span>
                </div>
                <img
                  src="/ice-hockey-tournament-action.jpg"
                  alt="Tournament"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">Marts 15-17</p>
                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">Amatieru turnīrs</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Rīgas ledus halle</p>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href="/tournaments">Pieteikties</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/tournaments">Detaļas</Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden bg-card border-border group hover:border-primary transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                    Nometne
                  </span>
                </div>
                <img
                  src="/youth-hockey-training-camp.jpg"
                  alt="Camp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">Jūnijs 1-7</p>
                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">Vasaras nometne</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Bērni un jaunieši 8-16 gadi</p>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href="/camps">Pieteikties</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/camps">Detaļas</Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden bg-card border-border group hover:border-primary transition-all">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                    Turnīrs
                  </span>
                </div>
                <img
                  src="/women-ice-hockey-game.jpg"
                  alt="Women's Tournament"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">Aprīlis 20-22</p>
                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">Sieviešu turnīrs</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">Rīgas ledus halle</p>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href="/tournaments">Pieteikties</Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/tournaments">Detaļas</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold tracking-tighter mb-6 uppercase text-balance">
              Gatavs uzlabot savas prasmes?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Pievienojies Ice Academy un trenējies kopā ar labākajiem treneriem Latvijā
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/contact">
                Sazināties ar mums
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
