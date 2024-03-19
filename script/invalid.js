$('.send').click(function(){
    let nameInput = $('#nameInput').val()
    let numberInput = $('#numberInput').val()

    if (nameInput === '') {
        $('.invalid-text-name').html('*Необходимо заполнить это поле')
    } else {
        $('.invalid-text-name').html('')
    }
    if (numberInput === '') {
        $('.invalid-text-number').html('*Необходимо заполнить это поле')
    } else {
        $('.invalid-text-number').html('')
    }
    console.log(nameInput)
    }
)
