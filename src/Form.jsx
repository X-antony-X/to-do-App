import apiRequest from "./apiRequest"
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

function Form({lists,setLists,mode,setError}) {
    // const API_URL = "http://localhost:3500/lists"
    // const handleDone = async (id) => {
    //     const doneForm = lists.filter((list) => id !== list.id)
    //     setLists(doneForm)
        // localStorage.setItem("lists",JSON.stringify(doneForm))

        // const postOption = {
        //     method : "DELETE",
        //     headers : {
        //         "Content-Type" : "application/json"
        //     },
        //     body : JSON.stringify(doneForm)
        // }
        // const result = await apiRequest(`${API_URL}/${id}`,postOption)
        // if (result) setError(result)
    // }

    // const handleUpdate = async (id,field,value) =>{
    //     const newList = lists.map((list) => 
    //         list.id === id ? {...list,[field] : value} : list // ...list يعني بتنسخ الكائن القديم كله و بتعدل عليه قيمه واحده بس
    //     )
    //     setLists(newList)
    //     localStorage.setItem("lists",JSON.stringify(newList))

    //     const updatedItem = newList.find((item) => item.id === id)

    //     if (!updatedItem) return

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         //بيبعت العنصر كله سواء فيه حاجه متعدله او لا body : JSON.stringify(updatedItem) 
    //         body : JSON.stringify({[field] : value})
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }


    // const handleCheched = async (id,field) => {
    //     const newList = lists.map((list) => 
    //         list.id === id ? {...list,[field] : !list[field]} : list
    //     )
    //     setLists(newList)
    //     localStorage.setItem("lists",JSON.stringify(newList))

    //     const updatedItem = newList.find((list) => list.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({[field] : updatedItem[field]})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }
    // const handleTitle = async (id,e) => {
    //     const newTitle = lists.map((title) =>
    //         title.id === id ? {...title,title:e.target.value} : title)
    //         setLists(newTitle)
    //         localStorage.setItem("lists",JSON.stringify(newTitle))
        
    //     const updatedItem = newTitle.find((item) => item.id === id)

    //     if (!updatedItem) return

    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedItem)
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    //     }
    
    // const handleTask1 = async (id,e) => {
    //     const newTask1 = lists.map((task1) => 
    //         task1.id === id ? {...task1,task1:e.target.value} : task1
    //     )
    //     setLists(newTask1)
    //     localStorage.setItem("lists",JSON.stringify(newTask1))

    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task1 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }

    // const handleTask2 = async (id,e) => {
    //     const newTask2 = lists.map((task2) =>
    //         task2.id === id ? {...task2,task2:e.target.value} : task2
    //     )
    //     setLists(newTask2)
    //     localStorage.setItem("lists",JSON.stringify(newTask2))

    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task2 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }

    // const handleTask3 = async (id,e) => {
    //     const newTask3 = lists.map((task3) =>
    //         task3.id === id ? {...task3,task3:e.target.value} : task3
    //     )
    //     setLists(newTask3)
    //     localStorage.setItem("lists",JSON.stringify(newTask3))

    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task3 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }

    // const handleTask4 = async (id,e) => {
    //     const newTask4 = lists.map((task4) =>
    //         task4.id === id ? {...task4,task4:e.target.value} : task4
    //     )
    //     setLists(newTask4)
    //     localStorage.setItem("lists",JSON.stringify(newTask4))

    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task4 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }

    // const handleTask5 = async (id,e) => {
    //     const newTask5 = lists.map((task5) =>
    //         task5.id === id ? {...task5,task5:e.target.value} : task5
    //     )
    //     setLists(newTask5)
    //     localStorage.setItem("lists",JSON.stringify(newTask5))

    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task5 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }
    // const handleTask6 = async (id,e) => {
    //     const newTask6 = lists.map((task6) =>
    //         task6.id === id ? {...task6,task6:e.target.value} : task6
    //     )
    //     setLists(newTask6)
    //     localStorage.setItem("lists",JSON.stringify(newTask6))
    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task6 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }
    // const handleTask7 = async (id,e) => {
    //     const newTask7 = lists.map((task7) =>
    //         task7.id === id ? {...task7,task7:e.target.value} : task7
    //     )
    //     setLists(newTask7)
    //     localStorage.setItem("lists",JSON.stringify(newTask7))
    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task7 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }
    // const handleTask8 = async (id,e) => {
    //     const newTask8 = lists.map((task8) =>
    //         task8.id === id ? {...task8,task8:e.target.value} : task8
    //     )
    //     setLists(newTask8)
    //     localStorage.setItem("lists",JSON.stringify(newTask8))
    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task8 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }
    // const handleTask9 = async (id,e) => {
    //     const newTask9 = lists.map((task9) =>
    //         task9.id === id ? {...task9,task9:e.target.value} : task9
    //     )
    //     setLists(newTask9)
    //     localStorage.setItem("lists",JSON.stringify(newTask9))
    //     const postOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify({task9 : e.target.value})
    //     }
    //     const result = await apiRequest(`${API_URL}/${id}`,postOption)
    //     if (result) setError(result)
    // }

    // const handleDelete = async (id) => {
    //     const itemsList = items.filter((item) => item.id !== id)
    //     //idفلتر بتعمل ارراي جديده المهم هنا هتععمل ارراي فيها كل العناصر اللي مش بتساوي ال
    //     setItems(itemsList)
    //     localStorage.setItem("list",JSON.stringify(itemsList))

    //     const myNewItem = items.filter((item) => item.id !== id)

    //     const postOptions = {
    //         method : "DELETE",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(myNewItem)
    //     }

    // const result = await apiRequest(`${API_URL}/${id}`,postOptions)
    // if (result) setError(result)
    // }
    // const handleCheched = async (id) => {
    //     const checkedTask1 = lists.map((task) => task.id === id ? {...task,checked1:!task.checked1} : task)
    //     setLists(checkedTask1)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask1))

    //     const updatedTask = checkedTask1.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    // const handleCheched2 = async (id) => {
    //     const checkedTask2 = lists.map((task) => task.id === id ? {...task,checked2:!task.checked2} : task)
    //     setLists(checkedTask2)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask2))

    //     const updatedTask = checkedTask2.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    // const handleCheched3 = async (id) => {
    //     const checkedTask3 = lists.map((task) => task.id === id ? {...task,checked3:!task.checked3} : task)
    //     setLists(checkedTask3)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask3))

    //     const updatedTask = checkedTask3.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    // const handleCheched4 = async (id) => {
    //     const checkedTask4 = lists.map((task) => task.id === id ? {...task,checked4:!task.checked4} : task)
    //     setLists(checkedTask4)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask4))

    //     const updatedTask = checkedTask4.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    // const handleCheched5 = async (id) => {
    //     const checkedTask5 = lists.map((task) => task.id === id ? {...task,checked5:!task.checked5} : task)
    //     setLists(checkedTask5)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask5))

    //     const updatedTask = checkedTask5.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    // const handleCheched6 = async (id) => {
    //     const checkedTask6 = lists.map((task) => task.id === id ? {...task,checked6:!task.checked6} : task)
    //     setLists(checkedTask6)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask6))

    //     const updatedTask = checkedTask1.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    // const handleCheched7 = async (id) => {
    //     const checkedTask7 = lists.map((task) => task.id === id ? {...task,checked7:!task.checked7} : task)
    //     setLists(checkedTask7)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask7))

    //     const updatedTask = checkedTask7.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    // const handleCheched8 = async (id) => {
    //     const checkedTask8 = lists.map((task) => task.id === id ? {...task,checked8:!task.checked8} : task)
    //     setLists(checkedTask8)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask8))

    //     const updatedTask = checkedTask8.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    // const handleCheched9 = async (id) => {
    //     const checkedTask9 = lists.map((task) => task.id === id ? {...task,checked9:!task.checked9} : task)
    //     setLists(checkedTask9)
    //     localStorage.setItem("lists",JSON.stringify(checkedTask9))

    //     const updatedTask = checkedTask9.find((task) => task.id === id)

    //     const patchOption = {
    //         method : "PATCH",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : JSON.stringify(updatedTask)
    //     }

    //     const result = await apiRequest(`${API_URL}/${id}`,patchOption)
    //     if (result) setError(result)
    // }

    const handleDone = async (id) => {
        const doneForm = lists.filter((list) => id !== list.id)
        setLists(doneForm)
        localStorage.setItem("lists",JSON.stringify(doneForm))

        try {
            await deleteDoc(doc(db, "lists", id))
        } catch (err) {
            setError(err.message)
        }
    }

    const handleUpdate = async (id, field, value) => {
    const newList = lists.map((list) => 
        list.id === id ? {...list, [field]: value} : list
    )

    setLists(newList)
    localStorage.setItem("lists",JSON.stringify(newList))

    try {
        await updateDoc(doc(db, "lists", id), {
            [field]: value
        })
    } catch (err) {
        setError(err.message)
    }
}


    const handleCheched = async (id, field) => {
        const newList = lists.map((list) => 
            list.id === id ? {...list, [field]: !list[field]} : list
        )

        setLists(newList)
        localStorage.setItem("lists",JSON.stringify(newList))

        const updatedItem = newList.find((item) => item.id === id)

        try {
            await updateDoc(doc(db, "lists", id), {
                [field]: updatedItem[field]
            })
        } catch (err) {
            setError(err.message)
        }
    }

    return (
    <>
        {lists.map((form) => (
            <div key={form.id} className={`w-[290px] h-[440px] flex flex-col items-center ${mode ? 'bg-[#121212]' : 'bg-[#FFFFFF]'}`}>
                <div className={`flex justify-evenly items-center text-md font-bold p-3 w-[250px] text-center mt-4 rounded-xl ${mode ? "bg-[#FAFAFA]" : "bg-[#1E1E1E]"}`}>
                    <i class={`fa-regular fa-bookmark ${mode ? "text-[#0A0A0A]" : "text-[#FFFFFF]"}`}></i>
                    <input onChange={(e) => handleUpdate(form.id,"title",e.target.value)} value={form.title} placeholder="TITLE" type="text" className={`font2 text-center text-sm focus:outline-none border-b-2 mb-2 w-[130px] focus:border-blue-500 ${mode ? "text-[#0A0A0A] border-[#0A0A0A] placeholder:[color:#0A0A0A]" : "text-[#FFFFFF] border-[#FFFFFF] placeholder:[color:#FFFFFF]"}`}/>
                    <i  onClick={() => handleDone(form.id)} class={`fa-regular fa-circle-check cursor-pointer hover:text-[blue] ${mode ? "text-[#0A0A0A]" : "text-[#FFFFFF]"}`}></i>
                </div>
                <div className={`relative flex flex-col text-md font-bold px-3 py-2 w-[250px] h-[340px] text-center mt-4 rounded-xl ${mode ? "bg-[#FAFAFA]" : "bg-[#1E1E1E]"}`}>
                    <div className="flex flex-row justify-evenly items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mr-3"
                            checked={form.checked1}
                            onChange={() => handleCheched(form.id,"checked1")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm focus:outline-none border-b-2 mb-2 w-[170px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}
                            placeholder="Task 1"
                            value={form.task1}
                            onChange={(e) => handleUpdate(form.id,"task1",e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row justify-evenly items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mr-3"
                            checked={form.checked2}
                            onChange={() => handleCheched(form.id,"checked2")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm focus:outline-none border-b-2 mb-2 w-[170px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}
                            placeholder="Task 2"
                            value={form.task2}
                            onChange={(e) => handleUpdate(form.id,"task2",e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row justify-evenly items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mr-3"
                            checked={form.checked3}
                            onChange={() => handleCheched(form.id,"checked3")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm focus:outline-none border-b-2 mb-2 w-[170px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}
                            placeholder="Task 3"
                            value={form.task3}
                            onChange={(e) => handleUpdate(form.id,"task3",e.target.value)}            
                        />
                    </div>
                    <div className="flex flex-row justify-evenly items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mr-3"
                            checked={form.checked4}
                            onChange={() => handleCheched(form.id,"checked4")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm focus:outline-none border-b-2 mb-2 w-[170px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}
                            placeholder="Task 4" 
                            value={form.task4}
                            onChange={(e) => handleUpdate(form.id,"task4",e.target.value)}               
                        />
                    </div>
                    <div className="flex flex-row justify-evenly items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mr-3"
                            checked={form.checked5}
                            onChange={() => handleCheched(form.id,"checked5")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm focus:outline-none border-b-2 mb-2 w-[170px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}
                            placeholder="Task 5"
                            value={form.task5}
                            onChange={(e) => handleUpdate(form.id,"task5",e.target.value)}           
                        />
                    </div>
                    <div className="flex flex-row justify-evenly items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mr-3"
                            checked={form.checked6}
                            onChange={() => handleCheched(form.id,"checked6")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm focus:outline-none border-b-2 mb-2 w-[170px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}
                            placeholder="Task 6"
                            value={form.task6}
                            onChange={(e) => handleUpdate(form.id,"task6",e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row justify-evenly items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mr-3"
                            checked={form.checked7}
                            onChange={() => handleCheched(form.id,"checked7")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm focus:outline-none border-b-2 mb-2 w-[170px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}
                            placeholder="Task 7"
                            value={form.task7}
                            onChange={(e) => handleUpdate(form.id,"task7",e.target.value)}
                        />
                    </div>

                    <div className="flex flex-row items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mx-3"
                            checked={form.checked8}
                            onChange={() => handleCheched(form.id,"checked8")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm ml-2 focus:outline-none border-b-2 flex justify-start mb-2 w-[130px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}               
                            placeholder="Task 8"
                            value={form.task8}
                            onChange={(e) => handleUpdate(form.id,"task8",e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row items-center mb-2">
                        <input
                            type="checkbox"
                            className="items-center mx-3"
                            checked={form.checked9}
                            onChange={() => handleCheched(form.id,"checked9")}
                        />
                        <input 
                            type="text"
                            className={`font2 text-sm ml-2 focus:outline-none border-b-2 flex justify-start mb-2 w-[130px] ${mode ? 'text-[#212121] placeholder:[color:#757575] focus:border-[#673AB7] border-[#CCCCCC]' : 'text-[#E0E0E0] placeholder:[color:#9E9E9E] focus:border-[#673AB7] border-[#424242]'}`}               
                            placeholder="Task 9"
                            value={form.task9}
                            onChange={(e) => handleUpdate(form.id,"task9",e.target.value)}
                        />
                    </div>
                    <img src="writing.png" alt="img" className="w-[40px] h-[40px] absolute bottom-3 right-3"/>
                </div>
            </div>
        ))}
    </>
    )
}

export default Form