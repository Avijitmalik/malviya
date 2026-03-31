import Image from "next/image"

const videoTestimonials = [
  {
    name: "Kim Larson",
    image: "/placeholder.svg?height=400&width=300&query=professional man glasses smiling office portrait",
  },
  {
    name: "Kim Larson",
    image: "/placeholder.svg?height=400&width=300&query=professional woman glasses smiling portrait",
  },
  {
    name: "Kim Larson",
    image: "/placeholder.svg?height=400&width=300&query=professional man smiling outdoor portrait",
  },
  {
    name: "Kim Larson",
    image: "/placeholder.svg?height=400&width=300&query=professional woman smiling portrait brunette",
  },
]

export function VideoTestimonialSection() {
  return (
    <section className="py-20 px-4 bg-[#1b111c]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#ff0007] text-center mb-4 text-white">
          Video Testimonial
        </h2>
        <p className="text-[#9497a1] text-center max-w-3xl mx-auto mb-16">
          Monitor mutual funds, equities, bonds, FDs, PMS & insurance in a secure, unified dashboard. Get statements, goal tracking and review reminders.
        </p>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {videoTestimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
