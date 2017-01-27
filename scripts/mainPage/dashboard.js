window.onload = function () {
    $("#addSiteButton").click(function () {
        addSite();
    });
};
canvasImage = new Image();
canvasImageHeight = 0;
canvasImageWidth = 0;

function addSite() {
    $("#SiteList").remove();


    
    var siteNameHeader = document.createElement("p");
    siteNameHeader.innerHTML = "SiteName";
    document.getElementsByTagName("body")[0].appendChild(siteNameHeader);
    
    var siteName = document.createElement("input");
    siteName.type = "text";
    siteName.id = "siteName";
    document.getElementsByTagName("body")[0].appendChild(siteName);
    document.getElementsByTagName("body")[0].appendChild(document.createElement("br"));
    
    var primaryColorHeader = document.createElement("p");
    primaryColorHeader.innerHTML = "Primary Color";
    document.getElementsByTagName("body")[0].appendChild(primaryColorHeader);

    var colorPicker = document.createElement("input");
    colorPicker.id = "primaryColor";
    document.getElementsByTagName("body")[0].appendChild(colorPicker);

    $(function () {
        $("#primaryColor").spectrum({
            flat: false,
            showInput: true,
        });
    });
    var secondaryColorHeader = document.createElement("p");
    secondaryColorHeader.innerHTML = "Secondary Color";
    document.getElementsByTagName("body")[0].appendChild(secondaryColorHeader);

    var colorPicker = document.createElement("input");
    colorPicker.id = "secondartColor";
    document.getElementsByTagName("body")[0].appendChild(colorPicker);

    $(function () {
        $("#secondartColor").spectrum({
            flat: false,
            showInput: true,
        });
    });

    var logoText = document.createElement("p");
    logoText.innerHTML = "logo";
    document.getElementsByTagName("body")[0].appendChild(logoText);

    var imagePicker = document.createElement("input");
    imagePicker.type = "file";
    imagePicker.accept = "image/*";
    document.getElementsByTagName("body")[0].appendChild(imagePicker);


    document.getElementsByTagName("body")[0].appendChild(document.createElement("br"));
    var imageCanvas = document.createElement("canvas");
    imageCanvas.width = "200";
    imageCanvas.height = "200";
    imageCanvas.id = "canvas1";
    document.getElementsByTagName("body")[0].appendChild(imageCanvas);
    
    var siteNameHeader = document.createElement("p");
    siteNameHeader.innerHTML = "Contact name";
    document.getElementsByTagName("body")[0].appendChild(siteNameHeader);
    
    var siteName = document.createElement("input");
    siteName.type = "text";
    siteName.id = "contactName";
    document.getElementsByTagName("body")[0].appendChild(siteName);
    document.getElementsByTagName("body")[0].appendChild(document.createElement("br"));
    
        var siteNameHeader = document.createElement("p");
    siteNameHeader.innerHTML = "title";
    document.getElementsByTagName("body")[0].appendChild(siteNameHeader);
    
    var siteName = document.createElement("input");
    siteName.type = "text";
    siteName.id = "title";
    document.getElementsByTagName("body")[0].appendChild(siteName);
    document.getElementsByTagName("body")[0].appendChild(document.createElement("br"));
    
        var siteNameHeader = document.createElement("p");
    siteNameHeader.innerHTML = "Phone number";
    document.getElementsByTagName("body")[0].appendChild(siteNameHeader);
    
    var siteName = document.createElement("input");
    siteName.type = "text";
    siteName.id = "phoneNumber";
    document.getElementsByTagName("body")[0].appendChild(siteName);
    document.getElementsByTagName("body")[0].appendChild(document.createElement("br"));
    
        var siteNameHeader = document.createElement("p");
    siteNameHeader.innerHTML = "Email";
    document.getElementsByTagName("body")[0].appendChild(siteNameHeader);
    
    var siteName = document.createElement("input");
    siteName.type = "text";
    siteName.id = "email";
    document.getElementsByTagName("body")[0].appendChild(siteName);
    document.getElementsByTagName("body")[0].appendChild(document.createElement("br"));
    
        var siteNameHeader = document.createElement("p");
    siteNameHeader.innerHTML = "Job Descrition";
    document.getElementsByTagName("body")[0].appendChild(siteNameHeader);
    
    var siteName = document.createElement("input");
    siteName.type = "text";
    siteName.id = "jobDescription";
    document.getElementsByTagName("body")[0].appendChild(siteName);
    document.getElementsByTagName("body")[0].appendChild(document.createElement("br"));
    imagePicker.addEventListener("change", function (evt) {
        var canvas = imageCanvas;
        var ctx = imageCanvas.getContext("2d");
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            var s = new CanvasState(document.getElementById('canvas1'));
            img.onload = function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                canvasImage = img;
                if (img.width > img.height) {
                    canvasImageWidth = canvas.width;
                    canvasImageHeight = img.height * (canvas.width / img.width);
                    ctx.drawImage(img, 0, 0, canvas.width, img.height * (canvas.width / img.width));
                    s.addShape(new Shape(0, 0, img.height * (canvas.width / img.width), img.height * (canvas.width / img.width), 'rgba(0, 0, 212, .25)'));
                } else {
                    canvasImageHeight = canvas.height;
                    canvasImageWidth = img.width * (canvas.height / img.height);
                    ctx.drawImage(img, 0, 0, img.width * (canvas.height / img.height), canvas.height);
                    s.addShape(new Shape(0, 0, img.width * (canvas.height / img.height), img.width * (canvas.height / img.height), 'rgba(0, 0, 212, .25)'));
                }
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(evt.target.files[0]);
    });
    
    var siteName = document.createElement("input");
    siteName.type = "submit";
    siteName.id = "submit";
    document.getElementsByTagName("body")[0].appendChild(siteName);
    siteName.onclick = function(){
    };
}


