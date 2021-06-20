const addMovieModal = document.getElementById('add-modal')
const addMovieBtn = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelBtn = addMovieModal.querySelector('.btn--passive')
const addMovieButton = addMovieModal.querySelector('.btn--success')
const userInputs = addMovieModal.querySelectorAll('input')
const entryText = document.getElementById('entry-text')
const movieUl = document.getElementById('movie-list')

const moviesArray = []

const removeSection = () => {
    if(moviesArray.length === 0) {
        entryText.style.display = 'block'
    } else {
        entryText.style.display = 'none'
    }
}

const displayMovieList = (movieObj) => {
    const movieLi = document.createElement('li')
    movieLi.className = 'movie-element'
    movieLi.innerHTML = `
    <div class="movie-element__image">
        <img src="${movieObj.img}" />
    </div>
    <div class="movie-element__info">
        <h2>${movieObj.title}</h2>
        <p>${movieObj.rating}</p>
    </div>
    `
    movieUl.append(movieLi)

}

const showModalHandler = () => {
    addMovieModal.classList.add('visible')
    showBackdrop()
}

const showBackdrop = () => {
    backdrop.classList.add('visible')
}

const closeModal = () => {
    addMovieModal.classList.remove('visible')
    backdrop.classList.remove('visible')
    clearInputs()
}

const clearInputs = () => {
    for(let input of userInputs) {
        input.value = ''
    }
}


const addMovieHandler = () => {
    const movieTitle = userInputs[0].value
    const movieImg = userInputs[1].value
    const movieRating = userInputs[2].valueAsNumber

    if(movieTitle.trim() === '' ||
     movieImg.trim() === '' ||
      isNaN(movieRating) ||
      movieRating < 1 || movieRating > 5) {
          alert('Please enter valid values')
          return;
      }

    const newMovie = {
        title: movieTitle,
        img: movieImg,
        rating: movieRating
    }

    moviesArray.push(newMovie)
    console.log(moviesArray)
    closeModal()
    removeSection()
    displayMovieList(newMovie)
}


addMovieBtn.addEventListener('click',showModalHandler)
cancelBtn.addEventListener('click',clearInputs)
backdrop.addEventListener('click',closeModal)
addMovieButton.addEventListener('click',addMovieHandler)