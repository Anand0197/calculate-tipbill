import { useState } from 'react';

export default function App() {
  return <BillCalculator />;
}

function BillCalculator() {
  const [bill, setBill] = useState('');
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);
  const tip = (bill * (per1 + per2)) / (2 * 100);

  function handleReset() {
    setBill('');
    setPer1(0);
    setPer2(0);
  }

  return (
    <div className="calc">
      <Bill bill={bill} setBill={setBill} />
      <MyTip per1={per1} setPer1={setPer1} />
      <OtherTip per2={per2} setPer2={setPer2} />
      {bill > 0 ? <Pay bill={bill} tip={tip} onReset={handleReset} /> : ''}
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div className="bill">
      <label>How much was the bill?</label>
      <input
        type="text"
        value={bill}
        placeholder="Enter the amount of bill"
        onChange={(e) => setBill(+e.target.value)}
      />
    </div>
  );
}
function OtherTip({ per2, setPer2 }) {
  return (
    <div className="other">
      <label>How did you Like the service?</label>
      <select value={per2} onChange={(e) => setPer2(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="5">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function MyTip({ per1, setPer1 }) {
  return (
    <div className="mytip">
      <label>How did your friend Like the service?</label>
      <select value={per1} onChange={(e) => setPer1(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="5">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Pay({ bill, tip, onReset }) {
  return (
    <div className="pay">
      <h2>
        You pay ${bill + tip} (${bill} + ${tip} tip)
      </h2>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
