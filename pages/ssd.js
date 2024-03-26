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
      <img src="images/ram-1.jpg" width="100%" />
      <h1>
        <center>SSD</center>
      </h1>
      <center>
        <Box desc="fanxiang S660 SSD 1TB PCIe 4.0 NVMe SSD M.2 2280 Unità a Stato solido Interna Con Dissipatore di Calore, Fino a 5000MB/s, Cache SLC Dinamica, Compatibile con PS5 e" />
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
