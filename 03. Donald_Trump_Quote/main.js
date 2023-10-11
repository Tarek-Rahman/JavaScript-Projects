const btnGenerate = document.getElementById( 'btn__generate' );
const quoteText = document.getElementById( 'quote__text' );
const animation = document.getElementById( 'animation' );


async function getQuote ()
{
  animation.classList.remove( 'hide' );
  btnGenerate.disabled = true;

  const url = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
  try
  {
    const response = await fetch( url );
    if ( response.ok )
    {
      const json = await response.json();
      console.log( json.message );
      displayQuote( json.message );
      setShare( json.message );
    } else
    {
      throw Error( response.statusText );
    }
  } catch ( err )
  {
    console.log( err );
    alert( err );
  }

  animation.classList.add( 'hide' );
  btnGenerate.disabled = false;

}
btnGenerate.addEventListener( 'click', getQuote );

function displayQuote ( text )
{


  quoteText.textContent = text;
}


function setShare ( text )
{
  const twitterBtn = document.getElementById( 'btn__share' );

  twitterBtn.setAttribute( 'href', `https://twitter.com/share?text=${text} - Donald Trump` );
} 