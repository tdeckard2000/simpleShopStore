import React from "react";
import styles from "@/styles/ProductContainer.module.scss"
import Image from "next/image";

interface Props {
    name: string,
    image: string,
    description: string,
    price: number
}

export default function ProductContainerComponent (props: Props) {
    return(
        <div className={styles.main}>
            <div className={styles.imageContainer}>
                <Image fill alt={`product image for ${props.name}`} src={props.image} ></Image>
            </div>
            <h1 className={styles.name}>{props.name}</h1>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{props.description}</p>
                <p className={styles.price}>${props.price}</p>
            </div>
            <button className={styles.addButton}>ADD</button>
        </div>
    )
}