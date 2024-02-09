'use client'

import {useForm} from 'react-hook-form'

const Navbar = () => {
    const {register, handleSubmit} = useForm({defaultValues: {
        searchInput: ""
    }})

    const onSubmit = (data) => {
        console.log(data.searchInput)
    }

    return (  
        <nav className="bg-yellow-200 px-8 py-4 items-center justify-between flex">
            <h2 className="text-2xl text-blue-400 font-semibold">
                My Notes
            </h2>
            <div className="bg-white font-semibold mx-8 w-52 h-6"> 
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("searchInput")}/>
                </form>
            </div>
        </nav>
    );
}
 
export default Navbar;