function Shape(x, y, w, h, fill) {
    // This is a very simple and unsafe constructor. All we're doing is checking if the values exist.
    // "x || 0" just means "if there is a value for x, use that. Otherwise use 0."
    // But we aren't checking anything else! We could put "Lalala" for the value of x 
    this.x = x || 0;
    this.y = y || 0;
    this.w = w || 1;
    this.h = h || 1;
    this.fill = fill || '#AAAAAA';
}

// Draws this shape to a given context
Shape.prototype.draw = function (ctx) {
    ctx.fillStyle = this.fill;
    ctx.fillRect(((this.x < 1) ? 0 : ((this.x + this.w) > canvasImageWidth) ? canvasImageWidth - this.w : this.x)
            , ((this.y < 1) ? 0 : ((this.y + this.h) > canvasImageHeight) ? canvasImageHeight - this.h : this.y),
            this.w, this.h);
}

// Determine if a point is inside the shape's bounds
Shape.prototype.contains = function (mx, my) {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return  (this.x <= mx) && (this.x + this.w >= mx) &&
            (this.y <= my) && (this.y + this.h >= my);
}

function CanvasState(canvas) {
    // **** First some setup! ****

    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = canvas.getContext('2d');
    // This complicates things a little but but fixes mouse co-ordinate problems
    // when there's a border or padding. See getMouse for more detail
    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
        this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10) || 0;
        this.stylePaddingTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10) || 0;
        this.styleBorderLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10) || 0;
        this.styleBorderTop = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10) || 0;
    }
    // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
    // They will mess up mouse coordinates and this fixes that
    var html = document.body.parentNode;
    this.htmlTop = html.offsetTop;
    this.htmlLeft = html.offsetLeft;

    // **** Keep track of state! ****

    this.valid = false; // when set to false, the canvas will redraw everything
    this.shapes = [];  // the collection of things to be drawn
    this.dragging = false; // Keep track of when we are dragging
    // the current selected object. In the future we could turn this into an array for multiple selection
    this.selection = null;
    this.dragoffx = 0; // See mousedown and mousemove events for explanation
    this.dragoffy = 0;

    // **** Then events! ****

    // This is an example of a closure!
    // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
    // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
    // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
    // This is our reference!
    var myState = this;

    //fixes a problem where double clicking causes text to get selected on the canvas
    canvas.addEventListener('selectstart', function (e) {
        e.preventDefault();
        return false;
    }, false);
    // Up, down, and move are for dragging
    canvas.addEventListener('mousedown', function (e) {
        var mouse = myState.getMouse(e);
        var mx = mouse.x;
        var my = mouse.y;
        var shapes = myState.shapes;
        var l = shapes.length;
        for (var i = l - 1; i >= 0; i--) {
            if (shapes[i].contains(mx, my)) {
                var mySel = shapes[i];
                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                myState.dragoffx = mx - mySel.x;
                myState.dragoffy = my - mySel.y;
                myState.dragging = true;
                myState.selection = mySel;
                myState.valid = false;
                return;
            }
        }
        // havent returned means we have failed to select anything.
        // If there was an object selected, we deselect it
        if (myState.selection) {
            myState.selection = null;
            myState.valid = false; // Need to clear the old selection border
        }
    }, true);
    canvas.addEventListener('mousemove', function (e) {
        if (myState.dragging) {
            var mouse = myState.getMouse(e);
            // We don't want to drag the object by its top-left corner, we want to drag it
            // from where we clicked. Thats why we saved the offset and use it here
            myState.selection.x = mouse.x - myState.dragoffx;
            myState.selection.y = mouse.y - myState.dragoffy;
            myState.valid = false; // Something's dragging so we must redraw
        }
    }, true);
    canvas.addEventListener('mouseup', function (e) {
        myState.dragging = false;
    }, true);

    // **** Options! ****

    this.selectionColor = '#CC0000';
    this.selectionWidth = 2;
    this.interval = 30;
    setInterval(function () {
        myState.draw();
    }, myState.interval);
}

