import React from "react";
import file from '../../assets/icons/File.svg'
import send from '../../assets/icons/Send.svg'
import './input.scss'

export const Input = () => {
    return (
        <div className="input-wrapper">
            <div
                contentEditable
                className="input"
                placeholder="Type message"
            />
            <div className="input-buttons">
                <button className="file-button">
                    <img
                        src={file}
                        height={14.28}
                        className="img-buttons"
                    />
                </button>
                <img src={send} className="img-buttons" />
            </div>
        </div>
    )
}