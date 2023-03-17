import { getOneRecipe } from "@/utils/recipeUtils";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function RecipePage(props) {
  if (!props.recipe) {
    return <div>Not Found</div>;
  }

  return (
    <div className={styles.recipeWrapper}>
      <h1>{props.recipe.title}  </h1>
      <h3>{props.recipe.description}</h3>
      <div>
        <h4>Ingredients</h4>
        <ul>
          {props.recipe.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </div>
      <div className={styles.insWrapper}>
        <h4>Instructions</h4>
        <ul>
          {props.recipe.instructions.map((inst) => (
            <li key={inst}>{inst}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link className={styles.backLink} href="/">← Back to home</Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      recipe: getOneRecipe(context.params.id) || null,
    }, // will be passed to the page component as props
  };
}
