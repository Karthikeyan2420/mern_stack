/* hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable; */
/*

function add(a,b){
    console.log(a+b)
}

function opertion(a,b,o){
    o(a,b)
}

opertion(2,3,add)
opertion(3,4,(a,b)=>{
console.log(a*b)
})*/



        $(document).ready(function() {
            // 1. Show the box
            $('#show').click(function() {
                $('#box').fadeIn(1000);
            });

            // 2. Hide the box
            $('#hide').click(function() {
                $('#box').fadeOut(1000);
            });

            // 3. Toggle the box
            $('#toggle').click(function() {
                $('#box').fadeToggle();
            });

            // 4. Animate the box
            $('#animate').click(function() {
                $('#box').animate(
                    {
                        left: "+=100px"
                    }
                    , 1000);
            });

            // 5. Fade the box
            $('#fade').click(function() {
                $('#box').fadeTo(1000, 0.3);
            });

            // 6. Slide the box
            $('#slide').click(function() {
                $('#box').slideDown();
            });

            // 7. Add item
            $('#addItem').click(function() {
                $('#itemContainer').append('<div class="item">New Item</div>');
            });
            // 8. Remove item
            $('#removeItem').click(function() {
                $('#itemContainer .item:last').remove();
            });

            // 9. AJAX request to fetch random user data
            

            // 10. Change CSS
            $('#cssChange').click(function() {
                $('#box').css
                ({
                    'background-color': 'red',
                    'border': '5px solid black'
                });

            });
            

            // 11. Change text of the message
            $('#textChange').click(function() {
                $('#message').text('Text has been changed!');
            });

            // 12. Change input value
            $('#inputChange').click(function() {
                $('#inputData').val('Changed Input');
            });

            // 13. Clear input field
            $('#clearInput').click(function() {
                $('#inputData').val('');
            });

            // 14. Clone the box
            $('#clone').click(function() {
                $('#box').clone().appendTo('#itemContainer').fadeIn();
            });

            // 15. Detach the box
            $('#detach').click(function() {
                $('#box').detach();
            });

            // 16. Append item
            $('#append').click(function() {
                $('#itemContainer').append('<div class="item">Appended Item</div>');
            });

            // 17. Prepend item
            $('#prepend').click(function() {
                $('#itemContainer').prepend('<div class="item">Prepended Item</div>');
            });

            

            // 19. Reset animation
            $('#animateReset').click(function() {
                $('#box').stop(true, true).css({ left: '0', opacity: '1' });
            });

            // 20. Handle form submission
            $('#dataForm').on('submit', function(e) {
                e.preventDefault();
                const inputData = $('#inputData').val();
                $('#message').text(`You entered: ${inputData}`);
                $('#inputData').val('');
            });
            $('#ajaxRequest').click(function() {
                $.ajax(
                    {
                    url: 'https://jsonplaceholder.typicode.com/users/1',
                    method: 'GET',
                    success: function(data) {
                        $('#message').text(`Name: ${data.name}, Email: ${data.email}`);
                    },
                    error: function() {
                        $('#message').text('Failed to fetch data.');
                    }
                }
            );
            });
            // Event delegation example for items
            $(document).on('click', '.item', function() {
                $(this).fadeOut();
            });
        });
     