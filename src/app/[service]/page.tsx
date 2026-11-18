import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, ArrowLeft } from "lucide-react";
import { services, getService } from "@/lib/services";
import { SITE_URL, BOOKING_URL } from "@/lib/site";

interface PageProps {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Page Not Found" };

  return {
    title: `${service.metaTitle} | The Holding Space`,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.description,
      url: `${SITE_URL}/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${SITE_URL}/${service.slug}`,
    provider: {
      "@type": "Person",
      name: "Amy Ryan",
      url: `${SITE_URL}/`,
      jobTitle: "Specialist Wellness Counsellor (ASCHP)",
    },
    areaServed: { "@type": "Country", name: "South Africa" },
    availableChannel: [
      { "@type": "ServiceChannel", serviceType: "Online (Google Meet)" },
      { "@type": "ServiceChannel", serviceType: "In-person, Hillcrest, KZN" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav className="blog-nav">
        <Link href="/" className="blog-nav-back">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      <header className="service-hero">
        <p className="service-eyebrow">Online &amp; In-Person Counselling</p>
        <h1>{service.title}</h1>
        {service.intro.map((p, i) => (
          <p key={i} className="service-lead">{p}</p>
        ))}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-filled btn-lg">
          <CalendarCheck size={20} />
          Book a free 15 minute consultation
        </a>
      </header>

      <section className="service-section">
        <h2>Who this is for</h2>
        <ul className="service-list">
          {service.whoFor.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="service-section">
        <h2>What we can work on</h2>
        <ul className="service-list">
          {service.helpWith.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="service-section">
        <h2>What sessions look like</h2>
        <p>{service.sessions}</p>
      </section>

      <section className="service-section">
        <h2>My approach</h2>
        <p>{service.approach}</p>
      </section>

      <section className="service-section">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {service.faqs.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-cta">
        <h2>Ready to take the first step?</h2>
        <p>Book a free 15 minute consultation to talk about what brings you to counselling and whether we would be a good fit.</p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-filled btn-lg">
          <CalendarCheck size={20} />
          Book a free 15 minute consultation
        </a>
      </section>

      <section className="service-section service-related">
        <h2>Other areas of support</h2>
        <ul className="service-list">
          {otherServices.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}`}>{s.title}</Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} The Holding Space — Amy Ryan,
          Specialist Wellness Counsellor (ASCHP)
        </p>
      </footer>
    </div>
  );
}
