import backgroundImage from '../../../../assets/background.avif'
function BackgroundAuth() {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center blur-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  )
}

export default BackgroundAuth
