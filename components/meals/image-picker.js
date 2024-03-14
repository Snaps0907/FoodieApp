"use client";
import classes from "./image-picker.module.css";
import {useRef} from 'react';
export default function ImagePicker({label, name}){
    const imageInput=useRef();
    function handlePickClick (){
        imageInput.current.click();
    }
    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <input ref={imageInput} className={classes.input} type="file" id="iamge" accept="image/png, image/jpeg" name={name}/>
            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick an Image
            </button>
        </div>
    </div>
}