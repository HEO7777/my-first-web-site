function cat_ready()
{
    const lists = document.querySelectorAll('ol li');
    const cat_divs = document.querySelectorAll('.cat_div');
    for (let i = 0; i < lists.length; ++i)
    {
        var lstRect = lists[i].getBoundingClientRect(),
        divRect = cat_divs[i].getBoundingClientRect(),
        x = lstRect.left + 100,
        y = lstRect.top,
        x_gap = Math.abs(divRect.left - x),
        y_gap = Math.abs(divRect.top - y),
        o_to_x = x_gap + (parseInt(getComputedStyle(cat_divs[i]).width) / 2),
        o_to_y = y_gap + (parseInt(getComputedStyle(cat_divs[i]).height)/2);
        cat_divs[i].style.transform = "translate(" + x_gap.toString() + "px, " + y_gap.toString() + "px)";
        cat_divs[i].style.transformOrigin = o_to_x.toString() + "px " + o_to_y.toString() + "px";
    }
}

function cat_rot(self)
{
    if (self.style.rotate === "")
        self.style.rotate = "-90deg";
    else
        self.style.rotate = "";
}