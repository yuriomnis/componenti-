import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import styles from "@/components/Layout.module.css";

export default function MediaCard(props) {
  return (
    <Card className={styles.Card}>
      <CardMedia component="img" image={props.immagine} title="green iguana" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h3>{props.testo}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h3>{props.desc}</h3>
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={props.link} size="small">
          scopri di più
        </Button>
      </CardActions>
    </Card>
  );
}
