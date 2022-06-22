import Sidebar from "../components/Sidebar";

const styLes= {
  container : `h-full w-full flex bg-[#fff]`
}

export default function Home() {
  return (
    <div  className={styLes.container}>

        <Sidebar/>

    </div>
  )
}
