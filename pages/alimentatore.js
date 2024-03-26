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
      <img src="images/alimentatore-1.jpg" width="100%" />
      <h1>
        <center>ALIMENTATORE </center>
      </h1>
      <center>
        <Box desc="MSI GeForce RTX 4090 GAMING X TRIO 24G Scheda video gaming - 24GB GDDR6X, 2595 MHz, PCI Express Gen 4, 384-bit, 3x DP v 1.4a, HDMI 2.1a (Supporta 4K & 8K HDR)" />
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
