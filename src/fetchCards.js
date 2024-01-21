import axios from 'axios';

const KEY = '41769090-706ead126e055710809ca53a4';

const fetchCards = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data.hits;
};

export default fetchCards;
