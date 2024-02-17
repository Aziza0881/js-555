let st_box = document.querySelector('.st_box')
const dialog = document.querySelector('[data-modal]')
let btn = document.querySelector('.btn')
let stil = document.querySelector('.stil')
let stil1 = document.querySelector('.stil1')


// function reload(place) {
//     place.innerHTML = ""
// for (const item of arr) {
for (let k = 0; k < 10; k++) {

    let dibil = document.createElement('div')
    let name1 = document.createElement('span')
    let opisanie = document.createElement('span')
    let data = document.createElement('span')
    let time = document.createElement('span')
    let vipolneno = document.createElement('span')

    dibil.classList.add('dibil')
    name1.classList.add('name')
    opisanie.classList.add('opisanie')
    data.classList.add('data')
    time.classList.add('time')
    vipolneno.classList.add('vipolneno')


    name1.innerText = "Переписать проект на Vue 3"
    opisanie.innerText = "Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    data.innerText = "21.10.21"
    time.innerText = "14:31"
    vipolneno.innerText = "Готово"


    st_box.append(dibil)
    dibil.append(name1, opisanie, data, time, vipolneno)

    btn.ondblclick = () => {
        dialog.showModal()


    }
    stil.ondblclick = () => {



        const dibilElements = document.querySelectorAll('.dibil');


        for (const element of dibilElements) {

            element.style.border = 'solid 2px black';
            element.style.borderRadius = '10px';
            element.style.flexDirection = 'column';
            data.style.paddingLeft = "0px"
            vipolneno.style.paddingLeft = "0px"
            element.style.gap = "10px"
            element.style.width = "100%"
            element.style.height = "100%"
            st_box.style.display = "grid"
            st_box.style.gridTemplateColumns = "repeat(3, 1fr)"
        }
    }

}



//     }
// }

// reload(ar st_box)