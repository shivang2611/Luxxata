import { getImageProps } from 'next/image';

// A plain <img> (so the legacy inline styles lay out exactly as before) that gets
// a responsive AVIF/WebP srcSet from Next's image optimizer for local images.
// Images with a fixed pixel width (avatars, thumbnails) default to that width,
// so the browser fetches a small file instead of a full-screen one.
export default function Img({ src, alt = '', sizes, ...rest }) {
  if (!src || !src.startsWith('/')) return <img src={src || undefined} alt={alt} {...rest} />;
  const fixed = /^\d+(\.\d+)?px$/.test(rest.style?.width || '') ? rest.style.width : null;
  const { props } = getImageProps({ src, alt, fill: true, sizes: sizes || fixed || '(max-width: 760px) 100vw, 50vw' });
  return <img {...rest} alt={alt} src={props.src} srcSet={props.srcSet} sizes={props.sizes} />;
}
