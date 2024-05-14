"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation';



const Brandedit = () => {

    const [name , setName] = useState('')
    const [slug , setSlug] = useState('')
    const [is_active, setIs_active] = useState('')
    const [brand , setBrand] = useState('');
    const [error , setError] = useState('')
    const router = useRouter()


    const params = useParams()
    // console.log(params.id)


    function handelSubmit(e) {
        e.preventDefault();




        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "created!",
                text: "Your file has been created.",
                icon: "success"
              });
              fetch(`http://127.0.0.1:8000/api/brands/${brand.id}` ,{

              method:'PUT',
              body: JSON.stringify({
                  name: name,
                  slug: slug,
                  is_active: is_active,
                  _method: 'PUT'
              }),
              headers:{
                  'Content-type':'application/json; charset=UTF-8'
              }
          })
          .then((response)=> response.json())
          .then((data)=>console.log(data))
          .catch((err) => { console.log(err)})
              router.push('http://localhost:3000/admin_panel/brands')
            }
          });


         
        // console.log(brandId)
     
    }





    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/brands/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBrand(data.data);
            setName(data.data.name)
            setIs_active(data.data.is_active)
            setSlug(data.data.slug)
           
            setError(null)
        }).catch(err => {
            setError(err.message)
            setLoading(false)
        })

    },[])

    // console.log(brand)





    return(

        <div className="bg-black flex-col flex items-center">
        <div className="pt-[90px] w-[90%]">
            <h2 className="text-white text-[24px] font-bold capitalize">update brand</h2>
            <p className="text-[#888] w-[80%] text-[16px] mt-[7.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

        </div>

        <div className="w-[70%] bg-[#141a29] mt-[60px] p-[36px] rounded-[1.5rem]">
            <h3 className="text-white pb-[20px] text-[22px] font-bold">User Account</h3>
            <div className="pt-[30px] flex justify-between mb-[36px] border-t-2">
                <div className="flex items-center">
                    <Image className="w-[80px] h-[80px] rounded-[50%]" src="/img/64ccf14b517838cac9de13b5_closeup-photography-of-woman-smiling-Square.jpg" width={80} height={80} alt=""/>
                    <div className="ml-[12px]">
                        <h3 className="text-white text-[20px] font-semibold">Michelle Davis</h3>
                        <h6 className="text-white text-[14px]">Profile Picture 360 x 360</h6>
                    </div>
                </div>
                <div className="flex items-center">
                    <a href="" className="rounded-[100px] text-[12px] text-white border p-[12px]">
                        upload new
                    </a>
                </div>

            </div>

            <div className="pt-[36px] border-t-2">
                <h3 className="text-white text-[20px] font-semibold">Personal Details</h3>
                <p className="text-[#888] mt-[7.5px]">Cras vel sem sit amet metus pretium pretium posuere vitae ligula.</p>
            </div>

            <form action="" onSubmit={(e)=>{handelSubmit(e)}}>
            <div className="flex justify-between pt-[36px]">
                <div className="w-[48%]">
                    <label className="text-[#888]" for="">name</label>
                    <input  onChange={(e)=>{setName(e.target.value)}} value={name} className="h-[48px] mt-[4px] w-full rounded-[30px]" type="text"/>
                </div>
                <div className="w-[48%]">
                    <label className="text-[#888]" for="">slug</label>
                    <input defaultValue={brand.slug} onChange={(e)=>{setSlug(e.target.value)}} value={slug} className="h-[48px] mt-[4px] w-full rounded-[30px]" type="text"/>
                </div>
               
            </div>
            <div className="flex justify-between pt-[36px]">
                <div className="w-[48%]">
                    <label className="text-[#888]" for="">is_active</label>
                    <input defaultValue={brand.is_active} onChange={(e)=>{setIs_active(e.target.value)}} value={is_active} className="h-[48px] mt-[4px] w-full rounded-[30px]" type="text"/>
                </div>
           
               
            </div>
            <div className="flex justify-between pt-[40px]">
                <div className="w-[48%]">
                   
                    <button className="bg-[#2c2c2c] rounded-[100px] text-white px-[30px] py-[18px]" type='submit'>save change</button>
                </div>
           
               
            </div>
            </form>



        </div>

      


        </div>

    )
}

export default Brandedit