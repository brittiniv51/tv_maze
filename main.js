const searchByBar = document.getElementById('searchBar');
const resultsOfActor = document.getElementById('actorResults');

searchByBar.addEventListener('keyup', (e) =>{
    const searchString = e.target.value.toLowerCase();
    console.log(searchString)
    
    const filteredActors = tvActors.filter((actor) =>{
        return (
        actor.name.toLowerCase().includes(searchString)
        );
});
    displayActors(filteredActors);
});
     
const getActors = async () => {
    try {
        const res = await fetch('http://api.tvmaze.com/shows?page=1');
        tvActors = await res.json();
        displayActors(tvActors);
    } catch (err) {
        console.error(err);
    }
};

const displayActors = (actors) => {
        console.log(actors)
        const htmlString = actors

        .map((actor) => {
            return `
            <li class="actor">
            <h2>${actor.name}</h2>
            <h5>${actor.genres}</h5>
            <img src="${actor.image.medium}"></img>
           

            </li>
            `
        })
        .join('');
        actorResults.innerHTML = htmlString;
    };

    getActors();