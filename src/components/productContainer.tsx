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
            <h1 className={styles.name}>{props.name}</h1>
            <div className={styles.imageContainer}>
                <Image height={100} width={100} alt={`product image for ${props.name}`} src={props.image} ></Image>
            </div>
            <div className={styles.descriptionContainer}>
                <p>{props.description}</p>
            </div>
            <button className={styles.addButton}>ADD</button>
        </div>
    )
}