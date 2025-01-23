import Head from 'next/head';

const baseURL = process.env.API_URL;

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogImage?: string; 
  ogType?: string;
  url?: string;
}

const SEO = ({
  title,
  description = '',
  keywords = '',
  author = '',
  ogImage = '',
  ogType = 'website',
  url = 'https://vuacontent.vn',
}: SEOProps) => {
  return (
    <Head>
      {/* Title */}
      <title>{title}</title>

        <link rel="icon" href={`${baseURL}/public/get-web-config-key?key=favicon`} />

      {/* Meta tags for SEO */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
