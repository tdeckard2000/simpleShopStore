import React, { useEffect, useState } from "react";
import styles from "@/styles/CartButton.module.scss"
import Image from "next/image";
import Link from "next/link";

export default function CartButtonComponent () {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("storage", storageEventHandler);
        storageEventHandler();
    }, [])

    const storageEventHandler = () => {
        const rawCartData = localStorage.getItem("cart");
        if(!rawCartData) {
            setCount(0);
        } else {
            const cartData = JSON.parse(rawCartData);
            setCount(cartData.length);
        }
    }

    return (
        <div className={styles.main}>
            <Link style={{textDecoration: "none"}} href={"/store"}>
                <button className={styles.button}>
                    <Image height={25} width={25} src={"/cart.svg"} alt="shopping cart icon"></Image>
                    <div className={styles.count}>{count}</div>
                </button>
            </Link>
        </div>
    )
}