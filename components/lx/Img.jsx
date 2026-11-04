import { getImageProps } from 'next/image';

// A plain <img> (so the legacy inline styles lay out exactly as before) that gets
// a responsive AVIF/WebP srcSet from Next's image optimizer for local images.
export default function Img({ src, alt = '', sizes = '(max-width: 760px) 100vw, 50vw', ...rest }) {
  if (!src || !src.startsWith('/')) return <img src={src || undefined} alt={alt} {...rest} />;
  const { props } = getImageProps({ src, alt, fill: true, sizes });
  return <img {...rest} alt={alt} src={props.src} srcSet={props.srcSet} sizes={props.sizes} />;
}
