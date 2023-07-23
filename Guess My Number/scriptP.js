'use strict';
let secrateNumber = Math.trunc( ( ( Math.random() * 20 ) + 1 ) );
let score = 20;
let highscore = 0;

document.querySelector( '.check' ).addEventListener( 'click', function ()
{
    const guess = Number( document.querySelector( '.guess' ).value );

    if ( !guess )
    {
        document.querySelector( '.message' ).textContent = 'No Number..!!';
    }
    else if ( guess === secrateNumber )
    {
        document.querySelector( '.number' ).textContent = secrateNumber;
        document.querySelector( '.message' ).textContent = 'Correct Number';
        document.querySelector( 'body' ).style.backgroundColor = '#60b347';
        document.querySelector( '.number' ).style.width = '100%';
        document.querySelector( '.number' ).style.backgroundColor = 'yellow';

        if ( score > highscore )
        {
            highscore = score;
            document.querySelector( '.highscore' ).textContent = highscore;
        }
    }

    else if ( guess < secrateNumber )
    {
        if ( score > 1 )
        {
            document.querySelector( '.message' ).textContent = 'Too Low';
            score--;
            document.querySelector( '.score' ).textContent = score;
        }
        else
        {
            document.querySelector( '.message' ).textContent = 'You Lost The Game';
            document.querySelector( '.score' ).textContent = 0;
        }

    }
        

    else if ( guess > secrateNumber )
    {
         if ( score > 1 )
        {
            document.querySelector( '.message' ).textContent = 'Too High';
            score--;
            document.querySelector( '.score' ).textContent = score;
        }
        else
        {
            document.querySelector( '.message' ).textContent = 'You Lost The Game';
            document.querySelector( '.score' ).textContent = 0;
        }
    }
} );

document.querySelector( '.again' ).addEventListener( 'click', function ()
{
    score = 20;
    secrateNumber = Math.trunc( Math.random() * 20 ) + 1 ;
    document.querySelector( 'body' ).style.backgroundColor = '#222';
    document.querySelector( '.score' ).textContent = score;
    document.querySelector( '.message' ).textContent = 'Start Guessing....';
    document.querySelector( '.number' ).textContent = '?';
    document.querySelector( '.number' ).style.width = '15rem';
    document.querySelector( '.number' ).style.backgroundColor = '#eee';
    document.querySelector( '.guess' ).value = '';

})