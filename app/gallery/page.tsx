"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/ice-hockey-player-dramatic-action-shot-on-ice.jpg",
      alt: "Action shot on ice",
      category: "Spēles",
    },
    {
      src: "/ice-hockey-tournament-action.jpg",
      alt: "Tournament action",
      category: "Turnīri",
    },
    {
      src: "/youth-hockey-training-camp.jpg",
      alt: "Youth training camp",
      category: "Nometnes",
    },
    {
      src: "/women-ice-hockey-game.jpg",
      alt: "Women's hockey game",
      category: "Spēles",
    },
    {
      src: "/individual-hockey-training.jpg",
      alt: "Individual training",
      category: "Treniņi",
    },
    {
      src: "/group-hockey-training.jpg",
      alt: "Group training",
      category: "Treniņi",
    },
    {
      src: "/summer-hockey-camp.jpg",
      alt: "Summer camp",
      category: "Nometnes",
    },
    {
      src: "/winter-hockey-camp.jpg",
      alt: "Winter camp",
      category: "Nometnes",
    },
    {
      src: "/professional-ice-hockey-coach-male-portrait.jpg",
      alt: "Coach portrait",
      category: "Treneri",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <img
          src="/ice-hockey-player-dramatic-action-shot-on-ice.jpg"
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 text-balance">GALERIJA</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ieskaties mūsu pasākumos, treniņos un nometņu momentos
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg h-80 cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-primary font-semibold uppercase tracking-wide text-sm mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Fullscreen"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  )
}
