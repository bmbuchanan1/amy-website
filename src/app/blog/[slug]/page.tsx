import React from "react";
import type { Metadata } from "next";
import { getBlogPost, getAllBlogPosts } from "@/lib/blogs";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const keywords = ["counselling", "wellness", "mental health"];
  if (post.category) {
    keywords.push(post.category);
  }

  return {
    title: `${post.title} | The Holding Space`,
    description: post.excerpt,
    keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Amy Ryan"],
      tags: post.category ? [post.category] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function renderInlineMarkdown(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let partIndex = 0;

  // Combined regex to match both [text](url) links and *italic* or _italic_
  const combinedRegex = /\[([^\]]+)\]\(([^)]+)\)|[*_]([^*_]+)[*_]/g;
  let match;

  while ((match = combinedRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      // Link match: [text](url)
      parts.push(
        React.createElement(
          "a",
          { key: `link-${partIndex}`, href: match[2], target: "_blank", rel: "noopener noreferrer" },
          match[1]
        )
      );
    } else if (match[3]) {
      // Italic match: *text* or _text_
      parts.push(
        React.createElement("em", { key: `italic-${partIndex}` }, match[3])
      );
    }

    lastIndex = combinedRegex.lastIndex;
    partIndex++;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const allPosts = getAllBlogPosts();

  if (!post) {
    return (
      <div className="blog-post-page">
        <nav className="blog-nav">
          <Link href="/blog" className="blog-nav-back">
            ← Back to Blog
          </Link>
        </nav>
        <section className="blog-section">
          <div className="blog-not-found">
            <h1>Post not found</h1>
            <p>Sorry, we couldn't find the blog post you're looking for.</p>
            <Link href="/blog" className="btn btn-filled">
              Back to all posts
            </Link>
          </div>
        </section>
      </div>
    );
  }

  // Get current and next/previous posts
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  // JSON-LD schema for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${process.env.__NEXT_PUBLIC_BASEPATH || ""}/logo.jpg`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Amy Ryan",
      url: `${process.env.__NEXT_PUBLIC_BASEPATH || ""}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "The Holding Space",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.__NEXT_PUBLIC_BASEPATH || ""}/logo.jpg`,
      },
    },
  };

  const baseUrl = process.env.__NEXT_PUBLIC_BASEPATH || "";
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;

  return (
    <div className="blog-post-page">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Navigation */}
      <nav className="blog-nav">
        <Link href="/blog" className="blog-nav-back">
          ← Back to Blog
        </Link>
      </nav>

      {/* Article */}
      <article className="blog-post-article">
        {/* Header */}
        <header className="blog-post-header">
          {post.category && (
            <span className="blog-post-category">{post.category}</span>
          )}
          <h1>{post.title}</h1>

          <div className="blog-post-meta">
            <div className="blog-post-info">
              <Calendar size={18} />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="blog-post-info">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="blog-post-content">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('#')) {
              const level = Math.min(paragraph.match(/^#+/)?.[0].length || 1, 6);
              const text = paragraph.replace(/^#+\s/, '');
              return React.createElement(`h${level}`, { key: index }, renderInlineMarkdown(text));
            }
            if (paragraph.startsWith('-')) {
              const items = paragraph.split('\n').filter(line => line.startsWith('-'));
              return (
                <ul key={index}>
                  {items.map((item, i) => (
                    <li key={i}>{renderInlineMarkdown(item.replace(/^-\s/, ''))}</li>
                  ))}
                </ul>
              );
            }
            return <p key={index}>{renderInlineMarkdown(paragraph)}</p>;
          })}
        </div>

        {/* Navigation Between Posts */}
        <nav className="blog-post-navigation">
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`} className="blog-post-nav-link prev">
              <div className="blog-post-nav-content">
                <span className="blog-post-nav-label">
                  <ArrowLeft size={16} />
                  Previous
                </span>
                <span className="blog-post-nav-title">{prevPost.title}</span>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="blog-post-nav-link next">
              <div className="blog-post-nav-content">
                <span className="blog-post-nav-label">
                  Next
                  <ArrowRight size={16} />
                </span>
                <span className="blog-post-nav-title">{nextPost.title}</span>
              </div>
            </Link>
          )}
        </nav>
      </article>

      {/* CTA Section */}
      <section className="blog-post-cta">
        <h2>Ready to start your wellness journey?</h2>
        <p>If any of these insights resonate with you, I'm here to support you.</p>
        <Link href="/#contact" className="btn btn-filled">
          Get in Touch
        </Link>
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
