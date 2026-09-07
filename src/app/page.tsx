"use client";

import { useState } from "react";
import {
  User,
  Users,
  Heart,
  FlaskConical,
  Brain,
  ShieldCheck,
  Zap,
  Activity,
  Moon,
  Leaf,
  Quote,
  Mail,
  Phone,
  MapPin,
  Clock,
  Smile,
  TrendingUp,
  HandHeart,
  CalendarCheck,
} from "lucide-react";
import Image from "next/image";

function WaveDivider({ from, to, variant }: { from: string; to: string; variant?: 2 }) {
  const d = variant === 2
    ? "M0,20 C360,70 720,0 1080,50 C1260,70 1380,30 1440,35 L1440,80 L0,80 Z"
    : "M0,50 C180,10 480,70 720,30 C960,-10 1260,60 1440,20 L1440,80 L0,80 Z";
  return (
    <div className="wave-divider" style={{ background: from }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d={d} fill={to} />
      </svg>
    </div>
  );
}

const serviceIcons: Record<string, React.ReactNode> = {
  "Individual Counselling": <User className="service-icon" />,
  "Couples Counselling": <Users className="service-icon" />,
  "Loss & Grief": <Heart className="service-icon" />,
  "Substance Abuse & Addiction": <FlaskConical className="service-icon" />,
  "Anxiety & Depression": <Brain className="service-icon" />,
  "Trauma Counselling": <ShieldCheck className="service-icon" />,
  "Crisis Management": <Zap className="service-icon" />,
  "Everyday Life Stresses": <Activity className="service-icon" />,
  "Lifestyle & Sleep Planning": <Moon className="service-icon" />,
};

const services = [
  {
    title: "Individual Counselling",
    desc: "A safe, confidential space to explore your thoughts and feelings, build resilience, and work towards personal growth at your own pace.",
  },
  {
    title: "Couples Counselling",
    desc: "Strengthen your relationship through improved communication, conflict resolution, and deeper understanding of each other.",
  },
  {
    title: "Loss & Grief",
    desc: "Compassionate support to help you navigate the complex emotions of loss and find a path through the grieving process.",
  },
  {
    title: "Substance Abuse & Addiction",
    desc: "Non-judgemental guidance to understand the roots of addiction, develop coping strategies, and build a sustainable recovery.",
  },
  {
    title: "Anxiety & Depression",
    desc: "Evidence-based approaches to manage anxiety and depression, helping you regain a sense of control and hope.",
  },
  {
    title: "Trauma Counselling",
    desc: "Gentle, trauma-informed care to help you process difficult experiences and move forward with strength and self-compassion.",
  },
  {
    title: "Crisis Management",
    desc: "Immediate support during times of acute distress, helping you stabilise and find clarity when you need it most.",
  },
  {
    title: "Everyday Life Stresses",
    desc: "Practical strategies for managing the pressures of daily life — work, relationships, transitions, and everything in between.",
  },
  {
    title: "Lifestyle & Sleep Planning",
    desc: "Holistic support for building healthier routines, improving sleep, and creating sustainable lifestyle changes.",
  },
];

const testimonials = [
   {
    quote: "Thank you for making me feel safe.",
    name: "— Anonymous",
  },
 {
    quote: "Amy has really helped me through the toughest of times. She’s been a big part of my recovery and has really been there. Thank you so much for everything.",
    name: "— Anonymous",
  },
   {
    quote: "In sessions with Amy, I have never felt rushed or judged or pressured. She has allowed me to go always at my own pace and I think that’s why I’ve really been able to commit this time.",
    name: "— Anonymous",
  },
  {
    quote: "I really had an amazing and eye-opening process with Amy. She listened to me and allowed me to be myself, speak my mind, and made me feel very heard, seen and understood. She also challenged me to grow and pursue the goals I set for myself in this counselling process.",
    name: "— Anonymous",
  },
   {
    quote: "I've seen a few counsellors over the years, qualified psychologists, Christian therapists, church counsellors. Honestly, none have been near as helpful as Amy was, in terms of listening, understanding, encouraging, suggesting practical steps to healing and sharing knowledge. I never felt judged sharing my deepest thoughts and secrets. I feel I've come a long way from where I was, even if my journey is not complete. Honestly, I was a little nervous going in, but this was as positive an experience as I could have imagined.",
    name: "— Anonymous",
  },
  
 
 
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#home">
            <img src={`${process.env.__NEXT_PUBLIC_BASEPATH || ''}/logo.jpg`} alt="The Holding Space" className="nav-logo" />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            </li>
            <li>
              <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-leaf-bg" />
        <div className="hero-content">
          <Image
            src={`/logo.jpg`}
            alt="The Holding Space logo"
            className="hero-logo"
          />
          <p className="hero-subtitle">Specialist Wellness Counselling</p>
          <p>
            A warm, safe space to be heard. Offering professional online
            counselling to help you navigate life&rsquo;s challenges with care,
            compassion, and understanding.
          </p>
          <a href="#contact" className="btn btn-filled">
            Get in Touch
          </a>
        </div>
      </section>

      {/* WAVE: hero → about */}
      <WaveDivider from="#faf6f1" to="#e6ece6" />

      {/* ABOUT */}
      <div className="section-alt">
        <section className="section" id="about">
          <div className="about-grid">
            <img
              src={`${process.env.__NEXT_PUBLIC_BASEPATH || ''}/amy.jpg`}
              alt="Amy Ryan, counsellor"
              className="about-photo"
            />
            <div className="about-text">
              <h3>Meet Amy</h3>
              <p>
                I&rsquo;m Amy Ryan, a specialist wellness counsellor listed
                with the Association for Supportive Counsellors and Holistic
                Practitioners (ASCHP). I believe that everyone deserves a space
                where they can feel truly heard — without judgement, without
                pressure, and without pretence.
              </p>
              <p>
                My approach is grounded in empathy, warmth, and
                evidence-informed practice. Whether you&rsquo;re working through
                a specific challenge or simply need someone to talk to, I&rsquo;m
                here to walk alongside you on your journey towards healing and
                growth.
              </p>
              <div className="qualifications">
                <h4>Qualifications</h4>
                <ul>
                  <li>
                    <Leaf className="qual-icon" />
                    BA Honours in Psychology
                  </li>
                  <li>
                    <Leaf className="qual-icon" />
                    Humanitas Counselling Course
                  </li>
                  <li>
                    <Leaf className="qual-icon" />
                    Listed with ASCHP
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WAVE: about → services */}
      <WaveDivider from="#e6ece6" to="#faf6f1" variant={2} />

      {/* SERVICES */}
      <div className="section-decorated">
        <div className="hero-leaf-bg" />
        <section className="section section-above" id="services">
          <div className="section-header">
            <h2>Areas of Expertise</h2>
            <div className="divider" />
            <p>
              Every person&rsquo;s journey is unique. I offer support across a
              range of areas to meet you where you are.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                {serviceIcons[s.title]}
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* WAVE: services → approach */}
      <WaveDivider from="#faf6f1" to="#e6ece6" />

      {/* APPROACH / PHILOSOPHY */}
      <div className="section-alt">
        <section className="section" id="approach">
          <div className="section-header">
            <h2>My Approach</h2>
            <div className="divider" />
          </div>
          <div className="philosophy-content">
            <blockquote>
              &ldquo;Healing happens in the space between being truly heard and
              finding the courage to move forward.&rdquo;
            </blockquote>
            <p>
              I work from a person-centred, integrative framework — drawing on
              various therapeutic approaches to create a plan that fits{" "}
              <em>you</em>, not the other way around. Sessions are built on
              trust, empathy, and unconditional positive regard.
            </p>
            <p>
              My goal is never to tell you what to do, but to help you uncover
              the insight, strength, and clarity that already exist within you.
              Whether we&rsquo;re working through deep-seated trauma or the
              everyday pressures of modern life, every session is a
              collaborative, judgement-free space.
            </p>
          </div>
          <div className="approach-values">
            <div className="approach-value">
              <HandHeart className="approach-value-icon" />
              <h4>Empathy</h4>
              <p>Meeting you with genuine understanding</p>
            </div>
            <div className="approach-value">
              <Smile className="approach-value-icon" />
              <h4>Warmth</h4>
              <p>A safe and welcoming space always</p>
            </div>
            <div className="approach-value">
              <TrendingUp className="approach-value-icon" />
              <h4>Growth</h4>
              <p>Helping you move forward at your pace</p>
            </div>
            <div className="approach-value">
              <ShieldCheck className="approach-value-icon" />
              <h4>Trust</h4>
              <p>Confidential, judgement-free support</p>
            </div>
          </div>
        </section>
      </div>

      {/* WAVE: approach → testimonials */}
      <WaveDivider from="#e6ece6" to="#faf6f1" variant={2} />

      {/* TESTIMONIALS */}
      <div className="section-decorated">
        <div className="hero-leaf-bg" />
        <section className="section section-above" id="testimonials">
          <div className="section-header">
            <h2>What Clients Say</h2>
            <div className="divider" />
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <Quote className="testimonial-quote-icon" />
                <p>&ldquo;{t.quote}&rdquo;</p>
                {/* <cite>{t.name}</cite> */}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* WAVE: testimonials → contact */}
      <WaveDivider from="#faf6f1" to="#e6ece6" />

      {/* CONTACT */}
      <div className="section-alt">
        <section className="section" id="contact">
          <div className="section-header">
            <h2>Get in Touch</h2>
            <div className="divider" />
            <p>
              Ready to take the first step? Reach out and let&rsquo;s find a
              time to talk.
            </p>
          </div>

          <div className="contact-cta">
            <a
              href="https://calendar.app.google/FsXbb4STFdpf571X9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-filled btn-lg"
            >
              <CalendarCheck size={20} />
              Book a Session
            </a>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-detail">
                <Mail className="contact-detail-icon" />
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <a href="mailto:amythecounsellor@gmail.com?subject=Counselling%20Enquiry&body=Hi%20Amy%2C%0A%0AI%20would%20like%20to%20enquire%20about%20booking%20a%20counselling%20session.%0A%0AKind%20regards">
                    amythecounsellor@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <Phone className="contact-detail-icon" />
                <div className="contact-detail-text">
                  <strong>Phone</strong>
                  <a href="tel:+27727016908">(072) 701 6908</a>
                </div>
              </div>
              <div className="contact-detail">
                <MapPin className="contact-detail-icon" />
                <div className="contact-detail-text">
                  <strong>Location</strong>
                  <span>TICA Longevity Hub, 1 Valdean Rd, St Helier, Hillcrest, 3610</span>
                </div>
              </div>
              <div className="contact-detail">
                <Clock className="contact-detail-icon" />
                <div className="contact-detail-text">
                  <strong>Hours</strong>
                  <span>Monday – Friday, 9:00 AM – 4:00 PM</span>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              action="mailto:amythecounsellor@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <input type="text" name="name" placeholder="Your name" required />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <textarea name="message" placeholder="Your message" required />
              <button type="submit" className="btn btn-filled">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} The Holding Space — Amy Ryan,
          Specialist Wellness Counsellor (ASCHP)
        </p>
      </footer>
    </>
  );
}
