/* let time_status = 'stopped'; //As default, the time is */
let seconds = 0;
let minutes = 0;
let status_output = document.getElementById("time_status") ;
let minutes_output = document.getElementById("minutes") ;
let seconds_output = document.getElementById("seconds") ;

//  The HTML file has two buttons: Play or pause. clicking in each button change the pause status
function play()
{
    paused = false;
}

function pause()
{
    paused = true;
}

setInterval (function ()
{
    if ( paused )   //The second counter stops if paused
    {
        seconds += 0;

        time_status = 'paused';
    }

    if ( !paused )    //Script that runs if the time is running
    {
        //  One second is added each second.
        seconds += 1;

        // The timer (minutes and seconds) is refreshed each second.
        seconds_output.textContent =   seconds + " seconds" ;
        minutes_output.textContent =  minutes + " minutes";

        // The timer status is running. This status will be displayed in the browser
        time_status = 'running';

        //If seconds are greater than 60, then one minute is added to the counter and the seconds counter turns zero.
        if (seconds >= 60)
        {
            ++ minutes;

            seconds = 0;
        }
    }   

    //  The time status is displayed whatever the pause status is.
    status_output.textContent =  time_status;

}, 1000);   //  Each second ( 1000 miliseconds ), the function is called

