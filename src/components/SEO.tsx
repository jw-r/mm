import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  image: string;
}

export function SEO({ title, description, image }: SEOProps) {
  return (
    <Helmet>
      <title>Pick-toss {title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pick toss" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="260" />
      <meta property="og:image:height" content="260" />
      <meta property="og:description" content="나만의 메타인지 도우미 Pick Toss" />
      <meta property="og:locale" content="ko_KR" />
    </Helmet>
  );
}
