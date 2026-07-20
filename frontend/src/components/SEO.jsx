import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Etacom Technology'
const SITE_URL = 'https://etacomtechnology.com'
const DEFAULT_DESC = 'Etacom Technology is a premier ICT and software development company based in Mekelle and Addis Ababa, Ethiopia. We deliver custom software, ERP, AI, data center, and ICT solutions across Ethiopia.'
const DEFAULT_KEYWORDS = 'ICT solutions Mekelle, software development Tigray, ERP Ethiopia, IT consulting Addis Ababa, data center Ethiopia, ICT equipment supply, custom software Ethiopia, Etacom Technology'
const OG_IMAGE = '/og-image.png'

export default function SEO({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = OG_IMAGE,
  ogType = 'website',
  publishedTime,
  author,
  jsonLd,
}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - Software & ERP Development`
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author || SITE_NAME} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@etacomtechnology" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}${ogImage}`} />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta name="twitter:creator" content={author} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
