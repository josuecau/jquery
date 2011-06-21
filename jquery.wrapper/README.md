#	Wrapper jQuery Plugin
Copyright (c) 2011 Josué CAU <me@josuecau.com>
Version: 1.00 (2011-06-21)

##	Description
Wrap html elements by groups, useful for slideshows for example.

##	Usage
### basic
<pre>
$('.elementsToWrap').wrapper();
</pre>
###	Some options
<pre>
$('#container').find('.elementsToWrap').wrapper({
	wrapperCount : 3, // items will be grouped by third
	wrapperElement : 'section' // specify a html tag
});
</pre>

##	Params
<ul>
	<li><code>wrapperCount</code> (<em>int</em>) number of items per group. Default : <code>3</code></li>
	<li><code>wrapperElement</code> (<em>string</em>) type of tag used to group elements. Default : <code>div</code></li>
	<li><code>wrapperClass</code> (<em>string</em>) class name added to wrapper. Default : <code>wrapper</code></li>
</ul>

##	Examples
See test.html file.
