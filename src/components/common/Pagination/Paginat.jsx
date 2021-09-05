import React from 'react';
import { Pagination,PaginationItem, PaginationLink } from 'reactstrap';

const Paginat = () => {
    return (

        <Pagination
            className="pagination justify-content-end mb-0"
            listClassName="justify-content-end mb-0"
        >
            <PaginationItem className="disabled">
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    tabIndex="-1"
                >
                    <i className="fas fa-angle-left" />
                    <span className="sr-only">Previous</span>
                </PaginationLink>
            </PaginationItem>
            <PaginationItem className="active">
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    2 <span className="sr-only">(current)</span>
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    <i className="fas fa-angle-right" />
                    <span className="sr-only">Next</span>
                </PaginationLink>
            </PaginationItem>
        </Pagination>

    );
}

export default Paginat;