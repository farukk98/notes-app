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
        <div className=" bg-blue-300 border rounded-xl h-[300px] w-[300px] m-12 px-8 flex flex-col p-2">
            <div className="flex mr-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea name="id" {...register("searchInput")} className="m-4 h-8 resize-none"/>
                    <textarea name="id" {...register("searchInput")} className="m-4 h-20 resize-none"/ >
                    <textarea name="id" {...register("searchInput")} className="m-4 h-10 resize-none"/ >
                </form>
            </div>
        </div>
     );
}
 
export default List;