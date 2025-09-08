interface AvatarProfileProps {
  name: string
  surname1: string
  surname2: string
}

function AvatarProfile({ name, surname1, surname2 }: AvatarProfileProps) {


  const fistLetterName = name.split('')[0]
  const fistLetterSurname1 = surname1.split('')[0]
  const fistLetterSurname2 = surname2.split('')[0]

  return (
    <div className="bg-green-600 text-white w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
      {`${fistLetterName}${fistLetterSurname1}${fistLetterSurname2}`}
    </div>
  )
}

export default AvatarProfile
