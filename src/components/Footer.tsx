const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Cybersecurity'],
    Company: ['About Us', 'Careers', 'Blog', 'Press'],
    Support: ['Help Center', 'Documentation', 'API Status', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="text-primary font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-foreground">NexaTech</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building innovative digital solutions that transform businesses and drive growth in the modern world.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NexaTech. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with passion for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
