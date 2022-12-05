export default  function  addToWatchList(id){
    const pre_List = localStorage.getItem("watchlist");
    if (!pre_List || !pre_List.includes(id)) {
      localStorage.setItem("watchlist", `${pre_List},${id}`);
    } else {
      alert("This Crypto is Already Added!");
    }
    
}