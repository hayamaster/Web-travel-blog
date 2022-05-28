import { useEffect, useState } from "react";
import Travel from "../components/Travel";
import styles from "./Home.module.css";
import Suncheon from '../images/1_3.jpeg';
import Gangneung from '../images/1_1.jpeg';
import Songdo from '../images/1_2.jpeg';
import Ulleung from '../images/1_4.jpeg';

const images = [{
  src: Gangneung, title: '강원도 강릉', link: 'https://www.instagram.com/p/B_aYNk-JdTZ/'
  ,summary: "여름, 겨울 바닷바람의 매력과 함께 강릉 바다 감성 즐기기"
}, {
  src: Songdo, title: '인천광역시 송도', link: 'https://www.instagram.com/p/CGrRHvoJhhC/',
  summary: "호캉스 즐기기 좋은 송도 신도시, 이번 여름 더위를 송도 야경으로 여유있게 보내세요."
}, {
  src: Suncheon, title: '전라남도 순천', link: 'https://www.instagram.com/p/CGgxIt8J1xw/',
  summary: "그럼 이건 몇 번쨰?"
}, {
  src: Ulleung, title: '경상북도 울릉도', link: 'https://www.instagram.com/p/CRaxoRapTRb/',
  summary: "때묻지 않은 자연의 보고, 아름다운 화산섬"
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
                  </div>
            )}
        </div>
    );
}

export default Home;