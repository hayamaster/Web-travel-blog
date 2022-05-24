import { useEffect, useState } from "react";
import Travel from "../components/Travel";
import styles from "./Home.module.css";
import argentina from '../images/argentina.jpg';
import chile1 from '../images/chile1.jpg';
import chile2 from '../images/chile2.jpg';
import chile3 from '../images/chile3.jpg';
import chile4 from '../images/chile4.jpg';
import bolivia1 from '../images/bolivia1.jpg';
import bolivia2 from '../images/bolivia2.jpg';
import bolivia3 from '../images/bolivia3.jpg';
import bolivia4 from '../images/bolivia4.jpg';
import bolivia5 from '../images/bolivia5.jpg';

const images = [{
  src: argentina, title: 'El calafate/nGlacier', link: 'https://www.instagram.com/p/B_aYNk-JdTZ/'
  ,summary: "이건 첫 번째"
}, {
  src: chile1, title: 'San pedro de atacama', link: 'https://www.instagram.com/p/CGrRHvoJhhC/',
  summary: "이건 두 번째"
}, {
  src: chile2, title: 'San pedro de atacama', link: 'https://www.instagram.com/p/CGgxIt8J1xw/',
  summary: "그럼 이건 몇 번쨰?"
}, {
  src: chile3, title: 'Laguna Verde', link: 'https://www.instagram.com/p/CRaxoRapTRb/',
  summary: "네 번째 입니다."
}, {
  src: chile4, title: 'Laguna Colorada', link: 'https://www.instagram.com/p/CS9hLQupZRo/',
  summary: "다섯 번째 입니당."
}, {
  src: bolivia1, title: 'Salar de Uyuni',
  summary: "666666666666아아아아아아"
}, {
  src: bolivia2, title: 'Salar de Uyuni',
  summary: "여행 너무 가고 싶다다다다다"
}, {
  src: bolivia3, title: 'Salar de Uyuni',
  summary: "과제 너무 하기 싫타아아아아"
}, {
  src: bolivia4, title: 'Machu Picchu',
  summary: "자퇴마렵다..."
}, {
  src: bolivia5, title: 'Aguas Calientes',
  summary: "하...인생"
}
]


function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8$sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (                  
                  <div className={styles.movies}>   
                    {images.map((item,index) => (
                        <Travel
                            key={index}
                            id = {index + 100}
                            image = {item.src}
                            title = {item.title}
                            summary = {item.summary}
                        />
                    ))}                
                    {movies.map((x,index) => (
                        <Travel
                            key={x.id}
                            id = {x.id}
                            image={images[2].src}
                            title={images[2].title} 
                            summary={x.summary} 
                        />
                    ))}
                  </div>
            )}
        </div>
    );
}

export default Home;