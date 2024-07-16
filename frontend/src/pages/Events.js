import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Some event',
    },
    {
        id: 'e2',
        title: 'another event',
    },

];

function EventsPage(){
    return (
        <>
            <h1>EventsPage</h1>
            <ul>
                {DUMMY_EVENTS.map((event) => {
                    return <li key={event.id}><Link to={event.id}>{event.title}</Link></li>
                })}
            </ul>
        </>
    );
}

export default EventsPage;