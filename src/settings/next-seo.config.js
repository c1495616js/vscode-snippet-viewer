import { siteSettings } from "@settings/site-settings";
export const SEO = {
  title: siteSettings.title,
  description: siteSettings.description,
  openGraph: {
    type: "website",
    locale: "en_IE",
    site_name: siteSettings.site_name,
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
