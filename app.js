$(() => {

        $('form').on('submit', () => {
            const $item = $('#input-box').val();
            event.preventDefault();
            console.log($item);

            const $firstDiv = $('<li>').addClass('todo').html('<h2>'+$item+'</h2>');


            const $firstbutton =
            $('<button>').text('Mark Complete').appendTo($firstDiv);

            $('.ul1').append($firstDiv);


            $firstbutton.on('click', () => {
                $('#completed').append($firstDiv);
                $firstbutton.addClass('remove').text('Remove Item');


                $('.remove').on('click', (event) => {
                    event.target.closest('li').remove();
                });
            });


        });

});
