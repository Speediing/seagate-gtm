import { BrandLockup } from "./BrandLockup";

export function SiteNav() {
  return (
    <header className="site-header site-header-over">
      <a href="#top" className="nav-brand" aria-label="Back to top">
        <BrandLockup size="sm" />
      </a>
      <nav className="header-actions" aria-label="On this page">
        <a className="text-button" href="#jobs">
          Eight jobs
        </a>
        <a className="text-button" href="#how">
          How it works
        </a>
        <a className="text-button" href="#who">
          Who said it
        </a>
      </nav>
    </header>
  );
}
