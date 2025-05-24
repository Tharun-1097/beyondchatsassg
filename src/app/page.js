"use client";

// app/page.tsx (or pages/index.js for Next.js)
export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-1/5 border-r bg-gray-50 p-4">
        <h2 className="font-bold mb-4">Your inbox</h2>
        <ul className="space-y-2">
          {["Luis - Github", "Ivan - Nike", "Lead from New York"].map((item, i) => (
            <li key={i} className="cursor-pointer p-2 rounded hover:bg-gray-200 bg-white shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Main View */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b p-4 font-semibold">Luis Easton</div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="bg-gray-100 p-3 rounded-md">
            <p className="text-sm">I bought a product from your store in November...</p>
          </div>
          <div className="text-right">
            <div className="inline-block bg-blue-100 text-blue-900 p-3 rounded-md">
              Let me just look into this for you, Luis.
            </div>
            <p className="text-xs text-gray-500">Seen • 1min</p>
          </div>
        </div>

        {/* Input */}
        <div className="border-t p-4 flex items-center gap-2">
          <input className="flex-1 border rounded-md p-2" placeholder="Type a message..." />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={handleClick}>
            Send
          </button>
        </div>
      </main>

      {/* AI Copilot */}
      <aside className="w-1/4 border-l bg-gray-50 p-4">
        <h3 className="font-semibold mb-2">Hi, I'm Fin AI Copilot</h3>
        <p className="text-sm text-gray-600 mb-4">Ask me anything about this conversation.</p>
        <div className="bg-white border rounded p-2 shadow-sm text-sm">
          <span className="text-gray-500">Suggested</span>: 💡 How do I get a refund?
        </div>
        <input className="mt-4 w-full border rounded-md p-2" placeholder="Ask a question..." />
      </aside>
    </div>
  );
}
