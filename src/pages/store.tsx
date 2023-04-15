import React from "react";
import styles from "@/styles/Store.module.scss"
import CartButtonComponent from "@/components/cartButton";
import Link from "next/link";
import Image from "next/image";
import CartComponent from "@/components/cart";

export default function Store() {
    return(
        <div className={styles.main}>
            <div className={styles.headerContainer}>
            <Link style={{textDecoration: "none"}} href={"/"}>
                <div className={styles.title}><Image height={20} width={20} src={"/home.svg"} alt="home icon"></Image> Coffee Shop</div>
            </Link>
            <CartButtonComponent></CartButtonComponent>
            </div>
            <div className={styles.cartContainer}>
                <CartComponent></CartComponent>
            </div>
        </div>
    )
}