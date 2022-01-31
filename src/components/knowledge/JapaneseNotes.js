import React from 'react';

export default function JapaneseNotes() {
	return (
		<pre>{`// READING JAPANESE

Japanese has three different sets of characters: hiragana, katakana, and kanji.  I know you're probably thinking that's overkill, but with a little bit of time, the purpose of each set becomes clear and the benefits start to reveal themselves.

To start with, there are hiragana.  These are the curvy, squiggly looking ones (e.g あ) and are honestly the easiest to learn.  These characters are used for particles and miscellaneous native words.  They're also used as furigana, which are tiny superscript characters printed above kanji that tell you how to read them.

Next are katakana.  These are a sharper looking set of characters (ア) that are used primarily for loan words and onomatopoeia.  I personally find them harder to read and differentiate between one another than hiragana, but this feeling may just stem from their use in the never ending series of brainteasers that are loan words in Japanese.

Finally, there are kanji.  As you can probably guess, this explanation will be considerably more complicated.  To start with, why kanji?  Aren't two syllabaries enough to get the job done?  Maybe, but a thousand years ago when the Japanese were still figuring out what the written form of their language was going to look like, Chinese was already sitting right there.  For an even deeper trivia dive, the writing system that evolved into hiragana (and then itself katakana) was actually based on Chinese (see Man'yōgana).  Considering that it could have been all kanji instead, thank your lucky stars that Japanese is only this complicated.

So what are kanji? One might assume that because they're tiny pictures that they might be depictions of the things or ideas that they represent, but the vast majority of the time, this is not the case.  Don't be discouraged, though.  They're not complete chaos.  

Kanji are comprised of smaller symbols within known as bushu, or "radicals."  They are common building blocks shared across many kanji. Recognizing radicals will break down the complexity and aid in differentiating between similar looking kanji.

For example, let's take a closer look at the kanji for green:

	緑

This kanji takes 15 strokes to draw, and if this is your first time seeing it, you would be hard-pressed to recreate it accurately without a reference.  Now let's break down this kanji into its radicals.

	幺ヨ
	小水

It is immediately less visually complex.  You may even recognize some of the radicals as the kanji they would be on their own, like small (小) or water (水).  Trying to recreate it now, even if your recreation wouldn't be 100% accurate, would certainly be more accurate than without seeing the radicals.

Now that we've seen the parts that make up 緑, let's throw it next to a similar looking kanji and see if we can spot the difference.
Which of these is green?

	緑縁

The second kanji, 縁, means rim.  Three of the four radicals we broke down above match, with the exception of the bottom right.

	緑    縁

	幺ヨ  幺ヨ
	小水  小豕

Radicals will be the hooks into your memory for recognition.  The hope is that with proficiency, recognizing the difference between 緑 and 縁 will become as easy as recognizing the difference between "what" and "that." 

One important thing to remember about radicals is that sometimes they have meaning and sometimes they do not.  There are some radicals, known as absolute radicals, that have zero meaning or pronunciation.  Their only purpose is to be a building block.  Conversely there are radicals that by themselves are kanji, with both meaning and pronunciation.  As previously mention in the example above, 水 is the kanji for water but is also a radical.  Finally, there are some symbolic radicals that are not themselves kanji but do have meaning.

To make things even more complicated, radicals can be made up of other radicals.  Looking at 緑 again, we saw that it contained the 幺 and 小 radicals.  However, the combination of those two radicals, 糸, is also considered to be a radical of 緑.  In fact, all kanji can be radicals if they're stuffed into another larger kanji.  The important thing to remember is that radicals are just arbitrary groupings of strokes used to break kanji down into recognizable chunks.


///


Why is this radical considered 2 strokes when it's clearly 6?

	The radical list is using the stroke count for the variant of the radical that will appear in kanji.  Though the full kanji that the radical represents may be 6 strokes, its appearance as a radical inside of other kanji is 2.
			`}</pre>
	);
}