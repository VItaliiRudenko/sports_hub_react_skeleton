import { Image } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const ASSETS_URL = process.env.REACT_APP_ASSETS_URL;

const MostPopular = ({ news }) => {
    const lineWithTextStyle = { marginTop: '50px', marginBottom: '50px' };

    function generateNews() {
        const mostPopular = [...news].sort((a, b) => b.article_likes - a.article_likes).slice(0, 3);


        return mostPopular.map((article, index) => {
            return (
                <>
                    <div className="news-item">
                        <Image src={`${ASSETS_URL}/${article.image_url}`} rounded height='100px' width='120px' />
                        <div>
                            <h2>{article.title}</h2>
                            <p>{article.short_description}</p>
                        </div>
                    </div>
                    <p>
                        <span style={{ marginRight: '20px' }}><FaThumbsUp /> {article.article_likes}</span>
                        <span><FaThumbsDown />{article.article_dislikes}</span>
                    </p>
                </>
            )
        })
    }

    return (
        <>
            <div class="line-with-text" style={lineWithTextStyle}>
                <span>Most Popular</span>
            </div>
            {generateNews()}
        </>
    );
}
export default MostPopular;
