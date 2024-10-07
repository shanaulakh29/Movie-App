import React,{useState} from 'react';
import style from './Header.module.css'
import {fetchAsyncMovies,fetchAsyncSeries} from '/Users/shan/Desktop/movie project/src/Movie/MovieSlice.js';
// import { input } from '@testing-library/user-event/dist/cjs/event/input.js';
import { useDispatch } from 'react-redux';
const Header = () => {
    const [searchText, setSearchText] = useState("");
    const [showInput,setShowInput]=useState(false);
    const dispatch=useDispatch();
    function handlechange(event)
    {
        setSearchText(event.target.value);
    }
    function handleclickfinal(event){
        event.preventDefault();
        if(searchText==="")
            {
                alert("Please enter into the search field");
                return;
            }
        dispatch(fetchAsyncMovies(searchText));
        dispatch(fetchAsyncMovies(searchText));
        setSearchText("");
    }
    function handleclick(event)
    {
       setShowInput(true);
        event.target.style.display="none";
    }    return (
        <div className={`${style.flexcontainerp}`}>

         <h1 className={`${style.name} `}>Entertainment

         </h1>
         <h3 className={`${style.menuitem} ${style.menu}`}>Browse</h3>
         <img className={`${style.bottomarrowicon}`}src="/bottomarrow.png" width="20px" height="20px"/>
  
         {showInput &&(<>
         <form className={style.form} onSubmit={handleclickfinal}>
         <input type="text" value={searchText} className={style.inputtext} placeholder="Search by Movie Name" onChange={handlechange}>
         </input>
            <button>
                <svg className={`${style.searchicon2} ${style.menu} `}  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/> 
                </svg>
                </button>
          
            </form>
            </>)}


         {/* <img className={`${style.searchicon} ${style.menu} `}src="searchicon.png" width="30px" height="30px" onClick={handleclick}/> */}
         <svg className={`${style.searchicon} ${style.menu} `} onClick={handleclick} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
        
        
        <div className={`${style.profilecontainer} ${style.menu}`}> 
             {/* <img className={`${style.profileimg} ${style.menu}`} src="userprofilepic.webp" width="30px" height="30px"/> */}
             <svg className={`${style.profileimg} ${style.menu}`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4B77D1"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
          </div> 
      
        </div>
    );
};

export default Header;