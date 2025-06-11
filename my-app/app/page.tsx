export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-indigo-500 via-blue-400 to-teal-500 text-white p-6 shadow-xl">
      <h1 className="text-6xl font-extrabold shadow-md">Radosław Jaworski</h1>
      <p className="text-3xl mt-6 bg-black/30 px-6 py-3 rounded-lg shadow-md">
        Numer indeksu: <span className="font-bold text-yellow-300">124167</span>
      </p>
      <p className="text-3xl mt-6 bg-black/30 px-6 py-3 rounded-lg shadow-md">
        Grupa: <span className="font-bold text-green-300">7</span>
      </p>
    </div>
  );
}