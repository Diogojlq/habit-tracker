export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold border-b border-blue-600">
        Meu Painel
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-blue-800 transition">
          <span>Início</span>
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-blue-800 transition">
          <span>Menu</span>
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-blue-800 transition">
          <span>Atividades</span>
        </a>
        <a href="#" className="flex items-center gap-2 p-2 rounded hover:bg-blue-800 transition">
          <span>Relatórios</span>
        </a>
      </nav>
      <div className="p-4 border-t border-blue-600">
        <button className="w-full bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded text-sm font-semibold">
          Sair
        </button>
      </div>
    </aside>
  );
}
