import SearchIcon from '@mui/icons-material/Search';
import './style.css'
function SearchBar({search,setSearch}){
  return(
    <div className="search-wrapper">
      <SearchIcon  className='search-icon'/>
      <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search"/>
    </div>
  )
}
export default SearchBar;