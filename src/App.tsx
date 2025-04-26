import { useEffect } from 'react';
import { CryptoTable } from './components/CryptoTable';
import { startWebSocketSimulation } from './utils/websocketSimulator';

function App() {
  useEffect(() => {
    startWebSocketSimulation();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <h1 className="text-center text-2xl font-bold p-4">Crypto Price Tracker</h1>
      <CryptoTable />
    </main>
  );
}

export default App;
