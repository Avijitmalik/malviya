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
    "/wealth.png",

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
      "/mutual.png",
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
      "/loan.png",
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
      "/insurance.png",
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
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#1b111c] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <ScrollAnimation animation="fadeUp">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Latest <span className="text-[#ff0007]">Blogs</span>
            </h2>
            <div className="w-20 h-1 bg-[#ff0007] mx-auto mb-6 rounded-full" />
            <p className="text-[#9497a1] text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Insights and updates on wealth creation, market trends, and smart financial management.
            </p>
          </div>
        </ScrollAnimation>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Featured Blog - Left Side */}
          <ScrollAnimation animation="fadeLeft" className="h-full">
            <Link href="/blog" className="group block h-full">
              <div className="flex flex-col h-full bg-[#251a28] rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:translate-y-[-8px]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={featuredBlog.image || "/placeholder.svg"}
                    alt={featuredBlog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b111c] to-transparent opacity-60" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <span className="text-[#ff0007] text-sm font-semibold uppercase tracking-wider mb-3">
                    {featuredBlog.author}
                  </span>
                  <h3 className="text-white font-bold text-2xl md:text-3xl mb-4 group-hover:text-[#ff0007] transition-colors leading-tight">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-[#9497a1] text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-[#ff0007] font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollAnimation>

          {/* Side Blogs - Right Side */}
          <ScrollAnimation animation="fadeRight" className="h-full">
            <div className="flex flex-col gap-8">
              {sideBlogs.map((blog, index) => (
                <Link key={index} href="/blog" className="group block">
                  <div className="flex flex-col sm:flex-row gap-6 p-4 rounded-2xl transition-all duration-300 hover:bg-[#251a28]">
                    <div className="relative w-full sm:w-40 md:w-48 aspect-[16/10] sm:aspect-square md:aspect-[4/3] flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[#ff0007] text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
                        {blog.author}
                      </span>
                      <h4 className="text-white font-bold text-lg md:text-xl mb-2 group-hover:text-[#ff0007] transition-colors line-clamp-2">
                        {blog.title}
                      </h4>
                      <p className="text-[#9497a1] text-sm leading-relaxed line-clamp-2 hidden sm:block">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Explore More Button */}
        <ScrollAnimation animation="fadeUp">
          <div className="mt-16 sm:mt-20 flex justify-center">
            <Link href="/blog">
              <button className="group relative bg-[#ff0007] hover:bg-[#cc0006] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-[#ff0007]/20 flex items-center gap-2">
                Explore All Blogs
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
