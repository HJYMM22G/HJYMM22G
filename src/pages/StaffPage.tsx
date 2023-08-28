import { useParams } from "react-router-dom";
import { staffData } from "../data/staffData";


export function StaffPage() {
    const { staffname } = useParams<{ staffname: string }>();
    const person = staffname ? staffData.find(i => i.name.toLowerCase() === staffname.toLowerCase()) : null;
    
    return (
        <>
        {person ? (
            <div>
            <h1>{person.name}</h1>
            <p>Role: {person.role}</p>
            <p>Bio: {person.bio}</p>
          </div>
          ) : (
            <div>Personen finns tyvärr inte.</div>
          )}
        </>
    )        
}