CanvasState.prototype.addShape = function (shape) {
    this.shapes.push(shape);
    this.valid = false;
}

CanvasState.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.width, this.height)

    this.ctx.drawImage(canvasImage, 0, 0, canvasImageWidth, canvasImageHeight);
}

// While draw is called as often as the INTERVAL variable demands,
// It only ever does something if the canvas gets invalidated by our code
CanvasState.prototype.draw = function () {
    // if our state is invalid, redraw and validate!
    if (!this.valid) {
        var ctx = this.ctx;
        var shapes = this.shapes;
        this.clear();

        // ** Add stuff you want drawn in the background all the time here **

        // draw all shapes
        var l = shapes.length;
        for (var i = 0; i < l; i++) {
            var shape = shapes[i];
            // We can skip the drawing of elements that have moved off the screen:
            if (shape.x > this.width || shape.y > this.height ||
                    shape.x + shape.w < 0 || shape.y + shape.h < 0)
                continue;
            shapes[i].draw(ctx);
        }

        // draw selection
        // right now this is just a stroke along the edge of the selected Shape
        if (this.selection != null) {
            ctx.strokeStyle = this.selectionColor;
            ctx.lineWidth = this.selectionWidth;
            var mySel = this.selection;
            ctx.strokeRect(((mySel.x < 1) ? 0 : ((mySel.x + mySel.w) > canvasImageWidth) ? canvasImageWidth - mySel.w : mySel.x)
                    , ((mySel.y < 1) ? 0 : ((mySel.y + mySel.h) > canvasImageHeight) ? canvasImageHeight - mySel.h : mySel.y)
                    , mySel.w, mySel.h);
        }

        // ** Add stuff you want drawn on top all the time here **

        this.valid = true;
    }
}


// Creates an object with x and y defined, set to the mouse position relative to the state's canvas
// If you wanna be super-correct this can be tricky, we have to worry about padding and borders
CanvasState.prototype.getMouse = function (e) {
    var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;

    // Compute the total offset
    if (element.offsetParent !== undefined) {
        do {
            offsetX += element.offsetLeft;
            offsetY += element.offsetTop;
        } while ((element = element.offsetParent));
    }

    // Add padding and border style widths to offset
    // Also add the <html> offsets in case there's a position:fixed bar
    offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
    offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

    mx = e.pageX - offsetX;
    my = e.pageY - offsetY;
    // We return a simple javascript object (a hash) with x and y defined
    return {x: mx, y: my};
}