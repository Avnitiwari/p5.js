function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(110,250);

    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function draw()
{
    image(video,0,0,640,480);
    tint(tint_color);

    fill("red");
    stroke("blue");
    rect(40,50,580,40);
    rect(550,50,40,400);
    rect(40,50,40,400);
    rect(40,400,580,40);

    fill("yellow");
    stroke("orange");
    circle(50,60,60);
    circle(600,60,60);
    circle(600,400,60);
    circle(50,400,60);
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot()
{
  save("filter.png");
}