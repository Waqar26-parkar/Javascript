const randomcolor = function()
{
    const hex = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXY';
    let color = '#';
    for (let i=0; i<6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
        console.log(color);
    }

    return color;
}



let Intervalid;

const StartColor = function()
{
    if(!Intervalid)
    {
        Intervalid = setInterval (randomcolor,1000);
        document.body.style.backgroundColor = randomcolor();  // Comment this line if you want to use below function.
    }

    // function ChangeBackgroundColor()                            // This  function  also if you uncomment above line
    // {
    //     document.body.style.backgroundColor = randomcolor();
    // }
};


const StopChangingColor = function()
{
    clearInterval(Intervalid);
    Intervalid = null;
}



document.querySelector('#start').addEventListener('click', StartColor);
document.querySelector('#stop').addEventListener('click', StopChangingColor);
