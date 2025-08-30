
import {useEffect, useState} from "react"
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import SearchInput from "./components/SearchInput"
import UserCard from "./components/UserCard"


export default function App() {
  return (
    <>
      <h1>Buscador Dinámico de Usuarios</h1>
      <SearchInput />
      <UserCard />
    </>
  )
}
