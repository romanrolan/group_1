import React from 'react';
import EditionsList from '../editionsList';
import UsersList from '../usersList';
import './style.css';

const UsersColumn = (props) =>
  <div className='UsersColumn'>
    <EditionsList
                  editions={props.editions}
                  deleteEdition={props.deleteEdition}
                  addNews={props.addNews} />
    <UsersList
              users={props.users}
              deleteUser={props.deleteUser}
              editions={Object.keys(props.editions)}
              subscribeNews={props.subscribeNews}
              unSubscribeNews={props.unSubscribeNews} />
  </div>

export default UsersColumn;
