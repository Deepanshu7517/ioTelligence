import { Link } from "react-router-dom";
import { Logo } from "./logo";
import { footerLinks, socialLinks } from "../../lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-secondary-foreground/80">
              Empowering businesses with technology that scales.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-headline text-base font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-base font-semibold">Services</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-base font-semibold">Connect</h3>
              <div className="mt-4 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    to={social.href}
                    className="text-secondary-foreground/80 transition-colors hover:text-secondary-foreground"
                    aria-label={`Follow us on ${social.icon.displayName}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-secondary-foreground/60">
          <p>
            &copy; {currentYear} NovaTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
