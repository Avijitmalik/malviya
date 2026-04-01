"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ScrollAnimation } from "@/components/scroll-animation";

import { blogPosts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#1b111c]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeDown">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Blog
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-lg">
              Stay updated with the latest financial news, expert tips, and
              investment strategies to make informed decisions.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <ScrollAnimation
                key={post.id}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="rounded-2xl overflow-hidden bg-[#2a1f2e] group hover:bg-[#342838] transition-all cursor-pointer block h-full"
                >
                  {/* Image */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Author Info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff0007] to-[#8b0000] flex items-center justify-center text-white font-bold text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-gray-300 text-sm">
                        {post.author}
                      </span>
                    </div>

                    {/* Date */}
                    <p className="text-gray-400 text-sm mb-4">{post.date}</p>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#ff0007] transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1b111c] to-[#2d1f35]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.1}>
            <p className="text-[#9497a1] text-lg mb-8">
              Subscribe to our newsletter to get the latest financial tips and
              insights delivered to your inbox.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeUp" delay={0.2}>
            <div className="flex flex-col lg:flex-row xl:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#9497a1]"
              />
              <button className="bg-[#ff0007] hover:bg-[#cc0005] text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  );
}
