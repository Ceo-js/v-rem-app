

import React, { useState } from "react";


export default function SearchableVideoList( { videos } ) {
  const 
    [ searchText, setSearchText ] = useState( "" ),
    foundVideos = filterVideos( videos, searchText );

    return( <>
        <SearchInput
            value={ searchText }
            onChange={ newText => setSearchText( newText ) } />
        <VideoList
            videos={ foundVideos }
            emptyHeading={ `No matches for “${ searchText }”` } />
    </> );
}
