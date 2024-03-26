import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MediaCard from "@/components/card";
import Layout from "@/components/Layout";
import Grid from "@mui/material/Grid";
import ButtonAppBar from "@/components/Navbar";
import Box from "@/components/Box";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ButtonAppBar></ButtonAppBar>
      <br></br>
      <br></br>
      <img src="images/dissipatore-1.jpg" width="100%" />
      <h1>
        <center>DISSIPATORE </center>
      </h1>
      <center>
        <Box desc="DeepCool Raffreddatore per CPU a Liquido AIO LE520, Radiatore da 240 mm, Due Ventole ARGB da 120 mm ad Alte Prestazioni, Controllo software ARGB a 5 V" />
      </center>

      <center>
        <div ClassName="link">
          <h1>
            <Link href="/">TORNA ALLA LOBBY</Link>
          </h1>
        </div>
      </center>
    </>
  );
}
