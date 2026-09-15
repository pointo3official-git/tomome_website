import { Helmet } from "react-helmet-async";

export default function PageSEO({
  title,
  description,
  canonical,
  image = "/logos/logo.png",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
}