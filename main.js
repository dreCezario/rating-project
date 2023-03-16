const buttons = document.querySelector('.buttons')
const rateButton = document.querySelector('.rate')
const rateButton1 = document.querySelector('#rate1')
const rateButton2 = document.querySelector('#rate2')
const rateButton3 = document.querySelector('#rate3')
const rateButton4 = document.querySelector('#rate4')
const rateButton5 = document.querySelector('#rate5')
const lastButton = document.querySelector('#final-button')
const formulario = document.querySelector('#form')

formulario.onsubmit = function (e) {
   e.preventDefault()

   rateButton1.addEventListener('click', (e) =>{
      if (rateButton1) {
            rateButton1.classList.add('click')  
            rateButton2.classList.remove('click')
            rateButton3.classList.remove('click')
            rateButton4.classList.remove('click')
            rateButton5.classList.remove('click') 
         }
   })
   
   rateButton2.addEventListener('click', (e) =>{
      if (rateButton2) {
         e.preventDefault()
         rateButton1.classList.remove('click')
         rateButton3.classList.remove('click')
         rateButton4.classList.remove('click')
         rateButton5.classList.remove('click')
         rateButton2.classList.add('click')   
      }
   })
   
   rateButton3.addEventListener('click', (e) =>{
      if (rateButton3) {
         e.preventDefault()
         rateButton1.classList.remove('click')
         rateButton2.classList.remove('click')
         rateButton4.classList.remove('click')
         rateButton5.classList.remove('click')
         rateButton3.classList.add('click')   
      }
   })
    
   rateButton4.addEventListener('click', (e) =>{
      if (rateButton4) {
         e.preventDefault()
         rateButton1.classList.remove('click')
         rateButton2.classList.remove('click')
         rateButton3.classList.remove('click')
         rateButton5.classList.remove('click')
         rateButton4.classList.add('click')   
      }
   })
    
   rateButton5.addEventListener('click', (e) =>{
      if (rateButton5) {
         e.preventDefault()
         rateButton1.classList.remove('click')
         rateButton2.classList.remove('click')
         rateButton3.classList.remove('click')
         rateButton4.classList.remove('click')
         rateButton5.classList.add('click')   
      }
   })
   
   if(rateButton.classList.contains('click')){
      console.log('ok')
   }

   
   
}




            