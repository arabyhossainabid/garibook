// Temporary fallback for sections whose original image was not provided.
// Every consumer still controls its own dimensions through className.
const PLACEHOLDER = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=85'

export default function PlaceholderImage({
  alt = 'Replace this image later',
  src = PLACEHOLDER,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  ...props
}) {
  return (
    <div className={'overflow-hidden bg-[#e8eef8] ' + className} {...props}>
      <img src={src} alt={alt} className={imgClassName} />
    </div>
  )
}

export { PLACEHOLDER }
