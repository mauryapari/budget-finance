import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`container top-[50%] min-h-screen flex-col text-center justify-between p-24`}>
      <p className="text-md md:text-2xl my-4">Welcome to the </p>
      <h1 className="text-2xl md:text-3xl font-bold my-2">
        Finance Management Dashboard
      </h1>
      <p className="text-sm md:text-2xl my-4 mt-40">
        <Link className="border-2 shadow-lg py-2 px-4 rounded-md" href={"/auth/login"}>Login</Link>
      </p>   
    </main>
  )
}
