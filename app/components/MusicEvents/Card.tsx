interface Props {
  concert: {
    id: string;
    date: string;
    time: string;
    title: string;
    description: string;
    isSoldOut: boolean;
    color: string;
  };
}

// Missing the colors

function Card({ concert }: Props) {
  return (
    <div className="bg-slate-50 p-3 rounded-md flex items-center gap-3">
      {concert.color === "red" ? (
        <div
          className={`bg-[#F6DBD4] rounded-md p-2 flex flex-col items-center`}
        >
          <p className="text-[0.5rem]">{concert.date}</p>
          <p className="font-semibold">{concert.time}</p>
        </div>
      ) : (
        <div
          className={`bg-[#ECF7D2] rounded-md p-2 flex flex-col items-center`}
        >
          <p className="text-[0.5rem]">{concert.date}</p>
          <p className="font-semibold">{concert.time}</p>
        </div>
      )}

      <div>
        <h2 className="font-rowdies">{concert.title}</h2>
        <p className="text-sm">{concert.description}</p>
      </div>

      {concert.isSoldOut ? (
        <div className="font-semibold rounded-lg text-slate-900 p-3 text-sm">
          Sold out!
        </div>
      ) : (
        <div className="font-semibold rounded-lg bg-slate-900 text-slate-100 p-3 text-sm cursor-pointer hover:bg-slate-800">
          Buy a Ticket
        </div>
      )}
    </div>
  );
}

export default Card;
