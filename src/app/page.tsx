import { getData } from "@/utils/handleDatabase";

let data:any

async function loopData() {
  data = JSON.stringify(await getData())
}
loopData()



export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-20 text-xl">RAW DATA</h1>
        <div className="my-10 w-[75vw] p-4 border-2 border-black">
          <p>{data}</p>
        </div>
        <h1 className="mt-20 text-xl">Filters</h1>
        <div className="my-10 w-[75vw] min-h-5 p-4 border-2 border-black flex flex-wrap justify-center">
          <button className="border border-black p-1 rounded bg-slate-100 m-3">Filter by letter A</button>
          <button className="border border-black p-1 rounded bg-slate-100 m-3">Sort by length</button>
        </div>
      </div>
    </>
  );
}
