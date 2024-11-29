import { useStaticQuery, graphql } from "gatsby"

export const usePagesQuery = () => {
  const data = useStaticQuery(graphql`
    query Pages {
      allWpPage {
        nodes {
          title
          uri
          slug
          content
        }
      }
      wpMenuItem {
        id
      }
    }
  `)
  return data
}
