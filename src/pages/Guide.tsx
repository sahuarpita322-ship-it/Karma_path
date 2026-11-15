import { useState } from 'react';
import { placeGuides } from '../data/mock';

type PlaceKey = keyof typeof placeGuides;

export function Guide() {
  const places = Object.keys(placeGuides) as PlaceKey[];
  const [selected, setSelected] = useState<PlaceKey>(places[0]);

  const info = placeGuides[selected];

  return (
    <main className="min-h-screen bg-sand p-4 pt-24 md:p-8">
      <section className="mx-auto max-w-6xl rounded-2xl border border-sand bg-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-forest">Tourism Knowledge System</h1>
        <div className="mt-4 flex gap-2 flex-wrap">
          {places.map((name) => (
            <button key={name} onClick={() => setSelected(name)} className={`rounded-lg px-3 py-2 ${name===selected?'bg-forest text-white':'bg-sand text-earth'}`}>{name}</button>
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-forest">{selected}</h2>
          <p className="text-earth mt-2">History: {info.history}</p>
          <p className="text-earth mt-2">What it's famous for: {info.famous}</p>
          <p className="text-earth mt-2">Cultural importance: {info.importance}</p>
          <p className="text-earth mt-2">Visitor tips: {info.tips}</p>
          <button className="mt-4 rounded-lg bg-earth px-4 py-2 text-white" >Explore with AI Guide</button>
        </div>
      </section>
    </main>
  );
}
