$('#start').on('click', function () {
    $('#subWrapper').remove();
    for (var i = 0; i < questions.length; i++) {
        $('#subWrapper').append('<h2>' + questions[i].question + '</h2>')
        for (var j = 0; j < questions[i].answers.length; j++) {
            $('#subWrapper').append("<h2><input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
        }
    }

})

let questions = [{
    question: 'What does Ty Webb call a doughnut without a hole?',
    answers: ['Black And White Cookie', 'Cake', 'Danish', 'Golf Ball'],
    correctAnswer: 'Danish'
}, {
    question: 'What does Carl say he will get on his death-bed?',
    answers: ['Head Greens-Keeper Job', 'Total Consciousness', 'X-Ray Vision', 'Free Ticket To Heaven'],
    correctAnswer: 'Total Consciousness'
}, {
    question: 'What does Carl use to clean up his place after Ty hits his ball?',
    answers: ['Leaf-Blower', 'Shovel', 'His Hands', 'Rake'],
    correctAnswer: 'Leaf-Blower'
}, {
    question: 'What son of the Dali Lama did Carl caddy for when he was in Tibet?',
    answers: ['11th', '14th', '13th', '12th'],
    correctAnswer: '13th'
}, {
    question: 'Who made the gopher in the movie Caddyshack?',
    answers: ['George Lucas', 'Harold Ramis', 'Steven Spielberg', 'Computer'],
    correctAnswer: 'George Lucas'
}, {
    question: 'What does Rodney Dangerfield hit with the golf ball before it bounces back and hits his shoulder?',
    answers: ['A Tree', 'A Fire Hydrant', 'A Ball Cleaner', 'Chevy Chase'],
    correctAnswer: 'A Tree'
}];