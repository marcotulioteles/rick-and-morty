export const getAllEpisodesQuery = `
query getEpisodes($fetchPage: Int){
  episodes(page: $fetchPage) {
    info {
      count
      pages
      prev
      next
    }
    results {
      id
      name
      air_date
      characters {
        id
        name
        status
        species
        image
      }
    }
  }
}
`