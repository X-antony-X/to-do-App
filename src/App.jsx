import { useEffect, useState } from 'react'
import { collection, addDoc, getDocs} from "firebase/firestore";
import { db } from "./firebase";
import './index.css'
import Header from './Header.jsx'
import Body from './Body.jsx'
import apiRequest from './apiRequest.jsx'
import Loading from './Loading.jsx'

function App() {
  // const API_URL = "http://localhost:3500/lists"

  const [lists,setLists] = useState([])
  const [mode,setMode] = useState(false)
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(true)

const addForm = async () => {
  const newList = {
    title:"", 
    task1:"", task2:"", task3:"", task4:"", task5:"", task6:"", task7:"", task8:"", task9:"",
    checked1:false, checked2:false, checked3:false, checked4:false, checked5:false,
    checked6:false, checked7:false, checked8:false, checked9:false
  }

  try {
    // إضافة الدوكومنت في Firestore
    const docRef = await addDoc(collection(db, "lists"), newList)

    // تحديث الـ state بالدوكومنت الجديد مع ID من Firebase
    setLists(prev => [...prev, { id: docRef.id, ...newList }])
  } catch (err) {
    setError(err.message)
  }
}

  // const addForm = async () => {
  //   const id = lists.length ? lists[lists.length - 1].id + 1 : 1
  //   const newList = {id:id,title:"",
  //     task1:"",task2:"",task3:"",task4:"",task5:"",task6:"",task7:"",task8:"",task9:"",
  //     checked1:false,checked2:false,checked3:false,checked4:false,checked5:false,checked6:false,checked7:false,checked8:false,checked9:false}
  //   const listsList = [...lists,newList]
  //   setLists(listsList)
  //   localStorage.setItem("lists",JSON.stringify(listsList))

  //   const postOption = {
  //     method : "POST",
  //     headers : {
  //       "Content-Type" : "application/json"
  //     },
  //     body : JSON.stringify(newList)
  //   }
  //   const result = await apiRequest(API_URL,postOption)
  //   if (result) setError(result)
  // }

  const handleSetMode = () => {
    if (mode === true) {
      setMode(false)
    } else {
      setMode(true)
    }
  }

  // useEffect(() => {
  //   const fetchLists = async () => {
  //     try {
  //       const response = await fetch(API_URL)
  //       if (!response.ok) throw Error ("didnt receive any data ........")
  //       const listItems = await response.json()
  //       setLists(listItems)
  //       setError(null)
  //     } catch (err) {
  //       setError(err.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   setTimeout(async () => await fetchLists(),3000)
  // },[])

  //   useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(API_URL)
  //       if (!response.ok) throw ("Failed to fetch data ....")
  //       const listItems = await response.json()
  //       setLists(listItems)
  //       setError(null)
  //     } catch (err) {
  //         setError(err.message)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   setTimeout(
  //     async () => await fetchData()
  //   ,2000)
  // },[])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "lists"));
        const listItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setLists(listItems)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    setTimeout(fetchData, 2000)
  }, [])


  return (
    <>
      <Header
        addForm={addForm}
        handleSetMode={handleSetMode}
        mode={mode}
      />
      <main>
        {loading && <Loading />}
        {error && <p className='pt-30 text-center text-[darkblue]'>{`Error : ${error}`}</p>}
        {!loading && !error && <Body
          lists={lists}
          setLists={setLists}
          length={lists.length}
          mode={mode}
          setError={setError}
        />}
      </main>
    </>
  )
}

export default App
