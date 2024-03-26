import style from "@/components/Layout.module.css"

export default function Layout ({children}){
    return<div className={style.container}>{children}</div>
}