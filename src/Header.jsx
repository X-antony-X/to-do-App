function Header({addForm,mode,handleSetMode}) {
    return (
        <header className={`flex items-center w-screen py-4 px-5 md:px-10 lg:px-15 fixed top-0 left-0 z-30 ${mode ? 'bg-[white]  border-b-2 border-[#0A0A0A]' : 'bg-[#121212]  border-b-2 border-[#FFFFFF]'}`}>
            <p className={`text-xs md:text-md lg:text-xl font w-1/2 justify-start ${mode ? 'text-[#673AB7]' : 'text-[white]'}`}>TO DO LIST</p>
            <div className="flex w-1/2 gap-2 md:gap-3 lg:gap-4 justify-end">
                <button onClick={addForm} className={`cursor-pointer px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-3 ${mode ? 'bg-[#673AB7] text-[white]' : 'bg-[#673AB7] text-[white]'}`}><i className="fa-solid fa-plus"></i></button>
                <button onClick={handleSetMode} className={`cursor-pointer px-1 md:px-2 lg:px-3 py-1 md:py-2 lg:py-3 ${mode ? 'bg-[purple] text-[white]' : 'bg-[white] text-[purple]'}`}>{mode ? <i className="fa-solid fa-moon"></i> : <i className="fa-regular fa-sun"></i>}</button>
            </div>
        </header>
    )
}

export default Header