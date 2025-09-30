import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 uppercase">
              Sazinies
              <span className="block text-primary">Ar mums</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Mēs esam gatavi atbildēt uz visiem taviem jautājumiem un palīdzēt sākt hokeja ceļu
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">Sūti ziņu</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Vārds, uzvārds *
                  </label>
                  <Input id="name" type="text" placeholder="Jānis Bērziņš" required className="bg-secondary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    E-pasts *
                  </label>
                  <Input id="email" type="email" placeholder="janis@example.com" required className="bg-secondary" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefons
                  </label>
                  <Input id="phone" type="tel" placeholder="+371 20 123 456" className="bg-secondary" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Tēma *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Individuālās nodarbības"
                    required
                    className="bg-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Ziņa *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Pastāsti mums par saviem mērķiem un jautājumiem..."
                    rows={6}
                    required
                    className="bg-secondary"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Nosūtīt ziņu
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-card border-border">
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">Kontaktinformācija</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-pasts</h3>
                      <a
                        href="mailto:info@iceacademy.lv"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@iceacademy.lv
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefons</h3>
                      <a href="tel:+37120123456" className="text-muted-foreground hover:text-primary transition-colors">
                        +371 20 123 456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adrese</h3>
                      <p className="text-muted-foreground">
                        Rīgas Ledus Halle
                        <br />
                        Skanstes iela 50
                        <br />
                        Rīga, LV-1013
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Darba laiks</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Pirmdiena - Piektdiena</span>
                    <span className="font-semibold text-foreground">8:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sestdiena</span>
                    <span className="font-semibold text-foreground">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Svētdiena</span>
                    <span className="font-semibold text-foreground">10:00 - 18:00</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Sociālie tīkli</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 uppercase">Atrašanās vieta</h2>
          <div className="aspect-video bg-secondary rounded-lg overflow-hidden">
            <img src="/placeholder.svg?height=600&width=1200" alt="Map" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </main>
  )
}
