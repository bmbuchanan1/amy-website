"use client";

import { getAllBlogPosts } from "@/lib/blogs";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: string[] = Array.from(new Set(posts.map(p => p.category).filter((c): c is string => Boolean(c))));
  const filteredPosts = selectedCategory
    ? posts.filter(p => p.category === selectedCategory)
    : posts;

  return (
    <div className="blog-page">
      {/* Header */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Insights & Reflections</h1>
          <p>Thoughts on mental wellbeing, growth, and navigating life's challenges</p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="blog-nav">
        <Link href="/" className="blog-nav-back">
          ← Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <section className="blog-section">
        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="blog-filters">
            <button
              className={`filter-btn ${selectedCategory === null ? "active" : ""}`}
              onClick={() => setSelectedCategory(null)}
            >
              All Posts
            </button>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="blog-card"
              >
                <div className="blog-card-content">
                  {post.category && (
                    <span className="blog-card-category">{post.category}</span>
                  )}
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>

                  <div className="blog-card-meta">
                    <div className="blog-card-info">
                      <Calendar size={16} />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="blog-card-info">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="blog-card-cta">
                    Read Article
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="blog-empty">
              <p>No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} The Holding Space — Amy Ryan,
          Specialist Wellness Counsellor (ASCHP)
        </p>
      </footer>
    </div>
  );
}
