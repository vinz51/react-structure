import React from 'react'
import { Link } from 'react-router-dom'

export const NoMatch = () => (
    <h1>
        This page doesn't exist.<br/>
        <Link to="/">Go back to home</Link>
    </h1>
)
