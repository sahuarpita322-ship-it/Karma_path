import { useState } from 'react';
import { useStore } from '../context/store';

const questions = [
  { id: 'q1', question: 'Where is Konark Sun Temple located?', options: ['Tamil Nadu', 'Odisha', 'Gujarat'], answer: 'Odisha' },
  { id: 'q2', question: 'Which place is known for one-horned rhinos?', options: ['Sundarbans', 'Kaziranga', 'Gir'], answer: 'Kaziranga' },
  { id: 'q3', question: 'Which monument is a white marble mausoleum?', options: ['Taj Mahal', 'Qutub Minar', 'Charminar'], answer: 'Taj Mahal' },
  { id: 'q4', question: 'Which city is famous for Hampi ruins?', options: ['Kolkata', 'Bangalore', 'Hampi'], answer: 'Hampi' },
  { id: 'q5', question: 'Where is the holy city of Varanasi?', options: ['Uttar Pradesh', 'Rajasthan', 'Kerala'], answer: 'Uttar Pradesh' }
];

export function Quiz() {
  const currentUser = useStore((s) => s.currentUser);
  const addQuizTokens = useStore((s) => s.addQuizTokens);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const submit = () => {
    let s = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) s += 2;
    });
    setScore(s);
    setFinished(true);
    if (currentUser && s > 0) {
      addQuizTokens(s);
    }
  };

  return (
    <main className="min-h-screen relative p-4 pt-24 md:p-8 pb-12">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/tajmahal.jpg')` }}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>
      <section className="mx-auto max-w-4xl rounded-3xl border border-white/50 bg-white/80 backdrop-blur-xl p-6 shadow-2xl relative z-10">
        <h1 className="text-3xl font-bold text-forest">Heritage Quiz</h1>
        <p className="text-earth mt-2">Answer correctly to earn bonus Karma tokens.</p>

        <div className="mt-4 space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur-md shadow-lg p-4">
              <p className="font-semibold">{q.question}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {q.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                    className={`rounded-lg px-3 py-1 text-xs ${answers[q.id] === opt ? 'bg-forest text-white' : 'bg-sand text-earth'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button onClick={submit} disabled={finished} className="mt-4 rounded-lg bg-earth px-4 py-2 text-white hover:bg-forest">Submit Quiz</button>

        {finished && (
          <div className="mt-4 rounded-lg border border-forest bg-forest/10 p-4 text-earth">
            <p className="font-semibold">Quiz completed!</p>
            <p>Your score: {score} points (1 point = 1 KT bonus)</p>
            {currentUser ? <p>Thank you, {currentUser.name}. Your token balance is now {currentUser.tokenBalance} KT.</p> : <p>Please login to credit the tokens to your account.</p>}
          </div>
        )}
      </section>
    </main>
  );
}
