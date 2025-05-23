import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Share as ShareIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { getArticle } from '../../app/slices/newsSlice';
import {
  ArticleContainer,
  Photo,
  Info,
  Publish,
  Title,
  Body,
  More,
  Share
} from './styled/ArticleStyles';

const Article = () => {
    const location = useLocation();
    const dispatch = useDispatch();
  
    useEffect(() => {
        const id = location.pathname.split('/').pop();
      dispatch(getArticle(id));
    }, [dispatch]);

    let article = useSelector((state) => state.news.article);

    if (!article) {
        return null;
    }

  
  const formattedDate = new Date(article.created_at).toLocaleDateString('en-GB');

  return (
    <ArticleContainer>
      <Photo src={article.image_url} alt="Main article" />
      <Info>
        <Publish>Published / {formattedDate}</Publish>
        <Title>{article.title}</Title>
        <Body>{article.short_description}</Body>

        <Share to="/share">
            <ShareIcon aria-hidden="false" aria-label="Share" />
            <span>Share</span>
          </Share>
      </Info>
    </ArticleContainer>
  );
};

export default Article;
