import Image from "next/image";
import styles from "./page.module.css";
import Act1AnimalList from "./Act1AnimalList"
import Act2Carousel from "./Act2CarouselImagenes"
import Act3Library from "./Act3Library"

//Array de imagenes para actividad 2
const imagenes = [
  {
    titulo: "Foto 1 - Sparking",
    url: "https://gaming-cdn.com/images/products/15531/616x353/dragon-ball-sparking-zero-pc-juego-steam-europe-cover.jpg?v=1728469573"
  },
  {
    titulo: "Foto 2 - The Witcher",
    url: "https://gmedia.playstation.com/is/image/SIEPDC/the-witcher-3-hero-banner-desktop-01-en-12dec22?$1600px$"
  },
  {
    titulo: "Foto 3 - Cyberpunk 2077",
    url: "https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2022/02/24/2DB0FAA3-38D4-4645-8300-EC8080FA017F/cyberpunk-2077_96.jpg?crop=3840,2160,x0,y0&width=1200&height=675&optimize=high&format=webply"
  }
]

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Actividad 1</h2>
      <Act1AnimalList />
      <br />
      <br />
      <br />
      <br />
      <h2>Actividad 2</h2>
      <Act2Carousel imagenes={imagenes} />
      <br />
      <br />
      <br />
      <br />
      <h2>Actividad 3</h2>
      <Act3Library />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
