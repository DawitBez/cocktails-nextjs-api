import Head from 'next/head'
import styles from '../../styles/Cocktail.module.css'

export const getStaticProps = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
    },
  }
  try {
    const response = await fetch(
      'https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20',
      options
    )
    const data = await response.json()

    return {
      props: { cocktailList: data },
      revalidate: 3600,
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        news: [],
      },
      revalidate: 3600, // cache for an hour
    }
  }
}

const cocktail = ({ cocktailList }) => {
  return (
    <>
      <Head>
        <title>Cocktail Listings | Cocktail</title>
      </Head>
      <div>
        <h1>Top Cocktails</h1>
        {cocktailList.map((cocktail) => (
          <div>
            <a className={styles.single}>
              <h2>{cocktail.cocktail_name}</h2>
              <p>{cocktail.description}</p>
              <h3>Ingredients</h3>
              <ul>
                {cocktail.ingredients.map((ingredient) => (
                  <li key={ingredient.ingredient.id}>
                    {ingredient.amount} {ingredient.ingredient.name}
                  </li>
                ))}
              </ul>
              <p>Garnish: {cocktail.garnish}</p>
              <h3>Steps:</h3>
              <ol>
                {cocktail.steps.map((step, index) => (
                  <li key={index}>{step.instructions}</li>
                ))}
              </ol>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default cocktail
