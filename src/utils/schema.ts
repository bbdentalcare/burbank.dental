import {
  makeIds,
  buildWebSite,
  buildWebPage,
  buildPiece,
  assembleGraph,
  type IdFactory,
} from "@jdevalk/seo-graph-core";
import type { Dentist, Person, Organization } from "schema-dts";

export function getSeoGraph(canonicalUrl = "https://burbank.dental/") {
  const siteUrl = "https://burbank.dental";
  const mainBrandUrl = "https://bbdentalcare.com";
  const ids: IdFactory = makeIds({ siteUrl });

  const orgId = `${mainBrandUrl}/#/schema.org/Organization/bb-dental-care`;
  const dentistId = `${siteUrl}/#/schema.org/Dentist/burbank`;
  const doctorId = `${siteUrl}/#/schema.org/Person/dr-bryanna-hubbard`;

  // 1. Organization / Parent Brand
  const organizationPiece = buildPiece<Organization>({
    "@type": "Organization",
    "@id": orgId,
    name: "BB Dental Care",
    url: mainBrandUrl,
    logo: "https://bbdentalcare.com/wp-content/uploads/2024/09/logo-horizontal-dark.svg",
    sameAs: [
      "https://www.instagram.com/drabryannadds",
      "https://www.facebook.com/bbdentalcare",
      "https://www.yelp.com/biz/bb-dental-care-burbank",
    ],
  });

  // 2. Dentist / Local Business
  const dentistPiece = buildPiece<Dentist>({
    "@type": "Dentist",
    "@id": dentistId,
    name: "BB Dental Care - Burbank",
    alternateName: ["Burbank Dental", "BB Dental Care"],
    description:
      "Premier modern dental practice in Burbank, CA led by Dr. Bryanna Hubbard, DDS. Offering cosmetic dentistry, dental implants, Invisalign, root canals, emergency dentistry, and routine cleanings.",
    url: siteUrl,
    telephone: "+1-818-256-3060",
    email: "info@bbdentalcare.com",
    priceRange: "$$",
    isAcceptingNewPatients: true,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Insurance, CareCredit, In-House Wellness Membership",
    parentOrganization: { "@id": orgId },
    founder: { "@id": doctorId },
    image: "https://bbdentalcare.com/wp-content/uploads/2025/06/hero-1024x526.avif",
    address: {
      "@type": "PostalAddress",
      streetAddress: "916 W Burbank Blvd. Suite A",
      addressLocality: "Burbank",
      addressRegion: "CA",
      postalCode: "91506",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.1836092,
      longitude: -118.3223941,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://appointments.bbdentalcare.com",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Dental Appointment",
        },
      },
    ],
  });

  // 3. Doctor / Lead Dentist Profile
  const doctorPiece = buildPiece<Person>({
    "@type": "Person",
    "@id": doctorId,
    name: "Dr. Bryanna Hubbard, DDS",
    givenName: "Bryanna",
    familyName: "Hubbard",
    honorificPrefix: "Dr.",
    honorificSuffix: "DDS",
    jobTitle: "Founder & Lead Dentist",
    worksFor: { "@id": dentistId },
    image: "https://bbdentalcare.com/wp-content/uploads/2024/09/bryanna-hubbard-dds.png",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "UCLA School of Dentistry",
    },
    sameAs: ["https://www.instagram.com/drabryannadds", "https://bbdentalcare.com/about/"],
  });

  // 4. WebSite
  const websitePiece = buildWebSite(
    {
      url: siteUrl,
      name: "Burbank Dental | BB Dental Care",
      description:
        "Official Burbank portal for BB Dental Care. Modern, anxiety-free dental excellence in Burbank, CA.",
      publisher: { "@id": dentistId },
      inLanguage: "en-US",
    },
    ids,
  );

  // 5. WebPage
  const webPagePiece = buildWebPage(
    {
      url: canonicalUrl,
      name: "Burbank Dental | BB Dental Care",
      description:
        "Experience anxiety-free, comprehensive dental care in Burbank, CA. $149 new patient special, $49 emergency exam, and 24/7 online scheduling.",
      isPartOf: { "@id": ids.website },
      about: { "@id": dentistId },
      inLanguage: "en-US",
    },
    ids,
  );

  return assembleGraph([organizationPiece, dentistPiece, doctorPiece, websitePiece, webPagePiece], {
    warnOnDanglingReferences: true,
  });
}
