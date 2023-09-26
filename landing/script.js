const addTrailingZero = (num) => {
    return num < 10 ? '0' + num : num
}

const updateTime = () => {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // convering 24 hours to 12
    hours = hours % 12 || 12;

    // add trailing zeros if less 10
    hours = addTrailingZero(hours);
    minutes = addTrailingZero(minutes);
    seconds = addTrailingZero(seconds);

    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);
};

// call the function on page load
updateTime();

// call function after every second
setInterval(updateTime, 1000)

var stars = document.querySelectorAll('.star a');
stars.forEach((item, index1) => {
    item.addEventListener('click', () => {
        stars.forEach((stars, index2) => {
            index1 >= index2 ? stars.classList.add('active') : stars.classList.remove('active')
        })
    })
})