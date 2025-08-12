import backgroundImage from '../../../assets/optimalbg.avif'
function BackgroundAuth() {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center blur-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  )
}

export default BackgroundAuth
