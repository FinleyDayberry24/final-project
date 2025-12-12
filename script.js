const passengerName = document.getElementById('passenger-name');
const riderCount = document.getElementById('rider-count');
const transType = document.getElementById('transportation')
const submitBtn = document.querySelector('.submit-btn');
if (passengerName === null || riderCount === null || transType === null) {
    throw new Error('One or more elements not found');
};
submitBtn.addEventListener('click', function(){
    const nameInput = document.querySelector('#passenger-name');
    const riderInput = document.querySelector('#rider-count');
    const transInput = document.querySelector('#transportation');

    const passengerName = nameInput.value;
    const riderCount = riderInput.value;
    const transType = transInput.value;

if (passengerName){
    alert(`Thank you, ${passengerName}, your request for ${riderCount} rider(s) via ${transType} has been received!`);
}
});