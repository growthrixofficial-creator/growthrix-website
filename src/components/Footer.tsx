import { Mail, Phone, MapPin } from "lucide-react";
import growthrixLogo from "@/assets/growthrix-logo.jpeg";

const Footer = () => {
  return (
    <footer id="contact" className="section-dark border-t border-primary/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={growthrixLogo} alt="Growthrix Club" className="h-10 w-auto rounded mb-4" />
            <p className="text-hero-muted text-sm leading-relaxed">
              Premium performance marketing & AI growth agency. Scaling eCommerce, real estate,
              and D2C brands with data-driven strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-hero-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "About Us", href: "#about" },
                { label: "Book a Call", href: "https://calendly.com" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-hero-muted text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-hero-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5" />
                <div className="text-sm text-hero-muted space-y-1">
                  <a href="mailto:hello@growthrix.club" className="block hover:text-primary transition-colors">hello@growthrix.club</a>
                  <a href="mailto:contact@growthrix.club" className="block hover:text-primary transition-colors">contact@growthrix.club</a>
                  <a href="mailto:marketing@growthrix.club" className="block hover:text-primary transition-colors">marketing@growthrix.club</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <div className="text-sm text-hero-muted space-y-1">
                  <a href="tel:+919370587430" className="block hover:text-primary transition-colors">+91 9370587430</a>
                  <a href="tel:+919359893847" className="block hover:text-primary transition-colors">+91 9359893847</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display font-bold text-hero-foreground mb-4">Follow Us</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/growthrix-club/" },
                { label: "Instagram", href: "https://www.instagram.com/growthrix.club" },
                { label: "X (Twitter)", href: "https://x.com/Growthrix" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hero-muted text-sm hover:text-primary transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-hero-muted/50 text-sm">
            © {new Date().getFullYear()} Growthrix Club. All rights reserved. | Performance Marketing & AI Growth Agency
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
