"use client";

import { FormEvent, useState } from "react";

const ReserveForm = () => {
  const [drop, setDrop] = useState<string>();
  const [Pick, setPick] = useState<string>();
  const [date, setDate] = useState<string>();
  const [time, setTime] = useState<string>();
  const onSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({ drop, Pick, date, time });
  };
  return (
    <form className="space-y-4 w-full">
      <div>
        <input
          type="text"
          placeholder="Pick-up Address"
          value={"Masaka Dubai port"}
          onChange={(v) => setPick(v.target.value)}
          disabled
          className="border border-gray-300 p-1 w-full rounded"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Drop-off Address"
          value={drop}
          onChange={(v) => setDrop(v.target.value)}
          className="border border-gray-300 p-1 w-full rounded"
        />
      </div>
      <div>
        <input
          type="date"
          id="date"
          placeholder="Pick-up Date"
          value={date}
          onChange={(v) => setDate(v.target.value)}
          className="border border-gray-300 p-1 w-full rounded"
        />
      </div>
      <div>
        <input
          type="time"
          id="time"
          placeholder="Pick-up Time"
          value={time}
          onChange={(v) => setTime(v.target.value)}
          className="border border-gray-300 p-1 w-full rounded"
        />
      </div>
      <button
        onSubmit={(e) => onSubmit(e)}
        className="w-full bg-black hover:bg-black/60 text-white py-2 rounded-2xl"
      >
        Reserve Now
      </button>
    </form>
  );
};

export default ReserveForm;
