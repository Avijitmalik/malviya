"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowLeft, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"
import { blogPosts } from "@/lib/blog-data"
import { use } from "react"

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params)
  const id = unwrappedParams.id
  const post = blogPosts.find((p) => p.id.toString() === id)

  if (!post) {
    return (
      <main className="min-h-screen bg-[#1b111c]">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link href="/blog" className="text-[#ff0007] hover:underline">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#9497a1] hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 text-input">
        <div className="max-w-4xl mx-auto">
          {/* Category & Read Time */}
          <ScrollAnimation animation="fadeUp">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#ff0007] text-sm font-semibold">{post.category}</span>
              <div className="flex items-center gap-2 text-[#9497a1] text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author & Date */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0007] to-[#8b0000] flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{post.author}</p>
                  <p className="text-[#9497a1] text-sm">{post.date}</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Featured Image */}
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <div className="rounded-2xl overflow-hidden mb-12">
              <img 
                src={post.image || "/placeholder.svg"} 
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </ScrollAnimation>

          {/* Content */}
          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <div 
              className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-[#9497a1] prose-p:leading-relaxed prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollAnimation>

          {/* CTA Section */}
          <ScrollAnimation animation="fadeUp" delay={0.3}>
            <div className="mt-16 p-8 rounded-2xl backdrop-blur-md border border-white/10" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
              <h3 className="text-2xl font-bold text-white mb-4">Need Financial Advice?</h3>
              <p className="text-[#9497a1] mb-6">
                Our expert advisors are here to help you make informed financial decisions. Book a consultation today.
              </p>
                <Link href={"/contact"}>
                  <button className="bg-[#ff0007] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#cc0006] transition-colors flex items-center gap-2">
                    Book Consultation
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  )
}
