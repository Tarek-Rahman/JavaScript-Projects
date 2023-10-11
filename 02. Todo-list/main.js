'use strict';

const ul = document.getElementById( 'ul' );

const totalTask = [];
// add item
function addTask ( text )
{
  totalTask.push( text );

  const li = document.createElement( 'li' );
  li.setAttribute( 'class', 'todo__item' );
  li.innerHTML = `
          <div class="tick-before">
            <span class="todo__item-tick ticks" ></span>
            <span class="todo__item-text">${text}</span>
          </div>
          <button class="todo__item-delete deletes">✗</button>
  `;

  ul.appendChild( li );
}


// add text
function addText ( e )
{
  e.preventDefault();
  const input = document.getElementById( 'input' );
  const text = input.value.trim();

  if ( input.value !== '' )
  {
    addTask( text );
    input.value = '';
    input.focus();
  }

}
document.getElementById( 'form' ).addEventListener( 'submit', addText );


// working with items
ul.addEventListener( 'click', ( e ) =>
{
  // toggle elements
  if ( e.target.classList.contains( 'ticks' ) )
  {
    const el = e.target.parentElement;
    const args = ['done', 'line-through'];
    args.map( ( arg ) => el.classList.toggle( arg ) );
  }

  // delete elements
  if ( e.target.classList.contains( 'deletes' ) )
    e.target.parentElement.classList.add( 'hide' );
} );