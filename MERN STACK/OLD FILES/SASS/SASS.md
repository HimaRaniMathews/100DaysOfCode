### Introduction to the Sass Challenges


### Sass: Store Data with Sass Variables


```css
$main-fonts: Arial, sans-serif;
$headings-color: green;

//To use variables:
h1 {
  font-family: $main-fonts;
  color: $headings-color;
}
```


```html
<style type='text/sass'>
  $text-color: red;

  .header{
    text-align: center;
  }
  .blog-post, h2 {
    color: $text-color;
  }
</style>

<h1 class="header">Learn Sass</h1>
<div class="blog-post">
  <h2>Some random title</h2>
  <p>This is a paragraph with some random text in it</p>
</div>
<div class="blog-post">
  <h2>Header #2</h2>
  <p>Here is some more random text.</p>
</div>
<div class="blog-post">
  <h2>Here is another header</h2>
  <p>Even more random text within a paragraph</p>
</div>
```

### Sass: Nest CSS with Sass



```css
nav {
  background-color: red;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}
```



```css
nav {
  background-color: red;

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }
}
```



```html
<style type='text/sass'>
  .blog-post {
    h1 {
      text-align: center;
      color: blue;
    }
    p {
      font-size: 20px;
    }
  }

</style>

<div class="blog-post">
  <h1>Blog Title</h1>
  <p>This is a paragraph</p>
</div>
```

### Sass: Create Reusable CSS with Mixins


```css
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}
```


```sass
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}
```


```sass
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}
```


```sass
<style type='text/sass'>
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}
  #awesome {
    width: 150px;
    height: 150px;
    background-color: green;
    @include border-radius(15px);
  }
</style>

<div id="awesome"></div>
```

### Sass: Use @if and @else to Add Logic To Your Styles


```sass
@mixin make-bold($bool) {
  @if $bool == true {
    font-weight: bold;
  }
}
```



```sass
@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}
```


```
light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
```


```sass
<style type='text/sass'>
  @mixin border-stroke($val) {
    @if $val == light {
      border: 1px solid black;
    }
    @else if $val == medium {
      border: 3px solid black;
    }
    @else if $val == heavy{
      border:6px solid black;
    }
    @else {
      border: none;
    }
  } 

  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>
```

### Sass: Use @for to Create a Sass Loop


```sass
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```


```sass
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```



```sass
<style type='text/sass'>
@for $i from 1 to 6 {
  .text-#{$i} {font-size: 15px * $i}
}
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

### Sass: Use @each to Map Over Items in a List



```sass
@each $color in blue, red, green {
  .#{$color}-text {color: $color;}
}
```



```sass
$colors: (color1: blue, color2: red, color3: green);

@each $key, $color in $colors {
  .#{$color}-text {color: $color;}
}
```



```sass
.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-text {
  color: green;
}
```


```sass
<style type='text/sass'>
  $colors: (color1: blue, color2: black, color3: red);
  
  @each $key, $color in $colors {
    .#{$color}-bg {background-color: $color;}  
  }

  div {
    height: 200px;
    width: 200px;
  }
</style>

<div class="blue-bg"></div>
<div class="black-bg"></div>
<div class="red-bg"></div>
```

### Sass: Apply a Style Until a Condition is Met with @while


```sass
$x: 1;
@while $x < 13 {
  .col-#{$x} { width: 100%/12 * $x;}
  $x: $x + 1;
}
```


```sass
<style type='text/sass'>
  $x: 1;
  @while $x < 6 {
    .text-#{$x} {font-size: 15px * $x;}
    $x: $x + 1;
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

### Sass: Split Your Styles into Smaller Chunks with Partials


```sass
// In the main.scss file

@import 'mixins'
```

```sass
// The main.scss file
@import 'variables'
```

### _Sass: Extend One Set of CSS Styles to Another Element_


```sass
.panel{
  background-color: red;
  height: 70px;
  border: 2px solid green;
}
```


```sass
.big-panel{
  @extend .panel;
  width: 150px;
  font-size: 2em;
}
```

<hr>

```sass
<style type='text/sass'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important {
    @extend .info;
    background-color: magenta;
  }
</style>

<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
