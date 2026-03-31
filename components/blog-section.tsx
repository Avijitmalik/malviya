"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/components/scroll-animation";
import Link from "next/link";

const featuredBlog = {
  title: "Wealth Planning: Your Roadmap to Financial Freedom",
  excerpt:
    "Achieve your life goals with structured wealth planning. Align your investments, savings, and risk management for long-term success.",
  metaDescription:
    "Discover how wealth planning helps you align investments, savings, and life goals for long-term financial success and stability.",
  author: "By malviya capital",
  image:
    "/placeholder.svg?height=500&width=600&query=abstract colorful swirl art orange purple",

  content: `
Wealth planning is more than just investing—it’s about creating a structured roadmap for your financial future.

It begins with understanding your life goals:

• Buying a home  
• Funding education  
• Retirement planning  
• Building generational wealth  

A proper wealth plan aligns your income, expenses, investments, and risk tolerance to achieve these goals efficiently.

Key elements of wealth planning include:

• Goal-based investing  
• Asset allocation  
• Risk management  
• Tax efficiency  

Financial experts help you create a customized plan and regularly review it to adapt to life changes and market conditions.

Wealth planning ensures that every rupee you earn works toward a purpose—helping you build not just wealth, but financial peace of mind.
`,
};
const sideBlogs = [
  {
    title: "Mutual Funds Made Simple: Build Wealth with Smart Investing",
    author: "By Malviya Capital",
    description:
      "Mutual funds offer a powerful way to grow your wealth with professional management and diversification. Start your investment journey today.",
    image:
      "/placeholder.svg?height=120&width=180&query=mutual funds investment growth chart",
    metaDescription:
      "Learn how mutual funds help you grow wealth through diversification, SIPs, and expert fund management. Start investing smarter today.",
    content: `
Mutual funds are one of the most popular investment options for individuals looking to grow their wealth over time. They allow investors to pool money into professionally managed portfolios consisting of stocks, bonds, or other securities.

One of the biggest advantages of mutual funds is diversification. Instead of investing in a single asset, your money is spread across multiple investments, reducing risk.

Mutual funds also offer flexibility through:

• SIPs (Systematic Investment Plans)  
• Lump sum investments  
• Tax-saving schemes (ELSS)  

SIPs are especially beneficial as they encourage disciplined investing and help average out market volatility.

Professional fund managers handle investment decisions, making mutual funds suitable even for beginners.

With the power of compounding and long-term discipline, mutual funds can help you achieve goals like retirement, children’s education, or wealth creation.
`,
  },
  {
    title:
      "Smart Loan Consultancy: How to Choose the Right Loan Without Costly Mistakes",
    author: "By Malviya Capital",
    description:
      "Confused by multiple loan options? Discover how expert loan consultancy helps you secure the best deal while avoiding financial pitfalls.",
    image:
      "/placeholder.svg?height=120&width=180&query=loan finance consulting paperwork",
    metaDescription:
      "Find the right loan with expert consultancy. Compare lenders, reduce interest burden, and improve approval chances with professional guidance.",
    content: `
In today’s fast-paced financial landscape, loans have become an essential tool for achieving major life goals—whether it’s purchasing a home, funding a business, or managing personal expenses.

A loan consultant acts as your financial guide, helping you navigate through complex loan structures, interest rates, repayment terms, and eligibility criteria.

Key benefits include:

• Comparing interest rates across lenders  
• Identifying hidden charges  
• Improving creditworthiness  
• Choosing fixed vs floating rates  
• Faster approvals  

Loan consultancy ensures you get the right loan, on the right terms, at the right time—turning borrowing into a smart financial decision.
`,
  },
  {
    title:
      "Insurance Guidance: Building a Financial Safety Net for Life’s Uncertainties",
    author: "By Malviya Capital",
    description:
      "Protect your finances and loved ones with the right insurance strategy designed to safeguard against life’s unexpected risks.",
    image:
      "/placeholder.svg?height=120&width=180&query=insurance protection shield family concept",
    metaDescription:
      "Get expert insurance guidance to choose the right life, health, and general insurance policies for complete financial protection.",
    content: `
Life is unpredictable, and financial uncertainties can arise at any time. Insurance acts as a safety net, protecting you and your loved ones.

A strong insurance plan includes:

• Life insurance  
• Health insurance  
• General insurance  

Expert guidance helps you:

• Choose the right coverage  
• Understand policy terms  
• Avoid underinsurance  
• Plan for medical inflation  

Insurance is not just a product—it’s financial security and peace of mind.
`,
  },
];

export function BlogSection() {
  return (
    <section className="py-20 px-4 bg-[#1b111c]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <ScrollAnimation animation="fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff0007] text-center mb-4 text-white">
            Blogs
          </h2>
          <p className="text-[#9497a1] text-center max-w-3xl mx-auto mb-16">
            Monitor mutual funds, equities, bonds, FDs, PMS & insurance in a
            secure, unified dashboard. Get statements, goal tracking and review
            reminders.
          </p>
        </ScrollAnimation>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Blog - Left Side */}
          <ScrollAnimation animation="fadeLeft">
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={featuredBlog.image || "/placeholder.svg"}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[#ff0007] text-sm font-medium mb-2">
                {featuredBlog.author}
              </span>
              <h3 className="text-white font-semibold text-xl">
                {featuredBlog.title}
              </h3>
              <p className="text-[#9497a1] text-sm mt-2">
                {featuredBlog.content}
              </p>
            </div>
          </ScrollAnimation>

          {/* Side Blogs - Right Side */}
          <ScrollAnimation animation="fadeRight">
            <div className="flex flex-col gap-6">
              {sideBlogs.map((blog, index) => (
                <div key={index} className="flex gap-4">
                  <div className="relative w-36 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#ff0007] text-sm font-medium mb-1">
                      {blog.author}
                    </span>
                    <h4 className="text-white font-semibold mb-1 text-xl">
                      {blog.title}
                    </h4>
                    <p className="text-[#9497a1] text-sm leading-relaxed">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Explore More Button */}
        <ScrollAnimation animation="fadeUp">
          <div className="flex justify-center">
            <Link href={"/blog"}>
              <button className="bg-[#ff0007] hover:bg-[#cc0006] text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Explore More Blogs
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
