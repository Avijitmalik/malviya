import Image from "next/image"
import { Button } from "@/components/ui/button"

export function OurStorySection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Grid Layout - 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Left - Team High Five Image */}
          <div className="relative h-[300px] lg:h-[350px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>

          {/* Top Right - Years of Experience Card */}
          <div 
            className="rounded-3xl p-8 lg:p-12 flex flex-col justify-center"
            style={{ background: 'linear-gradient(135deg, #ff0007 0%, #8b0000 100%)' }}
          >
            <h3 className="text-5xl lg:text-6xl font-bold text-white mb-2">25+</h3>
            <p className="text-xl lg:text-2xl text-white font-medium">Years of Experience</p>
          </div>

          {/* Bottom Left - Consultation Meeting Image */}
          <div className="relative h-[300px] lg:h-[350px] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
              alt="Professional consultation"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right - Book Consultation Button */}
          <div 
            className="rounded-3xl p-8 lg:p-12 flex flex-col justify-center items-center"
            style={{ background: 'linear-gradient(135deg, #ff0007 0%, #8b0000 100%)' }}
          >
            <Button 
              className="bg-white text-[#ff0007] hover:bg-gray-100 text-lg lg:text-xl font-bold px-8 py-6 rounded-full"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
