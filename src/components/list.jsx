'use client'

import {useForm} from 'react-hook-form'

const List = () => {
    const {register, handleSubmit} = useForm({defaultValues: {
        searchInput: ""
    }})

    const onSubmit = (data) => {
        console.log(data.searchInput)
    }
    return ( 
        <div className=" bg-blue-300 border rounded-xl flex flex-col w-[300px] p-3 ml-[100px] mt-7">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <textarea name="id" {...register("searchInput")} className="m-4 h-8 resize-none"/>
                    <textarea name="id" {...register("searchInput")} className="m-4 h-20 resize-none"/ >
                    <textarea name="id" {...register("searchInput")} className="m-4 h-10 resize-none"/ >
                </form>
        </div> 
     );
}
 
export default List;