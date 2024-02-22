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

    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search);
        searchParams.set('page', pageNumber);
        console.log(`Clicked on the button /n page number is ${pageNumber} and the current page is ${page}`);
        navigate(`${pathname}?${searchParams.toString()}`)
    }

    if (pageCount < 2) return null;
    return (
        <div className="mt-16 flex justify-end">
            <div className="join">
                <button className="btn btn-xs sm:btn-md join-item" onClick={() => {
                    let prevPage = page - 1;
                    if (prevPage < 1) prevPage = pageCount
                    handlePageChange(prevPage)
                }}>Prev</button>
            </div>
            {
                pages.map((pageNumber) => {
                    return <div className="join" key={pageNumber}>
                        <button className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ? "bg-base-300 border-base-300" : " "}`}
                            onClick={() => {
                                handlePageChange(pageNumber)
                            }} >
                            {pageNumber}
                        </button>
                    </div>
                })
            }
            <div className="join">
                <button className="btn btn-xs sm:btn-md join-item"
                    onClick={() => {
                        let nextPage = page + 1;
                        if (nextPage > pageCount) nextPage = 1;
                        handlePageChange(nextPage)
                    }}>Next</button>
            </div>
        </div>
    );
}

export default PaginationContainer;