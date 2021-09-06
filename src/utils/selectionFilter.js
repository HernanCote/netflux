const availableGenres = [
  {
    title: 'Documentaries',
    filter: 'documentaries',
  },
  {
    title: 'Comedies',
    filter: 'comedies',
  },
  {
    title: 'Children',
    filter: 'children',
  },
  {
    title: 'Crime',
    filter: 'crime',
  },
  {
    title: 'Feel Good',
    filter: 'feel-good',
  },
  {
    title: 'Drama',
    filter: 'drama',
  },
  {
    title: 'Thriller',
    filter: 'thriller',
  },
  {
    title: 'Suspense',
    filter: 'suspense',
  },
  {
    title: 'Romance',
    filter: 'romance',
  },
];

const mapContent = media => availableGenres.reduce((result, genre) => {
  const data = media?.filter(item => item.genre === genre.filter);
  if (data.length > 0) {
    result.push({
      title: genre.title,
      data,
    });
  }
  return result;
}, []);

const selectionFilter = ({ series, films }) => ({
  series: mapContent(series),
  films: mapContent(films),
});

export {
  mapContent,
  selectionFilter,
};
