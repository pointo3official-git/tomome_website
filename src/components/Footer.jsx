import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { footer, brand } from "../data/content";

export default function Footer() {
  const infoLinks = footer.infoLinks;

  const socialLinks = [
    {
      key: "instagram",
      label: "Instagram",
      Icon: Instagram,
      href: footer.social?.instagram,
    },
    {
      key: "facebook",
      label: "Facebook",
      Icon: Facebook,
      href: footer.social?.facebook,
    },
    {
      key: "youtube",
      label: "YouTube",
      Icon: Youtube,
      href: footer.social?.youtube,
    },
    // {
    //   key: "linkedin",
    //   label: "LinkedIn",
    //   Icon: Linkedin,
    //   href: footer.social?.linkedin,
    // },
  ];

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blush-400 focus-visible:ring-offset-2";

  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-10">
      <div className="mt-14 flex flex-col gap-4 border-t border-black/5 pt-8 text-xs text-muted">
        {/* row 1: direct contact + social */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <a href="#home" className="z-10 flex shrink-0 items-center">
              <img
                src="logos/tomome-logo.png"
                alt={brand?.name ?? "Tomome"}
                className="h-10 w-auto sm:h-15"
              />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ key, label, Icon, href }) => (
              <a
                key={key}
                href={href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`-m-2 rounded-full p-2 text-muted transition-colors hover:text-ink ${focusRing}`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* row 2: legal copy + info pages */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p>{footer.legal}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {infoLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`rounded-sm hover:text-ink ${focusRing}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
