export default function CallToActionButton() {
  
  return (
        <a
        href="/register"
        className="
            inline-block px-8 py-4 
            rounded-full 
            bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
            text-white font-extrabold text-lg 
            shadow-lg 
            transform transition 
            hover:scale-110 hover:brightness-110 
            animate-pulse
            cursor-pointer
        "
        >
        Start Now
        </a>
  );
}
