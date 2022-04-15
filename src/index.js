document.addEventListener("DOMContentLoaded", () => {
  buildToDo()

});
 const form = document.querySelector('#create-task-form')
 form.addEventListener('submit', (e) => {
  e.preventDefault()
  buildToDo(e.target['new-task-description'].value)
  form.reset();
 })

 const buildToDo = (todo) => {
   let p  = document.createElement('p')
   let btn = document.createElement('button')
   btn.addEventListener('click', handleDelete)
  
   p.textContent = `${todo}`
   btn.textContent = 'x'
   p.appendChild(btn)
   document.querySelector('#tasks').append(p)

 }

const handleDelete = (e) => {
  e.target.parentNode.remove()
}

