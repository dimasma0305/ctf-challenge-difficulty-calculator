"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Result = ({ rangeValues }) => {
    const [ResultValue, setResultValue] = useState(1)
    const [ResultPercentage, setResultPercentage] = useState(0)
    const [ResultStar, setResultStar] = useState([])
    const difficulty = [
        { name: "baby", color: "text-blue-300" },
        { name: "easy", color: "text-green-300" },
        { name: "medium", color: "text-yellow-300" },
        { name: "hard", color: "text-red-300" },
        { name: "insane", color: "text-red-600" },
    ]
    useEffect(() => {
        var resultval = 0
        const keys = Object.keys(rangeValues)
        keys.map((val) => {
            resultval += rangeValues[val]
        })
        const mean = (resultval / keys.length)
        setResultPercentage((mean / keys.length) * 100)
        setResultValue(mean)
        var starts = []
        for (var i = 0; i < Math.round(mean); i++) {
            starts.push(<span className='text-yellow-100'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>)
        }
        setResultStar(starts)
    }, [rangeValues])
    return (
        <div className="flex flex-col text-center gap-4">
            {ResultPercentage ? <>
                <div className="radial-progress" style={{ "--value": Math.round(ResultPercentage), "--size": "12rem", "--thickness": "2px" }} role="progressbar">{Math.round(ResultPercentage)}%</div>
                <div className='grid'>
                    <span>points: {(ResultValue).toFixed(1)}</span>
                    <span className={difficulty[Math.round(ResultValue - 1)].color}>{difficulty[Math.round(ResultValue - 1)].name}</span>
                    <span>{ResultStar.map((star) => star)}</span>
                </div>
            </> : <>
                <span className="loading loading-ring loading-lg"></span>
            </>}
        </div>
    );
};

export default Result;
