export default function UserCard() {
  return (
    <div className="p-4 bg-white shadow-md rounded hover:scale-105 transition-transform duration-300">
        <img className="w-16 h-16 rounded-full mx-auto" src="https://randomuser.me/api/portraits/women/1.jpg" alt="avatar" />
        <h3 className="text-center font-bold mt-2">usuario</h3>
        <p className="text-center text-sm text-gray-600">perfil</p>
        <p className="text-center text-xs mt-1 italic">intereses</p>
        <p className="text-center text-xs text-blue-500 mt-1">correo</p>
    </div>
  )
}
