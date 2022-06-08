import ListCompany from './components/ListCompany';
import {Routes, Route} from 'react-router-dom';
import CardCompany from './components/CardCompany';
import EditCompany from './components/EditCompany';
import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<ListCompany/>}/>
                <Route path="/company/:id" element={<CardCompany/>}/>
                <Route path="/company/edit/:id" element={<EditCompany/>}/>
            </Routes>
        </div>
    );
}

export default App;
