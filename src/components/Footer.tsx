"use client";

import { useApp } from "@/lib/app-context";
import { navLinks, profile } from "@/data/portfolio";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="border-t border-white/10 px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <p className="text-lg font-semibold tracking-tighter text-white">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-white/45">{t.hero.role}</p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-white/35 uppercase">
                {t.footer.navigation}
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {t.nav[link.key]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-white/35 uppercase">
                {t.footer.contact}
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {t.footer.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
