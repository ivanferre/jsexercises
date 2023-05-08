# Aligning pictures To account for dynamically loaded pictures that might be either horizontal or vertical,
you can use a combination of CSS Grid and media queries to adjust the layout based on the aspect ratio of the image. Here's an example:


HTML: ``` <div class="grid-container"><img src="horizontal-image.jpg" alt="Horizontal Image"><img src="vertical-image.jpg" alt="Vertical Image"></div>``` ```CSS: .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* change the number of columns as needed */
    grid-gap: 10px;
}

img {
    display: block;
    width: 100%;
    height: auto;
}

@media (min-aspect-ratio: 1/1) {

    /* for vertical images */
    img {
        grid-row: span 2;
    }
}

@media (max-aspect-ratio: 1/1) {

    /* for horizontal images */
    img {
        grid-column: span 2;
    }
}

``` In this example,
the img elements are styled to have a width of 100% and a height of auto,
which ensures that they are scaled proportionally based on their aspect ratio. Two media queries are used to adjust the layout based on the aspect ratio of the image. The min-aspect-ratio media query targets vertical images (i.e., images with an aspect ratio greater than or equal to 1:1) and sets the grid-row property to span 2 to make the image span two rows. The max-aspect-ratio media query targets horizontal images (i.e., images with an aspect ratio less than or equal to 1:1) and sets the grid-column property to span 2 to make the image span two columns. Note that this method assumes that the images are already loaded and their aspect ratio is known. If the images are loaded dynamically and their aspect ratio is not known in advance,
you may need to use JavaScript to determine the aspect ratio and apply the appropriate CSS styles.