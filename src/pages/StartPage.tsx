import { Link } from "react-router-dom";
import { staffData } from "../data/staffData";

export function StartPage() {
    return (
        <>
            <h1>Välkommen</h1>
            <div>
                {staffData.map(person => (
                    <Link key={person.id} to={`/about/${person.name.toLowerCase()}`}>
                        <button>{person.name}</button>
                    </Link>
                ))}
            </div>
        </>
    )
}