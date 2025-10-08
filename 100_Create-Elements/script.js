
// const resultDiv = document.querySelector('.result')

// for (let i = 1; i <= 100; i++) {

//     const divElement = document.createElement('div')
//     divElement.classList.add('img-container')
    
//     const imgElement = document.createElement('img')
//     imgElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    
//     const para = document.createElement('p')
//     paragraph.innerText = i
//     // para.classList.add('para')
    
//     divElement.append(imgElement, para)
//     resultDiv.append(divElement)

//     // let paragraph = document.querySelector('.para')

// }

const container = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}
