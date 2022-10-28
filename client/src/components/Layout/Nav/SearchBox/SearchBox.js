import React from 'react';
import { useRecoilState } from 'recoil';
import Modal from '../../../../Modal/Modal';
import { ModalStyle } from '../../../../Modal/Modal.style';
import { modalStates } from '../../../../states/modal';
import { Search, SearchContainer, SearchIcon } from './SearchBox.style';

const SearchBox = () => {
  const [modal, setModal] = useRecoilState(modalStates);

  return (
    <SearchContainer>
      <SearchIcon />
      <Search
        type="text"
        placeholder="Search..."
        onClick={() => setModal({ ...modal, search: true })}
      ></Search>
      <div>
        {modal.search && (
          <Modal>
            <ModalStyle
              witdh="493px"
              height="200px"
              position="absolute"
              top="5%"
              left="50%"
            >
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
                <li>asdasd</li>
              </ul>
            </ModalStyle>
          </Modal>
        )}
      </div>
    </SearchContainer>
  );
};

export default SearchBox;
