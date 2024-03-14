"use client";
import classes from "./image-picker.module.css";
import {useRef, useState} from 'react';
import Image from "next/image";
export default function ImagePicker({label, name}){
    const [pickedImage, setPickedImage] = useState(null);
    const imageInput=useRef();
    function handlePickClick (){
        imageInput.current.click();
    }
    function handleImageChange(event){
        const file = event.target.files[0];

        if(!file){
            return setPickedImage(null);
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }
    return <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && <Image src={pickedImage} alt="The image selected by user." fill/>}
            </div>
            <input ref={imageInput} className={classes.input} type="file" id="iamge" accept="image/png, image/jpeg" name={name} onChange={handleImageChange}/>
            <button className={classes.button} type="button" onClick={handlePickClick}>
                Pick an Image
            </button>
        </div>
    </div>
}