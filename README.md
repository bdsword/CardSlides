#Card Slides#
##How to use?##
```html
<html>
    <head>
        <title>Card Slides Example</title>
    </head>
    <body>
        	<div id="card-slides">
        		<div class="slides-control" data-slides="previous">
        			#
        		</div>
        		<div class="view-port">
        			<div class="slides-container">
        				<div class="slides-item">A</div>
        				<div class="slides-item">B</div>
        				<div class="slides-item">C</div>
        				<div class="slides-item">D</div>
        				<div class="slides-item">E</div>
        				<div class="slides-item">F</div>
        				<div class="slides-item">G</div>
        				<div class="slides-item">H</div>
        			</div>
        		</div>
        		<div class="slides-control" data-slides="next">
        			#
        		</div>
        	</div>
        	<script type="text/javascript" src="jquery-1.11.1.min.js"></script>
        	<script src="jquery.cardSlides.js"></script>
        	<script type="text/javascript">
        		$("#card-slides").cardSlides(6); //Show 6 .slides-item elements in the view-port at a time
        	</script>
    </body>
</html>
```
##Explaination
Two .slides-control elements are used to control the card slide.(Next .slides-item or previous one.)  
A .view-port element is a window to show only specific numbers of .slides-item elements at a time.
Also a view-container are needed to wrapper all your .slides-item elements.
