import { useLoaderData, useLocation, useNavigate } from "react-router-dom";



const PaginationContainer = () => {
    const { meta } = useLoaderData();

    const { page, pageCount } = meta.pagination;
    console.log(page);

    const pages = Array.from({ length: pageCount }, (_, index) => {
        return index + 1;
    });

    const { search, pathname } = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', page);
    console.log(search);
    console.log(pathname);
    console.log(navigate);

    const handlePageChange = (pageNumber) => {
        console.log(`Clicked on the button /n page number is ${pageNumber} and the current page is ${page}`);
    }

    if (pageCount < 2) return null;
    return (
        <div className="mt-16 flex justify-end">
            <div className="join">
                <button className="btn btn-xs sm:btn-md join-item" onClick={() => { handlePageChange('PREV') }}>Prev</button>
            </div>
            {
                pages.map((pageNumber) => {
                    return <div className="join" key={pageNumber}>
                        <button className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ? "bg-base-300 border-base-300" : " "}`} onClick={() => { handlePageChange(pageNumber) }} >
                            {pageNumber}
                        </button>
                    </div>
                })
            }
            <div className="join">
                <button className="btn btn-xs sm:btn-md join-item" onClick={() => { handlePageChange('Next') }}>Next</button>
            </div>
        </div>
    );
}

export default PaginationContainer;