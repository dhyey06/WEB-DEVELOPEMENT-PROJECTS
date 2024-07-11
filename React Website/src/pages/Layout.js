import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className="bg-slate-600 ">
        <ul className="flex p-2 gap-4">
          <li>
            <Link to="/home" className="m-3 text-white px-[10px] hover:bg-slate-700 hover:rounded hover:text-white hover:p-[10px]">Home</Link>
          </li>
          <li>
            <Link to="/blog" className="m-3 text-white px-[10px] hover:bg-slate-700 hover:rounded hover:text-white hover:p-[10px]">Blog</Link>
          </li>
          <li>
            <Link to="/about" className="m-3 text-white px-[10px] hover:bg-slate-700 hover:rounded hover:text-white hover:p-[10px]">About</Link>
          </li>
          <li>
            <Link to="/contact" className="m-3 text-white px-[10px] hover:bg-slate-700 hover:rounded hover:text-white hover:p-[10px]">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="seperation w-[100%] h-[2px] bg-gray-800"></div>
      <Outlet />  
    </>
  )
};

export default Layout;