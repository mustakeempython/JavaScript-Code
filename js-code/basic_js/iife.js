//   Immediately Invoked Function Expression ---->> (IIFE)


( function imFunc(){
    console.log(`DB Connected`)
})();

( (name) => {
    console.log(`DB Connected to ${name}`)
})("Muhd")