import MediaCard from "@/components/card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styled from "@/styles/Home.module.css";
import SearchAppBar from "@/components/Navbar";
import Head from "next/head";
import { Title } from "@mui/icons-material";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sito PC</title>
      </Head>
      <main>
        <SearchAppBar className={styles.navbar} />

        <Container className={styles.prova} fixed>
          <Grid container spacing={2}>
            <Grid items xs={12} md={3}>
              <MediaCard
                immagine="/images/4090.jpg"
                testo="scheda video"
                desc="MSI GeForce RTX 4090 GAMING X TRIO 24G Scheda video gaming - 24GB GDDR6X, 2595 MHz, PCI Express Gen 4, 384-bit, 3x DP v 1.4a, HDMI 2.1a (Supporta 4K & 8K HDR)"
                link="/schedavideo"
              />
            </Grid>
            <Grid items xs={12} md={3}>
              <MediaCard
                immagine="/images/alimentatore.jpg"
                testo="alimentatore"
                desc="ENERMAX REVOLUTION D.F. X Alimentatore 1200W ATX Completamente Modulare - Compatibile Con ATX 3.0 e PCIe 5.0-105°C Condensatori Giapponesi - Efficienza 80 PLUS Gold - 10 anni di garanzia ERT1200EWT"
                link="/alimentatore"
              />
            </Grid>
            <Grid items xs={12} md={3}>
              <MediaCard
                immagine="/images/case.jpg"
                testo="case"
                desc="KEDIERS Case PC- preinstallato 6 ventole ARGB, ATX Mid Tower Gaming case, con doppio vetro temperato full screen, G500"
                link="/case"
              />
            </Grid>
            <Grid items xs={12} md={3}>
              <MediaCard
                immagine="/images/dissipatore.jpg"
                testo="dissipatore"
                desc="DeepCool AK400 ZERO DARK PLUS, Dissipatore Aria per CPU Tutto Nero, 4 HeatPipes, 2x 120 mm Ventola FDB PWM, TDP 220W, LGA1700 e AM5 Compatibile"
                link="/dissipatore"
              />
            </Grid>
            <Grid items xs={12} md={3}>
              <MediaCard
                immagine="/images/i9.jpg"
                testo="processore"
                desc="Intel® Core™ i9 Processore per sistemi desktop 14900K 24 core (8 P-core + 16 E-core) fino a 6,0 GHz"
                link="/processore"
              />
            </Grid>
            <Grid items xs={12} md={3}>
              <MediaCard
                immagine="/images/madre.jpg"
                testo="scheda madre"
                desc="Scheda madre per X7 V124C Compatibile con computer desktop Intel H61 Socket LGA1155 16GB RAM 2X DDR3 mATX Slot M.2 mVME"
                link="/schedamadre"
              />
            </Grid>
            <br></br>
            <br></br>
            <Grid items xs={12} md={3}>
              <MediaCard
                immagine="/images/ram.jpg"
                testo="ram"
                desc="Patriot Viper Steel RAM DDR4 3200 Mhz 64GB (2x32GB) C16 Kit di Memoria Gaming XMP 2.0 Grigio"
                link="/ram"
              />
            </Grid>
            <Grid items xs={12} md={3}>
              <MediaCard
                immagine="/images/ssd.jpg"
                testo="ssd"
                desc="fanxiang S660 SSD 1TB PCIe 4.0 NVMe SSD M.2 2280 Unità a Stato solido Interna Con Dissipatore di Calore, Fino a 5000MB/s, Cache SLC Dinamica, Compatibile con PS5 e Computer"
                link="/ssd"
              />
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
