import { useEffect } from 'react'
import Form from './Form.jsx'

function Body({lists, length, mode, setLists, setError}) {
    useEffect(() => {
    document.body.className = mode
        ? "bg-[#F9F9F9] transition-colors duration-300"
        : "bg-[#0A0A0A] transition-colors duration-300"
    }, [mode])
    return (
        <div className={`flex flex-wrap gap-8 justify-center items-center pt-25`}>
            {
                length ? <Form lists={lists} mode={mode} setLists={setLists} setError={setError}/> : <h1 className={`text-center mt-30 text-md ${mode ? 'text-[black]' : 'text-[white]'}`}>No To-Do Lists Added</h1>
            }
        </div>
    )
}

export default Body