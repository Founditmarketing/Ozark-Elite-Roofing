import { Helmet } from 'react-helmet-async';

export const SITE_NAME = 'Ozark Elite Roofing';
export const DOMAIN = 'https://ozarkeliteroofing.com';
const DEFAULT_OG_IMAGE = '/hero-bg.jpg';

type LocalBusinessSchemaOptions = {
  path: string;
  service?: {
    name: string;
    description: string;
  };
};

export function buildLocalBusinessSchema({ path, service }: LocalBusinessSchemaOptions) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'RoofingContractor'],
    name: SITE_NAME,
    url: `${DOMAIN}${path}`,
    telephone: '+14174443808',
    email: 'ervin@ozarkeliteroofing.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Purdy',
      addressRegion: 'MO',
      postalCode: '65734',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 36.8167, longitude: -93.9238 },
      geoRadius: '96560',
    },
  };

  if (service) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            serviceType: service.name,
            description: service.description,
            areaServed: 'Springfield, MO',
            provider: { '@type': 'LocalBusiness', name: SITE_NAME },
          },
        },
      ],
    };
  }

  return schema;
}

type PageSEOProps = {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  image?: string;
  noIndex?: boolean;
};

export default function PageSEO({ title, description, path, schema, image, noIndex }: PageSEOProps) {
  const url = `${DOMAIN}${path}`;
  const ogImage = `${DOMAIN}${encodeURI(image ?? DEFAULT_OG_IMAGE)}`;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
