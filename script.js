const $container = document.getElementById('container')

let newElements = []

for ( let i = 127789; i <127799; i++){ 
    newElements.push(`
    <div class="emoji">
    <p>
        &#${i};
    </p>
    <p>
        ${i}
    </p>
    </div>`)

}

$container.innerHTML = newElements.join('')

//conditionals lab
console.log(newElements)
 $emojiList = document.querySelectorAll('.emoji')

for (let item of $emojiList){
if (item.children[1].textContent.trim() === "12779"){
    console.log('found it')
    item.style.backgroundColor = 'lightgrey'
     }
}
//Event listener
$container.addEventListener('click', function(event) {
    const value = event.target. closest('div').children[1].textContent.trim()
    const name = ''
    if (value ==='127789'){
        name = 'hotdog'
    }
    else if(value ==='127790'){
        name = 'taco'
    }
    document.getElementById('preview').innerHTML = `
    
    <p style= 'font-size:100px;'>
     &#${value};
     </p>
     <p>
     ${name}
     </P>
    
    `

})