"use client";


import { useEffect, useState } from "react"
import Link from "next/link";
import Branddelete from "./delete/[id]/page";
import ReactPaginate from "react-paginate";




const Brandlist = () => {
    const [brands , setBrand] = useState('')
    const [error , setError] = useState('')
    const [loading , setLoading] = useState('')
    const [count , setCount] = useState('')
    const [countpage , setCountpage] = useState('')



    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/brands")
        .then(res => res.json())
        .then(data => {
            setCount(data.data.meta.total)
            setCountpage(data.data.meta.last_page)
           
            setBrand(data.data.brands);
           
           
            setError(null)
        }).catch(err => {
            setError(err.message)
            setLoading(false)
        })
        
      
        
       
    },[])



    function handlePageClick(data){

    

        fetch(`http://127.0.0.1:8000/api/brands?page=${data.selected + 1}`)
        .then(res => res.json())
        .then(data => { 
          
         
            setCount(data.data.meta.total)
            setCountpage(data.data.meta.last_page)
           
            setBrand(data.data.brands);
           
           
            // setError(null)
        }).catch(err => {
            setError(err.message)
            setLoading(false)
        })
    
    
      }



    // console.log(countpage)

    return(
        <div className="bg-black flex-col flex items-center h-[110vh]">
        <div className="pt-[90px] w-[90%]">
            <h2 className="text-white text-[24px] font-bold capitalize">brands list</h2>
            <p className="text-[#888] w-[80%] text-[16px] mt-[7.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

        </div>

        <div className="w-[90%] bg-[#141a29] mt-[60px] p-[36px] rounded-[1.5rem]">
            <div className="w-full capitalize flex justify-between text-white border-b-[1px] pb-[20px]">
                <div>
                    <h6 className="text-[#d7d7d8] text-[14px]">total brand</h6>
                    <div className="text-[20px]">{count}</div>
                </div>

                <div>
                    <div className="flex items-center">
                        <Link href="/admin_panel/brands/create" className="rounded-[100px] text-[12px] text-white border p-[12px]">
                        create brand
                        </Link>
                    </div>
                </div>

            </div>

            <div className="w-[80%] mt-[40px]">
                <div className="flex text-white capitalize">
                    <span className="w-[30%]">name</span>
                    <span className="w-[30%]">slug</span>
                    <span className="w-[30%]">is-active</span>
                </div>

            </div>


            <div className="w-[80%] mt-[20px]">
            {brands && brands.map((brand) => (

              

                <div className="flex text-white capitalize" key={brand.id}>
                    <span className="w-[30%] mb-[5px]">{brand.name}</span>
                    <span className="w-[30%] mb-[5px]">{brand.slug}</span>
                    <span className="w-[30%] mb-[5px]">{brand.is_active}</span>
                    <Link href={`/admin_panel/brands/edit/${brand.id}`}><i className="bi bi-gear"></i></Link>
                    <Branddelete id = {brand.id}/>
                </div>
                ))}

            </div>


            <div className=" flex justify-center mt-[20px] border-t-[1px] pt-10">


            <ReactPaginate
             previousLabel={<i className="bi bi-chevron-left"></i>}
            nextLabel={<i className="bi bi-chevron-right"></i>}
            breakLabel={"..."}
            pageCount={countpage}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"isolate inline-flex -space-x-px rounded-md shadow-sm"}
            pageClassName={"relative inline-flex items-center text-sm font-semibold text-white   focus:z-20 focus:outline-offset-0"}
            pageLinkClassName={"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"}


        previousClassName={"relative page-linkprev page-link inline-flex items-center rounded-l-md px-2  text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"}
        previousLinkClassName={"relative page-linkprev page-link inline-flex items-center rounded-l-md  text-white  focus:z-20 focus:outline-offset-0"}


        nextClassName={"relative inline-flex items-center rounded-r-md px-2  text-white ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"}
        nextLinkClassName={"relative inline-flex items-center rounded-r-md  text-white  focus:z-20 focus:outline-offset-0"}

        breakClassName={"relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:outline-offset-0"}
        breakLinkClassName={"relative inline-flex items-center px-2 focus:z-20 focus:outline-offset-0"}
             activeClassName={"bg-indigo-600"}
            />
    
   
           
            </div>
  



        </div>

      


        </div>
    )
}


export default Brandlist