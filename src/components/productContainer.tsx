import React, { useState } from "react";
import styles from "@/styles/ProductContainer.module.scss"
import Image from "next/image";
import { IFullItem, IOptions, IStoreItem } from "@/services/storeTypes";

export default function ProductContainerComponent (item: IStoreItem) {

    const [showModal, setShowModal] = useState<boolean>(false);

    const addToCart = (item: IStoreItem, options: IOptions) => {
        const rawCartData = localStorage.getItem("cart");
        const itemSelection: IFullItem = {
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image,
            size: options.size
        }
        if(!rawCartData) {
            localStorage.setItem("cart", JSON.stringify([itemSelection]));
        } else {
            const cartRef: Object[] = JSON.parse(rawCartData);
            cartRef.push({...itemSelection});
            localStorage.setItem("cart", JSON.stringify(cartRef));
        }
        window.dispatchEvent(new Event("storage"));
    }

    return(
        <div className={styles.main}>
            <div style={{display: showModal ? "flex" : "none"}} className={styles.selectionModal}>
                <button onClick={() => setShowModal(false)} className={styles.closeButton}>
                    <Image height={30} width={30} alt="close button" src={"/close.svg"}></Image>
                </button>
                <h1 className={styles.name}>{item.name}</h1>
                <div className={styles.optionContainer}>
                    <button onClick={() => {addToCart(item, {size: "small"}); setShowModal(false)}}>Small</button>
                    <button onClick={() => {addToCart(item, {size: "medium"}); setShowModal(false)}}>Medium</button>
                    <button onClick={() => {addToCart(item, {size: "large"}); setShowModal(false)}}>Large</button>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image sizes="(max-width: 250px)" fill alt={`product image for ${item.name}`} src={item.image} ></Image>
            </div>
            <h1 className={styles.name}>{item.name}</h1>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>${item.price}</p>
            </div>
            <button onClick={() => setShowModal(true)} className={styles.addButton}>ADD</button>
        </div>
    )
}