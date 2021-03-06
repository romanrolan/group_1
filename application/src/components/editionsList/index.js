import React from 'react';
import FieldTypeEdition from '../fieldTypeEdition';
import ButtonEdition from '../buttonEdition';
import ServerEdition from '../serverEdition';
import './style.css';

const EditionsList = (props) =>
  <div className='EditionsList'>
    <h3 className='title'>List of editions</h3>
    <ul className='editions'>
      {
        Object.entries(props.editions).length ? Object.entries(props.editions).map((edition,key) => {
          if (edition[0] === 'server') {
            return <ServerEdition
                                  key={key}
                                  news={edition[1].news}
                                  name={edition[1].name}
                                  createNews={props.addNews}
                                  deleteEdition={props.deleteEdition} />
          } else if (edition[0] === 'input') {
            return <FieldTypeEdition
                                    key={key}
                                    news={edition[1].news}
                                    name={edition[1].name}
                                    createNews={props.addNews}
                                    deleteEdition={props.deleteEdition} />
          } else if (edition[0] === 'button') {
            return <ButtonEdition
                                  key={key}
                                  news={edition[1].news}
                                  name={edition[1].name}
                                  createNews={props.addNews}
                                  deleteEdition={props.deleteEdition} />
          }
        }) : 'There are no edition'
      }
    </ul>
  </div>

export default EditionsList;
