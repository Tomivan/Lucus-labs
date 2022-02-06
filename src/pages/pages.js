import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Table from './table/table';
import Gallery from './gallery/gallery';
import List from './list/list';




const Pages = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="table" element={<Table />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="list" element={<List />} />
        </Routes>
        </BrowserRouter>
          )
}
export default Pages;