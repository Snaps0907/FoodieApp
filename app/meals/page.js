import Link from "next/link";

export default function MealsPage(){
    return (
        <main>
            <h1>Meals Page</h1>
            <p><Link href="/meals/share">Meals Share Page</Link></p>
            <p><Link href="/meals/anything">Meal Page</Link></p>
        </main>
    )
}