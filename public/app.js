console.log('hello world');

const showDropdown = (event) => {
    let id = $(event.target).attr('id');
    if (id === "buttonDifficulty") {
        $('#dropdownDifficulty').css('display', 'block');
        $('#dropdownBodyFocus').css('display', 'none');
        $('#dropdownType').css('display', 'none');
    } else if (id === "buttonBodyFocus") {
        $('#dropdownBodyFocus').css('display', 'block');
        $('#dropdownDifficulty').css('display', 'none');
        $('#dropdownType').css('display', 'none');
    } else if (id === "buttonType") {
        $('#dropdownType').css('display', 'block');
        $('#dropdownDifficulty').css('display', 'none');
        $('#dropdownBodyFocus').css('display', 'none');
    }
    console.log('accessed dropdown');
}

$('.dropbtn').on('click', showDropdown);