import './index.css'  //importando um arquivo css//
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './components/App'


const elemento = window.document.getElementById('root')
render(

    <div>

        <App />

    </div>

    , elemento)