import Card from "./Card";
import { concerts } from "../../../concerts.json";

function MusicEvents() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 p-5">
      <div className="bg-[#d8e5ff] rounded-xl p-10">
        <div className="mb-3">
          <h1 className="font-rowdies text-2xl">Music Events</h1>
          <p className="text-sm">in London, United Kingdom</p>
        </div>
        <div className="flex flex-col gap-3">
          {concerts.map((concert) => (
            <Card key={concert.id} concert={concert} />
          ))}

          
        </div>
      </div>
    </div>
  );
}

export default MusicEvents;
