import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import CreateBook from './CreateBooks'
import ShowBook from './ShowBook'
import EditBook from './EditBook'
import DeleteBook from './DeleteBooks'

const App = () => {
    return (
        <Routes>
            <Route path ='/' element = {<Home />} />
            <Route path ='/books/create' element = {<CreateBook />} />
            <Route path ='/books/details/:id' element = {<ShowBook />} />
            <Route path ='/books/edit/:id' element = {<EditBook />} />
            <Route path ='/books/delete/:id' element = {<DeleteBook />} />
        </Routes>
    )
}

export default App