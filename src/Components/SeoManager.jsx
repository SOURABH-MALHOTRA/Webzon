import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://webzon.in";

const pageSeo = {
  "/": {
    title:
      "Webzon | Web Development, Mobile Apps, SaaS & Custom Software Company",
    description:
      "Webzon is an IT company building high-performance websites, Android & iOS mobile apps, SaaS products, WordPress and Shopify stores, UI/UX, SEO, and CRM solutions.",
  },
  "/about": {
    title: "About Webzon | IT Company for Websites, Apps & Software",
    description:
      "Know Webzon's mission, team, and approach to building scalable software products, business websites, e-commerce stores, and mobile applications.",
  },
  "/services": {
    title:
      "Services | Web Development, Mobile Apps, SaaS, Shopify & WordPress - Webzon",
    description:
      "Explore Webzon services: web development, Android & iOS applications, SaaS & custom software, WordPress and Shopify stores, UI/UX design, SEO, and CRM integration.",
  },
  "/portfolio": {
    title: "Portfolio | Webzon Projects in Web, App & Software Development",
    description:
      "View Webzon's portfolio of client projects across websites, e-commerce stores, mobile apps, and custom software solutions.",
  },
  "/contact": {
    title: "Contact Webzon | Start Your Website, App or Software Project",
    description:
      "Contact Webzon to discuss your project requirements for website development, mobile apps, SaaS products, UI/UX, SEO, and CRM solutions.",
  },
};

const setMeta = (name, content, attribute = "name") => {
  let tag = document.querySelector(`meta[${attribute}='${name}']`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = pageSeo[location.pathname] || pageSeo["/"];
    const canonicalUrl = `${BASE_URL}${location.pathname}`;

    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("robots", "index, follow, max-image-preview:large");

    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Webzon", "property");
    setMeta("og:title", seo.title, "property");
    setMeta("og:description", seo.description, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:image", `${BASE_URL}/logo.svg`, "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);
    setMeta("twitter:image", `${BASE_URL}/logo.svg`);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [location.pathname]);

  return null;
};

export default SeoManager;
