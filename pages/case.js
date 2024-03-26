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
      <img src="images/case-1.jpg" width="100%" />
      <h1>
        <center>CASE </center>
      </h1>
      <center>
        <Box desc="KEDIERS Case PC- preinstallato 6 ventole ARGB, ATX Mid Tower Gaming case, con doppio vetro temperato full screen, G500, bianco (G500)" />
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
