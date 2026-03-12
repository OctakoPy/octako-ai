import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Workflow Automation", href: "/services/workflow-automation", hoverColor: "hover:text-accent-purple" },
      { label: "AI Integration", href: "/services/ai-integration", hoverColor: "hover:text-accent-pink" },
      { label: "Process Redesign", href: "/services/process-redesign", hoverColor: "hover:text-accent-cyan" },
      { label: "FixMySheet", href: "/services/fixmysheet", hoverColor: "hover:text-accent-green" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about", hoverColor: "hover:text-accent-cyan" },
      //{ label: "Case Studies", href: "/#examples", hoverColor: "hover:text-accent-cyan" },
      { label: "Contact", href: "/contact", hoverColor: "hover:text-accent-cyan" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog", hoverColor: "hover:text-accent-pink" },
      //{ label: "Case Studies", href: "/#examples", hoverColor: "hover:text-accent-pink" },
      //{ label: "FAQs", href: "/#faq", hoverColor: "hover:text-accent-pink" },
      //{ label: "Research Sources", href: "/#hard-truth", hoverColor: "hover:text-accent-pink" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white/60" role="contentinfo">
      <div className="section-container px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              {section.title === "Services" ? (
                <Link to="/services" className="text-sm font-semibold text-white mb-4 hover:text-accent-purple transition-colors block">
                  {section.title}
                </Link>
              ) : (
                <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              )}
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className={`text-sm transition-colors ${link.hoverColor}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <img src="/icons/icon32.png" alt="Octako AI" className="w-6 h-6 rounded" />
              <p>© 2026 Octako AI</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
