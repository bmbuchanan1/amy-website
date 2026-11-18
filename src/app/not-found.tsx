import Link from "next/link";

export default function NotFound() {
  return (
    <div className="service-page">
      <header className="service-hero">
        <h1>Page not found</h1>
        <p className="service-lead">Sorry, we could not find the page you are looking for.</p>
        <Link href="/" className="btn btn-filled">
          Back to home
        </Link>
      </header>
    </div>
  );
}
