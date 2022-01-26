import React from 'react'
import CommentsSection from './Sections/CommentsSection'
import FooterSection from './Sections/FooterSection'
import MainSection from './Sections/MainSection'

import NavbarSection from './Sections/NavbarSection'

function AllSections() {
    return (
        <div>
            <NavbarSection />
            <MainSection />
            <CommentsSection />
            <FooterSection />
        </div>
    )
}

export default AllSections
