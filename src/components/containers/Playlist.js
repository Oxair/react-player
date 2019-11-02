import React from 'react';
import PlayListHeader from '../PlaylistHeader';
import PlayListItem from '../PlaylistItem';
import NightMode from '../Nightmode';
import StyledPlaylist from '../styles/StyledPlaylist';

const PlayList = props => (
        <StyledPlaylist>
            <NightMode />
            <PlayListHeader />
            <PlayListItem />
        </StyledPlaylist>
    );

export default PlayList;