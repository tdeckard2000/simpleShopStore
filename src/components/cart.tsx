import React, { useEffect, useState } from "react";
import styles from "@/styles/Cart.module.scss";
import { IFullItem, IStoreItem } from "@/services/storeTypes";
import Image from "next/image";
import Link from "next/link";

export default function CartComponent() {

    const [count, setCount] = useState<number>(1);
    const [list, setList] = useState<IFullItem[]>();
    const [totalBill, setTotalBill] = useState<number>(0);

    useEffect(() => {
        window.addEventListener("storage", storageEventHandler);
        storageEventHandler();
    }, [])


    const storageEventHandler = () => {
        const rawCartData = localStorage.getItem("cart");
        if(!rawCartData) {
            setCount(0);
            setList([]);
            setTotalBill(0);
        } else {
            const cartData = JSON.parse(rawCartData);
            setCount(cartData.length);
            setList(cartData);
            setTotalBill(updateTotalBill(cartData))
        }
    }

    const updateTotalBill = (cartData: IFullItem[]): number => {
        let total = 0;
        for(let item of cartData) {
            total += item.price;
        }
        return Math.round(total * 100) / 100;
    }

    const removeItem = (itemIndex: number) => {
        const rawCartData = localStorage.getItem("cart");
        if(!rawCartData) {
            return
        } else {
            const cartData = JSON.parse(rawCartData);
            cartData.splice(itemIndex, 1);
            localStorage.setItem("cart", JSON.stringify(cartData));
            window.dispatchEvent(new Event("storage"));
        }
    }

    const duplicateItem = (itemIndex: number) => {
        const rawCartData = localStorage.getItem("cart");
        if(!rawCartData) {
            return
        } else {
            const cartData = JSON.parse(rawCartData);
            cartData.push(cartData[itemIndex]);
            localStorage.setItem("cart", JSON.stringify(cartData));
            window.dispatchEvent(new Event("storage"));
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.sideBar}>
                <h1 className={styles.title}>Items in your cart</h1>
                <div className={styles.orderSummary}>
                    <div style={{fontWeight: "600", fontSize: "16px"}}>Review Order ({count})</div>
                    <div style={{fontSize: "10px"}}>Prep time: {7 + count} - {10 + count} min</div>
                    <div style={{margin: "20px 0 0"}}>Total <span>${totalBill.toFixed(2)}</span></div>
                </div>
            </div>
            <div className={styles.rightBar}>
                    <div style={{display: count <= 0 ? "initial" : "none"}} className={styles.emptyCart}>
                        <div>Cart is Empty</div>
                        <Link href={"/"}><button className={styles.storeLinkButton}>Store</button></Link>
                    </div>
                    {list?.map((item, i) => {
                        return (
                            <div key={i} className={styles.listTile}>
                                <div className={styles.imageContainer}>
                                    <Image alt="product image" fill src={item.image}></Image>
                                </div>
                                <div className={styles.detailsContainer}>
                                    <h1 className={styles.name}>{item.name}</h1>
                                    <p className={styles.description}>{item.description} {item.size ? `- ${item.size}` : ""} <br /> ${item.price.toFixed(2)}</p>
                                    <div className={styles.buttonContainer}>
                                        <button onClick={() => duplicateItem(i)} className={styles.button}>+</button>
                                        <button onClick={() => removeItem(i)} className={styles.button}>-</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}