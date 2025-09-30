import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold tracking-tighter mb-4">
              <span className="text-foreground">ICE</span>
              <span className="text-primary">ACADEMY</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Profesionāla hokeja apmācība Latvijā. Individuālās un grupu nodarbības, nometnes un turnīri.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Nodarbības</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/lessons/individual"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Individuālās nodarbības
                </Link>
              </li>
              <li>
                <Link
                  href="/lessons/group"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nodarbības grupām
                </Link>
              </li>
              <li>
                <Link href="/camps" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nometnes
                </Link>
              </li>
              <li>
                <Link
                  href="/tournaments"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Turnīri
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Par mums</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Vadība
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Treneri
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Jaunumi
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Foto galerija
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-wide text-sm">Kontakti</h3>
            <ul className="space-y-2 mb-4">
              <li className="text-sm text-muted-foreground">info@iceacademy.lv</li>
              <li className="text-sm text-muted-foreground">+371 20 123 456</li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Ice Academy. Visas tiesības aizsargātas.</p>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privātuma politika
          </Link>
        </div>
      </div>
    </footer>
  )
}
