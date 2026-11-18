import "./SearchBar.css";

function SearchBar() {
    return (

        <div className="search-bar">

            <span className="search-icon">🔍</span>

            <input 
                type="search"
                placeholder="Search for animals by name or breed..."
                aria-label="Search for animals by name or breed"/>

        </div>

    )
    

}
export default SearchBar;
