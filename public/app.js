console.log('hello world');

const showDropdown = (event) => {
    let id = $(event.target).attr('id');
    if (id === 'buttonDifficulty') {
        $('#dropdownDifficult').css('display', 'block');
    } else if (id === "buttonBodyFocus") {
        $('#dropdownBodyFocus').css('display', 'block');
    } else if (id === "buttonType") {
        $('#dropdownType').css('display', 'block');
    }
    console.log('accessed dropdown');
}

$('.dropbtn').on('click', showDropdown);